'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import {
  type HeroIntroLineKey,
  HERO_INTRO_LINES,
  HERO_INTRO_TYPE_START_MS,
  HERO_TYPEWRITER_CARET_REDUCE_CLASS,
} from './constants';

export function HeroIntroTypewriter() {
  const [motionReduced, setMotionReduced] = useState(false);
  const [lens, setLens] = useState<Record<HeroIntroLineKey, number>>({ h: 0, s: 0 });
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      queueMicrotask(() => {
        setMotionReduced(true);
        setLens(
          Object.fromEntries(HERO_INTRO_LINES.map(l => [l.KEY, l.TEXT.length])) as Record<
            HeroIntroLineKey,
            number
          >,
        );
      });
      return;
    }

    const clear = () => {
      for (const id of timers.current) clearTimeout(id);
      timers.current = [];
    };

    const schedule = (fn: () => void, delay: number) => {
      timers.current.push(setTimeout(fn, delay));
    };

    for (const { KEY, TEXT, MS } of HERO_INTRO_LINES) {
      let i = 0;
      const step = () => {
        if (i < TEXT.length) {
          i += 1;
          setLens(prev => ({ ...prev, [KEY]: i }));
          schedule(step, MS);
        }
      };
      schedule(step, HERO_INTRO_TYPE_START_MS);
    }

    return clear;
  }, []);

  return (
    <>
      {HERO_INTRO_LINES.map(({ KEY, EL, ID, SHELL, CARET, TEXT }) => {
        const len = lens[KEY];
        const showCaret = !motionReduced && len < TEXT.length;
        return (
          <EL key={KEY} id={ID} className={SHELL}>
            <span className="relative grid grid-cols-1">
              <span className="invisible col-start-1 row-start-1">{TEXT}</span>
              <span className="col-start-1 row-start-1">
                {TEXT.slice(0, len)}
                {showCaret ? (
                  <span className={cn(CARET, HERO_TYPEWRITER_CARET_REDUCE_CLASS)}>|</span>
                ) : null}
              </span>
            </span>
          </EL>
        );
      })}
    </>
  );
}
