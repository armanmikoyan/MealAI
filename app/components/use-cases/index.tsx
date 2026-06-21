import { IconTextCard } from '@/app/components/icon-text-card';
import { ScrollEnter } from '@/app/components/scroll';

import { USE_CASE_CARD_ROWS } from './constants';
import { UseCasesSectionIntro } from './use-cases-section-intro';

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="border-edge/60 scroll-mt-28 border-t bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="use-cases-heading"
    >
      <ScrollEnter
        className="layout-page-shell"
        rows={[
          {
            KEY: 'body',
            content: (
              <>
                <UseCasesSectionIntro />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {USE_CASE_CARD_ROWS.map((row) => (
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
