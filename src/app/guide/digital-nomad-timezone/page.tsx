import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '數位遊牧必備：全球時區工作效率表',
  description: '當你的辦公室在全世界移動，時區管理就是你的核心技能。本文分享數位遊牧者的時區策略和最佳工作城市。',
  alternates: { canonical: '/guide/digital-nomad-timezone' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '數位遊牧必備：全球時區工作效率表',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/digital-nomad-timezone',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>數位遊牧必備：全球時區工作效率表</h1>
      <p className="text-base text-gray-400 mb-6">當你的辦公室在全世界移動，時區管理就是生存技能</p>

      <h2>數位遊牧者的時區困境</h2>
      <p>你人在清邁的咖啡廳，客戶在紐約，團隊在柏林，老闆在台北。四個時區，四種作息。你不是在「遠距工作」，你是在「時區雜耍」。</p>
      <p>很多數位遊牧者選擇目的地只看生活成本和天氣，卻忽略了最重要的因素：<strong>時區跟你的客戶/團隊的重疊程度</strong>。選錯了，你不是自由工作者，你是全天候 on-call 的奴隸。</p>

      <h2>按客戶時區選目的地</h2>

      <h3>客戶在台灣 / 亞洲（UTC+7 到 UTC+9）</h3>
      <p>你應該待在：</p>
      <ul>
        <li><strong>東南亞</strong>（清邁、峇里島、胡志明市、吉隆坡）— 時差 0-1 小時。完美重疊。生活成本低。這就是為什麼東南亞是數位遊牧者的首選。</li>
        <li><strong>日韓</strong>（東京、首爾）— 時差 0-1 小時。生活成本較高，但基礎設施一流。</li>
        <li><strong>避免</strong>：歐洲、美洲。時差 6-16 小時，你會被迫在深夜工作。</li>
      </ul>

      <h3>客戶在歐洲（UTC+0 到 UTC+2）</h3>
      <p>你應該待在：</p>
      <ul>
        <li><strong>葡萄牙里斯本</strong> — 跟客戶同時區，數位遊牧簽證友善，生活成本比倫敦低一半。</li>
        <li><strong>東歐</strong>（布達佩斯、布拉格、貝爾格勒）— 同時區或差 1 小時。物價低，網路快。</li>
        <li><strong>摩洛哥、喬治亞（格魯吉亞）</strong> — 新興遊牧熱點，UTC+0 到 UTC+4。</li>
        <li><strong>可接受</strong>：杜拜（UTC+4，重疊還行）、泰國（UTC+7，下午開始重疊）。</li>
      </ul>

      <h3>客戶在美國（UTC-5 到 UTC-8）</h3>
      <p>最痛苦的情況。美國時區跟亞洲差 12-16 小時。</p>
      <ul>
        <li><strong>最佳</strong>：拉丁美洲（墨西哥城、麥德林、布宜諾斯艾利斯）— 跟美國同時區或差 1-2 小時。</li>
        <li><strong>可接受</strong>：葡萄牙（跟美東差 5 小時，下午重疊）。</li>
        <li><strong>硬撐</strong>：東南亞。你需要在當地時間晚上 9 點到凌晨 2 點工作。有些人可以，大部分人撐不過三個月。</li>
      </ul>

      <h2>時區管理的三個原則</h2>

      <h3>原則 1：固定你的「核心工作時段」</h3>
      <p>不管你在哪個時區，告訴客戶/團隊你的固定可用時段。例如「我的核心時段是台北時間 14:00-22:00」。這樣他們知道什麼時候能找到你。</p>

      <h3>原則 2：用 UTC 溝通</h3>
      <p>在跨時區的團隊裡，用當地時間溝通會造成混亂。改用 UTC。「Deadline is Friday 12:00 UTC」比「Friday 8pm your time... wait which timezone are you in this week?」清楚太多。</p>

      <h3>原則 3：非同步為主，同步為輔</h3>
      <p>你選擇數位遊牧就是選擇了自由，不要用同步會議把自己綁死。Loom 錄影取代會議、Notion 文件取代討論、Slack 留言取代即時通訊。同步會議每週不超過 3 個。</p>

      <h2>工具推薦</h2>
      <ul>
        <li><strong><a href="/">時區轉換器</a></strong>：快速查看你現在位置和客戶城市的時差與重疊時段。</li>
        <li><strong>Google Calendar</strong>：建立多個時區顯示，一眼看出你的會議在各地是幾點。</li>
        <li><strong>Clocker（macOS）/ World Clock（手機）</strong>：常駐在選單列的多時區時鐘。</li>
        <li><strong>Slack 的 /timezone 指令</strong>：查看同事的當地時間。</li>
      </ul>

      <h2>給新手遊牧者的一句話</h2>
      <p>時區不是小事。它決定了你每天什麼時候工作、什麼時候休息、什麼時候能跟朋友吃飯。選目的地之前，先打開<a href="/">時區轉換器</a>查一下你跟客戶的重疊時段有幾小時。低於 3 小時，三思。</p>
    </>
  );
}
