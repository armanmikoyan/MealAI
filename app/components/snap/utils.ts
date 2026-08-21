import type { ImageLoaderProps } from 'next/image';

import { ACCEPTED_IMAGE_TYPES } from './constants';

export function isAcceptedImageFile(file: File): boolean {
  return ACCEPTED_IMAGE_TYPES.some((type) => type === file.type);
}

export function firstAcceptedImageFile(files: FileList | null): File | null {
  if (!files) {
    return null;
  }

  const file = files.item(0);
  if (!file || !isAcceptedImageFile(file)) {
    return null;
  }

  return file;
}

export function blobImageLoader({ src }: ImageLoaderProps): string {
  return src;
}

export function canUseCameraStream(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.isSecureContext && Boolean(navigator.mediaDevices?.getUserMedia);
}

export async function fileFromJpegDataUrl(dataUrl: string, fileName: string): Promise<File> {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  return new File([blob], fileName, { type: 'image/jpeg' });
}
