/**
 * Timezone calculation utilities.
 * All calculations use the browser/Node Intl API — zero external dependencies.
 */

/** Get IANA timezone abbreviation (e.g. "CST", "EDT") */
export function tzAbbr(date: Date, tz: string): string {
  const parts = date
    .toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' })
    .split(' ');
  return parts[parts.length - 1];
}

/** Get UTC offset string like "+08:00" or "-04:00" */
export function tzOffset(date: Date, tz: string): string {
  const s = date.toLocaleTimeString('en-US', {
    timeZone: tz,
    timeZoneName: 'longOffset',
  });
  const m = s.match(/GMT([+-]\d{2}:\d{2})/);
  return m ? m[1] : '+00:00';
}

/** Get UTC offset in hours (e.g. 8, -4, 5.5) */
export function offsetHours(date: Date, tz: string): number {
  const s = date.toLocaleString('en-US', {
    timeZone: tz,
    timeZoneName: 'longOffset',
  });
  const m = s.match(/GMT([+-])(\d{2}):(\d{2})/);
  if (!m) return 0;
  return (m[1] === '-' ? -1 : 1) * (parseInt(m[2]) + parseInt(m[3]) / 60);
}

/** Get the hour (0-23) in a timezone */
export function hourInTz(date: Date, tz: string): number {
  return (
    parseInt(
      date.toLocaleTimeString('en-US', {
        timeZone: tz,
        hour: '2-digit',
        hour12: false,
      })
    ) % 24
  );
}

/** Get date string YYYY-MM-DD in a timezone */
export function dateStrInTz(date: Date, tz: string): string {
  return date.toLocaleDateString('en-CA', { timeZone: tz });
}

/** Calculate time difference in hours between two timezones */
export function diffHours(date: Date, tzA: string, tzB: string): number {
  return offsetHours(date, tzB) - offsetHours(date, tzA);
}

/** Check if a timezone has DST */
export function hasDST(tz: string, year: number): boolean {
  const jan = new Date(year, 0, 1);
  const jul = new Date(year, 6, 1);
  return offsetHours(jan, tz) !== offsetHours(jul, tz);
}

/** Check if currently in DST */
export function isDST(date: Date, tz: string): boolean {
  const year = date.getFullYear();
  const jan = new Date(year, 0, 1);
  const jul = new Date(year, 6, 1);
  const offJan = offsetHours(jan, tz);
  const offJul = offsetHours(jul, tz);
  if (offJan === offJul) return false;
  const maxOff = Math.max(offJan, offJul);
  return offsetHours(date, tz) === maxOff;
}

/** Day phase: dawn / day / dusk / night */
export function dayPhase(hour: number): 'dawn' | 'day' | 'dusk' | 'night' {
  if (hour >= 6 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 18) return 'day';
  if (hour >= 18 && hour < 20) return 'dusk';
  return 'night';
}

/** Day icon based on hour */
export function dayIcon(hour: number): string {
  if (hour >= 6 && hour < 8) return '🌅';
  if (hour >= 8 && hour < 18) return '☀️';
  if (hour >= 18 && hour < 20) return '🌇';
  return '🌙';
}

/**
 * Convert a "wall clock" time in a timezone to a UTC Date.
 * E.g. "2026-04-10 14:30 in Asia/Taipei" → UTC Date
 */
export function wallClockToUTC(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  tz: string
): Date {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const localDate = new Date(year, month - 1, day, hour, minute, 0);
  let ts = localDate.getTime();

  // Iterative convergence (2 passes is enough)
  for (let i = 0; i < 2; i++) {
    const d = new Date(ts);
    const parts = fmt.formatToParts(d);
    const obj: Record<string, number> = {};
    parts.forEach((p) => {
      if (p.type !== 'literal') obj[p.type] = parseInt(p.value);
    });
    const wH = obj.hour === 24 ? 0 : obj.hour;
    const wallDate = new Date(
      obj.year,
      obj.month - 1,
      obj.day,
      wH,
      obj.minute,
      obj.second
    );
    ts -= wallDate.getTime() - localDate.getTime();
  }

  return new Date(ts);
}

/** Get slider minutes (0-1439) from a UTC date in a timezone */
export function getSliderMinutes(utc: Date, tz: string): number {
  const h = hourInTz(utc, tz);
  const m = parseInt(
    utc.toLocaleTimeString('en-US', { timeZone: tz, minute: '2-digit' })
  );
  return h * 60 + m;
}

/**
 * Static time difference info for SSG.
 * Uses a fixed reference date so the result is deterministic at build time.
 */
export function staticDiffInfo(tzA: string, tzB: string) {
  const now = new Date();
  const diff = diffHours(now, tzA, tzB);
  const year = now.getFullYear();

  return {
    diffHours: diff,
    hasDST: hasDST(tzB, year),
    isDST: isDST(now, tzB),
  };
}
