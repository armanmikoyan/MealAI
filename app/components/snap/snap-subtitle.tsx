'use client';

import { DEVICE_TYPE } from '@/lib/device-detection/types';
import { useDeviceType } from '@/lib/device-detection/use-device-type';

import { SNAP } from './constants';

export function SnapSubtitle() {
  const deviceType = useDeviceType();

  return (
    <p className="text-content-muted mt-3 max-w-2xl text-base/relaxed sm:text-lg">
      {deviceType === DEVICE_TYPE.PHONE ? SNAP.SUBTITLE_PHONE : SNAP.SUBTITLE}
    </p>
  );
}
