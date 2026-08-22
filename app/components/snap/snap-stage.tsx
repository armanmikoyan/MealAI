'use client';

import { HERO_ENTER_GRID_SHELL } from '@/app/components/hero/constants';
import { HeroBetweenCardsArrow } from '@/app/components/hero/hero-between-cards-arrow';
import { SnapMealPhotoCard } from './snap-meal-photo-card';
import { SnapAnalysisReadout } from './snap-analysis-readout';
import { SnapAnalyzeCta } from './snap-analyze-cta';
import type { SnapAnalysisStageProps, SnapPhotoStageProps, SnapStageGridProps } from './types';

function SnapStageGrid({
  photo,
  right,
  photoActions,
  photoActionsDisabled,
}: SnapStageGridProps) {
  return (
    <div className={HERO_ENTER_GRID_SHELL}>
      <div className="relative z-0 flex w-full min-w-0 lg:self-start">
        <SnapMealPhotoCard
          key={`${photo.PREVIEW_URL}-${String(photoActionsDisabled ?? false)}`}
          previewUrl={photo.PREVIEW_URL}
          photoActions={photoActions}
          photoActionsDisabled={photoActionsDisabled}
        />
      </div>
      <HeroBetweenCardsArrow />
      <div className="relative z-0 flex w-full min-w-0">{right}</div>
    </div>
  );
}

export function SnapPhotoStage({ photo, onAnalyze, photoActions }: SnapPhotoStageProps) {
  return (
    <SnapStageGrid
      photo={photo}
      photoActions={photoActions}
      right={<SnapAnalyzeCta onAnalyze={onAnalyze} />}
    />
  );
}

export function SnapAnalysisStage({
  analysisState,
  photo,
  photoActions,
  photoActionsDisabled,
}: SnapAnalysisStageProps) {
  return (
    <SnapStageGrid
      photo={photo}
      photoActions={photoActions}
      photoActionsDisabled={photoActionsDisabled}
      right={<SnapAnalysisReadout analysisState={analysisState} photo={photo} />}
    />
  );
}
