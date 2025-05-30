
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
import type { Achievement } from '@/types';
import type { AppContextProps } from '@/contexts/AppContext'; // Assuming AppContextProps is exported or define a relevant subset here

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
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
];
