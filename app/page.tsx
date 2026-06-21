import type { ReactNode } from 'react';
import Hero from '@/app/components/hero';
import Pricing from '@/app/components/pricing';

export default function Page(): ReactNode {
  return (
    <>
      <Hero />
      <Pricing />
    </>
  );
}
