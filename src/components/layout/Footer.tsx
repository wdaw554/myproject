"use client";

import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';

function AdBanner() {
  return (
    <div className="w-full bg-muted text-muted-foreground text-center py-2 text-sm rounded-md shadow">
      [Simulated Ad Banner] Your Ad Here!
    </div>
  );
}

export function Footer() {
  const { userTier } = useAppContext();

  return (
    <footer className="border-t mt-auto">
      <div className="container py-8 px-4 md:px-6 space-y-4">
        {userTier === 'free' && <AdBanner />}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MarketMuse. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <a
              href="https://forms.gle/your-google-form-link" // Replace with actual Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Report a Bug
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
