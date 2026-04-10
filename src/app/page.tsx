import { WorldClock, WorldCityTable } from '@/components/world-clock';
import { CitySelector } from '@/components/city-selector';
import { SumikkoMascot } from '@/components/sumikko-mascot';
import { TAIPEI } from '@/data/cities';

// 台灣航空直飛 + 熱門轉機目的地，按區域手動排列
const POPULAR_LINKS: { group: string; cities: { slug: string; name: string }[] }[] = [
  {
    group: '🇺🇸 美國',
    cities: [
      { slug: 'los-angeles', name: '洛杉磯' },
      { slug: 'new-york', name: '紐約' },
      { slug: 'chicago', name: '芝加哥' },
      { slug: 'denver', name: '丹佛' },
      { slug: 'honolulu', name: '檀香山' },
      { slug: 'vancouver', name: '溫哥華' },
      { slug: 'toronto', name: '多倫多' },
    ],
  },
  {
    group: '🇪🇺 歐洲',
    cities: [
      { slug: 'london', name: '倫敦' },
      { slug: 'paris', name: '巴黎' },
      { slug: 'amsterdam', name: '阿姆斯特丹' },
      { slug: 'rome', name: '羅馬' },
      { slug: 'berlin', name: '柏林' },
      { slug: 'vienna', name: '維也納' },
      { slug: 'madrid', name: '馬德里' },
      { slug: 'zurich', name: '蘇黎世' },
      { slug: 'istanbul', name: '伊斯坦堡' },
    ],
  },
  {
    group: '🌏 亞太',
    cities: [
      { slug: 'tokyo', name: '東京' },
      { slug: 'seoul', name: '首爾' },
      { slug: 'hong-kong', name: '香港' },
      { slug: 'singapore', name: '新加坡' },
      { slug: 'bangkok', name: '曼谷' },
      { slug: 'sydney', name: '雪梨' },
      { slug: 'auckland', name: '奧克蘭' },
    ],
  },
];

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
        <p className="text-xs text-gray-300 mt-1">
          （本資訊由{' '}
          <a href="https://crispy.today" className="text-[#7c6dd8] hover:underline" target="_blank" rel="noopener">
            脆新聞
          </a>{' '}
          提供）
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

      {/* SEO: curated popular links by region */}
      <nav className="mt-8 pt-6 border-t border-purple-100">
        <h2 className="text-sm font-semibold text-gray-500 text-center mb-5">
          ✈️ 熱門航線時差查詢
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {POPULAR_LINKS.map((group) => (
            <div key={group.group}>
              <div className="text-xs font-semibold text-gray-400 mb-2">
                {group.group}
              </div>
              <div className="flex flex-col gap-1">
                {group.cities.map((c) => (
                  <a
                    key={c.slug}
                    href={`/${TAIPEI.slug}-${c.slug}`}
                    className="text-sm px-3 py-1.5 rounded-lg text-gray-600 hover:text-[#7c6dd8] hover:bg-purple-50 transition-colors"
                  >
                    {TAIPEI.name} → {c.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </main>
  );
}
