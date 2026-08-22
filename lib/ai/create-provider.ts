import { createGeminiImageAnalysisProvider } from '@/lib/ai/providers/gemini';
import { createOpenAiImageAnalysisProvider } from '@/lib/ai/providers/openai';
import { AiConfigError } from '@/lib/ai/errors';
import type { ImageAnalysisProvider, ImageAnalysisProviderConfig } from '@/lib/ai/types';

export function createImageAnalysisProvider(
  config: ImageAnalysisProviderConfig,
): ImageAnalysisProvider {
  switch (config.provider) {
    case 'gemini':
      return createGeminiImageAnalysisProvider(config);
    case 'openai':
      return createOpenAiImageAnalysisProvider(config);
    default: {
      const unknownProvider: never = config.provider;
      throw new AiConfigError(`Unsupported image analysis provider: ${unknownProvider}`);
    }
  }
}
