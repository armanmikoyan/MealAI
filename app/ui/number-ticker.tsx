'use client';

import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

import { cn } from '@/lib/utils';

type NumberTickerProps = ComponentPropsWithoutRef<'span'> &
  Readonly<{
    value: number;
    startValue?: number;
    direction?: 'up' | 'down';
    delay?: number;
    decimalPlaces?: number;
  }>;

export function NumberTicker({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 38,
    stiffness: 90,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : value);
      }, delay * 1000);
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  if (reduceMotion) {
    return (
      <span className={cn('inline-block tabular-nums', className)} {...props}>
        {Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(value)}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn('inline-block tabular-nums', className)} {...props}>
      {startValue}
    </span>
  );
}
