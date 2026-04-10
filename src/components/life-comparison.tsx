import type { City } from '@/data/cities';
import { diffHours, dayIcon } from '@/lib/timezone';

interface LifeComparisonProps {
  cityA: City;
  cityB: City;
}

const SCENES = [
  { icon: '🌅', label: '起床', h: 7 },
  { icon: '🍜', label: '午餐', h: 12 },
  { icon: '💼', label: '下班', h: 18 },
  { icon: '😴', label: '就寢', h: 23 },
] as const;

/**
 * Side-by-side life-moment comparison.
 * "When it's 7AM in Taipei, it's 11PM in New York."
 */
export function LifeComparison({ cityA, cityB }: LifeComparisonProps) {
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);

  return (
    <div className="bg-white rounded-2xl p-4 px-5 mb-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 mb-3">
        🏠 生活時間對照
      </h3>
      <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        {SCENES.map((s) => {
          const hB = ((s.h + diff) % 24 + 24) % 24;
          const fA = `${String(s.h).padStart(2, '0')}:00`;
          const fB = `${String(Math.floor(hB)).padStart(2, '0')}:00`;
          return (
            <div key={s.h} className="contents">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
                <span className="text-base">{s.icon}</span>
                <span>
                  {cityA.name} {s.label}{' '}
                  <span className="font-bold text-[#7c6dd8]">{fA}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
                <span className="text-base">{dayIcon(Math.floor(hB))}</span>
                <span className="font-bold text-[#7c6dd8] min-w-[44px]">
                  {fB}
                </span>
                <span>{cityB.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
