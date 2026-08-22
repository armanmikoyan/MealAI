import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { analyzeMealImage } from '@/lib/ai/analyze-meal-image';
import { MEAL_IMAGE_ANALYSIS_TEST_FIXTURE } from '@/lib/ai/constants';

describe('analyzeMealImage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns fixture data when AI_TEST_MODE is enabled', async () => {
    const previous = process.env.AI_TEST_MODE;
    process.env.AI_TEST_MODE = 'true';

    try {
      const resultPromise = analyzeMealImage({
        imageBase64: 'dGVzdA==',
        mimeType: 'image/jpeg',
      });

      await vi.runAllTimersAsync();

      await expect(resultPromise).resolves.toEqual(MEAL_IMAGE_ANALYSIS_TEST_FIXTURE);
    } finally {
      if (previous === undefined) {
        delete process.env.AI_TEST_MODE;
      } else {
        process.env.AI_TEST_MODE = previous;
      }
    }
  });
});
