import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '澳洲打工度假時區指南 — 三個時區、三種生活節奏',
  description: '澳洲有三個時區，雪梨跟伯斯差 3 小時。去打工度假前搞懂時區，行前規劃和跟家人聯繫都更順暢。',
  alternates: { canonical: '/guide/australia-working-holiday-timezone' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '澳洲打工度假時區指南',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/australia-working-holiday-timezone',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>澳洲打工度假時區指南</h1>
      <p className="text-base text-gray-400 mb-6">三個時區、夏令時間各州不同，出發前必須搞懂</p>

      <h2>澳洲的三個時區</h2>
      <p>澳洲很大，東西跨了三個時區：</p>
      <ul>
        <li><strong>AEST（澳洲東部）UTC+10</strong>：雪梨、墨爾本、布里斯本、坎培拉。大部分打工度假者會待在這。跟台北差 <strong>+2 小時</strong>（夏令 +3 小時）。<a href="/taipei-sydney">台北↔雪梨</a></li>
        <li><strong>ACST（澳洲中部）UTC+9:30</strong>：阿德雷德、達爾文。注意是 9.5 小時，不是整數！跟台北差 <strong>+1.5 小時</strong>。</li>
        <li><strong>AWST（澳洲西部）UTC+8</strong>：伯斯。跟台灣完全同時區，<strong>零時差</strong>！</li>
      </ul>

      <h2>夏令時間：每個州不一樣（超混亂）</h2>
      <p>這是澳洲時區最讓人崩潰的地方。不是「澳洲全國」有夏令時間，是某些州有、某些沒有：</p>
      <ul>
        <li><strong>有夏令時間</strong>：新南威爾斯（雪梨）、維多利亞（墨爾本）、南澳（阿德雷德）、塔斯馬尼亞、首都領地（坎培拉）</li>
        <li><strong>沒有夏令時間</strong>：昆士蘭（布里斯本）、西澳（伯斯）、北領地（達爾文）</li>
      </ul>
      <p>這代表在夏令時間期間，雪梨是 UTC+11，但隔壁的布里斯本還是 UTC+10。同一個國家的兩個大城市差了 1 小時。如果你在澳洲境內跨州旅行或工作，一定要注意。</p>

      <h2>打工度假者最常待的城市</h2>
      <ul>
        <li><strong>雪梨</strong>：大部分人的第一站。跟台灣差 2 小時（夏天 3 小時），幾乎不用調時差。</li>
        <li><strong>墨爾本</strong>：咖啡文化首都。跟雪梨同時區。<a href="/taipei-melbourne">台北↔墨爾本</a></li>
        <li><strong>布里斯本 / 黃金海岸</strong>：溫暖的海邊。注意昆士蘭沒有夏令時間，所以夏天跟雪梨差 1 小時。</li>
        <li><strong>伯斯</strong>：西澳的慢活城市。跟台灣零時差，想家的時候隨時打電話。</li>
        <li><strong>農場（集二簽）</strong>：各地農場可能在不同時區，而且農場工作通常天亮就開始（5:00-6:00），跟城市的節奏完全不同。</li>
      </ul>

      <h2>跟台灣家人聯繫</h2>
      <p>好消息：澳洲跟台灣的時差很小（0-3 小時），是所有英語系國家中最容易聯繫的。</p>
      <ul>
        <li><strong>在雪梨/墨爾本</strong>：你的晚上 8 點 = 台灣下午 5-6 點。完美時段。</li>
        <li><strong>在伯斯</strong>：零時差。你幾點方便就幾點打。</li>
        <li><strong>注意</strong>：如果你在夏令時間期間的雪梨（10 月-3 月），時差變成 3 小時。你的晚上 9 點 = 台灣下午 6 點，還是OK。</li>
      </ul>

      <h2>實用小建議</h2>
      <ul>
        <li>手機到澳洲會自動切換時區，但如果你跨州移動（例如從雪梨開車到布里斯本），記得確認手機時區有更新。</li>
        <li>農場工作的時間非常早，很多是清晨 5:00 集合。用鬧鐘設澳洲時間，不要用台灣時間。</li>
        <li>銀行和政府機關用的是當地州的時間，不是你的手機時間。申請 TFN、開銀行帳戶要注意營業時間。</li>
        <li>如果你跨州搬家（例如從 NSW 到 QLD），夏天要記得時差 1 小時。打工排班表用的是當地時間。</li>
      </ul>
    </>
  );
}
