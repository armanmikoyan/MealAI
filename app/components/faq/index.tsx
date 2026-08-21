import { ScrollEnter } from '@/app/components/scroll';

import { FaqList } from './faq-list';
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
                <FaqList />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
