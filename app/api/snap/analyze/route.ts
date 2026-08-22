import { analyzeMealImage } from '@/lib/ai/analyze-meal-image';
import { AiConfigError, AiParseError, AiProviderError } from '@/lib/ai/errors';

const ACCEPTED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

type AnalyzeSuccessResponse = Readonly<{
  analysis: Awaited<ReturnType<typeof analyzeMealImage>>;
}>;

type AnalyzeErrorResponse = Readonly<{
  error: string;
}>;

function errorResponse(message: string, status: number) {
  return Response.json({ error: message } satisfies AnalyzeErrorResponse, { status });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');

    if (!(image instanceof File)) {
      return errorResponse('Upload a PNG, JPG, or WebP meal photo.', 400);
    }

    if (!ACCEPTED_IMAGE_TYPES.has(image.type)) {
      return errorResponse('Use a PNG, JPG, or WebP image.', 400);
    }

    const imageBase64 = Buffer.from(await image.arrayBuffer()).toString('base64');
    const analysis = await analyzeMealImage({
      imageBase64,
      mimeType: image.type,
    });

    return Response.json({ analysis } satisfies AnalyzeSuccessResponse);
  } catch (error) {
    if (error instanceof AiConfigError) {
      return errorResponse('Meal analysis is not configured on this server.', 503);
    }

    if (error instanceof AiParseError || error instanceof AiProviderError) {
      return errorResponse('Could not analyze that photo. Try a clearer shot.', 502);
    }

    return errorResponse('Something went wrong while analyzing the photo.', 500);
  }
}
