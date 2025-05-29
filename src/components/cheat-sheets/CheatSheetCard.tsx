// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { CheatSheet } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, Lock, Lightbulb, Gem } from 'lucide-react';
import { useAppContext } from '@/hooks/useAppContext';
import { TooltipIcon } from '@/components/shared/TooltipIcon';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import React from 'react';


interface CheatSheetCardProps {
  sheet: CheatSheet;
}

export function CheatSheetCard({ sheet }: CheatSheetCardProps) {
  const { 
    addBookmark, 
    removeBookmark, 
    isBookmarked, 
    userTier, 
    isProTipUnlocked,
    unlockProTipWithToken,
    proTipUnlockTokens
  } = useAppContext();
  const { toast } = useToast();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);


  const bookmarked = isBookmarked(sheet.id);
  const effectivelyUnlocked = isProTipUnlocked(sheet.id);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(sheet.id);
      toast({ title: "Bookmark Removed", description: `"${sheet.title}" removed from your bookmarks.` });
    } else {
      addBookmark(sheet.id);
      toast({ title: "Bookmarked!", description: `"${sheet.title}" added to your bookmarks.` });
    }
  };

  const handleUnlockProTipAttempt = () => {
    if (userTier === 'premium') { // Should not happen as button is hidden, but good check
      unlockProTipWithToken(sheet.id); // Will auto-unlock without token cost
      toast({ title: "Pro Tip Unlocked!", description: "Premium members have all tips unlocked." });
      setIsAlertOpen(false);
      return;
    }

    if (proTipUnlockTokens > 0) {
      const success = unlockProTipWithToken(sheet.id);
      if (success) {
        toast({ title: "Pro Tip Unlocked!", description: `You used 1 token. Remaining: ${proTipUnlockTokens - 1}` });
      } else {
        // This case should ideally not be reached if button is disabled, but defensive
        toast({ title: "Unlock Failed", description: "Something went wrong.", variant: "destructive" });
      }
    } else {
      // This state should be handled by the dialog content changing
      toast({ title: "No Tokens Left", description: "Claim your daily reward or go premium!", variant: "destructive" });
    }
    setIsAlertOpen(false);
  };
  
  const firstTag = sheet.tags?.[0] || 'marketing';
  const secondTag = sheet.category?.split(' ')[0].toLowerCase() || 'abstract';


  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-40">
        <Image 
          src={`https://placehold.co/400x250.png`} 
          alt={sheet.title} 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint={`${firstTag} ${secondTag}`}
        />
      </div>
      <CardHeader className="pt-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold leading-tight">{sheet.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleToggleBookmark} aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}>
            <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        <Badge variant="outline" className="mt-1 w-fit">{sheet.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">{sheet.content}</p>
        {sheet.interactiveElements && sheet.interactiveElements.length > 0 && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Interactive Tips</h4>
            <div className="flex flex-wrap gap-2">
              {sheet.interactiveElements.map((el, index) => (
                <TooltipIcon key={index} element={el} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start space-y-3 pt-4 border-t">
        {sheet.proTip && (
          <div className="w-full p-3 rounded-md bg-accent/20 dark:bg-accent/10">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-semibold text-accent-foreground flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-yellow-500" /> Pro Tip
              </h4>
              {!effectivelyUnlocked && userTier === 'free' && (
                 <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs h-7">
                      <Lock className="h-3 w-3 mr-1" /> Unlock
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {proTipUnlockTokens > 0 ? "Unlock Pro Tip?" : "Out of Tokens!"}
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {proTipUnlockTokens > 0 
                          ? `Use 1 Pro Tip Token to unlock this insight? You have ${proTipUnlockTokens} token(s) remaining.`
                          : "You've run out of Pro Tip Tokens for today. Claim your daily reward or upgrade to Premium for unlimited access!"}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      {proTipUnlockTokens > 0 ? (
                        <AlertDialogAction onClick={handleUnlockProTipAttempt} className="bg-primary hover:bg-primary/90">
                          Use 1 Token <Gem className="ml-2 h-3 w-3" />
                        </AlertDialogAction>
                      ) : (
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <Link href="/premium">Go Premium</Link>
                        </Button>
                      )}
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
            {effectivelyUnlocked ? (
              <p className="text-xs text-accent-foreground/90">{sheet.proTip}</p>
            ) : (
              <p className="text-xs text-muted-foreground italic">
                {userTier === 'free' ? "Unlock with a token to view this tip." : "Unlock to view this tip."}
              </p>
            )}
          </div>
        )}
        {sheet.tags && sheet.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {sheet.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
