export type AcceptedImageType = 'image/jpeg' | 'image/png' | 'image/webp';

export type SnapPhoto = Readonly<{
  FILE: File;
  PREVIEW_URL: string;
}>;

export type SnapCameraFacing = 'user' | 'environment';

export type SnapCameraDialogProps = Readonly<{
  allowBackCamera: boolean;
  onCapture: (file: File) => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}>;

export type UseSnapPhotoResult = Readonly<{
  photo: SnapPhoto | null;
  setPhoto: (file: File | null) => void;
}>;
