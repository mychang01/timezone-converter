'use client';

import { useState, useEffect, useCallback } from 'react';
import type { City } from '@/data/cities';
import {
  dateStrInTz,
  hourInTz,
  wallClockToUTC,
  getSliderMinutes,
} from '@/lib/timezone';
import { fmtTime, fmtSeconds, fmtSliderTime, type TimeFormat } from '@/lib/format';

interface TimelineStripProps {
  cityA: City;
  cityB: City;
  format: TimeFormat;
  onTimeChange?: (utc: Date) => void;
}

/**
 * Two parallel timeline rows with date strips + time sliders.
 * Plus navigation buttons and format toggle.
 */
export function TimelineStrip({
  cityA,
  cityB,
  format: initialFormat,
  onTimeChange,
}: TimelineStripProps) {
  const [mode, setMode] = useState<'live' | 'frozen'>('live');
  const [frozenUTC, setFrozenUTC] = useState<Date>(new Date());
  const [now, setNow] = useState<Date>(new Date());
  const [format, setFormat] = useState<TimeFormat>(initialFormat);

  // Live tick
  useEffect(() => {
    if (mode !== 'live') return;
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, [mode]);

  const utc = mode === 'live' ? now : frozenUTC;

  const freeze = useCallback((d: Date) => {
    setMode('frozen');
    setFrozenUTC(d);
  }, []);

  const goNow = useCallback(() => {
    setMode('live');
    setNow(new Date());
  }, []);

  const shiftDay = useCallback(
    (n: number) => {
      const ref = mode === 'live' ? new Date() : frozenUTC;
      const ds = dateStrInTz(ref, cityA.tz);
      const [y, mo, d] = ds.split('-').map(Number);
      const mins = getSliderMinutes(ref, cityA.tz);
      const newUTC = wallClockToUTC(
        y,
        mo,
        d + n,
        Math.floor(mins / 60),
        mins % 60,
        cityA.tz
      );
      freeze(newUTC);
    },
    [mode, frozenUTC, cityA.tz, freeze]
  );

  const onSlider = useCallback(
    (which: 'A' | 'B', val: number) => {
      const tz = which === 'A' ? cityA.tz : cityB.tz;
      const ref = mode === 'live' ? new Date() : frozenUTC;
      const mins = val * 5;
      const ds = dateStrInTz(ref, tz);
      const [y, mo, d] = ds.split('-').map(Number);
      freeze(wallClockToUTC(y, mo, d, Math.floor(mins / 60), mins % 60, tz));
    },
    [mode, frozenUTC, cityA.tz, cityB.tz, freeze]
  );

  const onDateClick = useCallback(
    (which: 'A' | 'B', ds: string) => {
      const tz = which === 'A' ? cityA.tz : cityB.tz;
      const ref = mode === 'live' ? new Date() : frozenUTC;
      const [y, mo, d] = ds.split('-').map(Number);
      const mins = getSliderMinutes(ref, tz);
      freeze(wallClockToUTC(y, mo, d, Math.floor(mins / 60), mins % 60, tz));
    },
    [mode, frozenUTC, cityA.tz, cityB.tz, freeze]
  );

  return (
    <div className="mb-3">
      {/* Timeline A */}
      <TimelineRow
        city={cityA}
        which="A"
        utc={utc}
        format={format}
        onSlider={onSlider}
        onDateClick={onDateClick}
      />
      {/* Timeline B */}
      <TimelineRow
        city={cityB}
        which="B"
        utc={utc}
        format={format}
        onSlider={onSlider}
        onDateClick={onDateClick}
      />

      {/* Nav buttons */}
      <div className="flex items-center mt-2">
        <div className="w-20 shrink-0" />
        <div className="flex-1 flex items-center gap-1.5 flex-wrap">
          <NavBtn onClick={() => shiftDay(-6)}>⏪ -6天</NavBtn>
          <NavBtn onClick={() => shiftDay(-3)}>-3天</NavBtn>
          <NavBtn onClick={() => shiftDay(-1)}>←</NavBtn>
          <button
            onClick={goNow}
            className="px-3 py-1 rounded-md text-xs font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#3b82f6] border-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            現在
          </button>
          <NavBtn onClick={() => shiftDay(1)}>→</NavBtn>
          <NavBtn onClick={() => shiftDay(3)}>+3天</NavBtn>
          <NavBtn onClick={() => shiftDay(6)}>+6天 ⏩</NavBtn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-blue-100">
        <div className="inline-flex border border-gray-200 rounded-md overflow-hidden">
          <FmtBtn active={format === 12} onClick={() => setFormat(12)}>
            12H
          </FmtBtn>
          <FmtBtn active={format === 24} onClick={() => setFormat(24)}>
            24H
          </FmtBtn>
        </div>
      </div>
    </div>
  );
}

function TimelineRow({
  city,
  which,
  utc,
  format,
  onSlider,
  onDateClick,
}: {
  city: City;
  which: 'A' | 'B';
  utc: Date;
  format: TimeFormat;
  onSlider: (w: 'A' | 'B', val: number) => void;
  onDateClick: (w: 'A' | 'B', ds: string) => void;
}) {
  const curDS = dateStrInTz(utc, city.tz);
  const todayDS = dateStrInTz(new Date(), city.tz);
  const [cy, cm, cd] = curDS.split('-').map(Number);
  const center = new Date(cy, cm - 1, cd);
  const mins = getSliderMinutes(utc, city.tz);
  const sliderVal = Math.round(mins / 5);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const dt = new Date(center);
    dt.setDate(dt.getDate() + (i - 3));
    const ds = dt.toLocaleDateString('en-CA');
    return {
      ds,
      label: `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`,
      isActive: ds === curDS,
      isToday: ds === todayDS,
      isFuture: ds > todayDS,
    };
  });

  return (
    <>
      {/* Date row */}
      <div className="flex items-stretch mb-0.5" style={{ minHeight: 36 }}>
        <div className="w-20 shrink-0 flex flex-col justify-center pr-2 text-right leading-tight">
          <span className="font-semibold text-gray-800 text-xs">
            {city.name}
          </span>
          <span className="text-gray-400 text-[10px]">
            {dateStrInTz(utc, city.tz).slice(5)}
          </span>
        </div>
        <div className="flex-1 flex overflow-x-auto">
          {dates.map((d) => (
            <button
              key={d.ds}
              onClick={() => onDateClick(which, d.ds)}
              className={`flex-1 min-w-[80px] flex items-center justify-center text-xs px-1 py-1 border border-gray-200 border-r-0 last:border-r bg-white cursor-pointer transition-colors whitespace-nowrap ${
                d.isActive ? 'bg-blue-50 font-bold text-gray-700' : ''
              } ${d.isToday ? 'font-extrabold text-black' : ''} ${
                d.isFuture ? 'bg-red-50/60 text-red-300' : ''
              } hover:bg-blue-50/50`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="w-8 shrink-0 flex items-center justify-center border border-gray-200 border-l-0 bg-white relative cursor-pointer text-gray-400 hover:text-[#2563eb] text-sm">
          📅
          <input
            type="date"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              if (e.target.value) onDateClick(which, e.target.value);
            }}
          />
        </div>
      </div>
      {/* Slider row */}
      <div className="flex items-center mb-1" style={{ minHeight: 26 }}>
        <div className="w-20 shrink-0" />
        <div className="flex-1 relative h-7 flex items-center">
          <input
            type="range"
            min={0}
            max={287}
            value={sliderVal}
            onChange={(e) => onSlider(which, parseInt(e.target.value))}
            className="w-full h-1 rounded bg-gradient-to-r from-blue-200 to-blue-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2563eb] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-grab"
          />
          <span
            className="absolute -top-0.5 text-[11px] text-[#2563eb] font-semibold bg-[#f7f6f3] px-1 pointer-events-none whitespace-nowrap"
            style={{
              left: `clamp(0px, calc(${(sliderVal / 287) * 100}% - 18px), calc(100% - 50px))`,
            }}
          >
            {fmtSliderTime(mins, format)}
          </span>
        </div>
        <div className="w-8 shrink-0" />
      </div>
    </>
  );
}

function NavBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1 border border-gray-200 rounded-md bg-white text-gray-500 cursor-pointer text-xs transition-colors hover:bg-blue-50 hover:border-[#2563eb] hover:text-[#2563eb]"
    >
      {children}
    </button>
  );
}

function FmtBtn({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 border-0 text-xs font-medium cursor-pointer transition-colors ${
        active ? 'bg-[#2563eb] text-white' : 'bg-white text-gray-500'
      }`}
    >
      {children}
    </button>
  );
}
