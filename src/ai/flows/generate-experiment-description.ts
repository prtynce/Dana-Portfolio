'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating concise and trending descriptions
 * for 'Experiments/Lab' section content, leveraging AI to suggest cutting-edge concepts
 * in AI and Robotics based on provided keywords.
 *
 * - generateExperimentDescription - A function that triggers the description generation process.
 * - GenerateExperimentDescriptionInput - The input type for the generateExperimentDescription function.
 * - GenerateExperimentDescriptionOutput - The return type for the generateExperimentDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExperimentDescriptionInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords or a project title related to an AI or Robotics experiment/project.'
    ),
});
export type GenerateExperimentDescriptionInput = z.infer<
  typeof GenerateExperimentDescriptionInputSchema
>;

const GenerateExperimentDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A concise, trending description for an emerging tech concept in AI or Robotics.'
    ),
});
export type GenerateExperimentDescriptionOutput = z.infer<
  typeof GenerateExperimentDescriptionOutputSchema
>;

export async function generateExperimentDescription(
  input: GenerateExperimentDescriptionInput
): Promise<GenerateExperimentDescriptionOutput> {
  return generateExperimentDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExperimentDescriptionPrompt',
  input: {schema: GenerateExperimentDescriptionInputSchema},
  output: {schema: GenerateExperimentDescriptionOutputSchema},
  prompt: `You are an AI assistant specialized in generating trending and concise descriptions for emerging tech concepts in AI and Robotics.
Based on the following keywords, generate a single, short, and engaging description suitable for an 'Experiments/Lab' section on a personal portfolio website. Focus on making it sound cutting-edge and future-oriented.

Keywords: {{{keywords}}}`,
});

const generateExperimentDescriptionFlow = ai.defineFlow(
  {
    name: 'generateExperimentDescriptionFlow',
    inputSchema: GenerateExperimentDescriptionInputSchema,
    outputSchema: GenerateExperimentDescriptionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
