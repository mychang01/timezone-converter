import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '打國際電話的最佳時段指南 — 台灣出發各國通話時間',
  description: '從台灣打電話到美國、歐洲、日本，什麼時間最適合？本文整理台灣到各主要國家的最佳通話時段，讓你不再半夜吵醒別人。',
  alternates: { canonical: '/guide/best-time-to-call' },
};

export default function BestTimeToCall() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '打國際電話的最佳時段指南',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/best-time-to-call',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>打國際電話的最佳時段指南</h1>
      <p className="text-base text-gray-400 mb-6">從台灣出發，各國最適合聯絡的時間整理</p>

      <h2>基本原則：雙方都在早 8 點到晚 10 點之間</h2>
      <p>打國際電話最尷尬的就是算錯時間，半夜三點把人家吵醒。一個簡單的原則是：確保雙方都在早上 8 點到晚上 10 點之間。這段時間大多數人都醒著，不管是上班、吃飯或在家休息，接到電話都不會太突兀。</p>
      <p>但問題是，時差越大，這個重疊區間就越小。有些城市跟台灣差了 12 小時以上，幾乎找不到雙方都方便的時段。以下是從台灣出發，各主要城市的建議通話時間。</p>

      <h2>台灣 → 亞太地區（時差小，隨時可打）</h2>
      <ul>
        <li><strong><a href="/taipei-tokyo">日本東京</a>（+1小時）：</strong>幾乎不用算，你幾點方便就幾點打。唯一要注意的是日本人吃飯時間不太喜歡被打擾（12:00-13:00）。</li>
        <li><strong><a href="/taipei-seoul">韓國首爾</a>（+1小時）：</strong>跟東京一樣，時差可以忽略。</li>
        <li><strong><a href="/taipei-singapore">新加坡</a>（0小時）：</strong>完全沒有時差，直接打。</li>
        <li><strong><a href="/taipei-bangkok">泰國曼谷</a>（-1小時）：</strong>差 1 小時，不影響。</li>
        <li><strong><a href="/taipei-sydney">澳洲雪梨</a>（+2/+3小時）：</strong>小時差，台灣上班時間打過去，對方也在上班。</li>
      </ul>

      <h2>台灣 → 歐洲（下午打最好）</h2>
      <p>歐洲跟台灣差 6-8 小時。最佳策略是利用台灣的下午，對應歐洲的上午。</p>
      <ul>
        <li><strong><a href="/taipei-london">英國倫敦</a>（-7/-8小時）：</strong>台灣下午 3:00-6:00 打 → 倫敦早上 8:00-11:00。避免台灣上午打，那時倫敦還在睡。</li>
        <li><strong><a href="/taipei-paris">法國巴黎</a>（-6/-7小時）：</strong>台灣下午 2:00-6:00 → 巴黎早上 8:00-12:00。法國人午餐可能到 2 點，所以台灣傍晚打也行。</li>
        <li><strong><a href="/taipei-berlin">德國柏林</a>（-6/-7小時）：</strong>跟巴黎一樣的策略。德國人很準時，上班時間打公事最有效率。</li>
      </ul>

      <h2>台灣 → 美國（最難安排）</h2>
      <p>美國跟台灣的時差是最大的挑戰。橫跨 4 個時區，最少差 12 小時，最多差 16 小時。</p>
      <ul>
        <li><strong><a href="/taipei-new-york">美東紐約</a>（-12/-13小時）：</strong>台灣晚上 9:00-10:00 → 紐約早上 8:00-9:00。你得稍微晚一點打，但至少不用熬夜。</li>
        <li><strong><a href="/taipei-chicago">美中芝加哥</a>（-13/-14小時）：</strong>台灣晚上 10:00-11:00 → 芝加哥早上 8:00-9:00。比美東再晚 1 小時。</li>
        <li><strong><a href="/taipei-los-angeles">美西洛杉磯</a>（-15/-16小時）：</strong>這是最痛苦的。台灣半夜 12:00 才是洛杉磯早上 8:00。建議改用非同步方式（email、留言），除非你習慣熬夜。</li>
      </ul>

      <h2>小技巧：用工具幫你算</h2>
      <p>不想每次都在腦中換算？用我們的<a href="/">時差轉換器</a>，選好兩個城市，頁面上的「最佳通話時段」色條會用綠色標出雙方都方便的時間。滑桿拖一拖就能看到任意時間點的對照，比手動算快多了。</p>

      <h2>商務電話禮儀小提醒</h2>
      <ul>
        <li>打之前先傳訊息確認對方方便（尤其是第一次聯繫）</li>
        <li>如果你在對方的非上班時間打，先說「不好意思打擾，知道你那邊現在是...」</li>
        <li>重要的電話先約好時間，不要突襲</li>
        <li>如果對方在吃飯時間，除非緊急，否則避免打擾</li>
      </ul>
    </>
  );
}
