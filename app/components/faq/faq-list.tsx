'use client';

import { useState } from 'react';

import { FAQ_ITEMS } from './constants';
import { FaqItem } from './faq-item';

export function FaqList() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="mx-auto mt-10 flex min-h-[32rem] max-w-4xl flex-col gap-3 sm:mt-12 sm:min-h-[34rem] sm:gap-4">
      {FAQ_ITEMS.map((item) => (
        <FaqItem
          key={item.KEY}
          item={item}
          isOpen={openKey === item.KEY}
          onToggle={() => {
            setOpenKey((current) => (current === item.KEY ? null : item.KEY));
          }}
        />
      ))}
    </div>
  );
}
