import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '美國四大時區完整指南 — EST、CST、MST、PST 一次搞懂',
  description: '美國橫跨 4 個時區，搞不清楚紐約和洛杉磯差幾小時？本文用最簡單的方式解釋 EST、CST、MST、PST，附實用換算表。',
  alternates: { canonical: '/guide/us-time-zones' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '美國四大時區完整指南',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/us-time-zones',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>美國四大時區完整指南</h1>
      <p className="text-base text-gray-400 mb-6">EST、CST、MST、PST，一篇搞懂不再算錯</p>

      <h2>為什麼美國有四個時區？</h2>
      <p>美國國土東西橫跨超過 4,000 公里，如果全國用同一個時間，紐約日出的時候洛杉磯還在半夜。所以美國本土被切成四個時區，每個差 1 小時。加上夏威夷和阿拉斯加，其實是六個，但一般旅客只會碰到本土四個。</p>

      <h2>四個時區一覽表</h2>
      <p>從東到西：</p>
      <ul>
        <li><strong>EST（Eastern Standard Time）UTC-5</strong> — 紐約、華盛頓、邁阿密、波士頓、亞特蘭大。美國的政治和金融中心都在這，所以你聽到的「美東時間」就是這個。跟台北差 <strong>13 小時</strong>（夏令 12 小時）。<a href="/taipei-new-york">查看台北↔紐約即時時差</a></li>
        <li><strong>CST（Central Standard Time）UTC-6</strong> — 芝加哥、休斯頓、達拉斯、紐奧良。美國中部的大城市。跟台北差 <strong>14 小時</strong>（夏令 13 小時）。<a href="/taipei-chicago">查看台北↔芝加哥即時時差</a></li>
        <li><strong>MST（Mountain Standard Time）UTC-7</strong> — 丹佛、鳳凰城、鹽湖城。落磯山脈一帶。跟台北差 <strong>15 小時</strong>（夏令 14 小時）。注意：亞利桑那州不實施夏令時間，鳳凰城全年 UTC-7。<a href="/taipei-denver">查看台北↔丹佛即時時差</a></li>
        <li><strong>PST（Pacific Standard Time）UTC-8</strong> — 洛杉磯、舊金山、西雅圖、拉斯維加斯。矽谷和好萊塢都在這。跟台北差 <strong>16 小時</strong>（夏令 15 小時）。<a href="/taipei-los-angeles">查看台北↔洛杉磯即時時差</a></li>
      </ul>

      <h2>一個好記的口訣</h2>
      <p>「紐約 12、芝加哥 13、丹佛 14、洛杉磯 15」— 這是夏天（夏令時間）的時差。冬天每個都加 1。記住夏天的數字就好，因為大部分人去美國旅遊都是夏天。</p>

      <h2>跨時區旅行的陷阱</h2>
      <p>如果你在美國境內搭飛機跨時區，手機會自動調時間，但你的行程表不會。最常見的慘案：</p>
      <ul>
        <li><strong>飛機時刻表用的是當地時間。</strong>從紐約飛洛杉磯，起飛 10:00 EST、降落 13:00 PST，看起來只飛了 3 小時，其實飛了 6 小時（因為你往西飛跨了 3 個時區）。</li>
        <li><strong>轉機要注意。</strong>如果你在芝加哥轉機，芝加哥是 CST，比紐約慢 1 小時。你的轉機時間可能比你以為的多 1 小時或少 1 小時。</li>
        <li><strong>自駕跨州。</strong>美國有些州的邊界就是時區邊界。你開車跨過去，時間突然變了。Google Maps 會提醒你，但如果你有預約（餐廳、導覽），要確認用的是哪個時區。</li>
      </ul>

      <h2>夏令時間讓事情更複雜</h2>
      <p>美國的夏令時間從 3 月第二個星期日開始，到 11 月第一個星期日結束。期間所有時鐘撥快 1 小時，EST 變成 EDT、PST 變成 PDT（D = Daylight）。但有兩個例外不跟著調：</p>
      <ul>
        <li><strong>亞利桑那州</strong>（除了納瓦荷原住民保留地）</li>
        <li><strong>夏威夷</strong></li>
      </ul>
      <p>這代表在夏令時間期間，鳳凰城跟洛杉磯同時間（都是 UTC-7），但冬天鳳凰城跟丹佛同時間。很混亂，但用<a href="/">時區轉換器</a>查就不用自己算了。</p>

      <h2>跟台灣家人聯繫的最佳時段</h2>
      <p>如果你在美東（紐約），台灣的晚上 9 點 = 你的早上 8 點（夏天）或 9 點（冬天）。這是雙方都醒著的最佳時段。如果你在美西（洛杉磯），台灣的晚上 9 點 = 你的早上 5 點... 比較辛苦，建議改成台灣早上（你的晚上）聯繫。</p>
      <p>用我們的<a href="/taipei-new-york">台北↔紐約時差頁面</a>的「最佳通話時段」功能，可以一眼看出綠色重疊區。</p>

      <h2>美國各大城市速查表</h2>
      <ul>
        <li><strong>EST</strong>：紐約、華盛頓 DC、波士頓、費城、邁阿密、亞特蘭大、底特律</li>
        <li><strong>CST</strong>：芝加哥、休斯頓、達拉斯、聖安東尼奧、孟菲斯、紐奧良、密爾瓦基</li>
        <li><strong>MST</strong>：丹佛、鳳凰城、鹽湖城、阿布奎基、土桑</li>
        <li><strong>PST</strong>：洛杉磯、舊金山、西雅圖、聖地牙哥、波特蘭、拉斯維加斯</li>
      </ul>
    </>
  );
}
