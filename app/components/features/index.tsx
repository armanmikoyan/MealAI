import { IconTextCard } from '@/app/components/icon-text-card';
import { ScrollEnter } from '@/app/components/scroll';
import { FEATURE_CARD_ROWS } from './constants';
import { FeaturesSectionIntro } from './features-section-intro';

export default function Features() {
  return (
    <section
      id="features"
      className="border-edge/60 border-t bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="features-heading"
    >
      <ScrollEnter
        className="mx-auto w-full max-w-[min(90rem,calc(100vw-1.5rem))] px-4 sm:px-6 lg:px-10"
        rows={[
          {
            KEY: 'body',
            content: (
              <>
                <FeaturesSectionIntro />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                  {FEATURE_CARD_ROWS.map((row) => (
                    <IconTextCard
                      key={row.KEY}
                      as="article"
                      body={row.BODY}
                      icon={row.ICON}
                      iconShell={row.ICON_SHELL}
                      layout="vertical"
                      title={row.TITLE}
                    />
                  ))}
                </div>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
