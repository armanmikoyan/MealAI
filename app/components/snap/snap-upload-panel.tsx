import { Upload } from 'lucide-react';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/app/ui/empty';

import { SNAP } from './constants';

export function SnapUploadPanel() {
  return (
    <Empty className="min-h-72 flex-1 border-4 border-dashed sm:min-h-112 lg:min-h-128">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Upload aria-hidden />
        </EmptyMedia>
        <EmptyTitle>{SNAP.DROP_TITLE}</EmptyTitle>
        <EmptyDescription>{SNAP.DROP_BODY}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>{SNAP.DROP_HINT}</EmptyContent>
    </Empty>
  );
}
