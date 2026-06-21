import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  type HeroUploadDecorGlyph,
  HERO,
  HERO_ENTER_MOTION_REDUCE,
  HERO_UPLOAD_DECOR_BOTTOM,
  HERO_UPLOAD_DECOR_TOP,
} from './constants';
import { HeroUploadScatterIcon } from './hero-upload-scatter-icon';

type HeroUploadDecorRowProps = Readonly<{
  glyphs: readonly HeroUploadDecorGlyph[];
  indexOffset: number;
}>;

function HeroUploadDecorRow({ glyphs, indexOffset }: HeroUploadDecorRowProps) {
  return (
    <div
      className="pointer-events-none relative min-h-12 w-full min-w-0 shrink-0 overflow-visible sm:min-h-14"
      aria-hidden
    >
      {glyphs.map((glyph, i) => (
        <HeroUploadScatterIcon key={i} glyph={glyph} index={i + indexOffset} />
      ))}
    </div>
  );
}

export default function HeroUploadColumn() {
  return (
    <div className="grid h-full w-full min-w-0 grid-cols-1 items-stretch gap-y-3 lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-y-6 lg:py-6">
      <HeroUploadDecorRow glyphs={HERO_UPLOAD_DECOR_TOP} indexOffset={0} />
      <figure className="relative block min-h-0 w-full min-w-0 max-w-full self-stretch lg:row-start-2">
        <div
          className={cn(
            'hero-enter border-edge-strong animate-in fade-in slide-in-from-left-10 zoom-in-95 fill-mode-both relative box-border flex h-full min-h-72 w-full min-w-full max-w-full flex-col overflow-hidden rounded-xl border-4 border-dashed bg-surface/20 delay-200 duration-1000 ease-out sm:min-h-80',
            HERO_ENTER_MOTION_REDUCE,
          )}
          role="img"
          aria-label={HERO.UPLOAD_ARIA_LABEL}
        >
          <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-stretch justify-center gap-4 px-6 py-8 text-center sm:gap-5 sm:px-10 sm:py-10 lg:px-14">
            <Upload
              className="text-content-muted/90 size-9 shrink-0 self-center sm:size-10"
              strokeWidth={1.35}
              aria-hidden
            />
            <div className="flex w-full min-w-0 flex-col items-center gap-1.5 px-1 sm:gap-2">
              <span className="text-content text-[11px] font-semibold tracking-widest uppercase sm:text-xs">
                {HERO.UPLOAD_DROP_TITLE}
              </span>
              <span className="text-content-muted text-xs leading-relaxed sm:text-sm">
                {HERO.UPLOAD_DROP_BODY}
              </span>
            </div>
          </div>
          <div className="border-edge/60 bg-canvas/45 text-content-subtle pointer-events-none z-20 shrink-0 border-t px-4 py-2 text-center text-[10px] font-medium tracking-wide sm:px-5 sm:py-2 sm:text-[11px]">
            {HERO.UPLOAD_HINT}
          </div>
        </div>
      </figure>
      <HeroUploadDecorRow glyphs={HERO_UPLOAD_DECOR_BOTTOM} indexOffset={6} />
    </div>
  );
}
