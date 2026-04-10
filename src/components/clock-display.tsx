'use client';

import { useEffect, useState, useCallback } from 'react';
import type { City } from '@/data/cities';
import {
  tzAbbr,
  tzOffset,
  hourInTz,
  dayPhase,
  dayIcon,
} from '@/lib/timezone';
import { fmtTime, fmtSeconds, fmtDateFull, type TimeFormat } from '@/lib/format';

interface ClockDisplayProps {
  cityA: City;
  cityB: City;
  format: TimeFormat;
}

const FACE_CLASSES: Record<string, string> = {
  dawn: 'bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e]',
  day: 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e]',
  dusk: 'bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e]',
  night: 'bg-gradient-to-br from-[#0a0a1a] to-[#0d1117]',
};

export function ClockDisplay({ cityA, cityB, format }: ClockDisplayProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) {
    return (
      <div className="flex gap-5 mb-1">
        <ClockSkeleton />
        <ClockSkeleton />
      </div>
    );
  }

  return (
    <div className="flex gap-5 mb-1 max-md:flex-col max-md:gap-4">
      <SingleClock city={cityA} now={now} format={format} />
      <SingleClock city={cityB} now={now} format={format} />
    </div>
  );
}

function SingleClock({
  city,
  now,
  format,
}: {
  city: City;
  now: Date;
  format: TimeFormat;
}) {
  const hour = hourInTz(now, city.tz);
  const phase = dayPhase(hour);
  const icon = dayIcon(hour);

  return (
    <div className="flex-1 text-center">
      <h2 className="text-lg font-bold mb-2 text-gray-800">
        <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite] origin-bottom">
          {city.flag}
        </span>{' '}
        {city.name}時間
      </h2>
      <div
        className={`${FACE_CLASSES[phase]} rounded-xl px-4 py-6 relative text-white transition-colors duration-700`}
      >
        <div className="absolute left-3.5 top-3.5 text-xl animate-[pulse_3s_ease-in-out_infinite]">
          {icon}
        </div>
        <div className="flex items-baseline justify-center">
          <span className="font-mono text-5xl font-bold tracking-wider max-md:text-3xl">
            {fmtTime(now, city.tz, format)}
          </span>
          <span className="font-mono text-xl font-bold text-gray-400 ml-0.5 max-md:text-base">
            .{fmtSeconds(now, city.tz)}
          </span>
        </div>
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-right text-sm text-gray-400 leading-relaxed">
          <div className="text-base font-semibold text-gray-300">
            {tzAbbr(now, city.tz)}
          </div>
          <div>{tzOffset(now, city.tz)}</div>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          {fmtDateFull(now, city.tz)}
        </div>
      </div>
    </div>
  );
}

function ClockSkeleton() {
  return (
    <div className="flex-1 text-center">
      <div className="h-6 mb-2" />
      <div className="bg-gray-800 rounded-xl px-4 py-6 animate-pulse">
        <div className="h-12 bg-gray-700 rounded mx-auto w-48" />
        <div className="h-4 bg-gray-700 rounded mx-auto w-36 mt-3" />
      </div>
    </div>
  );
}
