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
    <div className="pointer-events-none relative hidden min-h-0 w-full lg:block" aria-hidden>
      {glyphs.map((glyph, i) => (
        <HeroUploadScatterIcon key={i} glyph={glyph} index={i + indexOffset} />
      ))}
    </div>
  );
}

export default function HeroUploadColumn() {
  return (
    <div className="relative flex min-h-0 w-full min-w-0 flex-col items-stretch lg:h-full">
      <div className="relative flex min-h-0 w-full flex-1 flex-col items-stretch justify-center lg:grid lg:min-h-0 lg:grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-y-6 lg:py-6">
        <HeroUploadDecorRow glyphs={HERO_UPLOAD_DECOR_TOP} indexOffset={0} />
        <div
          className={cn(
            'hero-enter animate-in fade-in slide-in-from-left-10 zoom-in-95 fill-mode-both relative z-10 flex w-full min-w-0 delay-200 duration-1000 ease-out lg:min-h-0 lg:row-start-2',
            HERO_ENTER_MOTION_REDUCE,
          )}
        >
          <figure className="relative w-full min-h-0 min-w-0 shrink-0">
            <div
              className="border-edge-strong relative flex min-h-72 w-full shrink-0 flex-col overflow-hidden rounded-xl border-4 border-dashed bg-surface/20 sm:min-h-80 lg:min-h-88"
              role="img"
              aria-label={HERO.UPLOAD_ARIA_LABEL}
            >
              <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:gap-5 sm:px-10 sm:py-10 lg:px-14">
                <Upload
                  className="text-content-muted/90 size-9 shrink-0 sm:size-10"
                  strokeWidth={1.35}
                  aria-hidden
                />
                <div className="flex w-full max-w-md flex-col items-center gap-1.5 px-1 sm:max-w-lg sm:gap-2">
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
        </div>
        <HeroUploadDecorRow glyphs={HERO_UPLOAD_DECOR_BOTTOM} indexOffset={6} />
      </div>
    </div>
  );
}
