import type { AcceptedImageType } from './types';

export const SNAP = {
  TITLE: 'Snap a plate',
  SUBTITLE: 'Drop a meal photo. One clear shot of the plate is enough.',
  SUBTITLE_PHONE: 'Add a meal photo. One clear shot of the plate is enough.',
  DROP_TITLE: 'Drop a meal photo',
  DROP_TITLE_PHONE: 'Add a meal photo',
  DROP_BODY: 'PNG, JPG, or WebP. One clear shot of the plate is enough.',
  DROP_HINT: 'Click or drag to upload',
  FILE_INPUT_LABEL: 'Choose a meal photo',
  GALLERY: 'Choose photo',
  CAMERA: 'Camera',
  CAMERA_TITLE: 'Take a photo',
  CAMERA_BODY: 'Use the back camera for the plate, or switch to the front camera.',
  CAMERA_BODY_DESKTOP: 'This device only has a front camera.',
  CAMERA_BACK: 'Back',
  CAMERA_FRONT: 'Front',
  CAMERA_CAPTURE: 'Take photo',
  CAMERA_VIDEO_LABEL: 'Live camera preview',
  PREVIEW_ALT: 'Selected meal photo',
  REPLACE: 'Replace',
  REMOVE: 'Remove',
  ERROR_TITLE: 'Could not add that photo',
  ERROR_TYPE: 'Use a PNG, JPG, or WebP image.',
  ERROR_CAMERA: 'Could not open the camera. Allow access, or choose a photo instead.',
  ERROR_CAMERA_SECURE:
    'Live camera needs HTTPS. On this site, tap Choose photo to use your camera instead.',
} as const;

export const SNAP_CAMERA_BACK = 'environment' as const;
export const SNAP_CAMERA_FRONT = 'user' as const;
export const SNAP_CAMERA_CAPTURE_FILE = 'plate.jpg' as const;

export const ACCEPTED_IMAGE_TYPES: readonly AcceptedImageType[] = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

export const ACCEPTED_IMAGE_ACCEPT = ACCEPTED_IMAGE_TYPES.join(',');
