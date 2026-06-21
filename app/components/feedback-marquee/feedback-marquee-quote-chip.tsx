type FeedbackMarqueeQuoteChipProps = Readonly<{
  quote: string;
}>;

export function FeedbackMarqueeQuoteChip({ quote }: FeedbackMarqueeQuoteChipProps) {
  return (
    <span className="border-edge-strong bg-surface-raised/50 text-content-muted inline-flex max-w-[min(22rem,85vw)] shrink-0 items-center rounded-full border px-4 py-2 text-sm leading-snug">
      {quote}
    </span>
  );
}
