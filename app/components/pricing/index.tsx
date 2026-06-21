import { ScrollEnter } from '@/app/components/scroll';

import { PricingSectionIntro } from './pricing-section-intro';
import { PricingTierGrid } from './pricing-tier-grid';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-edge/60 scroll-mt-28 border-t bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <ScrollEnter
        className="layout-page-shell"
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
