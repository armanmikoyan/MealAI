import { CheckCircle2, Flame, Sparkles } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/app/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/ui/card';
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
    <Card
      className={cn(
        '@container/result animate-in fade-in slide-in-from-right-10 zoom-in-95 fill-mode-both flex h-full min-h-0 w-full flex-col delay-300 duration-1000 ease-out',
        HERO_ENTER_MOTION_REDUCE,
      )}
      role="region"
      aria-labelledby="hero-result-title"
    >
      <CardHeader>
        <Badge variant="outline">{HERO.RESULT_BADGE}</Badge>
        <CardTitle id="hero-result-title">{HERO.RESULT_TITLE}</CardTitle>
        <CardDescription>{HERO.RESULT_LEDE}</CardDescription>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-4">
        <Card size="sm" className="relative">
          <Sparkles
            className="text-accent-soft/40 pointer-events-none absolute top-1/2 right-3 z-0 size-7 -translate-y-1/2 sm:right-4 sm:size-8"
            strokeWidth={1.55}
            aria-hidden
          />
          <CardHeader className="relative z-10 pr-12 sm:pr-14">
            <div className="flex min-w-0 items-start gap-3">
              <span className="relative size-14 shrink-0 overflow-hidden rounded-lg sm:size-16">
                <Image
                  src={HERO.UPLOAD_IMAGE_SRC}
                  alt={HERO.UPLOAD_IMAGE_ALT}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <Badge variant="ghost">{HERO.MOCK_MEAL_LINE}</Badge>
                <CardTitle>{HERO.MOCK_MEAL_NAME}</CardTitle>
                <CardDescription className="flex items-center gap-1.5">
                  <CheckCircle2 className="text-positive" aria-hidden />
                  {HERO.MOCK_CONFIDENCE}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {HERO_MOCK_MEAL_CHIP_ROWS.map((row) => {
                const ChipIcon = row.ICON;
                return (
                  <Badge key={row.TEXT} variant="outline">
                    <ChipIcon className={row.ICON_CLASS} aria-hidden />
                    {row.TEXT}
                  </Badge>
                );
              })}
            </div>
          </CardHeader>
        </Card>

        <div className="flex flex-col gap-2">
          <div>
            <p className="font-heading text-sm font-medium tracking-tight">
              {HERO.NUTRIENTS_SECTION_LABEL}
            </p>
            <p className="text-muted-foreground mt-0.5 text-xs/relaxed">
              {HERO.NUTRIENTS_SCOPE_NOTE}
            </p>
          </div>

          <Card size="sm">
            <CardContent className="flex min-w-0 flex-col gap-3 @xl/result:flex-row @xl/result:items-center @xl/result:justify-between @xl/result:gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="bg-accent/18 text-accent-mid flex size-10 shrink-0 items-center justify-center rounded-xl sm:size-12">
                  <Flame aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase sm:text-[11px]">
                    {HERO.CALORIES_STAT_LABEL}
                  </p>
                  <p className="font-heading text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                    {HERO.CALORIES_VALUE}
                    <span className="text-muted-foreground text-lg font-normal sm:text-xl">
                      {' '}
                      {HERO.CALORIES_UNIT}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground min-w-0 text-[10px]/snug tracking-wide uppercase @xl/result:max-w-[min(12rem,100%)] @xl/result:shrink-0">
                {HERO.CALORIES_FEATURE_CAPTION}
              </p>
            </CardContent>
          </Card>

          <div className="grid min-w-0 grid-cols-2 gap-1.5 [&>*]:min-w-0 md:gap-2 @xl/result:grid-cols-4">
            {HERO_NUTRIENT_TILE_ROWS.map((row) => (
              <HeroNutrientTile key={row.LABEL} {...row} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
