import { Activity } from 'lucide-react';
import Link from 'next/link';

import { NAV } from './constants';

export function Navbar() {
  return (
    <header className="bg-surface-raised/85 sticky top-0 z-50 shrink-0 border-b border-edge backdrop-blur-sm">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6"
        aria-label="Main"
      >
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            className="text-content hover:opacity-90 flex min-w-0 items-center gap-2 text-3xl font-medium transition-opacity"
          >
            <Activity
              className="text-content motion-safe:animate-pulse size-10 shrink-0"
              strokeWidth={2}
              aria-hidden
            />
            <span className="text-content" aria-hidden>
              {NAV.SEPARATOR}
            </span>
            <span className="tracking-tight">{NAV.BRAND}</span>
          </Link>
        </div>

        <div className="text-content-muted ml-auto flex shrink-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium sm:gap-x-8 sm:text-base">
          <Link
            href="/#how-it-works"
            className="hover:text-content transition-colors"
            aria-label={`${NAV.HOW_IT_WORKS} — jump to section`}
          >
            {NAV.HOW_IT_WORKS}
          </Link>
          <Link
            href="/#features"
            className="hover:text-content transition-colors"
            aria-label={`${NAV.FEATURES} — jump to section`}
          >
            {NAV.FEATURES}
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-content transition-colors"
            aria-label={`${NAV.PRICING} — jump to section`}
          >
            {NAV.PRICING}
          </Link>
          <span className="cursor-default select-none" aria-label={`${NAV.LOGIN} (coming soon)`}>
            {NAV.LOGIN}
          </span>
        </div>
      </nav>
    </header>
  );
}
