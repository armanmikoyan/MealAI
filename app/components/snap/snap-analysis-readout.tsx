'use client';

import { CheckCircle2, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { HERO } from '@/app/components/hero/constants';
import { HeroNutrientTile } from '@/app/components/hero/hero-nutrient-tile';
import { Badge } from '@/app/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/ui/card';
import { cn } from '@/lib/utils';
import { SNAP, SNAP_ANALYSIS_STATUS, SNAP_PHOTO_CARD_SHELL } from './constants';
import type { SnapAnalysisReadoutProps } from './types';
import {
  blobImageLoader,
  snapCaloriesTileForAnalysis,
  snapConfidenceLabel,
  snapMacroTilesForAnalysis,
} from './utils';

export function SnapAnalysisReadout({ analysisState, photo }: SnapAnalysisReadoutProps) {
  if (analysisState.STATUS === SNAP_ANALYSIS_STATUS.LOADING) {
    return (
      <Card
        className={cn('@container/result flex w-full flex-col', SNAP_PHOTO_CARD_SHELL)}
        aria-live="polite"
        aria-busy="true"
      >
        <CardContent className="text-muted-foreground flex flex-1 items-center justify-center gap-2 text-sm">
          <LoaderCircle className="size-5 animate-spin" aria-hidden />
          {SNAP.ANALYZING}
        </CardContent>
      </Card>
    );
  }

  if (analysisState.STATUS === SNAP_ANALYSIS_STATUS.ERROR) {
    return (
      <Card
        className={cn('@container/result flex w-full flex-col', SNAP_PHOTO_CARD_SHELL)}
        aria-live="polite"
      >
        <CardContent className="flex flex-1 items-center justify-center p-6 text-center text-sm text-destructive">
          {analysisState.MESSAGE}
        </CardContent>
      </Card>
    );
  }

  if (analysisState.STATUS === SNAP_ANALYSIS_STATUS.IDLE) {
    return null;
  }

  const { ANALYSIS } = analysisState;
  const caloriesTile = snapCaloriesTileForAnalysis(ANALYSIS);
  const macroTiles = snapMacroTilesForAnalysis(ANALYSIS);

  return (
    <Card
      className="@container/result flex w-full flex-col"
      role="region"
      aria-labelledby="snap-result-title"
      aria-live="polite"
    >
      <CardContent className="flex flex-col gap-3 sm:gap-4">
        <Card size="sm">
          <CardHeader>
            <div className="flex min-w-0 items-start gap-3">
              <span className="relative size-14 shrink-0 overflow-hidden rounded-lg sm:size-16">
                <Image
                  src={photo.PREVIEW_URL}
                  alt={SNAP.PREVIEW_ALT}
                  fill
                  unoptimized
                  loader={blobImageLoader}
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <Badge variant="ghost">{SNAP.ANALYSIS_DETECTED}</Badge>
                <CardTitle id="snap-result-title">{ANALYSIS.mealName}</CardTitle>
                <CardDescription className="flex items-center gap-1.5">
                  <CheckCircle2 className="text-positive" aria-hidden />
                  {snapConfidenceLabel(ANALYSIS.confidence)}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="flex flex-col gap-2">
          <div>
            <p className="font-heading text-sm font-medium tracking-tight">
              {HERO.NUTRIENTS_SECTION_LABEL}
            </p>
            <p className="text-muted-foreground mt-0.5 text-xs/relaxed">{SNAP.ANALYSIS_SCOPE}</p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-1.5 *:min-w-0 md:gap-2 @xl/result:grid-cols-4">
            <div className="col-span-2 @xl/result:col-span-4">
              <HeroNutrientTile {...caloriesTile} />
            </div>
            {macroTiles.map((row) => (
              <HeroNutrientTile key={row.LABEL} {...row} />
            ))}
          </div>

          {ANALYSIS.notes ? (
            <p className="text-muted-foreground text-sm/relaxed">{ANALYSIS.notes}</p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
