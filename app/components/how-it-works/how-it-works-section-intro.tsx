import { HOW_IT_WORKS } from './constants';

export function HowItWorksSectionIntro() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-content-muted font-mono text-[11px] font-medium tracking-widest uppercase sm:text-xs">
        {HOW_IT_WORKS.EYEBROW}
      </p>
      <h2
        id="how-it-works-heading"
        className="text-content mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {HOW_IT_WORKS.TITLE}
      </h2>
      <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">
        {HOW_IT_WORKS.SUBTITLE}
      </p>
    </div>
  );
}
