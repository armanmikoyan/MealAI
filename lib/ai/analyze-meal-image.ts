import { MEAL_IMAGE_ANALYSIS_TEST_FIXTURE } from '@/lib/ai/constants';
import { createImageAnalysisProvider } from '@/lib/ai/create-provider';
import type { MealImageAnalysis, MealImageAnalysisInput } from '@/lib/ai/types';
import {
  readImageAnalysisProviderConfig,
  readImageAnalysisTestDelayMs,
  readImageAnalysisTestMode,
  sleep,
} from '@/lib/ai/utils';

export async function analyzeMealImage(input: MealImageAnalysisInput): Promise<MealImageAnalysis> {
  if (readImageAnalysisTestMode()) {
    await sleep(readImageAnalysisTestDelayMs());
    return MEAL_IMAGE_ANALYSIS_TEST_FIXTURE;
  }

  const config = readImageAnalysisProviderConfig();
  const provider = createImageAnalysisProvider(config);
  return provider.analyzeMeal(input);
}
