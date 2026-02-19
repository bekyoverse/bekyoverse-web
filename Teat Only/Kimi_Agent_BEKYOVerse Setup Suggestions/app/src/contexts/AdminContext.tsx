/**
 * AdminContext — Supabase-backed student & course access management.
 * All CRUD operations are real database calls.
 */
import React, {
    createContext, useContext, useState, useCallback, useEffect,
} from 'react';
import { supabase, type DbStudent, type DbAccess } from '../lib/supabase';

// ─── Public types ─────────────────────────────────────────────────────────────

export interface CourseAccess {
    id: string;
    courseId: string;
    grantedAt: string;
    expiresAt: string | null;
    status: 'active' | 'revoked' | 'expired';
}

export interface Student {
    id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    createdAt: string;
    courses: CourseAccess[];
}

interface AdminContextType {
    students: Student[];
    loading: boolean;
    reload: () => Promise<void>;
    addStudent: (data: Omit<Student, 'id' | 'createdAt' | 'courses'>) => Promise<void>;
    removeStudent: (id: string) => Promise<void>;
    grantAccess: (studentId: string, courseId: string, expiresAt: string | null) => Promise<void>;
    revokeAccess: (studentId: string, courseId: string) => Promise<void>;
    updateExpiry: (studentId: string, courseId: string, expiresAt: string | null) => Promise<void>;
    getActiveAccess: (email: string, courseId: string) => CourseAccess | null;
}

// ─── Admin credentials (hardcoded — admin never touches DB) ──────────────────
export const ADMIN_CREDENTIALS = {
    email: 'admin@bekyoverse.com',
    password: 'admin2025',
};

// ─── Map DB rows → app types ─────────────────────────────────────────────────
function mapAccess(row: DbAccess): CourseAccess {
    return {
        id: row.id,
        courseId: row.course_id,
        grantedAt: row.granted_at,
        expiresAt: row.expires_at,
        status: row.status,
    };
}

function mapStudent(row: DbStudent, accesses: DbAccess[]): Student {
    return {
        id: row.id,
        email: row.email,
        password: row.password,
        name: row.name,
        phone: row.phone ?? '',
        createdAt: row.created_at,
        courses: accesses.filter((a) => a.student_id === row.id).map(mapAccess),
    };
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    const reload = useCallback(async () => {
        setLoading(true);
        try {
            const [{ data: studs }, { data: accesses }] = await Promise.all([
                supabase.from('students').select('*').order('created_at'),
                supabase.from('course_access').select('*'),
            ]);
            const now = new Date();
            // Auto-mark expired rows (client-side; also update DB)
            const expired = (accesses ?? []).filter(
                (a) => a.status === 'active' && a.expires_at && new Date(a.expires_at) < now,
            );
            if (expired.length > 0) {
                await supabase
                    .from('course_access')
                    .update({ status: 'expired' })
                    .in('id', expired.map((e) => e.id));
                expired.forEach((e) => (e.status = 'expired'));
            }
            setStudents((studs ?? []).map((s) => mapStudent(s, accesses ?? [])));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { reload(); }, [reload]);

    const addStudent = useCallback(async (data: Omit<Student, 'id' | 'createdAt' | 'courses'>) => {
        await supabase.from('students').insert({
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone || null,
        });
        await reload();
    }, [reload]);

    const removeStudent = useCallback(async (id: string) => {
        await supabase.from('students').delete().eq('id', id);
        await reload();
    }, [reload]);

    const grantAccess = useCallback(async (
        studentId: string, courseId: string, expiresAt: string | null,
    ) => {
        // Upsert: if row exists update it, else insert
        const { data: existing } = await supabase
            .from('course_access')
            .select('id')
            .eq('student_id', studentId)
            .eq('course_id', courseId)
            .maybeSingle();

        if (existing) {
            await supabase.from('course_access').update({
                expires_at: expiresAt,
                status: 'active',
                granted_at: new Date().toISOString(),
            }).eq('id', existing.id);
        } else {
            await supabase.from('course_access').insert({
                student_id: studentId,
                course_id: courseId,
                expires_at: expiresAt,
                status: 'active',
            });
        }
        await reload();
    }, [reload]);

    const revokeAccess = useCallback(async (studentId: string, courseId: string) => {
        await supabase
            .from('course_access')
            .update({ status: 'revoked' })
            .eq('student_id', studentId)
            .eq('course_id', courseId);
        await reload();
    }, [reload]);

    const updateExpiry = useCallback(async (
        studentId: string, courseId: string, expiresAt: string | null,
    ) => {
        await supabase
            .from('course_access')
            .update({ expires_at: expiresAt, status: 'active' })
            .eq('student_id', studentId)
            .eq('course_id', courseId);
        await reload();
    }, [reload]);

    const getActiveAccess = useCallback((email: string, courseId: string): CourseAccess | null => {
        const student = students.find((s) => s.email === email);
        if (!student) return null;
        const access = student.courses.find((c) => c.courseId === courseId);
        if (!access || access.status !== 'active') return null;
        if (access.expiresAt && new Date(access.expiresAt) < new Date()) return null;
        return access;
    }, [students]);

    return (
        <AdminContext.Provider value={{
            students, loading, reload,
            addStudent, removeStudent,
            grantAccess, revokeAccess, updateExpiry,
            getActiveAccess,
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const ctx = useContext(AdminContext);
    if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
    return ctx;
}
