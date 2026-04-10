import { CITIES, TAIPEI, type City } from '@/data/cities';
import { diffHours, dayIcon, hourInTz } from '@/lib/timezone';

/**
 * Static city table — Server Component (zero JS).
 * Renders at build time. Times show build-time snapshot but
 * the interactive WorldCityTable can hydrate over it.
 */

const CONTINENTS = [
  { key: 'asia', label: '亞洲', emoji: '🌏', filter: (c: City) => c.tz.startsWith('Asia/') },
  { key: 'europe', label: '歐洲', emoji: '🌍', filter: (c: City) => c.tz.startsWith('Europe/') },
  { key: 'americas', label: '美洲', emoji: '🌎', filter: (c: City) => c.tz.startsWith('America/') || c.tz === 'Pacific/Honolulu' },
  { key: 'oceania', label: '大洋洲', emoji: '🏝️', filter: (c: City) => c.tz.startsWith('Australia/') || (c.tz.startsWith('Pacific/') && c.tz !== 'Pacific/Honolulu') },
  { key: 'africa', label: '非洲', emoji: '🌍', filter: (c: City) => c.tz.startsWith('Africa/') },
];

const POPULAR_SLUGS = new Set([
  'tokyo', 'seoul', 'hong-kong', 'singapore', 'bangkok',
  'shanghai', 'ho-chi-minh', 'kuala-lumpur', 'sydney', 'auckland',
  'london', 'paris', 'berlin', 'rome', 'amsterdam',
  'new-york', 'los-angeles', 'vancouver', 'toronto', 'dubai',
]);

export function StaticCityTable() {
  const now = new Date();

  const popular = CITIES
    .filter((c) => POPULAR_SLUGS.has(c.slug))
    .sort((a, b) => diffHours(now, TAIPEI.tz, a.tz) - diffHours(now, TAIPEI.tz, b.tz));

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-700">各大城市時間</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          以台北為基準，按時差排列 · 點擊城市查看詳細時差
        </p>
      </div>

      <table className="w-full text-sm">
        <tbody>
          {popular.map((city, i) => {
            const diff = diffHours(now, TAIPEI.tz, city.tz);
            const diffStr = diff === 0 ? '±0' : diff > 0 ? `+${diff}` : `${diff}`;
            const hour = hourInTz(now, city.tz);
            const icon = dayIcon(hour);
            const isNight = hour < 6 || hour >= 20;
            const href = city.slug === TAIPEI.slug ? '#' : `/${TAIPEI.slug}-${city.slug}`;

            return (
              <tr
                key={city.slug}
                className={`${i % 2 === 1 ? 'bg-gray-50/50' : ''} ${isNight ? 'text-gray-400' : 'text-gray-700'}`}
              >
                <td className="px-4 py-2">
                  <a href={href} className="hover:text-[#2563eb] transition-colors">
                    {city.flag} <span className="font-medium">{city.name}</span>
                  </a>
                </td>
                <td className="px-2 py-2 text-xs text-gray-400">{city.country}</td>
                <td className="px-2 py-2 text-center">
                  <span
                    className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                      diff === 0
                        ? 'bg-green-50 text-green-600'
                        : diff > 0
                          ? 'bg-blue-50 text-blue-500'
                          : 'bg-orange-50 text-orange-500'
                    }`}
                  >
                    {diffStr}h
                  </span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span className="font-mono font-semibold">
                    {now.toLocaleTimeString('zh-TW', {
                      timeZone: city.tz,
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}
                  </span>
                  <span className="ml-1 text-xs">{icon}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
