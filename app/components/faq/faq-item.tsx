import { ChevronDown } from 'lucide-react';
import { useId } from 'react';

import { cn } from '@/lib/utils';

import type { FaqItemRow } from './constants';

type FaqItemProps = Readonly<{
  item: FaqItemRow;
  isOpen: boolean;
  onToggle: () => void;
}>;

export function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  const panelId = useId();
  const triggerId = useId();

  return (
    <div className="border-edge-strong bg-surface-raised/30 rounded-2xl border px-5 py-1 sm:px-6">
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          'text-content flex w-full cursor-pointer items-center justify-between gap-3 py-4 text-left text-base font-medium tracking-tight sm:text-lg',
          'rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-edge-strong/45',
        )}
      >
        <span className="min-w-0">{item.QUESTION}</span>
        <ChevronDown
          className={cn(
            'text-content-muted size-5 shrink-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:duration-0',
            isOpen && 'rotate-180',
          )}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-content-muted border-edge/60 border-t pb-4 pt-3 text-sm leading-relaxed sm:text-[15px]">
            {item.ANSWER}
          </p>
        </div>
      </div>
    </div>
  );
}
