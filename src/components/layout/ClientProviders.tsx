
"use client";

import { AppProvider } from '@/contexts/AppContext';
// import { AuthProvider } from '@/contexts/AuthContext'; // Removed AuthProvider
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    // <AuthProvider> {/* Removed AuthProvider */}
      <AppProvider>{children}</AppProvider>
    // </AuthProvider>
  );
}
