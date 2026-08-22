'use client';

import { useAtomValue } from 'jotai';
import { useDeviceType } from '@/lib/device-detection/use-device-type';
import { cn } from '@/lib/utils';
import { SNAP_HEADING_PHASE } from './constants';
import { snapAnalysisAtom, snapPhotoAtom } from './state';
import type { SnapHeaderProps } from './types';
import { snapHeadingCopy } from './utils';

export function SnapHeader({ className }: SnapHeaderProps) {
  const photo = useAtomValue(snapPhotoAtom);
  const analysisState = useAtomValue(snapAnalysisAtom);
  const deviceType = useDeviceType();
  const heading = snapHeadingCopy(photo, analysisState, deviceType);

  return (
    <header className={className}>
      <h1
        key={`${heading.PHASE}-title`}
        className="text-content font-heading animate-in fade-in fill-mode-both text-3xl font-semibold tracking-tight duration-500 ease-out sm:text-4xl"
      >
        {heading.TITLE}
      </h1>
      <p
        key={`${heading.PHASE}-subtitle`}
        className={cn(
          'text-content-muted mt-3 max-w-2xl animate-in fade-in fill-mode-both text-base/relaxed duration-500 ease-out sm:text-lg',
          heading.PHASE === SNAP_HEADING_PHASE.LOADING && 'motion-safe:animate-pulse',
        )}
      >
        {heading.SUBTITLE}
      </p>
    </header>
  );
}
