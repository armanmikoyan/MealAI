import { ChevronRight, Sparkles } from 'lucide-react';

export function HeroFlowBridge() {
  return (
    <div
      className="text-accent-mid/50 mx-auto flex min-h-10 w-full max-w-full shrink-0 flex-row items-center justify-center gap-2 self-start px-2 py-2 lg:-translate-x-1.5 lg:min-h-0 lg:self-center lg:pt-1 lg:pb-2"
      aria-hidden
    >
      <ChevronRight
        className={'size-4 shrink-0 sm:size-[1.05rem]'}
        strokeWidth={1.85}
        aria-hidden
      />
      <div className="border-edge/70 from-surface-overlay/85 to-surface-overlay/45 ring-accent/20 flex size-9 shrink-0 items-center justify-center rounded-full border bg-linear-to-b shadow-[0_4px_16px_-10px_rgba(0,0,0,0.55)] ring-1">
        <Sparkles className="text-accent-soft/90 size-4" strokeWidth={1.65} aria-hidden />
      </div>
      <ChevronRight
        className={'size-4 shrink-0 sm:size-[1.05rem]'}
        strokeWidth={1.85}
        aria-hidden
      />
    </div>
  );
}
