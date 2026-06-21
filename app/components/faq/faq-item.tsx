import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { FAQ_DETAILS_GROUP_NAME, type FaqItemRow } from './constants';

type FaqItemProps = Readonly<{
  item: FaqItemRow;
}>;

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details
      name={FAQ_DETAILS_GROUP_NAME}
      className="border-edge-strong bg-surface-raised/30 group select-none rounded-2xl border px-5 py-1 sm:px-6"
    >
      <summary
        className={cn(
          'text-content flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-base font-medium tracking-tight sm:text-lg',
          '[&::-webkit-details-marker]:hidden',
        )}
      >
        <span className="min-w-0">{item.QUESTION}</span>
        <ChevronDown
          className="text-content-muted size-5 shrink-0 transition-transform duration-300 ease-out group-open:rotate-180 motion-reduce:duration-0"
          strokeWidth={1.75}
          aria-hidden
        />
      </summary>
      <div
        className={cn(
          'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out',
          'group-open:grid-rows-[1fr]',
          'motion-reduce:transition-none',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-content-muted border-edge/60 select-text border-t pb-4 pt-3 text-sm leading-relaxed sm:text-[15px]">
            {item.ANSWER}
          </p>
        </div>
      </div>
    </details>
  );
}
