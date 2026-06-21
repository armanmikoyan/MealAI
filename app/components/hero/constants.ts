import type { LucideIcon } from 'lucide-react';
import {
  Battery,
  Beef,
  Beaker,
  Candy,
  Donut,
  Droplet,
  Fish,
  Flame,
  LeafyGreen,
  Sprout,
  Wheat,
} from 'lucide-react';

export type HeroUploadDecorGlyph = Readonly<{
  ICON: LucideIcon;
  ICON_CLASS: string;
  TOP: string;
  LEFT: string;
  ROTATE: string;
}>;

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
  UPLOAD_ARIA_LABEL: 'Upload area for your meal image before analysis.',
  UPLOAD_DROP_TITLE: 'Upload your meal',
  UPLOAD_DROP_BODY: 'Drag and drop or pick a file—MealAI reads the meal and fills in the numbers.',
  UPLOAD_HINT: 'Files & gallery · coming soon',
  RESULT_BADGE: 'Today · sample readout',
  RESULT_TITLE: 'What you get from that upload',
  RESULT_LEDE:
    'A same-day view: name the plate, surface the numbers, and see how this meal fits what you still have planned for today.',
  MOCK_MEAL_LINE: 'Detected meal',
  MOCK_MEAL_NAME: 'Salmon rice bowl',
  MOCK_CONFIDENCE: 'High confidence',
  CHIP_LEAFY: 'Greens',
  CHIP_STARCH: 'Jasmine rice',
  CHIP_PROTEIN: 'Salmon',
  NUTRIENTS_SECTION_LABEL: 'Nutrition breakdown',
  NUTRIENTS_SCOPE_NOTE: 'Estimated from your upload (demo numbers).',
  CALORIES_STAT_LABEL: 'Calories',
  CALORIES_VALUE: '620',
  CALORIES_UNIT: 'kcal',
  PROTEIN_STAT_LABEL: 'Protein',
  PROTEIN_VALUE: '38',
  PROTEIN_UNIT: 'g',
  CARBS_STAT_LABEL: 'Carbs',
  CARBS_VALUE: '54',
  CARBS_UNIT: 'g',
  FAT_STAT_LABEL: 'Fat',
  FAT_VALUE: '17',
  FAT_UNIT: 'g',
  FIBER_STAT_LABEL: 'Fiber',
  FIBER_VALUE: '5',
  FIBER_UNIT: 'g',
  SAT_FAT_LABEL: 'Sat. fat',
  SAT_FAT_VALUE: '4',
  SAT_FAT_UNIT: 'g',
  SUGAR_LABEL: 'Sugar',
  SUGAR_VALUE: '6',
  SUGAR_UNIT: 'g',
  SODIUM_LABEL: 'Sodium',
  SODIUM_VALUE: '690',
  SODIUM_UNIT: 'mg',
  POTASSIUM_LABEL: 'Potassium',
  POTASSIUM_VALUE: '580',
  POTASSIUM_UNIT: 'mg',
  CALORIES_FEATURE_CAPTION:
    'Macros and more stack in the tiles below—the same readout pattern in the app.',
} as const;

/** Append next to `hero-enter` + tw-animate `animate-in` for `prefers-reduced-motion`. */
export const HERO_ENTER_MOTION_REDUCE =
  'motion-reduce:!animate-none motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!filter-none' as const;

/** Append next to `.hero-aurora-blob` rows to stop blob drift when `prefers-reduced-motion` is set. */
export const HERO_AURORA_MOTION_REDUCE = 'motion-reduce:!animate-none' as const;

/** Shared Tailwind for typewriter carets under reduced motion. */
export const HERO_TYPEWRITER_CARET_REDUCE_CLASS =
  'motion-reduce:!animate-none motion-reduce:!opacity-65' as const;

export const HERO_INTRO_TYPE_START_MS = 380 as const;

export const HERO_INTRO_LINES = [
  {
    KEY: 'h',
    EL: 'h1',
    ID: 'hero-heading',
    SHELL: 'text-content font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl',
    CARET: 'hero-typewriter-caret text-content-muted ml-0.5 inline-block align-baseline font-light',
    TEXT: HERO.HEADING,
    MS: 26,
  },
  {
    KEY: 's',
    EL: 'p',
    ID: undefined,
    SHELL: 'text-content-muted mt-3 max-w-2xl text-base leading-relaxed sm:text-lg',
    CARET: 'hero-typewriter-caret text-content-muted/80 ml-0.5 inline-block align-baseline font-light',
    TEXT: HERO.SUBHEAD,
    MS: 11,
  },
] as const;

export type HeroIntroLineKey = (typeof HERO_INTRO_LINES)[number]['KEY'];

export const HERO_ENTER_GRID_SHELL =
  'grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(4.75rem,5.5rem)_minmax(0,1fr)] lg:items-stretch lg:gap-5' as const;

export const HERO_ENTER_SHELL_BLOCKS = [
  {
    ID: 'intro',
    SHELL:
      'hero-enter animate-in fade-in fill-mode-both max-w-4xl duration-1000 ease-out',
  },
  {
    ID: 'grid',
    SHELL:
      'hero-enter animate-in fade-in fill-mode-both mt-8 max-lg:slide-in-from-bottom-4 space-y-2 delay-200 duration-700 ease-out sm:mt-10 sm:space-y-2.5 lg:mt-10 lg:space-y-2',
  },
] as const;

export const HERO_AURORA_BLOB_CLASSNAMES = [
  'hero-aurora-blob hero-aurora-blob--a bg-white/6 top-[-28%] left-[-18%] h-[min(88vw,580px)] w-[min(88vw,580px)]',
  'hero-aurora-blob hero-aurora-blob--b bg-content-muted/9 bottom-[-32%] right-[-22%] h-[min(95vw,640px)] w-[min(95vw,640px)]',
  'hero-aurora-blob hero-aurora-blob--c bg-content-subtle/7 top-[35%] left-[25%] h-[min(70vw,420px)] w-[min(70vw,420px)]',
] as const;

/** Scatter in the top grid row only (`TOP` / `LEFT` are % of that row, never the upload card). */
export const HERO_UPLOAD_DECOR_TOP: readonly HeroUploadDecorGlyph[] = [
  { ICON: LeafyGreen, ICON_CLASS: 'text-emerald-400/90', TOP: '52%', LEFT: '10%', ROTATE: '-10deg' },
  { ICON: Beef, ICON_CLASS: 'text-rose-400/95', TOP: '38%', LEFT: '30%', ROTATE: '-7deg' },
  { ICON: Donut, ICON_CLASS: 'text-fuchsia-300/85', TOP: '48%', LEFT: '50%', ROTATE: '9deg' },
  { ICON: Beaker, ICON_CLASS: 'text-violet-300/90', TOP: '35%', LEFT: '70%', ROTATE: '-8deg' },
  { ICON: Fish, ICON_CLASS: 'text-sky-400/90', TOP: '55%', LEFT: '90%', ROTATE: '11deg' },
];

/** Scatter in the bottom grid row only. */
export const HERO_UPLOAD_DECOR_BOTTOM: readonly HeroUploadDecorGlyph[] = [
  { ICON: Sprout, ICON_CLASS: 'text-emerald-400/95', TOP: '54%', LEFT: '8%', ROTATE: '-5deg' },
  { ICON: Droplet, ICON_CLASS: 'text-sky-300/90', TOP: '42%', LEFT: '25%', ROTATE: '6deg' },
  { ICON: Wheat, ICON_CLASS: 'text-amber-200/90', TOP: '58%', LEFT: '42%', ROTATE: '-11deg' },
  { ICON: Candy, ICON_CLASS: 'text-pink-300/90', TOP: '38%', LEFT: '58%', ROTATE: '7deg' },
  { ICON: Flame, ICON_CLASS: 'text-amber-300/95', TOP: '50%', LEFT: '75%', ROTATE: '12deg' },
  { ICON: Battery, ICON_CLASS: 'text-lime-300/85', TOP: '46%', LEFT: '92%', ROTATE: '-6deg' },
];

export const HERO_MOCK_MEAL_CHIP_ROWS: readonly HeroMockMealChipRow[] = [
  {
    ICON: LeafyGreen,
    ICON_CLASS: 'size-3.5 text-emerald-400/90',
    TEXT: HERO.CHIP_LEAFY,
  },
  {
    ICON: Wheat,
    ICON_CLASS: 'text-content-muted/90 size-3.5',
    TEXT: HERO.CHIP_STARCH,
  },
  {
    ICON: Fish,
    ICON_CLASS: 'text-sky-400/90 size-3.5',
    TEXT: HERO.CHIP_PROTEIN,
  },
];

export const HERO_NUTRIENT_TILE_ROWS: readonly HeroNutrientTileRowModel[] = [
  {
    ICON: Beef,
    LABEL: HERO.PROTEIN_STAT_LABEL,
    VALUE: HERO.PROTEIN_VALUE,
    UNIT: HERO.PROTEIN_UNIT,
    ICON_CLASS: 'text-rose-400/95',
    ICON_BG_CLASS: 'bg-rose-500/12 ring-1 ring-rose-400/15',
  },
  {
    ICON: Wheat,
    LABEL: HERO.CARBS_STAT_LABEL,
    VALUE: HERO.CARBS_VALUE,
    UNIT: HERO.CARBS_UNIT,
    ICON_CLASS: 'text-amber-200/90',
    ICON_BG_CLASS: 'bg-amber-400/10 ring-1 ring-amber-300/12',
  },
  {
    ICON: Droplet,
    LABEL: HERO.FAT_STAT_LABEL,
    VALUE: HERO.FAT_VALUE,
    UNIT: HERO.FAT_UNIT,
    ICON_CLASS: 'text-sky-300/90',
    ICON_BG_CLASS: 'bg-sky-500/12 ring-1 ring-sky-400/15',
  },
  {
    ICON: Sprout,
    LABEL: HERO.FIBER_STAT_LABEL,
    VALUE: HERO.FIBER_VALUE,
    UNIT: HERO.FIBER_UNIT,
    ICON_CLASS: 'text-emerald-400/95',
    ICON_BG_CLASS: 'bg-emerald-500/12 ring-1 ring-emerald-400/15',
  },
  {
    ICON: Donut,
    LABEL: HERO.SAT_FAT_LABEL,
    VALUE: HERO.SAT_FAT_VALUE,
    UNIT: HERO.SAT_FAT_UNIT,
    ICON_CLASS: 'text-fuchsia-300/85',
    ICON_BG_CLASS: 'bg-fuchsia-500/10 ring-1 ring-fuchsia-400/12',
  },
  {
    ICON: Candy,
    LABEL: HERO.SUGAR_LABEL,
    VALUE: HERO.SUGAR_VALUE,
    UNIT: HERO.SUGAR_UNIT,
    ICON_CLASS: 'text-pink-300/90',
    ICON_BG_CLASS: 'bg-pink-500/10 ring-1 ring-pink-400/12',
  },
  {
    ICON: Beaker,
    LABEL: HERO.SODIUM_LABEL,
    VALUE: HERO.SODIUM_VALUE,
    UNIT: HERO.SODIUM_UNIT,
    ICON_CLASS: 'text-violet-300/90',
    ICON_BG_CLASS: 'bg-violet-500/12 ring-1 ring-violet-400/15',
  },
  {
    ICON: Battery,
    LABEL: HERO.POTASSIUM_LABEL,
    VALUE: HERO.POTASSIUM_VALUE,
    UNIT: HERO.POTASSIUM_UNIT,
    ICON_CLASS: 'text-lime-300/85',
    ICON_BG_CLASS: 'bg-lime-500/10 ring-1 ring-lime-400/12',
  },
];
