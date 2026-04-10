'use client';

import { useEffect, useState } from 'react';
import { CITIES, TAIPEI } from '@/data/cities';
import { dayIcon, hourInTz } from '@/lib/timezone';

const FEATURED = ['tokyo', 'london', 'new-york'];

/**
 * Ultra-lightweight mobile clock display.
 * No SVG, no AnalogClock import, minimal JS.
 */
export function MobileClocks() {
  const [now, setNow] = useState<Date | null>(null);
  const [localTz, setLocalTz] = useState('');

  useEffect(() => {
    setNow(new Date());
    setLocalTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!now) return <div className="h-28 bg-gray-50 rounded-xl animate-pulse" />;

  const localCity = CITIES.find((c) => c.tz === localTz);
  const clocks = [
    {
      label: localCity ? `📍 ${localCity.name}` : '📍 你的位置',
      tz: localTz || TAIPEI.tz,
    },
    ...FEATURED.map((slug) => {
      const c = CITIES.find((ci) => ci.slug === slug)!;
      return { label: `${c.flag} ${c.name}`, tz: c.tz };
    }),
  ];

  return (
    <div className="grid grid-cols-2 gap-2 mb-6">
      {clocks.map((c) => {
        const h = hourInTz(now, c.tz);
        const night = h < 6 || h >= 20;
        const time = now.toLocaleTimeString('zh-TW', {
          timeZone: c.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        });
        return (
          <div
            key={c.tz}
            className={`rounded-xl px-3 py-2.5 shadow-sm ${night ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
          >
            <div className="text-xs font-semibold truncate">{c.label}</div>
            <div className="font-mono text-xl font-bold tracking-wide">
              {time} <span className="text-sm">{dayIcon(h)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
