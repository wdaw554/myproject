
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import Link from 'next/link';
import { Brain, Sun, Moon, Home, Bookmark, Gem, Gift, Flame } from 'lucide-react'; // Changed MountainIcon to Brain
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/hooks/useAppContext';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function Header() {
  const { 
    theme, 
    toggleTheme, 
    canClaimDailyReward, 
    claimDailyReward, 
    proTipUnlockTokens,
    currentStreak
  } = useAppContext();
  const { toast } = useToast();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/saved', label: 'Saved', icon: Bookmark },
    { href: '/premium', label: 'Premium', icon: Gem },
  ];

  const handleClaimReward = () => {
    const reward = claimDailyReward();
    if (reward.success) {
      let description = `You received ${reward.tokensAwarded} Pro Tip Tokens.`;
      if (reward.bonusTokens > 0) {
        description += ` Plus ${reward.bonusTokens} bonus tokens for your ${reward.newStreak}-day streak!`;
      }
      description += ` You now have ${proTipUnlockTokens + reward.tokensAwarded + reward.bonusTokens} tokens.`;
      
      toast({
        title: (
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-yellow-500" />
            <span>Daily Reward Claimed!</span>
          </div>
        ),
        description: description,
      });
    } else {
      toast({
        title: 'Already Claimed',
        description: 'You can claim your next daily reward tomorrow.',
        variant: 'default',
      });
    }
  };
  
  const showClaimButton = canClaimDailyReward();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Brain className="h-6 w-6 text-primary" /> 
          <span className="font-bold">MarkSpark</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
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
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="relative px-2" disabled>
                  <Gem className="h-4 w-4 mr-1 text-primary" /> {proTipUnlockTokens}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your Pro Tip Tokens</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {currentStreak > 0 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative px-2" disabled>
                    <Flame className="h-4 w-4 mr-1 text-orange-500" /> {currentStreak}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{currentStreak}-Day Streak! Keep it up!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}


          {showClaimButton && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={handleClaimReward} className="border-primary text-primary hover:bg-primary/10">
                    <Gift className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Claim Daily Reward</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
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
