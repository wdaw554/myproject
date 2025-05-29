import type { LucideIcon } from 'lucide-react';

export type Category = 'Social Media' | 'SEO' | 'Email Marketing' | 'Paid Advertising' | 'Analytics';

export interface InteractiveElement {
  iconName: keyof typeof import('lucide-react')['icons']; // Store icon name
  term: string;
  tip: string;
}

export interface CheatSheet {
  id: string;
  title: string;
  content: string; // Main content, can be simple text or markdown
  category: Category;
  tags: string[]; // For keyword search
  proTip?: string; // Unlockable pro tip
  isProTipUnlocked?: boolean; // Tracks if pro tip is unlocked for the session/user
  interactiveElements?: InteractiveElement[];
  isBookmarked?: boolean;
}

export type UserTier = 'free' | 'premium';
