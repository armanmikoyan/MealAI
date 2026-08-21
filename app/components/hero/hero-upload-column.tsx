import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/app/ui/badge';
import { Card, CardFooter } from '@/app/ui/card';
import { cn } from '@/lib/utils';

import { HERO, HERO_ENTER_MOTION_REDUCE } from './constants';

export default function HeroUploadColumn() {
  return (
    <Link
      href={HERO.CTA_HREF}
      className={cn(
        'animate-in fade-in slide-in-from-left-10 zoom-in-95 fill-mode-both flex h-full min-h-72 w-full delay-200 duration-1000 ease-out sm:min-h-80',
        HERO_ENTER_MOTION_REDUCE,
      )}
      aria-label={HERO.CTA}
    >
      <Card className="h-full min-h-0 w-full flex-1 gap-0 py-0">
        <div className="relative min-h-0 flex-1">
          <Image
            src={HERO.UPLOAD_IMAGE_SRC}
            alt={HERO.UPLOAD_IMAGE_ALT}
            fill
            priority
            sizes={HERO.UPLOAD_IMAGE_SIZES}
            className="object-cover"
          />
        </div>
        <CardFooter className="justify-between gap-3">
          <Badge variant="secondary">{HERO.UPLOAD_SELECTED_BADGE}</Badge>
          <span className="text-muted-foreground text-xs">{HERO.UPLOAD_HINT}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
