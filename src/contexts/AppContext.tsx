// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { UserTier, Achievement } from '@/types';
import { INITIAL_ACHIEVEMENTS } from '@/data/achievements';
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import * as LucideIcons from 'lucide-react';

const BOOKMARKS_STORAGE_KEY = 'marketmuse_bookmarks_v2';
const THEME_STORAGE_KEY = 'marketmuse_theme_v2';
const USER_TIER_STORAGE_KEY = 'marketmuse_user_tier_v2';
const UNLOCKED_PRO_TIPS_STORAGE_KEY = 'marketmuse_unlocked_pro_tips_v2';
const PRO_TIP_TOKENS_STORAGE_KEY = 'marketmuse_pro_tip_tokens_v2';
const LAST_CLAIMED_DATE_STORAGE_KEY = 'marketmuse_last_claimed_date_v2';
const CURRENT_STREAK_STORAGE_KEY = 'marketmuse_current_streak_v2';
const LAST_STREAK_DAY_STORAGE_KEY = 'marketmuse_last_streak_day_v2';
const ACHIEVEMENTS_STORAGE_KEY = 'marketmuse_achievements_v2';

const INITIAL_TOKENS = 10;
const DAILY_REWARD_FREE = 50;
const DAILY_REWARD_PREMIUM = 60;

const STREAK_BONUSES = {
  3: 15, // Extra 15 tokens for a 3-day streak
  7: 30, // Extra 30 tokens for a 7-day streak
  14: 50, // Extra 50 tokens for a 14-day streak
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
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [userTier, setUserTierState] = useState<UserTier>('free');
  const [unlockedProTips, setUnlockedProTips] = useState<Set<string>>(new Set());
  const [proTipUnlockTokens, setProTipUnlockTokens] = useState<number>(INITIAL_TOKENS);
  const [lastClaimedDate, setLastClaimedDate] = useState<string | null>(null);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [lastStreakDay, setLastStreakDay] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    if (typeof window !== 'undefined') {
      const storedAchievements = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
      return storedAchievements ? JSON.parse(storedAchievements) : INITIAL_ACHIEVEMENTS.map(a => ({...a, isUnlocked: false}));
    }
    return INITIAL_ACHIEVEMENTS.map(a => ({...a, isUnlocked: false}));
  });
  
  const [isMounted, setIsMounted] = useState(false);
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

    const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));

    const storedUserTier = localStorage.getItem(USER_TIER_STORAGE_KEY) as UserTier | null;
    if (storedUserTier) setUserTierState(storedUserTier);
    
    const storedUnlockedProTips = localStorage.getItem(UNLOCKED_PRO_TIPS_STORAGE_KEY);
    if (storedUnlockedProTips) setUnlockedProTips(new Set(JSON.parse(storedUnlockedProTips)));

    const storedTokens = localStorage.getItem(PRO_TIP_TOKENS_STORAGE_KEY);
    if (storedTokens === null) {
      setProTipUnlockTokens(INITIAL_TOKENS); 
      localStorage.setItem(PRO_TIP_TOKENS_STORAGE_KEY, INITIAL_TOKENS.toString());
    } else {
      setProTipUnlockTokens(parseInt(storedTokens, 10));
    }
    
    const storedLastClaimedDate = localStorage.getItem(LAST_CLAIMED_DATE_STORAGE_KEY);
    if (storedLastClaimedDate) setLastClaimedDate(storedLastClaimedDate);

    const storedCurrentStreak = localStorage.getItem(CURRENT_STREAK_STORAGE_KEY);
    if (storedCurrentStreak) setCurrentStreak(parseInt(storedCurrentStreak, 10));

    const storedLastStreakDay = localStorage.getItem(LAST_STREAK_DAY_STORAGE_KEY);
    if (storedLastStreakDay) setLastStreakDay(storedLastStreakDay);

    const storedAchievements = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
    if (storedAchievements) {
      setAchievements(JSON.parse(storedAchievements));
    } else {
      setAchievements(INITIAL_ACHIEVEMENTS.map(a => ({...a, isUnlocked: false}))); // ensure all have isUnlocked
    }

  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, isMounted]);

  useEffect(() => { if (isMounted) localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks)); }, [bookmarks, isMounted]);
  useEffect(() => { if (isMounted) localStorage.setItem(USER_TIER_STORAGE_KEY, userTier); }, [userTier, isMounted]);
  useEffect(() => { if (isMounted) localStorage.setItem(UNLOCKED_PRO_TIPS_STORAGE_KEY, JSON.stringify(Array.from(unlockedProTips))); }, [unlockedProTips, isMounted]);
  useEffect(() => { if (isMounted) localStorage.setItem(PRO_TIP_TOKENS_STORAGE_KEY, proTipUnlockTokens.toString()); }, [proTipUnlockTokens, isMounted]);
  useEffect(() => { if (isMounted) { if (lastClaimedDate) localStorage.setItem(LAST_CLAIMED_DATE_STORAGE_KEY, lastClaimedDate); else localStorage.removeItem(LAST_CLAIMED_DATE_STORAGE_KEY);}}, [lastClaimedDate, isMounted]);
  useEffect(() => { if (isMounted) localStorage.setItem(CURRENT_STREAK_STORAGE_KEY, currentStreak.toString()); }, [currentStreak, isMounted]);
  useEffect(() => { if (isMounted) { if (lastStreakDay) localStorage.setItem(LAST_STREAK_DAY_STORAGE_KEY, lastStreakDay); else localStorage.removeItem(LAST_STREAK_DAY_STORAGE_KEY);}}, [lastStreakDay, isMounted]);
  useEffect(() => { if (isMounted) localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(achievements)); }, [achievements, isMounted]);

  const checkAndUnlockAchievements = useCallback(() => {
    if (!isMounted) return;
    const appContextSnapshot = {
      currentStreak,
      bookmarks,
      unlockedProTips,
      userTier,
      // Add other relevant state pieces here if new achievements need them
    };

    let newAchievementsUnlocked = false;
    const updatedAchievements = achievements.map(ach => {
      if (!ach.isUnlocked && ach.criteria(appContextSnapshot)) {
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
      return ach;
    });

    if (newAchievementsUnlocked) {
      setAchievements(updatedAchievements);
    }
  }, [isMounted, achievements, bookmarks, currentStreak, unlockedProTips, userTier, toast]);

  useEffect(() => {
    if (isMounted) {
      checkAndUnlockAchievements();
    }
  }, [isMounted, bookmarks.length, unlockedProTips.size, currentStreak, userTier, checkAndUnlockAchievements]);


  const toggleTheme = useCallback(() => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')), []);
  const addBookmark = useCallback((id: string) => setBookmarks((prev) => prev.includes(id) ? prev : [...prev, id]), []);
  const removeBookmark = useCallback((id: string) => setBookmarks((prev) => prev.filter(bId => bId !== id)), []);
  const isBookmarked = useCallback((id: string) => bookmarks.includes(id), [bookmarks]);
  
  const setUserTier = useCallback((tier: UserTier) => {
    setUserTierState(tier);
    // Immediately check for premium achievement upon tier change
    // This is a bit of a hack; ideally, checkAndUnlockAchievements would be robust enough
    // or setUserTier would be part of the snapshot passed to it.
    // For now, explicitly trigger it.
    setTimeout(() => checkAndUnlockAchievements(), 0);
  }, [checkAndUnlockAchievements]);

  const isProTipUnlocked = useCallback((id: string) => userTier === 'premium' || unlockedProTips.has(id), [userTier, unlockedProTips]);
  
  const unlockProTipWithToken = useCallback((id: string): boolean => {
    if (userTier === 'premium') {
      setUnlockedProTips(prev => new Set(prev).add(id));
      return true;
    }
    if (proTipUnlockTokens > 0) {
      setProTipUnlockTokens(prev => prev - 1);
      setUnlockedProTips(prev => new Set(prev).add(id));
      return true;
    }
    return false;
  }, [proTipUnlockTokens, userTier]);

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
    } else if (lastStreakDay !== today) { // If not today (meaning not claimed yet today) and not yesterday, reset.
      newStreakCount = 1; // Start a new streak
    } else { // lastStreakDay is today, implies already claimed or something is off
      newStreakCount = currentStreak; // Should not happen if canClaimDailyReward is true
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
    
    // Trigger achievement check after state updates
    setTimeout(() => checkAndUnlockAchievements(), 0);

    return { success: true, tokensAwarded: baseTokensAwarded, bonusTokens: bonusFromStreak, newStreak: newStreakCount };
  }, [canClaimDailyReward, userTier, currentStreak, lastStreakDay, toast, checkAndUnlockAchievements]);

  if (!isMounted) return null;

  return (
    <AppContext.Provider
      value={{
        theme, toggleTheme, bookmarks, addBookmark, removeBookmark, isBookmarked,
        userTier, setUserTier, proTipUnlockTokens, unlockedProTips, isProTipUnlocked,
        unlockProTipWithToken, lastClaimedDate, canClaimDailyReward, claimDailyReward,
        currentStreak, lastStreakDay, achievements, checkAndUnlockAchievements,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
