
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
import type { Achievement } from '@/types';
import type { AppContextProps } from '@/contexts/AppContext'; // Assuming AppContextProps is exported or define a relevant subset here

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'streak_starter',
    name: 'Streak Starter',
    description: 'Claimed your daily reward for the first time!',
    iconName: 'Flame',
    criteria: (context: Pick<AppContextProps, 'currentStreak'>) => context.currentStreak >= 1,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Streak Starter! 🔥 Keep it going!',
  },
  {
    id: 'streak_enthusiast',
    name: 'Streak Enthusiast',
    description: 'Maintained a 3-day streak!',
    iconName: 'Flame',
    criteria: (context: Pick<AppContextProps, 'currentStreak'>) => context.currentStreak >= 3,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Streak Enthusiast! 🎉 You\'re on a roll!',
  },
  {
    id: 'streak_master',
    name: 'Streak Master',
    description: 'Maintained a 7-day streak!',
    iconName: 'Flame',
    criteria: (context: Pick<AppContextProps, 'currentStreak'>) => context.currentStreak >= 7,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Streak Master! 🚀 Incredible consistency!',
  },
  {
    id: 'first_bookmark',
    name: 'First Find',
    description: 'Bookmarked your first cheat sheet.',
    iconName: 'BookmarkPlus',
    criteria: (context: Pick<AppContextProps, 'bookmarks'>) => context.bookmarks.length >= 1,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: First Find! 🔖 Saved for later!',
  },
  {
    id: 'avid_collector',
    name: 'Avid Collector',
    description: 'Bookmarked 5 cheat sheets.',
    iconName: 'Library',
    criteria: (context: Pick<AppContextProps, 'bookmarks'>) => context.bookmarks.length >= 5,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Avid Collector! 📚 Your knowledge library is growing!',
  },
  {
    id: 'first_pro_tip',
    name: 'Curious Learner',
    description: 'Unlocked your first Pro Tip.',
    iconName: 'Lightbulb',
    criteria: (context: Pick<AppContextProps, 'unlockedProTips'>) => context.unlockedProTips.size >= 1,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Curious Learner! 💡 Insight gained!',
  },
  {
    id: 'pro_tip_guru',
    name: 'Pro Tip Guru',
    description: 'Unlocked 5 Pro Tips.',
    iconName: 'Brain', // Changed from BrainIcon to Brain
    criteria: (context: Pick<AppContextProps, 'unlockedProTips'>) => context.unlockedProTips.size >= 5,
    isUnlocked: false,
    toastMessage: 'Achievement Unlocked: Pro Tip Guru! 🧠 You\'re soaking up the knowledge!',
  },
  // { // Premium achievement removed
  //   id: 'premium_user_achievement',
  //   name: 'Premium Power',
  //   description: 'Upgraded to MarkSpark Premium!',
  //   iconName: 'Gem',
  //   criteria: (context: Pick<AppContextProps, 'userTier'>) => context.userTier === 'premium',
  //   isUnlocked: false,
  //   toastMessage: 'Achievement Unlocked: Premium Power! ✨ Welcome to the club!',
  // }
];
