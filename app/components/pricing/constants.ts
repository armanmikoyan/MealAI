export const PRICING_SECTION = {
  EYEBROW: 'Pricing',
  TITLE: 'Plans that scale with how you eat',
  SUBTITLE:
    'Start on Basic, move to Plus when you want smarter macros and lists, or Pro when you are feeding a household.',
  CHECKOUT_NOTE: 'Checkout coming soon',
} as const;

/** Same intent as hero enter rows: respect `prefers-reduced-motion` on scroll-in. */
export const PRICING_ENTER_MOTION_REDUCE =
  'motion-reduce:!animate-none motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!filter-none' as const;

export const PRICING_TIERS = [
  {
    ID: 'basic',
    NAME: 'Basic',
    BADGE: '',
    TAGLINE: 'Log meals and see calories without paying.',
    PRICE: '$0',
    PERIOD: 'forever',
    CTA: 'Start on Basic',
    HIGHLIGHT: false,
    FEATURES: [
      'Daily calorie target',
      'Manual meal entries',
      '7-day history',
      'Email support',
    ],
  },
  {
    ID: 'plus',
    NAME: 'Plus',
    BADGE: 'Most popular',
    TAGLINE: 'Photo-based logging, macros, and a real shopping list.',
    PRICE: '$9',
    PERIOD: 'per month',
    CTA: 'Choose Plus',
    HIGHLIGHT: true,
    FEATURES: [
      'Everything in Basic',
      'Photo meal capture',
      'Full macro breakdown',
      'Smart shopping list',
      '30-day history',
      'Priority chat support',
    ],
  },
  {
    ID: 'pro',
    NAME: 'Pro',
    BADGE: '',
    TAGLINE: 'Households, shared plans, and exports for power users.',
    PRICE: '$19',
    PERIOD: 'per month',
    CTA: 'Choose Pro',
    HIGHLIGHT: false,
    FEATURES: [
      'Everything in Plus',
      'Up to 5 profiles',
      'Shared household calendar',
      'CSV & Apple Health export',
      'Unlimited history',
      'Same-day onboarding call',
    ],
  },
] as const;

export type PricingTierRow = (typeof PRICING_TIERS)[number];
