'use client';

import { useAtom } from 'jotai/react';
import { Button } from '@/app/ui/button';
import { TEST } from './constants';
import { countAtom } from './state';
import { formatCount } from './utils';

export default function Test() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold text-foreground">{TEST.TITLE}</h1>
      <p className="text-content-muted tabular-nums">{formatCount(count)}</p>
      <Button type="button" variant="outline" onClick={() => setCount((c) => c + 1)}>
        {TEST.INCREMENT_LABEL}
      </Button>
    </main>
  );
}
