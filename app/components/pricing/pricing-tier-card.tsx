import { cn } from '@/lib/utils';
import { Button } from '@/app/ui/button';

import { type PricingTierRow, PRICING_SECTION } from './constants';
import { PricingTierFeatureList } from './pricing-tier-feature-list';

type PricingTierCardProps = Readonly<{
  tier: PricingTierRow;
}>;

export function PricingTierCard({ tier }: PricingTierCardProps) {
  return (
    <article
      className={cn(
        'border-edge-strong bg-surface-raised/50 relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 sm:p-7',
        tier.HIGHLIGHT &&
          'ring-accent/35 from-accent/10 bg-linear-to-b to-surface-raised/50 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-edge-strong)_80%,transparent)] ring-2 md:relative md:z-10 md:-translate-y-3',
      )}
    >
      {tier.BADGE ? (
        <span className="bg-accent/15 text-accent-soft/95 border-edge/60 absolute top-4 right-4 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase sm:top-5 sm:right-5 sm:text-[11px]">
          {tier.BADGE}
        </span>
      ) : null}

      <header className="pr-24">
        <h3 className="text-content text-lg font-semibold tracking-tight sm:text-xl">{tier.NAME}</h3>
        <p className="text-content-muted mt-2 text-sm leading-relaxed">{tier.TAGLINE}</p>
      </header>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-content font-mono text-4xl font-semibold tabular-nums tracking-tight sm:text-5xl">
          {tier.PRICE}
        </span>
        <span className="text-content-muted text-sm font-medium">{tier.PERIOD}</span>
      </div>

      <PricingTierFeatureList lines={tier.FEATURES} />

      <div className="mt-8">
        <Button
          type="button"
          variant={tier.HIGHLIGHT ? 'default' : 'outline'}
          size="lg"
          className="w-full"
          disabled
          aria-disabled
        >
          {tier.CTA}
        </Button>
        <p className="text-content-subtle mt-2 text-center text-[11px] sm:text-xs">
          {PRICING_SECTION.CHECKOUT_NOTE}
        </p>
      </div>
    </article>
  );
}
