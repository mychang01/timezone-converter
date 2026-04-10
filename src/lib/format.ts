/** Time/date formatting utilities for zh-TW locale */

export type TimeFormat = 12 | 24;

export function fmtTime(
  date: Date,
  tz: string,
  format: TimeFormat = 24
): string {
  return date.toLocaleTimeString('zh-TW', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    hour12: format === 12,
  });
}

export function fmtSeconds(date: Date, tz: string): string {
  const parts = date
    .toLocaleTimeString('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .split(':');
  return parts[2] || '00';
}

export function fmtDateFull(date: Date, tz: string): string {
  return date.toLocaleDateString('zh-TW', {
    timeZone: tz,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
}

export function fmtDateShort(date: Date, tz: string): string {
  return date.toLocaleDateString('zh-TW', {
    timeZone: tz,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}

export function fmtSliderTime(
  minutes: number,
  format: TimeFormat = 24
): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (format === 24) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
  const ap = h < 12 ? 'AM' : 'PM';
  const hh = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hh}:${String(m).padStart(2, '0')} ${ap}`;
}

export function fmtHour(hour: number, format: TimeFormat = 24): string {
  if (format === 24) return `${hour}:00`;
  const ap = hour < 12 ? 'AM' : 'PM';
  const hh = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${hh} ${ap}`;
}
