import { FAQ_SECTION } from './constants';

export function FaqSectionIntro() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-content-muted font-mono text-[11px] font-medium tracking-widest uppercase sm:text-xs">
        {FAQ_SECTION.EYEBROW}
      </p>
      <h2
        id="faq-heading"
        className="text-content mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {FAQ_SECTION.TITLE}
      </h2>
      <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">{FAQ_SECTION.SUBTITLE}</p>
    </div>
  );
}
