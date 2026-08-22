export type ImageAnalysisProviderId = 'gemini' | 'openai';

export type MealAnalysisConfidence = 'low' | 'medium' | 'high';

export type MealImageAnalysisInput = Readonly<{
  imageBase64: string;
  mimeType: string;
}>;

export type MealImageAnalysis = Readonly<{
  mealName: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  confidence: MealAnalysisConfidence;
  notes: string | null;
}>;

export type ImageAnalysisProviderConfig = Readonly<{
  provider: ImageAnalysisProviderId;
  apiKey: string;
  model: string;
}>;

export type ImageAnalysisProvider = Readonly<{
  id: ImageAnalysisProviderId;
  analyzeMeal: (input: MealImageAnalysisInput) => Promise<MealImageAnalysis>;
}>;
