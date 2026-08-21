import { Card, CardContent } from '@/app/ui/card';
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
    <Card size="sm">
      <CardContent className="flex min-w-0 items-center gap-2">
        <span
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-md sm:size-9',
            ICON_BG_CLASS,
          )}
        >
          <ICON className={ICON_CLASS} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-muted-foreground text-[8px] font-semibold tracking-widest uppercase sm:text-[9px]">
            {LABEL}
          </p>
          <p className="font-heading text-sm font-semibold tracking-tight tabular-nums sm:text-base">
            {VALUE}
            <span className="text-muted-foreground font-sans text-[10px] font-normal sm:text-xs">
              {' '}
              {UNIT}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
