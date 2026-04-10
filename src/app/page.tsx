import { WorldClock, WorldCityTable } from '@/components/world-clock';
import { CitySelector } from '@/components/city-selector';
import { SumikkoMascot } from '@/components/sumikko-mascot';
import { OTHER_CITIES, TAIPEI } from '@/data/cities';

export default function HomePage() {
  return (
    <main className="max-w-[960px] mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="flex items-center justify-center gap-3 mb-1">
          <SumikkoMascot type="bear" size={32} />
          <h1 className="text-2xl font-extrabold text-gray-900">
            🕐 世界時鐘與時差轉換
          </h1>
          <SumikkoMascot type="cat" size={28} />
        </div>
        <p className="text-sm text-gray-400">
          全球即時時間 · 點擊城市查看與台北的時差
        </p>
      </div>

      {/* Section 1: Analog clocks */}
      <WorldClock />

      {/* Section 2: Converter (prominent) */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">
            🔄 時差轉換器
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            選擇城市，查看詳細時差、最佳通話時段、生活對照
          </p>
        </div>
        <CitySelector />
        <div className="flex items-end justify-center gap-6 mt-4">
          <SumikkoMascot type="penguin" size={28} />
          <SumikkoMascot type="rabbit" size={32} />
        </div>
      </div>

      {/* Section 3: City table grouped by continent */}
      <WorldCityTable />

      {/* SEO: internal links */}
      <nav className="mt-8 pt-5 border-t border-purple-100 text-center">
        <h2 className="text-sm font-semibold text-gray-400 mb-3">
          熱門時差查詢
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {OTHER_CITIES.slice(0, 24).map((c) => (
            <a
              key={c.slug}
              href={`/${TAIPEI.slug}-${c.slug}`}
              className="text-xs px-2.5 py-1 bg-white rounded-md text-gray-500 hover:text-[#7c6dd8] hover:bg-purple-50 transition-colors shadow-sm"
            >
              {TAIPEI.name}↔{c.name}
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
