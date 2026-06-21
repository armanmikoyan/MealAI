import { cn } from '@/lib/utils';

import type { FeedbackMarqueeQuoteRow } from './constants';
import { FeedbackMarqueeQuoteChip } from './feedback-marquee-quote-chip';

export type FeedbackMarqueeRowVariant = 'scroll-toward-left' | 'scroll-toward-right' | 'static';

type FeedbackMarqueeRowProps = Readonly<{
  quotes: readonly FeedbackMarqueeQuoteRow[];
  variant: FeedbackMarqueeRowVariant;
}>;

function renderChips(quotes: readonly FeedbackMarqueeQuoteRow[], keyPrefix: string) {
  return quotes.map((row) => (
    <FeedbackMarqueeQuoteChip key={`${keyPrefix}-${row.KEY}`} quote={row.QUOTE} />
  ));
}

export function FeedbackMarqueeRow({ quotes, variant }: FeedbackMarqueeRowProps) {
  if (variant === 'static') {
    return (
      <div className="flex flex-wrap justify-center gap-3 px-2 py-1 sm:gap-4">{renderChips(quotes, 's')}</div>
    );
  }

  const trackClass =
    variant === 'scroll-toward-left'
      ? 'feedback-marquee-track--toward-left'
      : 'feedback-marquee-track--toward-right';

  return (
    <div className="feedback-marquee-mask relative overflow-hidden py-2" role="presentation">
      <div className={cn('flex w-max items-center gap-3 sm:gap-4', trackClass)}>
        {renderChips(quotes, '1')}
        {renderChips(quotes, '2')}
      </div>
    </div>
  );
}
