// 'use server'
'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting a pro tip for a given cheat sheet.
 *
 * - suggestProTip - A function that suggests a pro tip for a cheat sheet.
 * - SuggestProTipInput - The input type for the suggestProTip function.
 * - SuggestProTipOutput - The return type for the suggestProTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProTipInputSchema = z.object({
  cheatSheetContent: z
    .string()
    .describe('The content of the cheat sheet for which a pro tip is to be suggested.'),
});

type SuggestProTipInput = z.infer<typeof SuggestProTipInputSchema>;

const SuggestProTipOutputSchema = z.object({
  proTip: z.string().describe('A pro tip relevant to the provided cheat sheet content.'),
});

type SuggestProTipOutput = z.infer<typeof SuggestProTipOutputSchema>;

export async function suggestProTip(input: SuggestProTipInput): Promise<SuggestProTipOutput> {
  return suggestProTipFlow(input);
}

const suggestProTipPrompt = ai.definePrompt({
  name: 'suggestProTipPrompt',
  input: {schema: SuggestProTipInputSchema},
  output: {schema: SuggestProTipOutputSchema},
  prompt: `Given the following content of a marketing cheat sheet, suggest one actionable and helpful pro tip that a user can apply to improve their marketing efforts. The pro tip should be concise and directly relevant to the content of the cheat sheet.

Cheat Sheet Content: {{{cheatSheetContent}}}

Pro Tip:`,
});

const suggestProTipFlow = ai.defineFlow(
  {
    name: 'suggestProTipFlow',
    inputSchema: SuggestProTipInputSchema,
    outputSchema: SuggestProTipOutputSchema,
  },
  async input => {
    const {output} = await suggestProTipPrompt(input);
    return output!;
  }
);
