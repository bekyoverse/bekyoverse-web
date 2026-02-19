import React, { createContext, useContext, useState } from 'react';
import { ADMIN_CREDENTIALS } from './AdminContext';

export type UserRole = 'student' | 'admin';

export interface AuthUser {
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string, students: { email: string; password: string; name: string }[]) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'bekyoverse_session';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const s = localStorage.getItem(SESSION_KEY);
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });

  const login = (
    email: string,
    password: string,
    students: { email: string; password: string; name: string }[],
  ): boolean => {
    const trimEmail = email.trim().toLowerCase();
    const trimPass = password.trim();

    // Check admin
    if (
      trimEmail === ADMIN_CREDENTIALS.email &&
      trimPass === ADMIN_CREDENTIALS.password
    ) {
      const u: AuthUser = { email: ADMIN_CREDENTIALS.email, name: 'Admin', role: 'admin' };
      setUser(u);
      localStorage.setItem(SESSION_KEY, JSON.stringify(u));
      return true;
    }

    // Check students from AdminContext's DB
    const found = students.find(
      (s) => s.email.toLowerCase() === trimEmail && s.password === trimPass,
    );
    if (found) {
      const u: AuthUser = { email: found.email, name: found.name, role: 'student' };
      setUser(u);
      localStorage.setItem(SESSION_KEY, JSON.stringify(u));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
