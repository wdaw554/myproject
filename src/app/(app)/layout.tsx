
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client"; // This layout is now client-side due to hooks from App Context

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAppContext } from '@/hooks/useAppContext';
import { Brain } from 'lucide-react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAppContextReady } = useAppContext();

  // This loading state is now simpler, only relying on AppContext's readiness
  if (!isAppContextReady) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background">
        <Brain className="h-12 w-12 text-primary animate-pulse mb-4" />
        <p className="text-muted-foreground">Loading MarkSpark...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-6 md:py-10 px-4 md:px-6 mb-16 md:mb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
