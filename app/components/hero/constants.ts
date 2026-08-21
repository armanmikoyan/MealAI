import type { LucideIcon } from 'lucide-react';
import {
  Battery,
  Beef,
  Beaker,
  Candy,
  Donut,
  Droplet,
  LeafyGreen,
  Sprout,
  Wheat,
} from 'lucide-react';

export type HeroMockMealChipRow = Readonly<{
  ICON: LucideIcon;
  ICON_CLASS: string;
  TEXT: string;
}>;

export type HeroNutrientTileRowModel = Readonly<{
  ICON: LucideIcon;
  LABEL: string;
  VALUE: string;
  UNIT: string;
  ICON_CLASS: string;
  ICON_BG_CLASS: string;
}>;

export const HERO = {
  HEADING: 'Meal planning that respects your calories and your time.',
  SUBHEAD:
    "Upload a shot of your food, see today's calories and macros in seconds, and adjust the rest of your day—without manual logging.",
  UPLOAD_HINT: 'Opens Snap a plate',
  UPLOAD_IMAGE_SRC: '/images/hero-meal.png',
  UPLOAD_IMAGE_ALT: 'Grilled steak with asparagus, peppers, and tomatoes on a dark plate',
  UPLOAD_SELECTED_BADGE: 'Selected',
  UPLOAD_IMAGE_SIZES: '(max-width: 1024px) 92vw, 46vw',
  CTA: 'Snap a plate',
  CTA_HREF: '/snap',
  CTA_HINT: 'One photo. The numbers land in seconds.',
  RESULT_BADGE: 'Today · sample readout',
  RESULT_TITLE: 'What you get from that upload',
  RESULT_LEDE:
    'A same-day view of this plate: name the steak, surface the numbers, and see how it fits what you still have planned for today.',
  MOCK_MEAL_LINE: 'Detected meal',
  MOCK_MEAL_NAME: 'Grilled steak plate',
  MOCK_CONFIDENCE: 'High confidence',
  CHIP_LEAFY: 'Asparagus',
  CHIP_STARCH: 'Grilled veg',
  CHIP_PROTEIN: 'Steak',
  NUTRIENTS_SECTION_LABEL: 'Nutrition breakdown',
  NUTRIENTS_SCOPE_NOTE: 'Estimated from your upload (demo numbers).',
  CALORIES_STAT_LABEL: 'Calories',
  CALORIES_VALUE: '740',
  CALORIES_UNIT: 'kcal',
  PROTEIN_STAT_LABEL: 'Protein',
  PROTEIN_VALUE: '52',
  PROTEIN_UNIT: 'g',
  CARBS_STAT_LABEL: 'Carbs',
  CARBS_VALUE: '18',
  CARBS_UNIT: 'g',
  FAT_STAT_LABEL: 'Fat',
  FAT_VALUE: '46',
  FAT_UNIT: 'g',
  FIBER_STAT_LABEL: 'Fiber',
  FIBER_VALUE: '6',
  FIBER_UNIT: 'g',
  SAT_FAT_LABEL: 'Sat. fat',
  SAT_FAT_VALUE: '16',
  SAT_FAT_UNIT: 'g',
  SUGAR_LABEL: 'Sugar',
  SUGAR_VALUE: '8',
  SUGAR_UNIT: 'g',
  SODIUM_LABEL: 'Sodium',
  SODIUM_VALUE: '520',
  SODIUM_UNIT: 'mg',
  POTASSIUM_LABEL: 'Potassium',
  POTASSIUM_VALUE: '980',
  POTASSIUM_UNIT: 'mg',
  CALORIES_FEATURE_CAPTION:
    'Macros and more stack in the tiles below—the same readout pattern in the app.',
} as const;

/** Append next to tw-animate `animate-in` for `prefers-reduced-motion`. */
export const HERO_ENTER_MOTION_REDUCE =
  'motion-reduce:animate-none! motion-reduce:opacity-100! motion-reduce:transform-none! motion-reduce:filter-none!' as const;

/** Shared Tailwind for typewriter carets under reduced motion. */
export const HERO_TYPEWRITER_CARET_REDUCE_CLASS =
  'motion-reduce:animate-none! motion-reduce:opacity-65!' as const;

export const HERO_INTRO_TYPE_START_MS = 380 as const;

/** Extra `|` marks after the blinking caret; staggered animation reads as a left→right sweep. */
export const HERO_INTRO_CARET_ECHO_DELAY_CLASS = [
  'delay-0',
  'delay-[110ms]',
  'delay-[220ms]',
  'delay-[330ms]',
] as const;

export const HERO_INTRO_LINES = [
  {
    KEY: 'h',
    EL: 'h1',
    ID: 'hero-heading',
    SHELL:
      'text-content font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl',
    CARET: 'animate-caret-blink text-content-muted inline-block align-baseline font-light',
    TEXT: HERO.HEADING,
    MS: 26,
  },
  {
    KEY: 's',
    EL: 'p',
    ID: undefined,
    SHELL: 'text-content-muted mt-3 max-w-3xl text-base/relaxed sm:text-lg',
    CARET: 'animate-caret-blink text-content-muted/80 inline-block align-baseline font-light',
    TEXT: HERO.SUBHEAD,
    MS: 11,
  },
] as const;

export type HeroIntroLineKey = (typeof HERO_INTRO_LINES)[number]['KEY'];

/** Upload | arrow | result from `md` up; stacked on small screens. */
export const HERO_ENTER_GRID_SHELL =
  'relative grid w-full min-w-0 grid-cols-1 items-stretch gap-5 [&>*]:min-w-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8' as const;

export const HERO_ENTER_SHELL_BLOCKS = [
  {
    ID: 'intro',
    SHELL: 'animate-in fade-in fill-mode-both max-w-5xl duration-1000 ease-out',
  },
  {
    ID: 'grid',
    SHELL:
      'animate-in fade-in fill-mode-both mt-8 max-lg:slide-in-from-bottom-4 delay-200 duration-700 ease-out sm:mt-10 md:mt-10 lg:mt-10',
  },
] as const;

export const HERO_MOCK_MEAL_CHIP_ROWS: readonly HeroMockMealChipRow[] = [
  {
    ICON: Beef,
    ICON_CLASS: 'text-macro-protein/95 size-3.5',
    TEXT: HERO.CHIP_PROTEIN,
  },
  {
    ICON: LeafyGreen,
    ICON_CLASS: 'size-3.5 text-positive/90',
    TEXT: HERO.CHIP_LEAFY,
  },
  {
    ICON: Wheat,
    ICON_CLASS: 'text-content-muted/90 size-3.5',
    TEXT: HERO.CHIP_STARCH,
  },
];

export const HERO_NUTRIENT_TILE_ROWS: readonly HeroNutrientTileRowModel[] = [
  {
    ICON: Beef,
    LABEL: HERO.PROTEIN_STAT_LABEL,
    VALUE: HERO.PROTEIN_VALUE,
    UNIT: HERO.PROTEIN_UNIT,
    ICON_CLASS: 'text-macro-protein/95',
    ICON_BG_CLASS: 'bg-macro-protein/12 ring-1 ring-macro-protein/15',
  },
  {
    ICON: Wheat,
    LABEL: HERO.CARBS_STAT_LABEL,
    VALUE: HERO.CARBS_VALUE,
    UNIT: HERO.CARBS_UNIT,
    ICON_CLASS: 'text-accent-soft/90',
    ICON_BG_CLASS: 'bg-accent/10 ring-1 ring-accent/12',
  },
  {
    ICON: Droplet,
    LABEL: HERO.FAT_STAT_LABEL,
    VALUE: HERO.FAT_VALUE,
    UNIT: HERO.FAT_UNIT,
    ICON_CLASS: 'text-macro-fat/90',
    ICON_BG_CLASS: 'bg-macro-fat-strong/12 ring-1 ring-macro-fat-strong/15',
  },
  {
    ICON: Sprout,
    LABEL: HERO.FIBER_STAT_LABEL,
    VALUE: HERO.FIBER_VALUE,
    UNIT: HERO.FIBER_UNIT,
    ICON_CLASS: 'text-positive/95',
    ICON_BG_CLASS: 'bg-positive/12 ring-1 ring-positive/15',
  },
  {
    ICON: Donut,
    LABEL: HERO.SAT_FAT_LABEL,
    VALUE: HERO.SAT_FAT_VALUE,
    UNIT: HERO.SAT_FAT_UNIT,
    ICON_CLASS: 'text-macro-sat/85',
    ICON_BG_CLASS: 'bg-macro-sat/10 ring-1 ring-macro-sat/12',
  },
  {
    ICON: Candy,
    LABEL: HERO.SUGAR_LABEL,
    VALUE: HERO.SUGAR_VALUE,
    UNIT: HERO.SUGAR_UNIT,
    ICON_CLASS: 'text-macro-sugar/90',
    ICON_BG_CLASS: 'bg-macro-sugar/10 ring-1 ring-macro-sugar/12',
  },
  {
    ICON: Beaker,
    LABEL: HERO.SODIUM_LABEL,
    VALUE: HERO.SODIUM_VALUE,
    UNIT: HERO.SODIUM_UNIT,
    ICON_CLASS: 'text-macro-sodium/90',
    ICON_BG_CLASS: 'bg-macro-sodium/12 ring-1 ring-macro-sodium/15',
  },
  {
    ICON: Battery,
    LABEL: HERO.POTASSIUM_LABEL,
    VALUE: HERO.POTASSIUM_VALUE,
    UNIT: HERO.POTASSIUM_UNIT,
    ICON_CLASS: 'text-macro-potassium/85',
    ICON_BG_CLASS: 'bg-macro-potassium/10 ring-1 ring-macro-potassium/12',
  },
];
