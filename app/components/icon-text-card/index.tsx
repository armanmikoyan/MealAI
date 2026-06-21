import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type IconTextCardRoot = 'article' | 'div' | 'li';

type IconTextCardProps = Readonly<{
  as: IconTextCardRoot;
  body: string;
  className?: string;
  icon: LucideIcon;
  iconShell: string;
  layout: 'horizontal' | 'vertical';
  title: string;
}>;

export function IconTextCard({
  as: Root,
  body,
  className,
  icon: Icon,
  iconShell,
  layout,
  title,
}: IconTextCardProps) {
  return (
    <Root
      className={cn(
        'group border-edge-strong from-surface-raised/55 via-surface-raised/35 to-surface-overlay/25 relative min-w-0 overflow-hidden rounded-2xl border bg-linear-to-br p-5 shadow-[0_10px_36px_-22px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:p-6',
        'hover:-translate-y-1 hover:border-content-muted/25 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.08)]',
        'motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_10px_36px_-22px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)]',
        layout === 'horizontal' ? 'flex gap-4 sm:gap-5' : 'flex flex-col gap-4 sm:gap-5',
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-white/8 via-transparent to-accent/15 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
      />
      <div
        className={cn(
          'relative z-[1] flex size-11 shrink-0 items-center justify-center rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-[transform,box-shadow] duration-300 ease-out will-change-transform group-hover:scale-105 group-hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)] sm:size-12',
          'motion-reduce:group-hover:scale-100 motion-reduce:group-hover:shadow-none',
          iconShell,
        )}
      >
        <Icon className="size-5 sm:size-5" strokeWidth={1.65} aria-hidden />
      </div>
      <div className="relative z-[1] min-w-0 flex-1">
        <h3 className="text-content text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
        <p className="text-content-muted mt-2 text-sm leading-relaxed sm:text-[15px]">{body}</p>
      </div>
    </Root>
  );
}
