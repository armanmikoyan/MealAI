import { Activity, Mail } from 'lucide-react';
import Link from 'next/link';

import {
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COMPANY_ITEMS,
  SITE_FOOTER_CONNECT,
  SITE_FOOTER_MAIN,
  SITE_FOOTER_PRODUCT_LINKS,
} from './constants';

export default function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-edge/60 scroll-mt-28 border-t bg-surface py-14 sm:py-16 lg:py-20"
      aria-labelledby="site-footer-heading"
    >
      <div className="layout-page-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <Activity className="text-accent-mid size-8 shrink-0" strokeWidth={1.75} aria-hidden />
              <h2 id="site-footer-heading" className="text-content text-xl font-semibold tracking-tight">
                {SITE_FOOTER_MAIN.BRAND}
              </h2>
            </div>
            <p className="text-content-muted mt-3 max-w-sm text-sm leading-relaxed">{SITE_FOOTER_MAIN.TAGLINE}</p>
            <p className="text-content-subtle mt-2 max-w-sm text-sm leading-relaxed">{SITE_FOOTER_MAIN.SUBLINE}</p>
            <p className="text-content-muted mt-5 max-w-md border-edge/60 border-l-2 border-accent/40 pl-4 text-sm leading-relaxed">
              {SITE_FOOTER_MAIN.CTA_LINE}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3 lg:gap-8">
            <nav aria-labelledby="site-footer-product-heading">
              <h3
                id="site-footer-product-heading"
                className="text-content-muted text-xs font-semibold tracking-widest uppercase"
              >
                {SITE_FOOTER_COLUMNS.PRODUCT_HEADING}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm font-medium">
                {SITE_FOOTER_PRODUCT_LINKS.map((item) => (
                  <li key={item.KEY}>
                    <Link
                      href={item.HREF}
                      className="text-content hover:text-accent-mid transition-colors"
                    >
                      {item.LABEL}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="site-footer-company-heading">
              <h3
                id="site-footer-company-heading"
                className="text-content-muted text-xs font-semibold tracking-widest uppercase"
              >
                {SITE_FOOTER_COLUMNS.COMPANY_HEADING}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm font-medium">
                {SITE_FOOTER_COMPANY_ITEMS.map((item) => (
                  <li key={item.KEY}>
                    {item.HREF ? (
                      <a
                        href={item.HREF}
                        className="text-content hover:text-accent-mid transition-colors"
                      >
                        {item.LABEL}
                      </a>
                    ) : (
                      <span
                        className="text-content-subtle cursor-default"
                        title="Policy pages ship with public accounts."
                      >
                        {item.LABEL}
                        <span className="text-content-subtle/80 ml-1.5 text-xs font-normal">· soon</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div aria-labelledby="site-footer-connect-heading">
              <h3
                id="site-footer-connect-heading"
                className="text-content-muted text-xs font-semibold tracking-widest uppercase"
              >
                {SITE_FOOTER_COLUMNS.CONNECT_HEADING}
              </h3>
              <p className="text-content-muted mt-4 text-sm leading-relaxed">{SITE_FOOTER_CONNECT.BLURB}</p>
              <a
                href={SITE_FOOTER_CONNECT.EMAIL_HREF}
                className="text-content hover:text-accent-mid mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <Mail className="size-4 shrink-0 opacity-80" strokeWidth={2} aria-hidden />
                {SITE_FOOTER_CONNECT.EMAIL_LABEL}
              </a>
            </div>
          </div>
        </div>

        <div className="border-edge/60 mt-14 flex flex-col gap-4 border-t pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-content-subtle text-xs sm:text-sm">{SITE_FOOTER_MAIN.COPYRIGHT}</p>
          <p className="text-content-subtle max-w-xl text-xs leading-relaxed sm:text-right sm:text-sm">
            {SITE_FOOTER_MAIN.LEGAL_NOTE}
          </p>
        </div>
      </div>
    </footer>
  );
}
