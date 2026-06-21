import { CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  HERO,
  HERO_ENTER_MOTION_REDUCE,
  HERO_MOCK_MEAL_CHIP_ROWS,
  HERO_NUTRIENT_TILE_ROWS,
} from './constants';
import { HeroNutrientTile } from './hero-nutrient-tile';

export default function HeroResultReadout() {
  return (
    <div
      className={cn(
        '@container/result hero-enter border-edge-strong bg-surface-raised/40 animate-in fade-in slide-in-from-right-10 zoom-in-95 fill-mode-both relative flex h-full min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl border p-4 delay-300 duration-1000 ease-out sm:p-5',
        HERO_ENTER_MOTION_REDUCE,
      )}
      role="region"
      aria-labelledby="hero-result-title"
    >
      <div className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col space-y-3 sm:space-y-4">
        <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 max-w-full flex-1 space-y-1.5">
            <span className="border-edge bg-surface-overlay/90 text-content-muted inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-widest uppercase sm:text-[11px]">
              {HERO.RESULT_BADGE}
            </span>
            <h2
              id="hero-result-title"
              className="text-content text-lg font-semibold tracking-tight sm:text-xl"
            >
              {HERO.RESULT_TITLE}
            </h2>
            <p className="text-content-muted max-w-lg text-xs leading-relaxed sm:text-sm">
              {HERO.RESULT_LEDE}
            </p>
          </div>
        </div>

        <div className="border-edge-strong from-surface-overlay/50 to-surface-raised/20 relative min-w-0 overflow-hidden rounded-xl border bg-linear-to-br p-3 sm:p-4">
          <Sparkles
            className="text-accent-soft/40 pointer-events-none absolute top-1/2 right-3 z-0 size-7 -translate-y-1/2 sm:right-4 sm:size-8"
            strokeWidth={1.55}
            aria-hidden
          />
          <div className="relative z-10 min-w-0 space-y-2 pr-12 sm:pr-14">
            <p className="text-content-subtle text-[11px] font-semibold tracking-widest uppercase">
              {HERO.MOCK_MEAL_LINE}
            </p>
            <p className="text-content text-base font-semibold tracking-tight sm:text-lg">
              {HERO.MOCK_MEAL_NAME}
            </p>
            <p className="text-content-muted flex items-center gap-1.5 text-xs sm:text-sm">
              <CheckCircle2 className="text-positive/90 size-3.5 shrink-0 sm:size-4" aria-hidden />
              {HERO.MOCK_CONFIDENCE}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {HERO_MOCK_MEAL_CHIP_ROWS.map(row => {
                const ChipIcon = row.ICON;
                return (
                  <span
                    key={row.TEXT}
                    className="border-edge bg-canvas/50 text-content-muted inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
                  >
                    <ChipIcon className={row.ICON_CLASS} aria-hidden />
                    {row.TEXT}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-content text-sm font-semibold tracking-tight">
              {HERO.NUTRIENTS_SECTION_LABEL}
            </p>
            <p className="text-content-muted mt-0.5 text-xs leading-relaxed sm:text-[13px]">
              {HERO.NUTRIENTS_SCOPE_NOTE}
            </p>
          </div>

          <div className="border-edge-strong min-w-0 overflow-hidden rounded-xl border bg-linear-to-br from-accent/12 via-surface-overlay/60 to-surface-raised/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex min-w-0 flex-col gap-3 p-3 sm:p-4 @xl/result:flex-row @xl/result:items-center @xl/result:justify-between @xl/result:gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="bg-accent/18 text-accent-mid/95 flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-accent/25 sm:size-12">
                  <Flame className="size-5 sm:size-6" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-content-muted text-[10px] font-semibold tracking-widest uppercase sm:text-[11px]">
                    {HERO.CALORIES_STAT_LABEL}
                  </p>
                  <p className="text-content font-mono text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                    {HERO.CALORIES_VALUE}
                    <span className="text-content-muted text-lg font-normal sm:text-xl">
                      {' '}
                      {HERO.CALORIES_UNIT}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-content-subtle min-w-0 font-mono text-[10px] leading-snug tracking-wide uppercase @xl/result:max-w-[min(12rem,100%)] @xl/result:shrink-0 @xl/result:border-l @xl/result:border-edge/50 @xl/result:pl-4">
                {HERO.CALORIES_FEATURE_CAPTION}
              </p>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-1.5 [&>*]:min-w-0 md:gap-2 @xl/result:grid-cols-4">
            {HERO_NUTRIENT_TILE_ROWS.map(row => (
              <HeroNutrientTile key={row.LABEL} {...row} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
