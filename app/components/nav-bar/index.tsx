'use client';

import { Activity, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/lib/utils';

import { NAV } from './constants';
import { NavBarSectionLinks } from './nav-bar-section-links';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  useEffect(() => {
    // Single post-hydration flip so SSR matches first paint; portal then mounts to `document.body`.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- portal host only exists on client
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const mobileLayers = mounted
    ? createPortal(
        <>
          <div
            className={cn(
              'fixed inset-x-0 top-20 bottom-0 z-[100] bg-gradient-to-r from-transparent via-black/15 to-black/50 transition-opacity duration-200 lg:hidden',
              menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
            )}
            aria-hidden={!menuOpen}
            onClick={() => setMenuOpen(false)}
          />

          <div
            id={panelId}
            className={cn(
              'border-edge bg-surface-raised/95 supports-[backdrop-filter]:bg-surface-raised/88 fixed top-20 left-0 bottom-0 z-[110] flex w-full max-w-sm flex-col border-r text-content shadow-2xl backdrop-blur-md transition-transform duration-200 ease-out motion-reduce:transition-none lg:hidden',
              menuOpen ? 'translate-x-0' : 'pointer-events-none -translate-x-full',
            )}
            aria-hidden={!menuOpen}
            {...(!menuOpen ? { inert: true } : {})}
          >
            <div className="border-edge/60 border-b px-4 py-3">
              <p className="text-content-muted text-xs font-semibold tracking-widest uppercase">{NAV.MENU_HEADING}</p>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto p-3">
              <NavBarSectionLinks variant="drawer" onAfterNavigate={() => setMenuOpen(false)} />
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <header className="bg-surface-raised/85 sticky top-0 z-50 shrink-0 border-b border-edge backdrop-blur-sm">
      <nav
        className="layout-page-shell flex h-20 items-center gap-3 sm:gap-4"
        aria-label="Main"
      >
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            className="text-content hover:opacity-90 flex min-w-0 items-center gap-2 text-2xl font-medium transition-opacity sm:text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <Activity
              className="text-content motion-safe:animate-pulse size-9 shrink-0 sm:size-10"
              strokeWidth={2}
              aria-hidden
            />
            <span className="text-content" aria-hidden>
              {NAV.SEPARATOR}
            </span>
            <span className="tracking-tight">{NAV.BRAND}</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="text-content-muted hidden shrink-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium sm:gap-x-8 sm:text-base lg:flex">
            <NavBarSectionLinks variant="desktop" />
          </div>

          <button
            type="button"
            className="text-content hover:bg-surface-overlay/80 flex size-10 shrink-0 items-center justify-center rounded-lg border border-edge transition-colors lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? NAV.MENU_CLOSE : NAV.MENU_OPEN}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-5" strokeWidth={2} aria-hidden /> : <Menu className="size-5" strokeWidth={2} aria-hidden />}
          </button>
        </div>
      </nav>

      {mobileLayers}
    </header>
  );
}
