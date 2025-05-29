"use client";

import { AppProvider } from '@/contexts/AppContext';
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
