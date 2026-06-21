import { PRICING_SECTION } from './constants';

export function PricingSectionIntro() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-content-muted font-mono text-[11px] font-medium tracking-widest uppercase sm:text-xs">
        {PRICING_SECTION.EYEBROW}
      </p>
      <h2
        id="pricing-heading"
        className="text-content mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {PRICING_SECTION.TITLE}
      </h2>
      <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">
        {PRICING_SECTION.SUBTITLE}
      </p>
    </div>
  );
}
