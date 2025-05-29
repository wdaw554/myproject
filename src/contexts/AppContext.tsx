
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { UserTier, Achievement } from '@/types';
import { INITIAL_ACHIEVEMENTS } from '@/data/achievements';
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import * as LucideIcons from 'lucide-react';
import { Brain } from 'lucide-react'; // For loading indicator

const BOOKMARKS_STORAGE_KEY_PREFIX = 'markspark_bookmarks_v1_';
const THEME_STORAGE_KEY = 'markspark_theme_v1';
const USER_TIER_STORAGE_KEY_PREFIX = 'markspark_user_tier_v1_';
const UNLOCKED_PRO_TIPS_STORAGE_KEY_PREFIX = 'markspark_unlocked_pro_tips_v1_';
const PRO_TIP_TOKENS_STORAGE_KEY_PREFIX = 'markspark_pro_tip_tokens_v1_';
const LAST_CLAIMED_DATE_STORAGE_KEY_PREFIX = 'markspark_last_claimed_date_v1_';
const CURRENT_STREAK_STORAGE_KEY_PREFIX = 'markspark_current_streak_v1_';
const LAST_STREAK_DAY_STORAGE_KEY_PREFIX = 'markspark_last_streak_day_v1_';
const ACHIEVEMENTS_STORAGE_KEY_PREFIX = 'markspark_achievements_v1_';


const INITIAL_TOKENS = 10; // Reverted from 50
const DAILY_REWARD_FREE = 5; // Reverted from 50
const DAILY_REWARD_PREMIUM = 7; // Reverted from 60

const STREAK_BONUSES = {
  3: 15,
  7: 30,
  14: 50,
};

export interface AppContextProps {
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
  unlockProTipWithToken: (cheatSheetId: string) => boolean;
  lastClaimedDate: string | null;
  canClaimDailyReward: () => boolean;
  claimDailyReward: () => { success: boolean; tokensAwarded: number; bonusTokens: number, newStreak: number };
  currentStreak: number;
  lastStreakDay: string | null;
  achievements: Achievement[];
  checkAndUnlockAchievements: () => void;
  isAppContextReady: boolean;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Simplified storage key as there's no user distinction anymore
const GUEST_USER_ID_PLACEHOLDER = 'guest';
const getStorageKey = (prefix: string) => {
  return `${prefix}${GUEST_USER_ID_PLACEHOLDER}`;
};


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [userTier, setUserTierState] = useState<UserTier>('free');
  const [unlockedProTips, setUnlockedProTips] = useState<Set<string>>(new Set());
  const [proTipUnlockTokens, setProTipUnlockTokens] = useState<number>(INITIAL_TOKENS);
  const [lastClaimedDate, setLastClaimedDate] = useState<string | null>(null);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [lastStreakDay, setLastStreakDay] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const [isMounted, setIsMounted] = useState(false);
  const [isAppContextReady, setIsAppContextReady] = useState(false);
  const { toast } = useToast();

  // Load initial theme (not user-specific)
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

  // Effect to load data once component is mounted (no authLoading dependency)
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
              criteria: initialAch.criteria,
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

    const storedUserTier = localStorage.getItem(getStorageKey(USER_TIER_STORAGE_KEY_PREFIX)) as UserTier | null;
    if (storedUserTier) setUserTierState(storedUserTier); else setUserTierState('free');

    const storedUnlockedProTips = localStorage.getItem(getStorageKey(UNLOCKED_PRO_TIPS_STORAGE_KEY_PREFIX));
    if (storedUnlockedProTips) setUnlockedProTips(new Set(JSON.parse(storedUnlockedProTips))); else setUnlockedProTips(new Set());

    const storedTokens = localStorage.getItem(getStorageKey(PRO_TIP_TOKENS_STORAGE_KEY_PREFIX));
    if (storedTokens === null) {
      setProTipUnlockTokens(INITIAL_TOKENS);
      localStorage.setItem(getStorageKey(PRO_TIP_TOKENS_STORAGE_KEY_PREFIX), INITIAL_TOKENS.toString());
    } else {
      setProTipUnlockTokens(parseInt(storedTokens, 10));
    }

    const storedLastClaimedDate = localStorage.getItem(getStorageKey(LAST_CLAIMED_DATE_STORAGE_KEY_PREFIX));
    if (storedLastClaimedDate) setLastClaimedDate(storedLastClaimedDate); else setLastClaimedDate(null);

    const storedCurrentStreak = localStorage.getItem(getStorageKey(CURRENT_STREAK_STORAGE_KEY_PREFIX));
    if (storedCurrentStreak) setCurrentStreak(parseInt(storedCurrentStreak, 10)); else setCurrentStreak(0);

    const storedLastStreakDay = localStorage.getItem(getStorageKey(LAST_STREAK_DAY_STORAGE_KEY_PREFIX));
    if (storedLastStreakDay) setLastStreakDay(storedLastStreakDay); else setLastStreakDay(null);

    setAchievements(loadAchievementsFromStorage());
    setIsAppContextReady(true);

  }, [isMounted]);


  // Save theme
  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, isMounted, isAppContextReady]);

  // Save other data
  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(BOOKMARKS_STORAGE_KEY_PREFIX), JSON.stringify(bookmarks));
  }, [bookmarks, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(USER_TIER_STORAGE_KEY_PREFIX), userTier);
  }, [userTier, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(UNLOCKED_PRO_TIPS_STORAGE_KEY_PREFIX), JSON.stringify(Array.from(unlockedProTips)));
  }, [unlockedProTips, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(PRO_TIP_TOKENS_STORAGE_KEY_PREFIX), proTipUnlockTokens.toString());
  }, [proTipUnlockTokens, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    if (lastClaimedDate) localStorage.setItem(getStorageKey(LAST_CLAIMED_DATE_STORAGE_KEY_PREFIX), lastClaimedDate);
    else localStorage.removeItem(getStorageKey(LAST_CLAIMED_DATE_STORAGE_KEY_PREFIX));
  }, [lastClaimedDate, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    localStorage.setItem(getStorageKey(CURRENT_STREAK_STORAGE_KEY_PREFIX), currentStreak.toString());
  }, [currentStreak, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    if (lastStreakDay) localStorage.setItem(getStorageKey(LAST_STREAK_DAY_STORAGE_KEY_PREFIX), lastStreakDay);
    else localStorage.removeItem(getStorageKey(LAST_STREAK_DAY_STORAGE_KEY_PREFIX));
  }, [lastStreakDay, isMounted, isAppContextReady]);

  useEffect(() => {
    if (!isMounted || !isAppContextReady) return;
    const achievementsToStore = achievements.map(({ id, isUnlocked }) => ({ id, isUnlocked }));
    localStorage.setItem(getStorageKey(ACHIEVEMENTS_STORAGE_KEY_PREFIX), JSON.stringify(achievementsToStore));
  }, [achievements, isMounted, isAppContextReady]);


  const checkAndUnlockAchievements = useCallback(() => {
    if (!isMounted || !isAppContextReady) return;

    const appContextSnapshot = {
      currentStreak,
      bookmarks,
      unlockedProTips,
      userTier,
      // user: null, // No user object anymore
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
  }, [isMounted, achievements, bookmarks, currentStreak, unlockedProTips, userTier, toast, isAppContextReady]);

  useEffect(() => {
    if (isMounted && isAppContextReady) {
      checkAndUnlockAchievements();
    }
  }, [isMounted, bookmarks.length, unlockedProTips.size, currentStreak, userTier, checkAndUnlockAchievements, isAppContextReady]);


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

  const setUserTier = useCallback((tier: UserTier) => {
    setUserTierState(tier);
    setTimeout(() => checkAndUnlockAchievements(), 0);
  }, [checkAndUnlockAchievements]);

  const isProTipUnlocked = useCallback((id: string) => {
    return userTier === 'premium' || unlockedProTips.has(id);
  }, [userTier, unlockedProTips]);

  const unlockProTipWithToken = useCallback((id: string): boolean => {
    if (userTier === 'premium') {
      setUnlockedProTips(prev => new Set(prev).add(id));
      setTimeout(() => checkAndUnlockAchievements(), 0);
      return true;
    }
    if (proTipUnlockTokens > 0) {
      setProTipUnlockTokens(prev => prev - 1);
      setUnlockedProTips(prev => new Set(prev).add(id));
      setTimeout(() => checkAndUnlockAchievements(), 0);
      return true;
    }
    return false;
  }, [proTipUnlockTokens, userTier, checkAndUnlockAchievements]);

  const getYesterdayDateString = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  };

  const canClaimDailyReward = useCallback((): boolean => {
    if (!isMounted) return false;
    const today = new Date().toISOString().split('T')[0];
    return lastClaimedDate !== today;
  }, [lastClaimedDate, isMounted]);

  const claimDailyReward = useCallback(() => {
    if (!canClaimDailyReward()) return { success: false, tokensAwarded: 0, bonusTokens: 0, newStreak: currentStreak };

    const today = new Date().toISOString().split('T')[0];
    const yesterday = getYesterdayDateString();

    let baseTokensAwarded = userTier === 'premium' ? DAILY_REWARD_PREMIUM : DAILY_REWARD_FREE;
    let bonusFromStreak = 0;
    let newStreakCount = currentStreak;

    if (lastStreakDay === yesterday) {
      newStreakCount = currentStreak + 1;
    } else if (lastStreakDay !== today) {
      newStreakCount = 1;
    } else {
      newStreakCount = currentStreak;
    }

    setCurrentStreak(newStreakCount);
    setLastStreakDay(today);

    if (STREAK_BONUSES[newStreakCount]) {
      bonusFromStreak = STREAK_BONUSES[newStreakCount];
      toast({
        title: `Streak Bonus! 🎉 ${newStreakCount}-Day Streak!`,
        description: `You earned an extra ${bonusFromStreak} tokens!`,
      });
    }

    const totalTokensAwarded = baseTokensAwarded + bonusFromStreak;
    setProTipUnlockTokens(prev => prev + totalTokensAwarded);
    setLastClaimedDate(today);

    setTimeout(() => checkAndUnlockAchievements(), 0);

    return { success: true, tokensAwarded: baseTokensAwarded, bonusTokens: bonusFromStreak, newStreak: newStreakCount };
  }, [canClaimDailyReward, userTier, currentStreak, lastStreakDay, toast, checkAndUnlockAchievements]);

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
        userTier, setUserTier, proTipUnlockTokens, unlockedProTips, isProTipUnlocked,
        unlockProTipWithToken, lastClaimedDate, canClaimDailyReward, claimDailyReward,
        currentStreak, lastStreakDay, achievements, checkAndUnlockAchievements,
        isAppContextReady,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
