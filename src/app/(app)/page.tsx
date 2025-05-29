
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import { useState, useMemo, useEffect } from 'react';
import { CheatSheetList } from '@/components/cheat-sheets/CheatSheetList';
import { CHEAT_SHEETS_DATA } from '@/data/cheat-sheets';
import { CATEGORIES } from '@/data/categories';
import type { Category, CheatSheet } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, XCircle } from 'lucide-react';
import { useAppContext } from '@/hooks/useAppContext'; // Import useAppContext


export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  // const [hydrated, setHydrated] = useState(false); // Replaced by isAppContextReady
  const { isAppContextReady } = useAppContext(); // Use context readiness

  // useEffect(() => {
  //   setHydrated(true); 
  // }, []);

  const filteredSheets = useMemo(() => {
    if (!isAppContextReady) return []; 

    return CHEAT_SHEETS_DATA.filter((sheet) => {
      const matchesCategory = selectedCategory === 'All' || sheet.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sheet.content && sheet.content.toLowerCase().includes(searchTerm.toLowerCase())) || // Added check for sheet.content
        sheet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, isAppContextReady]);

  if (!isAppContextReady) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse flex flex-col md:flex-row gap-4">
          <div className="h-10 bg-muted rounded-md flex-grow"></div>
          <div className="h-10 bg-muted rounded-md w-full md:w-48"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-muted rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Marketing Cheat Sheets</h1>
        <p className="mt-2 text-lg text-foreground/80">
          Your go-to resource for quick marketing insights. Filter by category or search by keyword.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sticky top-16 bg-background py-4 z-10 border-b -mx-4 md:-mx-6 px-4 md:px-6 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by keyword (e.g., TikTok, CTR)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full shadow-sm"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchTerm('')}
            >
              <XCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Select
          value={selectedCategory}
          onValueChange={(value: Category | 'All') => setSelectedCategory(value)}
        >
          <SelectTrigger className="w-full md:w-48 shadow-sm">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <CheatSheetList sheets={filteredSheets} />
    </div>
  );
}
