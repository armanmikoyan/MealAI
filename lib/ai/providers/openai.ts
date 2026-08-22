import OpenAI from 'openai';

import { MEAL_IMAGE_ANALYSIS_PROMPT } from '@/lib/ai/constants';
import { AiProviderError } from '@/lib/ai/errors';
import { parseMealImageAnalysis } from '@/lib/ai/parse-analysis';
import type {
  ImageAnalysisProvider,
  ImageAnalysisProviderConfig,
  MealImageAnalysisInput,
} from '@/lib/ai/types';

function providerErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'OpenAI request failed.';
}

export function createOpenAiImageAnalysisProvider(
  config: ImageAnalysisProviderConfig,
): ImageAnalysisProvider {
  const client = new OpenAI({ apiKey: config.apiKey });

  return {
    id: 'openai',
    async analyzeMeal(input: MealImageAnalysisInput) {
      try {
        const response = await client.chat.completions.create({
          model: config.model,
          temperature: 0.2,
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: MEAL_IMAGE_ANALYSIS_PROMPT },
                {
                  type: 'image_url',
                  image_url: {
                    url: `data:${input.mimeType};base64,${input.imageBase64}`,
                  },
                },
              ],
            },
          ],
        });

        const text = response.choices[0]?.message?.content?.trim();

        if (!text) {
          throw new AiProviderError('openai', 'OpenAI returned an empty response.');
        }

        return parseMealImageAnalysis(text);
      } catch (error) {
        if (error instanceof AiProviderError) {
          throw error;
        }

        throw new AiProviderError('openai', providerErrorMessage(error));
      }
    },
  };
}
