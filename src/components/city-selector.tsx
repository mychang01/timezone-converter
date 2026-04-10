'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TAIPEI, OTHER_CITIES } from '@/data/cities';

export function CitySelector() {
  const router = useRouter();
  const [selected, setSelected] = useState(OTHER_CITIES[0].slug);

  function go() {
    router.push(`/${TAIPEI.slug}-${selected}`);
  }

  return (
    <div className="bg-white rounded-2xl p-9 max-w-lg mx-auto shadow-md relative">
      {/* From */}
      <div className="flex items-center gap-3.5 mb-5">
        <span className="w-9 text-right text-sm text-gray-400 font-semibold shrink-0">
          從
        </span>
        <div className="flex-1 text-left text-base px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl font-semibold text-gray-700">
          <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite] origin-bottom">
            {TAIPEI.flag}
          </span>{' '}
          {TAIPEI.name}（{TAIPEI.country}）
        </div>
      </div>
      {/* To */}
      <div className="flex items-center gap-3.5">
        <span className="w-9 text-right text-sm text-gray-400 font-semibold shrink-0">
          至
        </span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="flex-1 text-base px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-700 cursor-pointer transition-colors focus:outline-none focus:border-[#7c6dd8]"
        >
          {OTHER_CITIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.flag} {c.name}（{c.country}）
            </option>
          ))}
        </select>
      </div>
      {/* Go */}
      <div className="mt-7 text-center">
        <button
          onClick={go}
          className="px-14 py-3.5 bg-gradient-to-r from-[#7c6dd8] to-[#5b8def] text-white border-0 rounded-xl text-base font-bold cursor-pointer shadow-lg shadow-purple-300/30 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-purple-300/40 transition-all active:translate-y-0"
        >
          開始轉換 →
        </button>
      </div>
    </div>
  );
}
