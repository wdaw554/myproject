
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { CheatSheet, QuizQuestion, CaseStudy } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, Lock, Lightbulb, Gem, HelpCircle, CheckCircle, BookOpen, Target as TargetIcon, Brain, FileText as FileTextIcon } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    proTipUnlockTokens,
    checkAndUnlockAchievements // Added for achievement checks
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
    // Check achievements after bookmarking action
    setTimeout(() => checkAndUnlockAchievements(), 0);
  };

  const handleUnlockProTipAttempt = () => {
    if (userTier === 'premium') { 
      const success = unlockProTipWithToken(sheet.id); 
      if (success) {
        toast({ title: "Pro Tip Unlocked!", description: "Premium members have all tips unlocked." });
        setTimeout(() => checkAndUnlockAchievements(), 0); // Check achievements
      }
      setIsAlertOpen(false);
      return;
    }

    if (proTipUnlockTokens > 0) {
      const success = unlockProTipWithToken(sheet.id);
      if (success) {
        toast({ title: "Pro Tip Unlocked!", description: `You used 1 token. Remaining: ${proTipUnlockTokens -1}` }); 
        setTimeout(() => checkAndUnlockAchievements(), 0); // Check achievements
      } else {
        // This case should ideally not happen if tokens > 0, but as a fallback:
        toast({ title: "Unlock Failed", description: "Something went wrong.", variant: "destructive" });
      }
    } else {
      toast({ title: "No Tokens Left", description: "Claim your daily reward or go premium!", variant: "destructive" });
    }
    setIsAlertOpen(false);
  };
  
  const firstTag = sheet.tags?.[0]?.split(' ')[0].toLowerCase() || 'marketing';
  const secondTag = sheet.category?.split(' ')[0].toLowerCase() || 'strategy';
  const aiHint = `${firstTag} ${secondTag}`.trim();

  const imageSrc = sheet.imageUrl || `https://placehold.co/400x250.png`;


  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-40 md:h-48">
        <Image 
          src={imageSrc}
          alt={sheet.title} 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint={aiHint}
        />
      </div>
      <CardHeader className="pt-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold leading-tight">{sheet.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleToggleBookmark} aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}>
            <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        <Badge variant="outline" className="mt-1 w-fit">{sheet.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <p className="text-foreground/80 leading-relaxed line-clamp-4">{sheet.content}</p>
        
        {(sheet.learningObjectives && sheet.learningObjectives.length > 0) ||
         (sheet.keyTakeaways && sheet.keyTakeaways.length > 0) ||
         (sheet.interactiveElements && sheet.interactiveElements.length > 0) ||
         (sheet.caseStudies && sheet.caseStudies.length > 0) ||
         (sheet.quiz && sheet.quiz.length > 0) ? (
          <Accordion type="single" collapsible className="w-full text-xs">
            {sheet.learningObjectives && sheet.learningObjectives.length > 0 && (
              <AccordionItem value="learning-objectives">
                <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                    <div className="flex items-center gap-2">
                        <TargetIcon className="h-4 w-4" /> Learning Objectives
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pl-2">
                  <ul className="list-disc list-inside space-y-1 text-foreground/70">
                    {sheet.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {sheet.keyTakeaways && sheet.keyTakeaways.length > 0 && (
              <AccordionItem value="key-takeaways">
                <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                    <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4" /> Key Takeaways
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pl-2">
                  <ul className="list-disc list-inside space-y-1 text-foreground/70">
                    {sheet.keyTakeaways.map((takeaway, i) => <li key={i}>{takeaway}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
            
            {sheet.interactiveElements && sheet.interactiveElements.length > 0 && (
              <AccordionItem value="interactive-tips">
                <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                    <div className="flex items-center gap-2">
                         <Lightbulb className="h-4 w-4" /> Interactive Tips
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {sheet.interactiveElements.map((el, index) => (
                        <TooltipIcon key={index} element={el} />
                    ))}
                    </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {sheet.caseStudies && sheet.caseStudies.length > 0 && (
                <AccordionItem value="case-studies">
                    <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                         <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" /> Case Studies
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pl-2 space-y-2">
                        {sheet.caseStudies.map((study, i) => (
                            <div key={i} className="p-2 border rounded-md bg-muted/30">
                                <h5 className="font-semibold text-foreground/90">{study.title}</h5>
                                <p className="text-foreground/70 mt-1 text-xs">{study.description}</p>
                                <p className="text-foreground/70 mt-1 text-xs"><strong>Outcome:</strong> {study.outcome}</p>
                            </div>
                        ))}
                        <p className="text-center text-muted-foreground text-xs italic mt-2">More detailed case study views coming soon!</p>
                    </AccordionContent>
                </AccordionItem>
            )}

            {sheet.quiz && sheet.quiz.length > 0 && (
                 <AccordionItem value="quiz">
                    <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4" /> Quick Quiz
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pl-2 space-y-2">
                        {sheet.quiz.map((q, i) => (
                            <div key={i} className="p-2 border rounded-md bg-muted/30">
                                <p className="font-semibold text-foreground/90">{i+1}. {q.question}</p>
                                <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-foreground/70">
                                    {q.options.map((opt, idx) => <li key={idx}>{opt}</li>)}
                                </ul>
                            </div>
                        ))}
                        <p className="text-center text-muted-foreground text-xs italic mt-2">Interactive quizzes coming soon!</p>
                    </AccordionContent>
                </AccordionItem>
            )}

          </Accordion>
        ) : null}

      </CardContent>
      <CardFooter className="flex-col items-start space-y-3 pt-4 border-t mt-auto">
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
                      <Lock className="h-3 w-3 mr-1" /> Unlock ({proTipUnlockTokens} <Gem className="ml-1 h-3 w-3" />)
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
