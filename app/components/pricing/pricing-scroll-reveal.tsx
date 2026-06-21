'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { PRICING_ENTER_MOTION_REDUCE } from './constants';

type PricingScrollRevealProps = Readonly<{
  intro: ReactNode;
  grid: ReactNode;
}>;

const PRICING_ENTER_IN =
  'hero-enter animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-700 ease-out';

export function PricingScrollReveal({ intro, grid }: PricingScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      queueMicrotask(() => {
        setVisible(true);
      });
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="mx-auto w-full max-w-[min(90rem,calc(100vw-1.5rem))] px-4 sm:px-6 lg:px-10"
    >
      <div
        className={cn(
          visible && cn(PRICING_ENTER_IN, PRICING_ENTER_MOTION_REDUCE),
          !visible && 'motion-safe:translate-y-6 motion-safe:opacity-0',
        )}
      >
        {intro}
      </div>
      <div
        className={cn(
          visible && cn(PRICING_ENTER_IN, 'motion-safe:delay-150', PRICING_ENTER_MOTION_REDUCE),
          !visible && 'motion-safe:translate-y-6 motion-safe:opacity-0',
        )}
      >
        {grid}
      </div>
    </div>
  );
}
