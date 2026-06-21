import { cn } from '@/lib/utils';
import {
  HERO_ENTER_GRID_SHELL,
  HERO_ENTER_MOTION_REDUCE,
  HERO_ENTER_SHELL_BLOCKS,
} from './constants';
import { HeroBetweenCardsArrow } from './hero-between-cards-arrow';
import { HeroIntroTypewriter } from './hero-intro-typewriter';
import HeroResultReadout from './hero-result-readout';
import HeroUploadColumn from './hero-upload-column';

export default function Hero() {
  return (
    <section
      className="hero-section border-edge/60 relative overflow-hidden border-b bg-canvas"
      aria-labelledby="hero-heading"
    >
      <div className="relative layout-page-shell py-8 sm:py-10 lg:py-12">
        {HERO_ENTER_SHELL_BLOCKS.map(({ ID, SHELL }) => (
          <div key={ID} className={cn(SHELL, HERO_ENTER_MOTION_REDUCE)}>
            {ID === 'intro' ? (
              <HeroIntroTypewriter />
            ) : (
              <div className={HERO_ENTER_GRID_SHELL}>
                <div className="relative z-0 h-full min-h-0 w-full min-w-0">
                  <HeroUploadColumn />
                </div>
                <HeroBetweenCardsArrow />
                <div className="relative z-0 h-full min-h-0 w-full min-w-0">
                  <HeroResultReadout />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
