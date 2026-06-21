import { USE_CASES_SECTION } from './constants';

export function UseCasesSectionIntro() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-content-muted font-mono text-[11px] font-medium tracking-widest uppercase sm:text-xs">
        {USE_CASES_SECTION.EYEBROW}
      </p>
      <h2
        id="use-cases-heading"
        className="text-content mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {USE_CASES_SECTION.TITLE}
      </h2>
      <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">
        {USE_CASES_SECTION.SUBTITLE}
      </p>
    </div>
  );
}
