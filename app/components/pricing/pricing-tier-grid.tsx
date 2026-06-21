import { PRICING_TIERS } from './constants';
import { PricingTierCard } from './pricing-tier-card';

export function PricingTierGrid() {
  return (
    <ul className="mt-12 grid list-none grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:mt-14">
      {PRICING_TIERS.map((tier) => (
        <li key={tier.ID} className="min-w-0 h-full">
          <PricingTierCard tier={tier} />
        </li>
      ))}
    </ul>
  );
}
