'use client';

import type { MouseEvent } from 'react';
import { useSyncExternalStore } from 'react';

import { cn } from '@/lib/utils';

import {
  NAV,
  NAV_MAIN_SECTION_LINKS,
  NAV_SCROLL_SPY_HEADER_OFFSET_PX,
  NAV_SCROLL_SPY_VIEWPORT_EXTRA_PX,
} from './constants';

type NavBarSectionLinksProps = Readonly<{
  onAfterNavigate?: () => void;
  variant: 'desktop' | 'drawer';
}>;

/**
 * Last section (in page order) whose top edge has crossed into the band under the sticky header.
 * Uses viewport coordinates only — same condition as “has this section’s start passed the line + slack?”.
 */
function getActiveSectionIdFromScroll(): string | null {
  const band = NAV_SCROLL_SPY_HEADER_OFFSET_PX + NAV_SCROLL_SPY_VIEWPORT_EXTRA_PX;
  let active: string | null = null;
  for (const row of NAV_MAIN_SECTION_LINKS) {
    const el = document.getElementById(row.SECTION_ID);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= band) active = row.SECTION_ID;
  }
  return active;
}

function navigateToSection(href: string, e: MouseEvent<HTMLAnchorElement>) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const id = href.startsWith('#') ? href.slice(1) : '';
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.pushState(null, '', `#${id}`);
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};

  const onScrollOrResize = () => {
    onStoreChange();
  };

  const onHashChange = () => {
    window.requestAnimationFrame(() => {
      onStoreChange();
    });
  };

  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
  window.addEventListener('hashchange', onHashChange);

  if ('onscrollend' in window) {
    window.addEventListener('scrollend', onScrollOrResize, { passive: true });
  }

  return () => {
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
    window.removeEventListener('hashchange', onHashChange);
    if ('onscrollend' in window) {
      window.removeEventListener('scrollend', onScrollOrResize);
    }
  };
}

function getSnapshot() {
  return getActiveSectionIdFromScroll();
}

function getServerSnapshot() {
  return null;
}

export function NavBarSectionLinks({ onAfterNavigate, variant }: NavBarSectionLinksProps) {
  const activeId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const linkClass = (isActive: boolean) =>
    cn(
      variant === 'desktop' && 'transition-colors',
      variant === 'drawer' &&
        'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors motion-reduce:transition-none',
      variant === 'drawer' && isActive && 'bg-surface-overlay/70 text-accent-mid',
      variant === 'drawer' && !isActive && 'text-content-muted hover:bg-surface-overlay hover:text-content',
      variant === 'desktop' && isActive && 'text-accent-mid',
      variant === 'desktop' && !isActive && 'text-content-muted hover:text-content',
    );

  const handleClick = (href: string, e: MouseEvent<HTMLAnchorElement>) => {
    navigateToSection(href, e);
    onAfterNavigate?.();
  };

  return (
    <>
      {NAV_MAIN_SECTION_LINKS.map((row) => {
        const isActive = activeId === row.SECTION_ID;
        return (
          <a
            key={row.SECTION_ID}
            href={row.HREF}
            aria-current={isActive ? 'location' : undefined}
            aria-label={`${row.LABEL} — jump to section`}
            onClick={(e) => handleClick(row.HREF, e)}
            className={linkClass(isActive)}
          >
            {row.LABEL}
          </a>
        );
      })}
      <span
        className={cn(
          'cursor-default select-none text-content-muted',
          variant === 'drawer' && 'block px-3 py-2.5 text-base text-content-subtle',
        )}
        aria-label={`${NAV.LOGIN} (coming soon)`}
      >
        {NAV.LOGIN}
      </span>
    </>
  );
}
