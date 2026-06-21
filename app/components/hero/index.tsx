import { cn } from '@/lib/utils';
import {
  HERO_ENTER_GRID_SHELL,
  HERO_ENTER_MOTION_REDUCE,
  HERO_ENTER_SHELL_BLOCKS,
} from './constants';
import { HeroFlowBridge } from './hero-flow-bridge';
import { HeroIntroTypewriter } from './hero-intro-typewriter';
import HeroResultReadout from './hero-result-readout';
import HeroSectionBackdrop from './hero-section-backdrop';
import HeroUploadColumn from './hero-upload-column';

export default function Hero() {
  return (
    <section
      className="hero-section border-edge/60 relative overflow-hidden border-b bg-canvas"
      aria-labelledby="hero-heading"
    >
      <HeroSectionBackdrop />

      <div className="relative mx-auto w-full max-w-[min(90rem,calc(100vw-1.5rem))] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        {HERO_ENTER_SHELL_BLOCKS.map(({ ID, SHELL }) => (
          <div key={ID} className={cn(SHELL, HERO_ENTER_MOTION_REDUCE)}>
            {ID === 'intro' ? (
              <HeroIntroTypewriter />
            ) : (
              <div className={HERO_ENTER_GRID_SHELL}>
                <HeroUploadColumn />
                <HeroFlowBridge />
                <HeroResultReadout />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
