'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';

import {
  HERO_MEAL_KEN_BURNS_FROM,
  HERO_MEAL_KEN_BURNS_TO,
  HERO_MEAL_PHOTO_CROSSFADE_S,
  HERO_MEAL_ROTATE_MS,
  type HeroMealSlide,
} from './constants';

type HeroMealPhotoProps = Readonly<{
  meal: HeroMealSlide;
  sizes: string;
  priority?: boolean;
  kenBurns?: boolean;
  showCycleProgress?: boolean;
}>;

export function HeroMealPhoto({
  meal,
  sizes,
  priority = false,
  kenBurns = false,
  showCycleProgress = false,
}: HeroMealPhotoProps) {
  const reduceMotion = useReducedMotion();
  const rotateS = HERO_MEAL_ROTATE_MS / 1000;
  const crossfade = {
    duration: reduceMotion ? 0.2 : HERO_MEAL_PHOTO_CROSSFADE_S,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const scaleFrom = kenBurns ? HERO_MEAL_KEN_BURNS_FROM : 1;
  const scaleTo = kenBurns ? HERO_MEAL_KEN_BURNS_TO : 1;

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={meal.KEY}
          className="absolute inset-0"
          initial={{ opacity: 0, filter: 'blur(16px)', scale: scaleFrom }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: scaleTo }}
          exit={{
            opacity: 0,
            filter: 'blur(12px)',
            scale: kenBurns ? HERO_MEAL_KEN_BURNS_TO : 1.05,
          }}
          transition={
            reduceMotion || !kenBurns
              ? crossfade
              : {
                  opacity: crossfade,
                  filter: crossfade,
                  scale: { duration: rotateS, ease: 'linear' },
                }
          }
        >
          <Image
            src={meal.IMAGE_SRC}
            alt={meal.IMAGE_ALT}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {showCycleProgress && reduceMotion !== true ? (
        <motion.span
          key={`${meal.KEY}-progress`}
          aria-hidden
          className="bg-accent absolute inset-x-0 bottom-0 z-10 h-0.5 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: rotateS, ease: 'linear' }}
        />
      ) : null}
    </>
  );
}
