import React, { createContext, useContext } from 'react';
import { useAuth } from './AuthContext';
import { useAdmin } from './AdminContext';

export interface Course {
  id: string;
  name: string;
  price: number;
  currency: string;
}

export const courses: Course[] = [
  { id: 'traditional', name: 'Traditional Character Drawing', price: 50000, currency: 'MMK' },
  { id: 'digital', name: 'Digital Art', price: 75000, currency: 'MMK' },
];

interface PaymentContextType {
  purchasedCourses: string[];
  requestAccess: (courseId: string) => Promise<boolean>;
  hasAccess: (courseId: string) => boolean;
  getCoursePrice: (courseId: string) => number;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { getActiveAccess } = useAdmin();

  /**
   * Derived list — calculates on every render so it always reflects
   * the latest AdminContext state (grants/revokes/expiry updates).
   */
  const purchasedCourses: string[] = user
    ? courses
      .filter((c) => getActiveAccess(user.email, c.id) !== null)
      .map((c) => c.id)
    : [];

  /**
   * "Purchase" simulates a payment and then GRANTS access via admin DB.
   * In a real app, this would call a payment API first.
   */
  const requestAccess = async (_courseId: string): Promise<boolean> => {
    // Simulate processing delay
    await new Promise((r) => setTimeout(r, 1500));
    // For the test app, purchasing auto-grants lifetime access.
    // Admin can later set an expiry or revoke.
    return true; // signal success — App.tsx will call grantAccess
  };

  const hasAccess = (courseId: string): boolean => {
    if (!user) return false;
    return getActiveAccess(user.email, courseId) !== null;
  };

  const getCoursePrice = (courseId: string) =>
    courses.find((c) => c.id === courseId)?.price ?? 0;

  return (
    <PaymentContext.Provider value={{ purchasedCourses, requestAccess, hasAccess, getCoursePrice }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const ctx = useContext(PaymentContext);
  if (!ctx) throw new Error('usePayment must be used within PaymentProvider');
  return ctx;
}
