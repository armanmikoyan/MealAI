import { describe, expect, it } from 'vitest';

import { firstAcceptedImageFile, fileFromJpegDataUrl, isAcceptedImageFile } from './utils';

describe('isAcceptedImageFile', () => {
  it('accepts jpeg, png, and webp', () => {
    expect(isAcceptedImageFile(new File([], 'meal.jpg', { type: 'image/jpeg' }))).toBe(true);
    expect(isAcceptedImageFile(new File([], 'meal.png', { type: 'image/png' }))).toBe(true);
    expect(isAcceptedImageFile(new File([], 'meal.webp', { type: 'image/webp' }))).toBe(true);
  });

  it('rejects other types', () => {
    expect(isAcceptedImageFile(new File([], 'meal.gif', { type: 'image/gif' }))).toBe(false);
    expect(isAcceptedImageFile(new File([], 'meal.pdf', { type: 'application/pdf' }))).toBe(false);
  });
});

describe('firstAcceptedImageFile', () => {
  it('returns the first accepted file', () => {
    const file = new File([], 'meal.jpg', { type: 'image/jpeg' });
    const list = {
      length: 1,
      item: (index: number) => (index === 0 ? file : null),
    } as FileList;

    expect(firstAcceptedImageFile(list)).toBe(file);
  });

  it('returns null for empty or rejected lists', () => {
    expect(firstAcceptedImageFile(null)).toBeNull();

    const file = new File([], 'meal.gif', { type: 'image/gif' });
    const list = {
      length: 1,
      item: (index: number) => (index === 0 ? file : null),
    } as FileList;

    expect(firstAcceptedImageFile(list)).toBeNull();
  });
});

describe('fileFromJpegDataUrl', () => {
  it('builds a jpeg file from a data url', async () => {
    const dataUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wAAAA==';
    const file = await fileFromJpegDataUrl(dataUrl, 'plate.jpg');

    expect(file.name).toBe('plate.jpg');
    expect(file.type).toBe('image/jpeg');
    expect(file.size).toBeGreaterThan(0);
  });
});
