// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { UserTier } from '@/types';
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface AppContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  bookmarks: string[]; 
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  userTier: UserTier;
  setUserTier: (tier: UserTier) => void;
  
  proTipUnlockTokens: number;
  unlockedProTips: Set<string>;
  isProTipUnlocked: (cheatSheetId: string) => boolean;
  unlockProTipWithToken: (cheatSheetId: string) => boolean; // Returns true if successful
  
  lastClaimedDate: string | null;
  canClaimDailyReward: () => boolean;
  claimDailyReward: () => { success: boolean; tokensAwarded: number };
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const BOOKMARKS_STORAGE_KEY = 'marketmuse_bookmarks';
const THEME_STORAGE_KEY = 'marketmuse_theme';
const USER_TIER_STORAGE_KEY = 'marketmuse_user_tier';
const UNLOCKED_PRO_TIPS_STORAGE_KEY = 'marketmuse_unlocked_pro_tips_v2'; 
const PRO_TIP_TOKENS_STORAGE_KEY = 'marketmuse_pro_tip_tokens_v2';
const LAST_CLAIMED_DATE_STORAGE_KEY = 'marketmuse_last_claimed_date_v2';
const INITIAL_TOKENS = 10; // Increased from 5 to 10

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [userTier, setUserTierState] = useState<UserTier>('free');
  const [unlockedProTips, setUnlockedProTips] = useState<Set<string>>(new Set());
  const [proTipUnlockTokens, setProTipUnlockTokens] = useState<number>(INITIAL_TOKENS);
  const [lastClaimedDate, setLastClaimedDate] = useState<string | null>(null);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load theme
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

    // Load bookmarks
    const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));

    // Load user tier
    const storedUserTier = localStorage.getItem(USER_TIER_STORAGE_KEY) as UserTier | null;
    if (storedUserTier) setUserTierState(storedUserTier);
    
    // Load unlocked pro tips
    const storedUnlockedProTips = localStorage.getItem(UNLOCKED_PRO_TIPS_STORAGE_KEY);
    if (storedUnlockedProTips) setUnlockedProTips(new Set(JSON.parse(storedUnlockedProTips)));

    // Load pro tip tokens
    const storedTokens = localStorage.getItem(PRO_TIP_TOKENS_STORAGE_KEY);
    // Check if it's a first-time load (no tokens stored yet)
    if (storedTokens === null) {
      setProTipUnlockTokens(INITIAL_TOKENS); // Grant initial tokens
      localStorage.setItem(PRO_TIP_TOKENS_STORAGE_KEY, INITIAL_TOKENS.toString());
    } else {
      setProTipUnlockTokens(parseInt(storedTokens, 10));
    }
    

    // Load last claimed date
    const storedLastClaimedDate = localStorage.getItem(LAST_CLAIMED_DATE_STORAGE_KEY);
    if (storedLastClaimedDate) setLastClaimedDate(storedLastClaimedDate);

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

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(PRO_TIP_TOKENS_STORAGE_KEY, proTipUnlockTokens.toString());
  }, [proTipUnlockTokens, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    if (lastClaimedDate) {
      localStorage.setItem(LAST_CLAIMED_DATE_STORAGE_KEY, lastClaimedDate);
    } else {
      localStorage.removeItem(LAST_CLAIMED_DATE_STORAGE_KEY);
    }
  }, [lastClaimedDate, isMounted]);


  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const addBookmark = useCallback((id: string) => {
    setBookmarks((prevBookmarks) => {
      if (!prevBookmarks.includes(id)) return [...prevBookmarks, id];
      return prevBookmarks;
    });
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bId) => bId !== id));
  }, []);

  const isBookmarked = useCallback((id: string) => bookmarks.includes(id), [bookmarks]);

  const setUserTier = useCallback((tier: UserTier) => {
    setUserTierState(tier);
  }, []);

  const isProTipUnlocked = useCallback((cheatSheetId: string) => {
    return userTier === 'premium' || unlockedProTips.has(cheatSheetId);
  }, [userTier, unlockedProTips]);

  const unlockProTipWithToken = useCallback((cheatSheetId: string): boolean => {
    if (userTier === 'premium') { // Premium users don't use tokens
        setUnlockedProTips(prev => new Set(prev).add(cheatSheetId));
        return true;
    }
    if (proTipUnlockTokens > 0) {
      setProTipUnlockTokens(prev => prev - 1);
      setUnlockedProTips(prev => new Set(prev).add(cheatSheetId));
      return true; 
    }
    return false; 
  }, [proTipUnlockTokens, userTier]);

  const canClaimDailyReward = useCallback((): boolean => {
    if (!isMounted) return false; // Don't allow claim until mounted and date loaded
    const today = new Date().toISOString().split('T')[0];
    return lastClaimedDate !== today;
  }, [lastClaimedDate, isMounted]);

  const claimDailyReward = useCallback(() => {
    if (canClaimDailyReward()) {
      const tokensToAward = userTier === 'premium' ? 7 : 5; // Premium gets 7, Free gets 5
      setProTipUnlockTokens(prev => prev + tokensToAward);
      setLastClaimedDate(new Date().toISOString().split('T')[0]);
      return { success: true, tokensAwarded: tokensToAward };
    }
    return { success: false, tokensAwarded: 0 };
  }, [canClaimDailyReward, userTier]);


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
        proTipUnlockTokens,
        unlockedProTips,
        isProTipUnlocked,
        unlockProTipWithToken,
        lastClaimedDate,
        canClaimDailyReward,
        claimDailyReward,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
