import { FEATURES_SECTION } from './constants';

export function FeaturesSectionIntro() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-content-muted font-mono text-[11px] font-medium tracking-widest uppercase sm:text-xs">
        {FEATURES_SECTION.EYEBROW}
      </p>
      <h2
        id="features-heading"
        className="text-content mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {FEATURES_SECTION.TITLE}
      </h2>
      <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">
        {FEATURES_SECTION.SUBTITLE}
      </p>
    </div>
  );
}
