'use server';
/**
 * @fileOverview AI agent for generating marketing cheat sheets.
 *
 * - generateMarketingCheatsheet - A function that generates a marketing cheat sheet.
 * - GenerateMarketingCheatsheetInput - The input type for the generateMarketingCheatsheet function.
 * - GenerateMarketingCheatsheetOutput - The return type for the generateMarketingCheatsheet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCheatsheetInputSchema = z.object({
  topic: z.string().describe('The topic of the marketing cheat sheet.'),
});
export type GenerateMarketingCheatsheetInput = z.infer<typeof GenerateMarketingCheatsheetInputSchema>;

const GenerateMarketingCheatsheetOutputSchema = z.object({
  title: z.string().describe('The title of the marketing cheat sheet.'),
  content: z.string().describe('The content of the marketing cheat sheet.'),
});
export type GenerateMarketingCheatsheetOutput = z.infer<typeof GenerateMarketingCheatsheetOutputSchema>;

export async function generateMarketingCheatsheet(
  input: GenerateMarketingCheatsheetInput
): Promise<GenerateMarketingCheatsheetOutput> {
  return generateMarketingCheatsheetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCheatsheetPrompt',
  input: {schema: GenerateMarketingCheatsheetInputSchema},
  output: {schema: GenerateMarketingCheatsheetOutputSchema},
  prompt: `You are an AI assistant specialized in generating marketing cheat sheets.

  Based on the topic provided, create a concise and informative cheat sheet.

  Topic: {{{topic}}}
  `,
});

const generateMarketingCheatsheetFlow = ai.defineFlow(
  {
    name: 'generateMarketingCheatsheetFlow',
    inputSchema: GenerateMarketingCheatsheetInputSchema,
    outputSchema: GenerateMarketingCheatsheetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
