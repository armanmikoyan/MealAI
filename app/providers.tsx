'use client';

import type { ReactNode } from 'react';
import { Provider } from 'jotai';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <Provider>{children}</Provider>;
}
