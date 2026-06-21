import type { ReactNode } from 'react';

import Features from '@/app/components/features';
import Hero from '@/app/components/hero';
import HowItWorks from '@/app/components/how-it-works';
import Pricing from '@/app/components/pricing';

export default function Page(): ReactNode {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
    </>
  );
}
