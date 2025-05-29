// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, Gem, Zap, ShieldOff } from 'lucide-react';
import { useAppContext } from '@/hooks/useAppContext';
import { useToast } from '@/hooks/use-toast';

export default function PremiumPage() {
  const { userTier, setUserTier } = useAppContext();
  const { toast } = useToast();

  const handleUpgrade = () => {
    setUserTier('premium');
    toast({
      title: 'Congratulations! 🎉',
      description: 'You are now a MarketMuse Premium member!',
      variant: 'default',
    });
  };
  
  const handleDowngrade = () => {
    setUserTier('free');
    toast({
      title: 'Subscription Changed',
      description: 'You are now on the MarketMuse Free plan.',
    });
  };


  const features = [
    { icon: ShieldOff, text: "Ad-Free Experience", description: "Enjoy MarketMuse without any interruptions." },
    { icon: Zap, text: "Unlock All Pro Tips Instantly", description: "Get immediate access to expert advice on every cheat sheet." },
    { icon: Gem, text: "Exclusive Future Features", description: "Be the first to access new tools like daily challenges and AI feedback." },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <Gem className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Go Premium!
        </h1>
        <p className="mt-4 text-xl text-foreground/80">
          Unlock the full power of MarketMuse and supercharge your marketing knowledge.
        </p>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">MarketMuse Premium</CardTitle>
          <CardDescription>Get unlimited access to all features.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <feature.icon className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">{feature.text}</span>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <p className="text-3xl font-bold text-primary">$2.99 <span className="text-base font-normal text-muted-foreground">/ month</span></p>
            <p className="text-xs text-muted-foreground">Billed monthly. Cancel anytime.</p>
          </div>
        </CardContent>
        <CardFooter>
          {userTier === 'free' ? (
            <Button size="lg" className="w-full text-lg shadow-md hover:shadow-lg transition-shadow" onClick={handleUpgrade}>
              <Gem className="mr-2 h-5 w-5" /> Upgrade to Premium
            </Button>
          ) : (
            <div className="w-full text-center space-y-2">
              <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" /> You are a Premium Member!
              </p>
               <Button size="lg" variant="outline" className="w-full" onClick={handleDowngrade}>
                Switch to Free Plan
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
       <p className="text-xs text-center text-muted-foreground">
        This is a simulated upgrade process for demonstration purposes. No actual payment will be processed.
      </p>
    </div>
  );
}
