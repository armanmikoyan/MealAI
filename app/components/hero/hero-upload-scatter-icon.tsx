import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import type { HeroUploadDecorGlyph } from './constants';

export type HeroUploadScatterIconProps = Readonly<{
  glyph: HeroUploadDecorGlyph;
  index: number;
}>;

export function HeroUploadScatterIcon({ glyph, index }: HeroUploadScatterIconProps) {
  const { ICON, ICON_CLASS, TOP, LEFT, ROTATE } = glyph;
  return (
    <span
      className={cn(
        'group pointer-events-auto absolute flex size-11 cursor-default items-center justify-center',
        'animate-[upload-scatter-float_5.2s_ease-in-out_infinite] fill-mode-[both]',
        'will-change-transform',
        'hover:paused',
        'motion-reduce:animate-none motion-reduce:will-change-auto',
      )}
      style={
        {
          top: TOP,
          left: LEFT,
          '--decor-rotate': ROTATE,
          animationDelay: `${index * 0.32}s`,
        } as CSSProperties & { '--decor-rotate': string }
      }
      aria-hidden
    >
      <ICON
        className={cn(
          'size-7 lg:size-8',
          'transform-[rotate(var(--decor-rotate,0deg))]',
          'transition-[transform_0.45s_cubic-bezier(0.34,1.56,0.64,1),filter_0.35s_ease,opacity_0.25s_ease]',
          'drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]',
          'group-hover:transform-[rotate(var(--decor-rotate,0deg))_scale(1.16)]',
          'group-hover:drop-shadow-[0_0_14px_color-mix(in_oklab,var(--color-content)_26%,transparent)]',
          'motion-reduce:transition-[transform_0.12s_ease,filter_0.12s_ease,opacity_0.12s_ease]',
          'motion-reduce:group-hover:transform-[rotate(var(--decor-rotate,0deg))]',
          'motion-reduce:group-hover:drop-shadow-[0_0_10px_color-mix(in_oklab,var(--color-content)_22%,transparent)]',
          ICON_CLASS,
        )}
        strokeWidth={1.65}
        aria-hidden
      />
    </span>
  );
}
