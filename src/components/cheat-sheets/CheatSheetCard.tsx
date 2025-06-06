
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import type { CheatSheet } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, Lightbulb, Gem, HelpCircle, CheckCircle, BookOpen, Target as TargetIcon, Brain as BrainIcon, FileText as FileTextIcon, XCircle, CheckCircle2 } from 'lucide-react'; // Removed Lock
import { useAppContext } from '@/hooks/useAppContext';
import { TooltipIcon } from '@/components/shared/TooltipIcon';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';
import React, { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';

interface CheatSheetCardProps {
  sheet: CheatSheet;
}

export function CheatSheetCard({ sheet }: CheatSheetCardProps) {
  const {
    addBookmark,
    removeBookmark,
    isBookmarked,
    checkAndUnlockAchievements,
    isAppContextReady,
  } = useAppContext();
  const { toast } = useToast();
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: { selectedOption: string | null; submitted: boolean } }>({});

  useEffect(() => {
    if (sheet.imageUrl && sheet.imageUrl.startsWith('http://')) {
      console.warn(
        `Warning: Cheat sheet "${sheet.title}" (ID: ${sheet.id}) is using an insecure HTTP image URL: ${sheet.imageUrl}. Please update to HTTPS in src/data/cheat-sheets.ts to avoid mixed content issues.`
      );
    }
  }, [sheet.imageUrl, sheet.title, sheet.id]);

  const bookmarked = isBookmarked(sheet.id);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(sheet.id);
      toast({ title: "Bookmark Removed", description: `"${sheet.title}" removed from your bookmarks.` });
    } else {
      addBookmark(sheet.id);
      toast({ title: "Bookmarked!", description: `"${sheet.title}" added to your bookmarks.` });
    }
    setTimeout(() => checkAndUnlockAchievements(), 0);
  };

  const firstTag = sheet.tags?.[0]?.split(' ')[0].toLowerCase() || 'marketing';
  const secondTag = sheet.category?.split(' ')[0].toLowerCase() || 'strategy';
  const aiHint = `${firstTag} ${secondTag}`.trim();

  const handleQuizOptionChange = (quizIndex: number, selectedValue: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [quizIndex]: {
        ...(prev[quizIndex] || { submitted: false }),
        selectedOption: selectedValue,
      }
    }));
  };

  const handleQuizSubmit = (quizIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [quizIndex]: {
        ...(prev[quizIndex] || { selectedOption: null }),
        submitted: true,
      }
    }));
    // Potentially call checkAndUnlockAchievements if there's an achievement for completing quizzes
  };

  if (!isAppContextReady) {
      return <Card className="flex flex-col h-full shadow-lg p-4 animate-pulse bg-muted/50"><div className="h-48"></div></Card>;
  }

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {sheet.imageUrl && (
        <div className="relative w-full h-40 md:h-48">
          <Image
            src={sheet.imageUrl}
            alt={sheet.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={aiHint}
          />
        </div>
      )}
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
                        <BrainIcon className="h-4 w-4" /> Key Takeaways
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pl-2">
                  <ul className="list-disc list-inside space-y-1 text-foreground/70">
                    {sheet.keyTakeaways.map((takeaway, i) => <li key={i}>{takeaway}</li>)}
                  </ul>
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

            {sheet.quiz && sheet.quiz.length > 0 && (
                 <AccordionItem value="quiz">
                    <AccordionTrigger className="text-xs font-semibold text-primary hover:no-underline">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4" /> Quick Quiz
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pl-2 space-y-4">
                      {sheet.quiz.map((q, quizIndex) => {
                        const currentAnswer = quizAnswers[quizIndex];
                        const isSubmitted = currentAnswer?.submitted;
                        const selectedOptionIndex = currentAnswer?.selectedOption !== null ? parseInt(currentAnswer?.selectedOption as string, 10) : -1;

                        return (
                          <div key={quizIndex} className="p-3 border rounded-md bg-muted/30 space-y-2">
                            <p className="font-semibold text-foreground/90">{quizIndex + 1}. {q.question}</p>
                            <RadioGroup
                              onValueChange={(value) => handleQuizOptionChange(quizIndex, value)}
                              value={currentAnswer?.selectedOption ?? undefined}
                              disabled={isSubmitted}
                            >
                              {q.options.map((opt, optionIndex) => {
                                const optionId = `quiz-${sheet.id}-${quizIndex}-${optionIndex}`;
                                let labelClass = "text-foreground/80";
                                let icon = null;

                                if (isSubmitted) {
                                  if (optionIndex === q.correctAnswerIndex) {
                                    labelClass = "text-green-600 font-semibold";
                                    icon = <CheckCircle2 className="h-4 w-4 text-green-600 ml-2" />;
                                  } else if (optionIndex === selectedOptionIndex) {
                                    labelClass = "text-red-600 font-semibold";
                                    icon = <XCircle className="h-4 w-4 text-red-600 ml-2" />;
                                  } else {
                                    labelClass = "text-muted-foreground";
                                  }
                                }

                                return (
                                  <div key={optionIndex} className="flex items-center space-x-2">
                                    <RadioGroupItem value={optionIndex.toString()} id={optionId} disabled={isSubmitted} />
                                    <Label htmlFor={optionId} className={cn("flex items-center", labelClass)}>
                                      {opt} {icon}
                                    </Label>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                            {!isSubmitted && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleQuizSubmit(quizIndex)}
                                disabled={currentAnswer?.selectedOption === null || currentAnswer?.selectedOption === undefined}
                                className="mt-2 text-xs h-7"
                              >
                                Check Answer
                              </Button>
                            )}
                            {isSubmitted && q.explanation && (
                              <p className="text-xs mt-2 text-primary/90 pt-1 border-t border-dashed">
                                <strong>Explanation:</strong> <em>{q.explanation}</em>
                              </p>
                            )}
                          </div>
                        );
                      })}
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
            </div>
            <p className="text-xs text-accent-foreground/90">{sheet.proTip}</p>
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
