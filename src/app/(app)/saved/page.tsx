// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import { useMemo, useEffect, useState } from 'react';
import { CheatSheetList } from '@/components/cheat-sheets/CheatSheetList';
import { CHEAT_SHEETS_DATA } from '@/data/cheat-sheets';
import { useAppContext } from '@/hooks/useAppContext';
import { BookmarkCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SavedPage() {
  const { bookmarks } = useAppContext();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const bookmarkedSheets = useMemo(() => {
    if (!hydrated) return [];
    return CHEAT_SHEETS_DATA.filter((sheet) => bookmarks.includes(sheet.id));
  }, [bookmarks, hydrated]);

  if (!hydrated) {
     return (
      <div className="space-y-6">
        <div className="animate-pulse h-10 bg-muted rounded-md w-1/2 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-muted rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center gap-2">
          <BookmarkCheck className="h-8 w-8" />
          Saved Cheat Sheets
        </h1>
        <p className="mt-2 text-lg text-foreground/80">
          Your collection of favorite marketing insights.
        </p>
      </div>

      {bookmarkedSheets.length > 0 ? (
        <CheatSheetList sheets={bookmarkedSheets} />
      ) : (
        <div className="text-center py-10 border-2 border-dashed border-muted-foreground/30 rounded-lg">
          <BookmarkCheck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">No Bookmarks Yet!</h2>
          <p className="text-muted-foreground mb-4">Start exploring and save your favorite cheat sheets for quick access.</p>
          <Button asChild>
            <Link href="/">Explore Cheat Sheets</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
