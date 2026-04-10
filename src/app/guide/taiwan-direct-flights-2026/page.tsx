import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 台灣直飛航班時刻表與時差 — 桃園機場出發全整理',
  description: '2026 年從桃園機場可以直飛哪些城市？時差多少？飛多久？本文整理所有直飛目的地的時區資訊。',
  alternates: { canonical: '/guide/taiwan-direct-flights-2026' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '2026 台灣直飛航班時刻表與時差',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/taiwan-direct-flights-2026',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>2026 台灣直飛航班時刻表與時差</h1>
      <p className="text-base text-gray-400 mb-6">桃園機場出發，你可以直飛的所有城市時區全整理</p>

      <h2>為什麼直飛和時差要一起看？</h2>
      <p>選機票不能只看價格。航班出發時間 + 飛行時間 + 時差 = 你到達時的當地時間。選對了，你到達時精神飽滿可以直接開始玩。選錯了，到達時是半夜，你得先花一晚住宿費什麼也不能做。</p>

      <h2>亞洲航線（時差 0-1 小時）</h2>
      <p>幾乎不用調時差。選什麼班機都可以。</p>
      <ul>
        <li><strong><a href="/taipei-tokyo">東京（成田/羽田）</a></strong>：+1h，飛 3 小時。每天十幾班直飛。最熱門的航線。</li>
        <li><strong><a href="/taipei-tokyo">大阪（關西）</a></strong>：+1h，飛 2.5 小時。廉航多。</li>
        <li><strong><a href="/taipei-seoul">首爾（仁川）</a></strong>：+1h，飛 2.5 小時。</li>
        <li><strong><a href="/taipei-hong-kong">香港</a></strong>：0h，飛 1.5 小時。</li>
        <li><strong><a href="/taipei-shanghai">上海</a></strong>：0h，飛 2 小時。</li>
        <li><strong><a href="/taipei-singapore">新加坡</a></strong>：0h，飛 4.5 小時。</li>
        <li><strong><a href="/taipei-bangkok">曼谷</a></strong>：-1h，飛 3.5 小時。</li>
        <li><strong><a href="/taipei-manila">馬尼拉</a></strong>：0h，飛 2 小時。</li>
        <li><strong><a href="/taipei-ho-chi-minh">胡志明市</a></strong>：-1h，飛 3.5 小時。</li>
        <li><strong><a href="/taipei-kuala-lumpur">吉隆坡</a></strong>：0h，飛 4.5 小時。</li>
      </ul>

      <h2>大洋洲航線（時差 +2 到 +5 小時）</h2>
      <ul>
        <li><strong><a href="/taipei-sydney">雪梨</a></strong>：+2/+3h（有 DST），飛 9 小時。建議晚上出發，到達是雪梨早上。</li>
        <li><strong><a href="/taipei-melbourne">墨爾本</a></strong>：+2/+3h（有 DST），飛 9.5 小時。</li>
        <li><strong><a href="/taipei-auckland">奧克蘭</a></strong>：+4/+5h（有 DST），飛 11 小時。紐西蘭的日照很充足，到達後多曬太陽。</li>
      </ul>

      <h2>歐洲航線（時差 -5 到 -8 小時）</h2>
      <p>這是時差開始有感的航線。強烈建議深夜出發。</p>
      <ul>
        <li><strong><a href="/taipei-london">倫敦（希斯洛）</a></strong>：-7/-8h，飛 13 小時。華航直飛。台北 23:00 出發 → 倫敦隔天 06:00 到達。</li>
        <li><strong><a href="/taipei-paris">巴黎（戴高樂）</a></strong>：-6/-7h，飛 13 小時。</li>
        <li><strong><a href="/taipei-amsterdam">阿姆斯特丹</a></strong>：-6/-7h，飛 12 小時。荷航直飛。</li>
        <li><strong><a href="/taipei-rome">羅馬</a></strong>：-6/-7h，飛 13 小時。</li>
        <li><strong><a href="/taipei-vienna">維也納</a></strong>：-6/-7h，飛 12 小時。華航直飛。</li>
        <li><strong><a href="/taipei-istanbul">伊斯坦堡</a></strong>：-5h，飛 11 小時。土耳其航空直飛，也是轉機到歐洲其他城市的好選擇。</li>
      </ul>
      <p>歐洲航線的時差調整技巧，詳見<a href="/guide/europe-travel-time">歐洲自助旅行時差全攻略</a>。</p>

      <h2>美洲航線（時差 -12 到 -16 小時）</h2>
      <p>最大的時差挑戰。日夜幾乎完全顛倒。</p>
      <ul>
        <li><strong><a href="/taipei-los-angeles">洛杉磯</a></strong>：-15/-16h，飛 12 小時。華航、長榮直飛。因為跨越換日線，你會「回到同一天」。</li>
        <li><strong><a href="/taipei-new-york">紐約</a></strong>：-12/-13h，飛 15 小時（多數需轉機，直飛少）。日夜完全相反。</li>
        <li><strong><a href="/taipei-vancouver">溫哥華</a></strong>：-15/-16h，飛 11 小時。長榮直飛。時區跟洛杉磯一樣。</li>
        <li><strong><a href="/taipei-honolulu">檀香山（夏威夷）</a></strong>：-18h，飛 9 小時。華航直飛。夏威夷沒有夏令時間。</li>
      </ul>
      <p>美洲航線的時差調整技巧，詳見<a href="/guide/jet-lag-tips">出國旅行時差調整完整攻略</a>。</p>

      <h2>中東航線</h2>
      <ul>
        <li><strong><a href="/taipei-dubai">杜拜</a></strong>：-4h，飛 9 小時。阿聯酋航空直飛。時差不大，但通常是轉機到歐洲/非洲的中繼站。</li>
      </ul>

      <h2>選班機的通用原則</h2>
      <ul>
        <li><strong>時差 0-3 小時</strong>（亞洲、大洋洲）：隨意選，價格優先。</li>
        <li><strong>時差 5-8 小時</strong>（歐洲）：選深夜出發的班機，飛機上睡覺，到達對方早上。</li>
        <li><strong>時差 12+ 小時</strong>（美洲）：選下午或傍晚出發。因為跨換日線，到達時間會比你想的「早」。</li>
        <li><strong>所有長途航線</strong>：靠走道的座位比靠窗好（方便起來走動），除非你真的能一路睡到底。</li>
      </ul>
    </>
  );
}
