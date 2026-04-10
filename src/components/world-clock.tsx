'use client';

import { useEffect, useState, useMemo } from 'react';
import { CITIES, TAIPEI, type City } from '@/data/cities';
import { hourInTz, dayIcon, diffHours } from '@/lib/timezone';
import { AnalogClock } from './analog-clock';

// Featured clocks
const FEATURED_TZ = [
  { slug: 'new-york', label: '紐約' },
  { slug: 'london', label: '倫敦' },
  { slug: 'tokyo', label: '東京' },
  { slug: 'sydney', label: '雪梨' },
];

// Continent grouping
interface ContinentGroup {
  key: string;
  label: string;
  emoji: string;
  filter: (c: City) => boolean;
}

const CONTINENTS: ContinentGroup[] = [
  { key: 'asia', label: '亞洲', emoji: '🌏', filter: (c) => c.tz.startsWith('Asia/') },
  { key: 'europe', label: '歐洲', emoji: '🌍', filter: (c) => c.tz.startsWith('Europe/') },
  { key: 'americas', label: '美洲', emoji: '🌎', filter: (c) => c.tz.startsWith('America/') || c.tz === 'Pacific/Honolulu' },
  { key: 'oceania', label: '大洋洲', emoji: '🏝️', filter: (c) => c.tz.startsWith('Australia/') || (c.tz.startsWith('Pacific/') && c.tz !== 'Pacific/Honolulu') },
  { key: 'africa', label: '非洲', emoji: '🌍', filter: (c) => c.tz.startsWith('Africa/') },
];

function getTimePartsInTz(date: Date, tz: string) {
  const parts = date
    .toLocaleTimeString('en-US', {
      timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    })
    .split(':')
    .map(Number);
  return { h: parts[0] % 24, m: parts[1], s: parts[2] };
}

export function WorldClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [localTz, setLocalTz] = useState('');

  useEffect(() => {
    setNow(new Date());
    setLocalTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    let raf: number;
    let lastSec = -1;
    function tick() {
      const d = new Date();
      if (d.getSeconds() !== lastSec) {
        lastSec = d.getSeconds();
        setNow(d);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Group cities by continent, sort each group by diff from Taipei
  const grouped = useMemo(() => {
    if (!now) return [];
    return CONTINENTS.map((cont) => {
      const cities = CITIES.filter(cont.filter).sort((a, b) => {
        const da = diffHours(now, TAIPEI.tz, a.tz);
        const db = diffHours(now, TAIPEI.tz, b.tz);
        return da - db;
      });
      return { ...cont, cities };
    }).filter((g) => g.cities.length > 0);
  }, [now]);

  if (!now) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="flex justify-center gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-28 h-40 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  // Featured clocks
  const localParts = getTimePartsInTz(now, localTz || TAIPEI.tz);
  const localTimeStr = now.toLocaleTimeString('zh-TW', {
    timeZone: localTz || TAIPEI.tz,
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  const localCity = CITIES.find((c) => c.tz === localTz);
  const localHour = localParts.h;

  const featuredData = FEATURED_TZ.map((f) => {
    const city = CITIES.find((c) => c.slug === f.slug)!;
    const parts = getTimePartsInTz(now, city.tz);
    const timeStr = now.toLocaleTimeString('zh-TW', {
      timeZone: city.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    const weekday = now.toLocaleDateString('zh-TW', { timeZone: city.tz, weekday: 'short' });
    return { ...f, city, parts, timeStr, weekday, flag: city.flag };
  });

  return (
    <div>
      {/* ===== Section 1: Featured analog clocks ===== */}
      <div className="flex justify-center gap-6 md:gap-10 mb-10 overflow-x-auto pb-3 flex-wrap">
        <AnalogClock
          hour={localParts.h} minute={localParts.m} second={localParts.s}
          size={140}
          label={localCity ? `📍 ${localCity.name}` : '📍 你的位置'}
          sublabel={localCity?.country}
          timeStr={localTimeStr}
          isNight={localHour < 6 || localHour >= 20}
        />
        {featuredData.map((f) => (
          <AnalogClock
            key={f.slug}
            hour={f.parts.h} minute={f.parts.m} second={f.parts.s}
            size={140}
            label={`${f.flag} ${f.label}`}
            sublabel={f.weekday}
            timeStr={f.timeStr}
            isNight={f.parts.h < 6 || f.parts.h >= 20}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * The city table grouped by continent.
 * Separated so it can be placed after the converter on the page.
 */
export function WorldCityTable() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    let raf: number;
    let lastSec = -1;
    function tick() {
      const d = new Date();
      if (d.getSeconds() !== lastSec) {
        lastSec = d.getSeconds();
        setNow(d);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const grouped = useMemo(() => {
    if (!now) return [];
    return CONTINENTS.map((cont) => {
      const cities = CITIES.filter(cont.filter).sort((a, b) => {
        const da = diffHours(now, TAIPEI.tz, a.tz);
        const db = diffHours(now, TAIPEI.tz, b.tz);
        return da - db;
      });
      return { ...cont, cities };
    }).filter((g) => g.cities.length > 0);
  }, [now]);

  if (!now) {
    return <div className="h-64 bg-gray-100 rounded-xl animate-pulse" />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-700">
          各大城市時間
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">
          以台北為基準，按各洲時差排列 · 點擊城市查看詳細時差
        </p>
      </div>

      {grouped.map((group) => (
        <div key={group.key}>
          {/* Continent header */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-600">
              {group.emoji} {group.label}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              {group.cities.length} 個城市
            </span>
          </div>
          {/* City rows */}
          <table className="w-full text-sm">
            <tbody>
              {group.cities.map((city, i) => (
                <CityRow key={city.slug} city={city} now={now} odd={i % 2 === 1} />
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* UTC footer */}
      <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-400 text-center">
        UTC：
        {now.toLocaleTimeString('zh-TW', {
          timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        })}
        {' — '}
        {now.toLocaleDateString('zh-TW', {
          timeZone: 'UTC', month: 'long', day: 'numeric', weekday: 'short',
        })}
      </div>
    </div>
  );
}

function CityRow({ city, now, odd }: { city: City; now: Date; odd: boolean }) {
  const hour = hourInTz(now, city.tz);
  const icon = dayIcon(hour);
  const isNight = hour < 6 || hour >= 20;
  const diff = diffHours(now, TAIPEI.tz, city.tz);
  const diffStr = diff === 0 ? '±0' : diff > 0 ? `+${diff}` : `${diff}`;

  const time = now.toLocaleTimeString('zh-TW', {
    timeZone: city.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  const date = now.toLocaleDateString('zh-TW', {
    timeZone: city.tz, month: 'numeric', day: 'numeric', weekday: 'short',
  });

  const href = city.slug === TAIPEI.slug ? '#' : `/${TAIPEI.slug}-${city.slug}`;

  return (
    <tr
      className={`${odd ? 'bg-gray-50/50' : ''} ${isNight ? 'text-gray-400' : 'text-gray-700'} hover:bg-blue-50/40 transition-colors`}
    >
      <td className="px-4 py-2 w-[30%]">
        <a href={href} className="hover:text-[#2563eb] transition-colors">
          {city.flag} <span className="font-medium">{city.name}</span>
        </a>
      </td>
      <td className="px-2 py-2 text-xs text-gray-400 w-[18%]">{city.country}</td>
      <td className="px-2 py-2 text-center w-[12%]">
        <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${
          diff === 0
            ? 'bg-green-50 text-green-600'
            : diff > 0
              ? 'bg-blue-50 text-blue-500'
              : 'bg-orange-50 text-orange-500'
        }`}>
          {diffStr}h
        </span>
      </td>
      <td className="px-3 py-2 text-right w-[24%]">
        <span className="font-mono font-semibold">{time}</span>
        <span className="ml-1 text-xs">{icon}</span>
      </td>
      <td className="px-3 py-2 text-right text-xs text-gray-400 w-[16%] max-md:hidden">
        {date}
      </td>
    </tr>
  );
}
