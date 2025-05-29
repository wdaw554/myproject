
"use client";

import { AppProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/AuthContext'; // Import AuthProvider
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider> {/* Wrap AppProvider with AuthProvider */}
      <AppProvider>{children}</AppProvider>
    </AuthProvider>
  );
}
