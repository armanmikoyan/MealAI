import { PricingScrollReveal } from './pricing-scroll-reveal';
import { PricingSectionIntro } from './pricing-section-intro';
import { PricingTierGrid } from './pricing-tier-grid';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-edge/60 border-t bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <PricingScrollReveal intro={<PricingSectionIntro />} grid={<PricingTierGrid />} />
    </section>
  );
}
