import type { Metadata } from 'next';
import { SumikkoMascot } from '@/components/sumikko-mascot';

export const metadata: Metadata = {
  title: '關於時區轉換器',
  description: '時區轉換器是由脆新聞團隊開發的免費線上時差查詢工具，提供全球 45 個城市的即時時間對照。',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '關於時區轉換器',
    url: 'https://timezone.crispy.today/about',
    mainEntity: {
      '@type': 'Organization',
      name: '脆新聞',
      url: 'https://crispy.today',
      description: '脆新聞是一個面向台灣讀者的獨立媒體，匯聚全球重要新聞，由資深編輯深度解析。',
    },
  };

  return (
    <main id="main-content" role="main" className="max-w-[720px] mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[#2563eb] hover:text-[#1d4ed8] mb-6 transition-colors"
      >
        ← 回到時區轉換器
      </a>

      <div className="flex items-center gap-3 mb-6">
        <SumikkoMascot type="bear" size={48} />
        <h1 className="text-2xl font-extrabold text-gray-900">關於時區轉換器</h1>
      </div>

      <div className="prose prose-gray prose-sm max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:text-gray-800 prose-a:text-[#2563eb]">
        <h2>這是什麼工具？</h2>
        <p>
          時區轉換器（timezone.crispy.today）是一個免費的線上時差查詢工具。你可以即時查看全球 45
          個主要城市的當地時間，比較任意兩個城市之間的時差，並找到最適合打電話或開會的時段。
        </p>
        <p>
          我們的工具支援夏令時間（DST）自動偵測、生活作息對照、最佳通話時段分析，以及互動式時間滑桿讓你模擬不同時間點的對照結果。所有時間計算都使用瀏覽器內建的
          IANA 時區資料庫，確保準確性。
        </p>

        <h2>誰在維護這個工具？</h2>
        <p>
          時區轉換器由<a href="https://crispy.today" target="_blank" rel="noopener">脆新聞</a>團隊開發和維護。脆新聞是一個面向台灣讀者的獨立新聞媒體，匯聚全球重要新聞並提供深度解析。我們相信好的工具應該免費、簡單、準確，所以打造了這個時區轉換器來幫助需要跨時區溝通的台灣用戶。
        </p>

        <h2>為什麼做這個？</h2>
        <p>
          台灣是一個高度國際化的社會。不管是在外商工作需要跟歐美同事開會、出國旅行需要算時差、還是想打電話給在國外念書的孩子，時差計算是很多人每天都會碰到的問題。市面上大部分時區工具都是英文介面，我們想做一個真正為台灣人設計的繁體中文時區工具，從台北出發，涵蓋台灣人最常去的城市。
        </p>

        <h2>資料來源</h2>
        <p>
          所有時區計算使用 <strong>IANA Time Zone Database</strong>（IANA 時區資料庫），這是全世界最權威的時區資料來源，由 ICANN 維護。各大作業系統（Windows、macOS、iOS、Android）和程式語言都使用這個資料庫。我們透過瀏覽器內建的 Intl.DateTimeFormat API 存取這些資料，確保你看到的時間永遠是最新的。
        </p>

        <h2>免費使用</h2>
        <p>
          時區轉換器完全免費，不需要註冊或登入。我們不會收集你的個人資料。工具的運作完全在你的瀏覽器端進行，不會把你的查詢記錄傳到任何伺服器。
        </p>

        <h2>聯絡我們</h2>
        <p>
          如果你發現任何問題或有建議，歡迎透過<a href="https://crispy.today/contact" target="_blank" rel="noopener">脆新聞聯絡頁面</a>與我們聯繫。
        </p>
      </div>

      <div className="flex items-end justify-center gap-6 mt-10">
        <SumikkoMascot type="cat" size={36} />
        <SumikkoMascot type="penguin" size={32} />
        <SumikkoMascot type="rabbit" size={38} />
      </div>
    </main>
  );
}
