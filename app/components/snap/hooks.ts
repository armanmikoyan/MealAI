'use client';

import { useCallback } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { SNAP, SNAP_ANALYSIS_STATUS } from './constants';
import { snapAnalysisAtom, snapPhotoAtom } from './state';
import type {
  SnapAnalyzeErrorResponse,
  SnapAnalyzeSuccessResponse,
  UseSnapAnalyzeResult,
  UseSnapPhotoResult,
} from './types';

export function useSnapPhoto(): UseSnapPhotoResult {
  const photo = useAtomValue(snapPhotoAtom);
  const setSnapPhoto = useSetAtom(snapPhotoAtom);
  const setAnalysis = useSetAtom(snapAnalysisAtom);

  const setPhoto = useCallback(
    (file: File | null) => {
      setAnalysis({ STATUS: SNAP_ANALYSIS_STATUS.IDLE });
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
    [setAnalysis, setSnapPhoto],
  );

  return { photo, setPhoto };
}

export function useSnapAnalyze(): UseSnapAnalyzeResult {
  const photo = useAtomValue(snapPhotoAtom);
  const [analysisState, setAnalysisState] = useAtom(snapAnalysisAtom);

  const resetAnalysis = useCallback(() => {
    setAnalysisState({ STATUS: SNAP_ANALYSIS_STATUS.IDLE });
  }, [setAnalysisState]);

  const analyzePhoto = useCallback(async () => {
    if (!photo) {
      return;
    }

    setAnalysisState({ STATUS: SNAP_ANALYSIS_STATUS.LOADING });

    try {
      const formData = new FormData();
      formData.append('image', photo.FILE);

      const response = await fetch('/api/snap/analyze', {
        method: 'POST',
        body: formData,
      });

      const payload = (await response.json()) as SnapAnalyzeSuccessResponse & SnapAnalyzeErrorResponse;

      if (!response.ok || !payload.analysis) {
        setAnalysisState({
          STATUS: SNAP_ANALYSIS_STATUS.ERROR,
          MESSAGE: payload.error ?? SNAP.ANALYSIS_ERROR,
        });
        return;
      }

      setAnalysisState({
        STATUS: SNAP_ANALYSIS_STATUS.SUCCESS,
        ANALYSIS: payload.analysis,
      });
    } catch {
      setAnalysisState({
        STATUS: SNAP_ANALYSIS_STATUS.ERROR,
        MESSAGE: SNAP.ANALYSIS_ERROR,
      });
    }
  }, [photo, setAnalysisState]);

  return { analysisState, analyzePhoto, resetAnalysis };
}
