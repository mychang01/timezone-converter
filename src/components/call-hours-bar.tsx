import type { City } from '@/data/cities';
import { diffHours } from '@/lib/timezone';

interface CallHoursBarProps {
  cityA: City;
  cityB: City;
}

/**
 * Visual bar showing best calling hours (both parties 8:00-22:00).
 * Server component — static at build time.
 */
export function CallHoursBar({ cityA, cityB }: CallHoursBarProps) {
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);

  const hours = Array.from({ length: 24 }, (_, h) => {
    const hB = ((h + diff) % 24 + 24) % 24;
    const aOk = h >= 8 && h < 22;
    const bOk = hB >= 8 && hB < 22;
    return { h, hB, both: aOk && bOk, one: aOk || bOk };
  });

  const overlapCount = hours.filter((x) => x.both).length;

  return (
    <div className="bg-white rounded-2xl p-4 px-5 mb-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 mb-3">
        📞 最佳通話時段
        <span className="text-gray-400 font-normal ml-2">
          （雙方 8:00–22:00，重疊 {overlapCount} 小時）
        </span>
      </h3>
      <div className="flex h-6 rounded-md overflow-hidden mb-2">
        {hours.map(({ h, hB, both, one }) => (
          <div
            key={h}
            className={`flex-1 flex items-center justify-center text-[10px] font-semibold transition-colors cursor-default ${
              both
                ? 'bg-green-400 text-white'
                : one
                  ? 'bg-yellow-300 text-yellow-800'
                  : 'bg-gray-200'
            }`}
            title={`${cityA.name} ${h}:00 = ${cityB.name} ${Math.floor(hB)}:00`}
          >
            {h % 3 === 0 ? h : ''}
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-xs text-gray-400">
        <span>
          <span className="inline-block w-2.5 h-2.5 rounded bg-green-400 mr-1 align-middle" />
          雙方都方便
        </span>
        <span>
          <span className="inline-block w-2.5 h-2.5 rounded bg-yellow-300 mr-1 align-middle" />
          一方方便
        </span>
        <span>
          <span className="inline-block w-2.5 h-2.5 rounded bg-gray-200 mr-1 align-middle" />
          都不方便
        </span>
      </div>
    </div>
  );
}
