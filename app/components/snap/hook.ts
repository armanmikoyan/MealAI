'use client';

import { useCallback } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { snapPhotoAtom } from './state';
import type { UseSnapPhotoResult } from './types';

export function useSnapPhoto(): UseSnapPhotoResult {
  const photo = useAtomValue(snapPhotoAtom);
  const setSnapPhoto = useSetAtom(snapPhotoAtom);

  const setPhoto = useCallback(
    (file: File | null) => {
      setSnapPhoto((previous) => {
        if (previous) {
          URL.revokeObjectURL(previous.PREVIEW_URL);
        }

        if (!file) {
          return null;
        }

        return {
          FILE: file,
          PREVIEW_URL: URL.createObjectURL(file),
        };
      });
    },
    [setSnapPhoto],
  );

  return { photo, setPhoto };
}
