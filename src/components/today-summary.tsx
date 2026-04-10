'use client';

import { useEffect, useState } from 'react';
import type { City } from '@/data/cities';
import { diffHours, isDST, hasDST, hourInTz, dayIcon } from '@/lib/timezone';

interface TodaySummaryProps {
  cityA: City;
  cityB: City;
}

/**
 * Dynamic "today's summary" paragraph.
 * Content changes every day — provides freshness signal for Google.
 * Client component so it always shows current date.
 */
export function TodaySummary({ cityA, cityB }: TodaySummaryProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    const now = new Date();
    const diff = diffHours(now, cityA.tz, cityB.tz);
    const absDiff = Math.abs(diff);
    const direction = diff > 0 ? '快' : diff < 0 ? '慢' : '相同';

    const dateA = now.toLocaleDateString('zh-TW', {
      timeZone: cityA.tz,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    const hA = hourInTz(now, cityA.tz);
    const hB = hourInTz(now, cityB.tz);
    const iconA = dayIcon(hA);
    const iconB = dayIcon(hB);

    const dstInfo = hasDST(cityB.tz, now.getFullYear())
      ? isDST(now, cityB.tz)
        ? `目前${cityB.name}正處於夏令時間。`
        : `目前${cityB.name}使用標準時間。`
      : '';

    const greeting =
      hA >= 5 && hA < 12 ? '早安' :
      hA >= 12 && hA < 18 ? '午安' :
      hA >= 18 && hA < 22 ? '晚安' : '夜深了';

    setText(
      `${greeting}！今天是${dateA}。此刻${cityA.name}是${iconA}，${cityB.name}是${iconB}。` +
      `兩地時差為 ${absDiff} 小時（${cityB.name}比${cityA.name}${direction}）。${dstInfo}`
    );
  }, [cityA, cityB]);

  if (!text) return null;

  return (
    <p className="text-sm text-gray-500 text-center mb-4 px-4 leading-relaxed">
      {text}
    </p>
  );
}
