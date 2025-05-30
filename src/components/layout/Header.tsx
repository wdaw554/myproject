
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import Link from 'next/link';
import { Brain, Sun, Moon, Home, Bookmark } from 'lucide-react'; // Removed Gift, Flame, Gem
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/hooks/useAppContext';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
// import { useToast } from '@/hooks/use-toast'; // Toasts no longer used here for rewards
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Tooltips for tokens/streaks removed

export function Header() {
  const {
    theme,
    toggleTheme,
  } = useAppContext();
  // const { toast } = useToast(); // Not needed anymore
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/saved', label: 'Saved', icon: Bookmark },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold">MarkSpark</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            return (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'default' : 'ghost'}
                asChild
                className={cn("text-sm", pathname === item.href && "shadow-md")}
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/95 p-2 flex justify-around">
         {navItems.map((item) => {
           return (
            <Button
              key={item.href}
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              size="sm"
              asChild
              className={cn("flex-col h-auto p-2", pathname === item.href && "text-primary")}
            >
              <Link href={item.href} className="flex flex-col items-center gap-1">
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </Button>
           );
          })}
      </div>
    </header>
  );
}
