'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CITIES, TAIPEI } from '@/data/cities';
import { ALL_PAIRS } from '@/data/city-pairs';

export function CitySelector() {
  const router = useRouter();
  const [cityA, setCityA] = useState(TAIPEI.slug);
  const [cityB, setCityB] = useState(CITIES.find((c) => c.slug !== TAIPEI.slug)!.slug);

  function swap() {
    const tmp = cityA;
    setCityA(cityB);
    setCityB(tmp);
  }

  function go() {
    if (cityA === cityB) return;
    // Try to find the pair in either direction
    const slug1 = `${cityA}-${cityB}`;
    const slug2 = `${cityB}-${cityA}`;
    const found = ALL_PAIRS.find((p) => p.slug === slug1 || p.slug === slug2);
    if (found) {
      router.push(`/${found.slug}`);
    } else {
      // Fallback: taipei-first if one side is taipei, otherwise alphabetical
      const sorted = [cityA, cityB].sort();
      router.push(`/${sorted[0]}-${sorted[1]}`);
    }
  }

  const otherCitiesA = CITIES.filter((c) => c.slug !== cityB);
  const otherCitiesB = CITIES.filter((c) => c.slug !== cityA);

  return (
    <div className="bg-white rounded-2xl p-7 max-w-lg mx-auto shadow-md relative" role="search" aria-label="時區轉換器">
      {/* From */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 text-right text-sm text-gray-400 font-semibold shrink-0">
          從
        </span>
        <select
          value={cityA}
          onChange={(e) => setCityA(e.target.value)}
          aria-label="出發城市"
          className="flex-1 text-base px-4 py-3 border-2 border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50 text-gray-700 font-semibold cursor-pointer transition-colors focus:outline-none focus:border-[#2563eb]"
        >
          {otherCitiesA.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.flag} {c.name}（{c.country}）
            </option>
          ))}
        </select>
      </div>

      {/* Swap button */}
      <div className="flex justify-center -my-1 relative z-10">
        <button
          onClick={swap}
          className="w-9 h-9 rounded-full bg-white border-2 border-gray-200 text-gray-400 hover:text-[#2563eb] hover:border-[#2563eb] cursor-pointer transition-colors flex items-center justify-center text-lg shadow-sm"
          title="交換"
        >
          ⇅
        </button>
      </div>

      {/* To */}
      <div className="flex items-center gap-3 mt-3">
        <span className="w-8 text-right text-sm text-gray-400 font-semibold shrink-0">
          至
        </span>
        <select
          value={cityB}
          onChange={(e) => setCityB(e.target.value)}
          aria-label="目標城市"
          className="flex-1 text-base px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-700 cursor-pointer transition-colors focus:outline-none focus:border-[#2563eb]"
        >
          {otherCitiesB.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.flag} {c.name}（{c.country}）
            </option>
          ))}
        </select>
      </div>

      {/* Go */}
      <div className="mt-6 text-center">
        <button
          onClick={go}
          disabled={cityA === cityB}
          className="px-14 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white border-0 rounded-xl text-base font-bold cursor-pointer shadow-lg shadow-blue-300/30 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-300/40 transition-all active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          開始轉換 →
        </button>
      </div>
    </div>
  );
}
