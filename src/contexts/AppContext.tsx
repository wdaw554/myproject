
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { Achievement } from '@/types';
import { INITIAL_ACHIEVEMENTS } from '@/data/achievements';
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import * as LucideIcons from 'lucide-react';
import { Brain } from 'lucide-react'; // For loading indicator

const BOOKMARKS_STORAGE_KEY_PREFIX = 'markspark_bookmarks_v1_';
const THEME_STORAGE_KEY = 'markspark_theme_v1';
const ACHIEVEMENTS_STORAGE_KEY_PREFIX = 'markspark_achievements_v1_';


export interface AppContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  bookmarks: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  achievements: Achievement[];
  checkAndUnlockAchievements: () => void;
  isAppContextReady: boolean;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const GUEST_USER_ID_PLACEHOLDER = 'guest';
const getStorageKey = (prefix: string) => {
  return `${prefix}${GUEST_USER_ID_PLACEHOLDER}`;
};


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const [isMounted, setIsMounted] = useState(false);
  const [isAppContextReady, setIsAppContextReady] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
      localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const loadAchievementsFromStorage = (): Achievement[] => {
      const defaultAchievementsWithCriteria = INITIAL_ACHIEVEMENTS.map(ach => ({ ...ach, criteria: ach.criteria, isUnlocked: false }));
      if (typeof window !== 'undefined') {
        const storedAchievementsData = localStorage.getItem(getStorageKey(ACHIEVEMENTS_STORAGE_KEY_PREFIX));
        if (storedAchievementsData) {
          try {
            const storedStatuses: Array<{ id: string; isUnlocked: boolean }> = JSON.parse(storedAchievementsData);
            const statusMap = new Map(storedStatuses.map(s => [s.id, s.isUnlocked]));

            return INITIAL_ACHIEVEMENTS.map(initialAch => ({
              ...initialAch,
              criteria: initialAch.criteria, // Ensure criteria function is from definition
              isUnlocked: statusMap.get(initialAch.id) ?? false,
            }));
          } catch (error) {
            console.error("Failed to parse achievements from localStorage", error);
            return defaultAchievementsWithCriteria;
          }
        }
      }
      return defaultAchievementsWithCriteria;
    };

    const storedBookmarks = localStorage.getItem(getStorageKey(BOOKMARKS_STORAGE_KEY_PREFIX));
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks)); else setBookmarks([]);

    setAchievements(loadAchievementsFromStorage());
    setIsAppContextReady(true);

  }, [isMounted]);


  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(BOOKMARKS_STORAGE_KEY_PREFIX), JSON.stringify(bookmarks));
  }, [bookmarks, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    const achievementsToStore = achievements.map(({ id, isUnlocked }) => ({ id, isUnlocked }));
    localStorage.setItem(getStorageKey(ACHIEVEMENTS_STORAGE_KEY_PREFIX), JSON.stringify(achievementsToStore));
  }, [achievements, isMounted, isAppContextReady]);


  const checkAndUnlockAchievements = useCallback(() => {
    if (!isMounted || !isAppContextReady) return;

    const appContextSnapshot = {
      bookmarks,
      // No other state needed for remaining achievements currently
    };

    let newAchievementsUnlocked = false;
    const updatedAchievements = achievements.map(ach => {
      if (!ach.isUnlocked && ach.criteria && typeof ach.criteria === 'function') {
        if (ach.criteria(appContextSnapshot)) {
          const IconComponent = LucideIcons[ach.iconName] || LucideIcons.Award;
          toast({
            title: (
              <div className="flex items-center gap-2">
                <IconComponent className="h-5 w-5 text-yellow-500" />
                <span>{ach.toastMessage || `Achievement Unlocked: ${ach.name}!`}</span>
              </div>
            ),
            description: ach.description,
          });
          newAchievementsUnlocked = true;
          return { ...ach, isUnlocked: true };
        }
      }
      return ach;
    });

    if (newAchievementsUnlocked) {
      setAchievements(updatedAchievements);
    }
  }, [isMounted, achievements, bookmarks, toast, isAppContextReady]);

  useEffect(() => {
    if (isMounted && isAppContextReady) {
      checkAndUnlockAchievements();
    }
  }, [isMounted, bookmarks.length, checkAndUnlockAchievements, isAppContextReady]);


  const toggleTheme = useCallback(() => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')), []);

  const addBookmark = useCallback((id: string) => {
    setBookmarks((prev) => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks((prev) => prev.filter(bId => bId !== id));
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return bookmarks.includes(id);
  }, [bookmarks]);


  if (!isMounted || !isAppContextReady) {
     return (
       <div className="fixed inset-0 flex items-center justify-center bg-background z-[200]">
        <Brain className="h-12 w-12 text-primary animate-pulse" />
       </div>
    );
  }


  return (
    <AppContext.Provider
      value={{
        theme, toggleTheme, bookmarks, addBookmark, removeBookmark, isBookmarked,
        achievements, checkAndUnlockAchievements,
        isAppContextReady,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
