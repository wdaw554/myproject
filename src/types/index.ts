
import type { LucideIcon } from 'lucide-react';

export type Category = 'Social Media' | 'SEO' | 'Email Marketing' | 'Paid Advertising' | 'Analytics';

export interface InteractiveElement {
  iconName: keyof typeof import('lucide-react')['icons']; // Store icon name
  term: string;
  tip: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string; // Optional explanation for the correct answer
}

export interface CaseStudy {
  title: string;
  description: string; // A paragraph describing the fictional case
  outcome: string; // What was the result
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
  imageUrl?: string; // Optional field for custom image URLs
  learningObjectives?: string[];
  keyTakeaways?: string[];
  quiz?: QuizQuestion[];
  caseStudies?: CaseStudy[];
}

export type UserTier = 'free' | 'premium';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconName: keyof typeof import('lucide-react')['icons'];
  criteria: (context: any) => boolean; // Function to check if achievement is earned
  isUnlocked: boolean;
  toastMessage?: string; // Optional custom message for toast
}
