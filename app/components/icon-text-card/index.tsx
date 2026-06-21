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
        'border-edge-strong bg-surface-raised/40 rounded-2xl border p-5 sm:p-6',
        layout === 'horizontal' ? 'flex gap-4 sm:gap-5' : 'flex flex-col gap-4 sm:gap-5',
        className,
      )}
    >
      <div
        className={cn(
          'flex size-11 shrink-0 items-center justify-center rounded-xl sm:size-12',
          iconShell,
        )}
      >
        <Icon className="size-5 sm:size-5" strokeWidth={1.65} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-content text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
        <p className="text-content-muted mt-2 text-sm leading-relaxed sm:text-[15px]">{body}</p>
      </div>
    </Root>
  );
}
