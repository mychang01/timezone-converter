'use client';

import { useState } from 'react';
import type { FAQItem } from '@/data/faq-content';

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-white rounded-2xl p-4 px-5 mb-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 mb-3">
        常見問題
      </h3>
      <div className="divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full text-left py-3 flex items-center justify-between gap-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              <span>{item.question}</span>
              <span
                className={`text-gray-400 transition-transform text-xs ${openIndex === i ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="pb-3 text-sm text-gray-500 leading-relaxed pl-1">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

