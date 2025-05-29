// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { CheatSheet, UserTier } from '@/types';
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface AppContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  bookmarks: string[]; // Stores IDs of bookmarked cheat sheets
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  userTier: UserTier;
  setUserTier: (tier: UserTier) => void;
  unlockProTip: (cheatSheetId: string) => void;
  isProTipUnlocked: (cheatSheetId:string) => boolean;
  unlockedProTips: Set<string>; // Set of cheat sheet IDs whose pro tips are unlocked
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const BOOKMARKS_STORAGE_KEY = 'marketmuse_bookmarks';
const THEME_STORAGE_KEY = 'marketmuse_theme';
const USER_TIER_STORAGE_KEY = 'marketmuse_user_tier';
const UNLOCKED_PRO_TIPS_STORAGE_KEY = 'marketmuse_unlocked_pro_tips';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [userTier, setUserTierState] = useState<UserTier>('free');
  const [unlockedProTips, setUnlockedProTips] = useState<Set<string>>(new Set());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load theme from localStorage
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // Default to light theme or system preference if needed
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
      localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    }

    // Load bookmarks from localStorage
    const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }

    // Load user tier from localStorage
    const storedUserTier = localStorage.getItem(USER_TIER_STORAGE_KEY) as UserTier | null;
    if (storedUserTier) {
      setUserTierState(storedUserTier);
    }
    
    // Load unlocked pro tips from localStorage
    const storedUnlockedProTips = localStorage.getItem(UNLOCKED_PRO_TIPS_STORAGE_KEY);
    if (storedUnlockedProTips) {
      setUnlockedProTips(new Set(JSON.parse(storedUnlockedProTips)));
    }

  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(USER_TIER_STORAGE_KEY, userTier);
  }, [userTier, isMounted]);
  
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(UNLOCKED_PRO_TIPS_STORAGE_KEY, JSON.stringify(Array.from(unlockedProTips)));
  }, [unlockedProTips, isMounted]);


  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const addBookmark = useCallback((id: string) => {
    setBookmarks((prevBookmarks) => {
      if (!prevBookmarks.includes(id)) {
        return [...prevBookmarks, id];
      }
      return prevBookmarks;
    });
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bId) => bId !== id));
  }, []);

  const isBookmarked = useCallback((id: string) => bookmarks.includes(id), [bookmarks]);

  const setUserTier = useCallback((tier: UserTier) => {
    setUserTierState(tier);
    if (tier === 'premium') {
      // If user becomes premium, unlock all pro tips (conceptually)
      // For this app, it means they won't need to "watch ad"
    }
  }, []);

  const unlockProTip = useCallback((cheatSheetId: string) => {
    setUnlockedProTips(prev => new Set(prev).add(cheatSheetId));
  }, []);

  const isProTipUnlocked = useCallback((cheatSheetId: string) => {
    return userTier === 'premium' || unlockedProTips.has(cheatSheetId);
  }, [userTier, unlockedProTips]);


  if (!isMounted) {
    return null; // Or a loading spinner, to prevent hydration mismatch
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        userTier,
        setUserTier,
        unlockProTip,
        isProTipUnlocked,
        unlockedProTips,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
