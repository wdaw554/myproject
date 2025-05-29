"use client";

import Link from 'next/link';
import { MountainIcon, Sun, Moon, Home, Bookmark, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/hooks/useAppContext';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const { theme, toggleTheme } = useAppContext();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/saved', label: 'Saved', icon: Bookmark },
    { href: '/premium', label: 'Premium', icon: Gem },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">MarketMuse</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? 'default' : 'ghost'}
              asChild
              className={cn(pathname === item.href && "shadow-md")}
            >
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          {/* Mobile Menu (optional, for future enhancement) */}
        </div>
      </div>
      {/* Mobile navigation bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/95 p-2 flex justify-around">
         {navItems.map((item) => (
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
          ))}
      </div>
    </header>
  );
}
