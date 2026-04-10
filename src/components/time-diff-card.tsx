import type { City } from '@/data/cities';
import {
  diffHours,
  hasDST,
  isDST,
  hourInTz,
  dayIcon,
  dateStrInTz,
} from '@/lib/timezone';

interface TimeDiffCardProps {
  cityA: City;
  cityB: City;
}

/**
 * Static time-difference info card.
 * Rendered at build time (Server Component) for SEO.
 * Uses a reference date for calculations.
 */
export function TimeDiffCard({ cityA, cityB }: TimeDiffCardProps) {
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);
  const sign = diff >= 0 ? '+' : '';
  const absDiff = Math.abs(diff);

  const hA = hourInTz(now, cityA.tz);
  const hB = hourInTz(now, cityB.tz);
  const statusA = hA >= 6 && hA < 18 ? '白天 ☀️' : '夜晚 🌙';
  const statusB = hB >= 6 && hB < 18 ? '白天 ☀️' : '夜晚 🌙';

  const dateA = dateStrInTz(now, cityA.tz);
  const dateB = dateStrInTz(now, cityB.tz);
  const sameDay = dateA === dateB;

  const year = now.getFullYear();
  const dstExists = hasDST(cityB.tz, year);
  const dstActive = isDST(now, cityB.tz);

  const aheadBehind =
    diff > 0
      ? `${cityB.name}比${cityA.name}快 ${absDiff} 小時`
      : diff < 0
        ? `${cityB.name}比${cityA.name}慢 ${absDiff} 小時`
        : `${cityB.name}與${cityA.name}同一時區`;

  return (
    <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm flex items-stretch gap-0 max-md:flex-col overflow-hidden">
      {/* Big number */}
      <div className="flex-shrink-0 w-40 flex flex-col items-center justify-center border-r border-gray-100 pr-5 max-md:border-r-0 max-md:border-b max-md:pb-4 max-md:mb-4 max-md:w-full">
        <div className="text-4xl font-extrabold text-[#7c6dd8] leading-none">
          {sign}
          {diff}
        </div>
        <div className="text-sm text-gray-400 mt-1">小時時差</div>
      </div>

      {/* Info rows */}
      <div className="flex-1 pl-5 flex flex-col gap-2.5 max-md:pl-0">
        <InfoRow icon="⏱️">
          <strong>{aheadBehind}</strong>
        </InfoRow>
        <InfoRow icon="🌍">
          {cityA.name} {statusA}｜{cityB.name} {statusB}
        </InfoRow>
        <InfoRow icon="📅">
          {sameDay ? (
            <span className="inline-block px-2 py-0.5 bg-green-50 text-green-700 rounded-md text-sm font-semibold">
              同一天
            </span>
          ) : (
            <>
              <span className="inline-block px-2 py-0.5 bg-orange-50 text-orange-700 rounded-md text-sm font-semibold">
                不同天
              </span>
              <span className="text-gray-400 ml-1">— 注意日期差異</span>
            </>
          )}
        </InfoRow>
        {dstExists && (
          <InfoRow icon="🕐">
            {cityB.name}實施夏令時間，目前
            <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md text-sm font-semibold ml-1">
              {dstActive ? '夏令時間中' : '標準時間中'}
            </span>
            <span className="text-gray-400 ml-1">（冬夏時差會變）</span>
          </InfoRow>
        )}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-600">
      <span className="text-base flex-shrink-0 mt-px">{icon}</span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}
