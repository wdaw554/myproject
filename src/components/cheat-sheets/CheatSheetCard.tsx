// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { CheatSheet } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, Zap, Lock, Unlock, Lightbulb } from 'lucide-react';
import { useAppContext } from '@/hooks/useAppContext';
import { TooltipIcon } from '@/components/shared/TooltipIcon';
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
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';


interface CheatSheetCardProps {
  sheet: CheatSheet;
}

export function CheatSheetCard({ sheet }: CheatSheetCardProps) {
  const { addBookmark, removeBookmark, isBookmarked, userTier, unlockProTip, isProTipUnlocked: isGlobalProTipUnlocked } = useAppContext();
  const { toast } = useToast();

  const bookmarked = isBookmarked(sheet.id);
  const proTipEffectivelyUnlocked = userTier === 'premium' || isGlobalProTipUnlocked(sheet.id);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(sheet.id);
      toast({ title: "Bookmark Removed", description: `"${sheet.title}" removed from your bookmarks.` });
    } else {
      addBookmark(sheet.id);
      toast({ title: "Bookmarked!", description: `"${sheet.title}" added to your bookmarks.` });
    }
  };

  const handleUnlockProTip = () => {
    // Simulate watching an ad
    unlockProTip(sheet.id);
    toast({ title: "Pro Tip Unlocked!", description: "You can now view the pro tip for this sheet." });
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold leading-tight">{sheet.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleToggleBookmark} aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}>
            <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        <Badge variant="outline" className="mt-1 w-fit">{sheet.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-sm text-foreground/80 leading-relaxed">{sheet.content}</p>
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
          <div className="w-full p-3 rounded-md bg-accent/30">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-semibold text-accent-foreground flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-yellow-500" /> Pro Tip
              </h4>
              {!proTipEffectivelyUnlocked && (
                 <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Lock className="h-3 w-3 mr-1" /> Unlock
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Unlock Pro Tip?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Watch a short ad to unlock this Pro Tip, or upgrade to Premium for unlimited access to all Pro Tips!
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleUnlockProTip}>
                        Watch Ad (Simulated)
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
            {proTipEffectivelyUnlocked ? (
              <p className="text-xs text-accent-foreground/90">{sheet.proTip}</p>
            ) : (
              <p className="text-xs text-muted-foreground italic">Unlock to view this tip.</p>
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
