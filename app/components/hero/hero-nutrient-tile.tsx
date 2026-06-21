import { cn } from '@/lib/utils';
import type { HeroNutrientTileRowModel } from './constants';
export type HeroNutrientTileProps = HeroNutrientTileRowModel;

export function HeroNutrientTile({
  ICON,
  LABEL,
  VALUE,
  UNIT,
  ICON_CLASS,
  ICON_BG_CLASS,
}: HeroNutrientTileProps) {
  return (
    <div className="border-edge-strong bg-surface-overlay/25 hover:border-edge-strong hover:bg-surface-overlay/40 flex gap-2 rounded-lg border px-2 py-2 transition-colors sm:gap-2.5 sm:px-2.5 sm:py-2">
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-md sm:size-9',
          ICON_BG_CLASS,
        )}
      >
        <ICON className={cn('size-3.5 sm:size-4', ICON_CLASS)} strokeWidth={1.65} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-content-muted text-[8px] font-semibold tracking-widest uppercase sm:text-[9px]">
          {LABEL}
        </p>
        <p className="text-content font-mono text-sm font-semibold tabular-nums tracking-tight sm:text-base">
          {VALUE}
          <span className="text-content-subtle font-sans text-[10px] font-normal sm:text-xs">
            {' '}
            {UNIT}
          </span>
        </p>
      </div>
    </div>
  );
}
