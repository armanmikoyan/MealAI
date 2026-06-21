import { ScrollEnter } from '@/app/components/scroll';

import { PricingSectionIntro } from './pricing-section-intro';
import { PricingTierGrid } from './pricing-tier-grid';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-edge/60 border-t bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <ScrollEnter
        className="mx-auto w-full max-w-[min(90rem,calc(100vw-1.5rem))] px-4 sm:px-6 lg:px-10"
        rows={[
          { KEY: 'intro', content: <PricingSectionIntro /> },
          {
            KEY: 'grid',
            content: <PricingTierGrid />,
            delayClass: 'motion-safe:delay-150',
          },
        ]}
      />
    </section>
  );
}
