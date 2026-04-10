import { WorldClock, WorldCityTable } from '@/components/world-clock';
import { CitySelector } from '@/components/city-selector';
import { SumikkoMascot } from '@/components/sumikko-mascot';
import { FAQSection } from '@/components/faq-section';
import { faqJsonLd } from '@/lib/seo';
import { TAIPEI } from '@/data/cities';

const GUIDE_LINKS = [
  { href: '/guide/jet-lag-tips', label: '出國時差調整攻略', icon: '🛫' },
  { href: '/guide/best-time-to-call', label: '國際電話最佳時段', icon: '📞' },
  { href: '/guide/dst-explained', label: '夏令時間懶人包', icon: '🕐' },
  { href: '/guide/taiwan-flight-time-zones', label: '直飛航線時區整理', icon: '✈️' },
  { href: '/guide/remote-work-scheduling', label: '跨時區遠距排程', icon: '💻' },
];

const HOME_FAQ = [
  {
    question: '什麼是時差？為什麼會有時差？',
    answer: '時差是因為地球自轉，不同經度的地區看到太陽的時間不同，所以各地使用不同的標準時間。全球被劃分為 24 個時區，每個時區相差 1 小時。當你從台北（UTC+8）飛到紐約（UTC-5），兩地相差 13 小時，你的身體內建的生理時鐘跟當地時間不同步，就會產生時差反應：白天想睡、晚上清醒、腸胃不舒服。時差越大，身體需要越多天來適應。',
  },
  {
    question: '台灣和美國時差多少？',
    answer: '美國橫跨 4 個時區，所以跟台灣的時差不是一個固定數字。美東（紐約、華盛頓）跟台灣差 12-13 小時，美中（芝加哥）差 13-14 小時，山區（丹佛）差 14-15 小時，美西（洛杉磯、舊金山）差 15-16 小時。而且美國有夏令時間，夏天時差會少 1 小時。最簡單的方法是用我們的時差轉換器直接查，會自動幫你處理夏令時間的切換。',
  },
  {
    question: '台灣和歐洲時差多少？',
    answer: '台灣跟大部分西歐國家（英國、法國、德國、義大利等）差 6-8 小時。英國跟台灣差 7-8 小時（冬天 8 小時、夏天 7 小時），歐洲大陸國家差 6-7 小時。東歐和土耳其差 5-6 小時。跟美國一樣，歐洲也有夏令時間，所以冬夏的時差不同。要特別注意每年 3 月底和 10 月底是切換日期。',
  },
  {
    question: '什麼是夏令時間（DST）？台灣有嗎？',
    answer: '夏令時間是一些國家在夏季把時鐘撥快 1 小時的制度，目的是多利用日照。台灣自 1979 年後就沒有實施夏令時間了，全年都是 UTC+8。但你常聯繫的歐美國家幾乎都有 DST，這代表跟台灣的時差在一年中會變動 1 小時。我們的工具會自動偵測每個城市目前是標準時間還是夏令時間，頁面上會清楚標示。',
  },
  {
    question: '怎麼用這個時差轉換器？',
    answer: '很簡單。首頁上方有 5 個即時圓鐘顯示主要城市的時間。如果你想查特定城市跟台北的詳細時差，在「時差轉換器」區塊選擇目標城市，按「開始轉換」就會看到即時時鐘對照、時差資訊、最佳通話時段、生活時間對照等完整資訊。你也可以拖動時間滑桿來模擬不同時間點的對照結果。',
  },
  {
    question: '這個工具的時間準確嗎？',
    answer: '我們使用你瀏覽器內建的 IANA 時區資料庫，這是全世界最權威的時區資料來源，由各大作業系統（Windows、macOS、iOS、Android）維護和更新。它會自動處理夏令時間切換和時區規則變更，所以你看到的時間基本上都是準確的。唯一要確認的是你的裝置系統時間是否正確。',
  },
  {
    question: '跨時區打電話，什麼時間最不打擾人？',
    answer: '最安全的原則是確保雙方都在早上 8 點到晚上 10 點之間。我們每個城市對照頁都有「最佳通話時段」色條，綠色區域代表雙方都在合理活動時間，一目瞭然。如果時差太大（例如台灣跟美西差 16 小時），幾乎找不到重疊時段，建議改用非同步方式（email、訊息）溝通。',
  },
];

// 台灣航空直飛 + 熱門轉機目的地
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
  const homeFaqLd = faqJsonLd(HOME_FAQ);

  return (
    <main className="max-w-[960px] mx-auto px-4 py-6">
      {/* Homepage FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />

      {/* Header */}
      <div className="text-center mb-5">
        <div className="flex items-center justify-center gap-3 mb-1">
          <SumikkoMascot type="bear" size={32} />
          <h1 className="text-2xl font-extrabold text-gray-900">
            世界時鐘 — 全球時差轉換器
          </h1>
          <SumikkoMascot type="cat" size={28} />
        </div>
        <p className="text-sm text-gray-400">
          全球即時時間 · 點擊城市查看與台北的時差
        </p>
        <p className="text-xs text-gray-300 mt-1">
          （本資訊由{' '}
          <a href="https://crispy.today" className="text-[#2563eb] hover:underline" target="_blank" rel="noopener">
            脆新聞
          </a>{' '}
          提供）
        </p>
      </div>

      {/* Section 1: Analog clocks */}
      <WorldClock />

      {/* Section 2: Converter + Guide links side by side */}
      <div className="mb-8 flex gap-6 max-md:flex-col">
        {/* Left: Converter */}
        <div className="flex-1">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              時差轉換器
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              選擇城市，查看詳細時差、最佳通話時段
            </p>
          </div>
          <CitySelector />
          <div className="flex items-end justify-center gap-6 mt-4">
            <SumikkoMascot type="penguin" size={28} />
            <SumikkoMascot type="rabbit" size={32} />
          </div>
        </div>
        {/* Right: Guide links */}
        <div className="w-56 max-md:w-full shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
            <h3 className="text-sm font-bold text-gray-700 mb-3">
              旅遊實用指南
            </h3>
            <div className="flex flex-col gap-1.5">
              {GUIDE_LINKS.map((g) => (
                <a
                  key={g.href}
                  href={g.href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2563eb] hover:bg-blue-50 px-2 py-1.5 rounded-lg transition-colors"
                >
                  <span>{g.icon}</span>
                  <span>{g.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: City table */}
      <WorldCityTable />

      {/* Section 4: FAQ */}
      <div className="mt-8">
        <FAQSection items={HOME_FAQ} />
      </div>

      {/* Section 5: Popular airline routes */}
      <nav className="mt-6 pt-6 border-t border-blue-100">
        <h2 className="text-sm font-semibold text-gray-500 text-center mb-5">
          熱門航線時差查詢
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
                    className="text-sm px-3 py-1.5 rounded-lg text-gray-600 hover:text-[#2563eb] hover:bg-blue-50 transition-colors"
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
