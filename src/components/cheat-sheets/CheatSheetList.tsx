"use client";

import type { CheatSheet } from '@/types';
import { CheatSheetCard } from './CheatSheetCard';

interface CheatSheetListProps {
  sheets: CheatSheet[];
}

export function CheatSheetList({ sheets }: CheatSheetListProps) {
  if (sheets.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No cheat sheets found. Try adjusting your filters.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sheets.map((sheet) => (
        <CheatSheetCard key={sheet.id} sheet={sheet} />
      ))}
    </div>
  );
}
