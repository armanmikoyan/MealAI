/** Ambient blobs + vignette behind the hero (motion in `hero.css`). */
import { cn } from '@/lib/utils';
import { HERO_AURORA_BLOB_CLASSNAMES, HERO_AURORA_MOTION_REDUCE } from './constants';

export default function HeroSectionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {HERO_AURORA_BLOB_CLASSNAMES.map(blobClass => (
        <div key={blobClass} className={cn(blobClass, HERO_AURORA_MOTION_REDUCE)} aria-hidden />
      ))}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,color-mix(in_oklab,var(--color-content)_12%,transparent),transparent_55%)]"
        aria-hidden
      />
    </div>
  );
}
