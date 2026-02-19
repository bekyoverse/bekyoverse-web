import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://somjkxuvzmrajxmidmfd.supabase.co';
const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbWpreHV2em1yYWp4bWlkbWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NDk0OTUsImV4cCI6MjA4NzAyNTQ5NX0.WO2OZKHrVyQ1ZC6eZueEkVt4LXCgkUPK_DFIRYz4hWE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Type definitions that mirror the Supabase tables ──────────────────────

export interface DbStudent {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string | null;
    created_at: string;
}

export interface DbAccess {
    id: string;
    student_id: string;
    course_id: string;
    granted_at: string;
    expires_at: string | null;
    status: 'active' | 'revoked' | 'expired';
}
