import { ScrollEnter } from '@/app/components/scroll';

import { FAQ_ITEMS } from './constants';
import { FaqItem } from './faq-item';
import { FaqSectionIntro } from './faq-section-intro';

export default function Faq() {
  return (
    <section
      id="faq"
      className="border-edge/60 scroll-mt-28 border-t bg-canvas pt-16 pb-28 sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-44"
      aria-labelledby="faq-heading"
    >
      <ScrollEnter
        className="layout-page-shell"
        rows={[
          {
            KEY: 'body',
            content: (
              <>
                <FaqSectionIntro />
                <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 sm:mt-12 sm:gap-4">
                  {FAQ_ITEMS.map((item) => (
                    <FaqItem key={item.KEY} item={item} />
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
