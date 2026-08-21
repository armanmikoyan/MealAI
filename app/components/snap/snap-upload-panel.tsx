'use client';

import { useEffect, useRef, useState, type DragEvent, type MouseEvent } from 'react';
import { AlertCircle, Camera, ImageUp, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';

import { Alert, AlertDescription, AlertTitle } from '@/app/ui/alert';
import { Button } from '@/app/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/app/ui/empty';
import { cn } from '@/lib/utils';

import { DEVICE_TYPE } from '@/lib/device-detection/types';
import { useDeviceType } from '@/lib/device-detection/use-device-type';

import { ACCEPTED_IMAGE_ACCEPT, SNAP } from './constants';
import { SnapCameraDialog } from './snap-camera-dialog';
import { useSnapPhoto } from './hook';
import { blobImageLoader, canUseCameraStream, firstAcceptedImageFile } from './utils';

export function SnapUploadPanel() {
  const { photo, setPhoto } = useSnapPhoto();
  const deviceType = useDeviceType();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const dragCountRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      setPhoto(null);
    };
  }, [setPhoto]);

  function applyFile(file: File | null) {
    if (!file) {
      setError(SNAP.ERROR_TYPE);
      return;
    }

    setError(null);
    setPhoto(file);
  }

  function handleZoneClick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }

    fileInputRef.current?.click();
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragCountRef.current += 1;
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragCountRef.current -= 1;
    if (dragCountRef.current <= 0) {
      dragCountRef.current = 0;
      setIsDragging(false);
    }
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragCountRef.current = 0;
    setIsDragging(false);
    applyFile(firstAcceptedImageFile(event.dataTransfer.files));
  }

  const actions = (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <ImageUp data-icon="inline-start" />
        {photo ? SNAP.REPLACE : SNAP.GALLERY}
      </Button>
      <Button
        type="button"
        onClick={() => {
          if (!canUseCameraStream()) {
            if (deviceType === DEVICE_TYPE.PHONE) {
              cameraInputRef.current?.click();
              return;
            }

            setError(SNAP.ERROR_CAMERA_SECURE);
            return;
          }

          setIsCameraOpen(true);
        }}
      >
        <Camera data-icon="inline-start" />
        {SNAP.CAMERA}
      </Button>
      {photo ? (
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setError(null);
            setPhoto(null);
          }}
        >
          <Trash2 data-icon="inline-start" />
          {SNAP.REMOVE}
        </Button>
      ) : null}
    </div>
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_IMAGE_ACCEPT}
        className="sr-only"
        aria-label={SNAP.FILE_INPUT_LABEL}
        onChange={(event) => {
          applyFile(firstAcceptedImageFile(event.target.files));
          event.target.value = '';
        }}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept={ACCEPTED_IMAGE_ACCEPT}
        capture="environment"
        className="sr-only"
        aria-label={SNAP.CAMERA}
        onChange={(event) => {
          applyFile(firstAcceptedImageFile(event.target.files));
          event.target.value = '';
        }}
      />
      {photo ? (
        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <div className="bg-muted relative min-h-72 flex-1 overflow-hidden rounded-xl border sm:min-h-112 lg:min-h-128">
            <Image
              src={photo.PREVIEW_URL}
              alt={SNAP.PREVIEW_ALT}
              fill
              unoptimized
              loader={blobImageLoader}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {actions}
        </div>
      ) : (
        <Empty
          className={cn(
            'min-h-72 flex-1 sm:min-h-112 lg:min-h-128',
            deviceType === DEVICE_TYPE.PHONE
              ? 'border'
              : 'cursor-pointer border-4 border-dashed',
            deviceType === DEVICE_TYPE.DESKTOP && isDragging && 'border-cta bg-muted/40',
          )}
          onClick={handleZoneClick}
          {...(deviceType === DEVICE_TYPE.PHONE
            ? {}
            : {
                onDragEnter: handleDragEnter,
                onDragLeave: handleDragLeave,
                onDragOver: handleDragOver,
                onDrop: handleDrop,
              })}
        >
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Upload aria-hidden />
            </EmptyMedia>
            <EmptyTitle>
              {deviceType === DEVICE_TYPE.PHONE ? SNAP.DROP_TITLE_PHONE : SNAP.DROP_TITLE}
            </EmptyTitle>
            <EmptyDescription>{SNAP.DROP_BODY}</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            {deviceType === DEVICE_TYPE.DESKTOP ? <p>{SNAP.DROP_HINT}</p> : null}
            {actions}
          </EmptyContent>
        </Empty>
      )}
      {error ? (
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>{SNAP.ERROR_TITLE}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}
      <SnapCameraDialog
        open={isCameraOpen}
        allowBackCamera={deviceType === DEVICE_TYPE.PHONE}
        onOpenChange={setIsCameraOpen}
        onCapture={(file) => {
          applyFile(file);
        }}
      />
    </div>
  );
}
