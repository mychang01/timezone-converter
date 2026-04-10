import type { CityPair } from '@/data/city-pairs';
import { relatedPairs } from '@/data/city-pairs';

interface RelatedLinksProps {
  pair: CityPair;
}

export function RelatedLinks({ pair }: RelatedLinksProps) {
  const related = relatedPairs(pair, 8);
  if (related.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-4 px-5 mb-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 mb-3">
        其他熱門時差查詢
      </h3>
      <div className="flex flex-wrap gap-2">
        {related.map((r) => (
          <a
            key={r.slug}
            href={`/${r.slug}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm text-gray-600 hover:text-[#2563eb] transition-colors"
          >
            {r.cityA.flag} {r.cityA.name} ↔ {r.cityB.flag} {r.cityB.name}
          </a>
        ))}
      </div>
    </div>
  );
}
