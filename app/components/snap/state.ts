'use client';

import { atom } from 'jotai';

import type { SnapPhoto } from './types';

export const snapPhotoAtom = atom<SnapPhoto | null>(null);
