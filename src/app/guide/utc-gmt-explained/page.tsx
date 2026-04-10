import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '什麼是 UTC？GMT？一次搞懂這兩個時間標準的差別',
  description: 'UTC 和 GMT 到底有什麼不同？為什麼有時候看到 UTC+8，有時候看到 GMT+8？本文用最簡單的方式解釋。',
  alternates: { canonical: '/guide/utc-gmt-explained' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '什麼是 UTC？GMT？一次搞懂',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/utc-gmt-explained',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>什麼是 UTC？GMT？一次搞懂</h1>
      <p className="text-base text-gray-400 mb-6">你一定看過 UTC+8 和 GMT+8，它們到底一不一樣？</p>

      <h2>先講結論</h2>
      <p><strong>對一般人來說，UTC 和 GMT 是一樣的。</strong>UTC+8 = GMT+8 = 台灣時間。你在日常生活中看到這兩個，都指同一個東西。</p>
      <p>但如果你想了解為什麼有兩個名字，以下是故事。</p>

      <h2>GMT：格林威治標準時間</h2>
      <p>GMT（Greenwich Mean Time）是最早的世界時間標準，誕生於 1884 年。當時各國代表在華盛頓開會，決定以英國倫敦的格林威治天文台為「零時區」的基準。所有時區都用跟格林威治的時差來表示：東邊的地方時間比較快（+），西邊比較慢（-）。</p>
      <p>台灣在格林威治東邊 8 個時區，所以是 GMT+8。</p>

      <h2>UTC：世界協調時間</h2>
      <p>UTC（Coordinated Universal Time）是 1972 年接替 GMT 的新標準。為什麼要換？因為地球自轉速度不是完全固定的，GMT 靠天文觀測定義的「一天」會慢慢不準。UTC 改用原子鐘（極其精確）來定義時間，偶爾加入「閏秒」來跟地球自轉同步。</p>
      <p>所以 UTC 比 GMT 更精確，但差距只在秒級。對一般人來說，UTC+8 和 GMT+8 完全可以互換使用。</p>

      <h2>為什麼縮寫是 UTC 而不是 CUT？</h2>
      <p>這是一個有趣的冷知識。英文應該是 CUT（Coordinated Universal Time），法文應該是 TUC（Temps Universel Coordonné）。兩邊吵了起來。最後妥協用 UTC，哪邊都不像，但哪邊也都不得罪。國際政治的經典。</p>

      <h2>台灣的時區：UTC+8 / GMT+8 / CST</h2>
      <p>台灣時區有三種寫法：</p>
      <ul>
        <li><strong>UTC+8</strong>：最標準的國際寫法。</li>
        <li><strong>GMT+8</strong>：比較老但還是很常見。</li>
        <li><strong>CST</strong>（China Standard Time / Chungyuan Standard Time）：台灣官方用的名稱「中原標準時間」。但要注意，CST 在美國是 Central Standard Time（UTC-6），在古巴也是 CST。所以 CST 其實很容易搞混，建議用 UTC+8 或直接寫 Asia/Taipei。</li>
      </ul>

      <h2>你在哪裡會遇到 UTC？</h2>
      <ul>
        <li><strong>機票</strong>：國際航班的飛行時間有時用 UTC 表示。</li>
        <li><strong>程式設計</strong>：軟體開發者幾乎都用 UTC 儲存時間，再轉換成當地時區顯示。</li>
        <li><strong>氣象</strong>：全球氣象報告用 UTC。</li>
        <li><strong>軍事</strong>：UTC 也叫 Zulu time（Z time），軍事通訊常用。</li>
        <li><strong>太空</strong>：NASA 的任務控制中心用 UTC。</li>
      </ul>

      <h2>IANA 時區資料庫</h2>
      <p>現代電腦和手機用的是 IANA 時區資料庫，用「洲/城市」格式命名時區：Asia/Taipei、America/New_York、Europe/London。這比 UTC+8 更好，因為它自動處理夏令時間。紐約不是永遠 UTC-5，夏天是 UTC-4。IANA 資料庫知道什麼時候切換。</p>
      <p>我們的<a href="/">時區轉換器</a>就是使用 IANA 資料庫。</p>

      <h2>所以我該用哪個？</h2>
      <ul>
        <li><strong>日常聊天</strong>：UTC+8 或 GMT+8 都可以，大家都懂。</li>
        <li><strong>國際商務</strong>：用 UTC。「Let's meet at 14:00 UTC」 是最不容易搞混的寫法。</li>
        <li><strong>寫程式</strong>：用 IANA 格式（Asia/Taipei）。永遠不要自己算時差。</li>
        <li><strong>查時差</strong>：用<a href="/">時區轉換器</a>，什麼都不用記。</li>
      </ul>
    </>
  );
}
