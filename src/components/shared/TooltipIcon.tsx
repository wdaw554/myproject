import type { FC } from 'react';
import * as LucideIcons from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { InteractiveElement } from '@/types';

interface TooltipIconProps {
  element: InteractiveElement;
}

export const TooltipIcon: FC<TooltipIconProps> = ({ element }) => {
  // @ts-ignore
  const IconComponent = LucideIcons[element.iconName] as LucideIcons.LucideIcon;

  if (!IconComponent) {
    // Fallback if icon name is invalid
    // @ts-ignore
    return <LucideIcons.HelpCircle className="inline-block h-4 w-4 text-muted-foreground" />;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center gap-1 cursor-pointer text-primary hover:text-accent">
            <IconComponent className="h-4 w-4 " />
            <span className="text-sm font-medium">{element.term}</span>
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-popover text-popover-foreground p-2 rounded-md shadow-lg">
          <p>{element.tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
