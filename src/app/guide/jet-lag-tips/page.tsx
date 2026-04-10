import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '出國旅行時差調整完整攻略 — 科學方法快速克服時差',
  description: '從台灣出發飛歐美，時差 6-16 小時怎麼調？本文整理醫學實證的時差調整方法，包含行前準備、機上策略、抵達後作息安排，幫你最快適應當地時間。',
  alternates: { canonical: '/guide/jet-lag-tips' },
};

export default function JetLagTips() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '出國旅行時差調整完整攻略',
    description: '科學方法幫你快速克服時差，從行前準備到抵達後調整的完整指南。',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/jet-lag-tips',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>出國旅行時差調整完整攻略</h1>
      <p className="text-base text-gray-400 mb-6">從台灣出發，科學方法幫你最快適應目的地時間</p>

      <h2>為什麼會有時差反應？</h2>
      <p>時差反應（Jet Lag）不只是「想睡覺」這麼簡單。我們的身體有一個內建的 24 小時生理時鐘，控制著睡眠、體溫、荷爾蒙分泌等節律。當你快速跨越多個時區，身體的內在時鐘和外在環境的光照週期不一致，就會出現時差症狀：白天昏沉、夜裡清醒、腸胃不適、注意力下降。</p>
      <p>一般來說，每跨越 1 個時區，身體大約需要 1 天來適應。所以從台灣飛巴黎（時差 6-7 小時），你可能需要將近一週才能完全調過來。但用對方法，可以把這個時間縮短到 2-3 天。</p>

      <h2>行前準備（出發前 3-4 天）</h2>
      <p><strong>往西飛（如飛美國）：</strong>每天晚 1-2 小時睡覺，早上自然多睡一點。你的目標是讓身體先往後延，這樣到了美國比較容易適應。</p>
      <p><strong>往東飛（如飛歐洲）：</strong>每天提早 1-2 小時睡覺。這比往西飛難，因為提早入睡違反身體的自然傾向，但即使只調整了 2 小時，到達後也會輕鬆很多。</p>
      <p>出發前也可以用我們的<a href="/">時差轉換器</a>查看目的地的即時時間，開始在心裡「切換」到那邊的生活節奏。</p>

      <h2>機上策略</h2>
      <ul>
        <li><strong>上飛機立刻調錶</strong>：把手錶和手機調成目的地時間，心理上先「到達」。</li>
        <li><strong>按目的地時間作息</strong>：如果目的地是夜晚，就在機上睡覺；如果是白天，盡量保持清醒。</li>
        <li><strong>多喝水，少喝酒</strong>：機艙空氣乾燥，脫水會加重時差感。酒精雖然讓你想睡，但會破壞睡眠品質。</li>
        <li><strong>適度活動</strong>：長途飛行每 2 小時起來走走，促進血液循環。</li>
      </ul>

      <h2>抵達後的關鍵 48 小時</h2>
      <p><strong>第一原則：陽光是最好的藥。</strong>到達後的白天盡量待在戶外曬太陽，光照是重設生理時鐘最強的訊號。相反地，如果到達時是夜晚，避免強光刺激，戴上墨鏡或待在暗處。</p>
      <p><strong>撐到當地的正常就寢時間。</strong>這一點最關鍵，也最痛苦。就算你下午三點就累到不行，也要撐到至少晚上 9 點再睡。如果真的撐不住，可以在下午 2 點前小睡 20-30 分鐘，但不要超過，否則晚上會更難入睡。</p>
      <p><strong>飲食也幫得上忙。</strong>到達後按當地時間吃飯，即使不餓也吃一點。定時的用餐節奏可以幫助身體更快同步到新時區。</p>

      <h2>台灣常飛航線的時差對策</h2>
      <ul>
        <li><a href="/taipei-los-angeles">台北↔洛杉磯</a>（-16 小時）：時差最大，建議行前 4 天開始調整，到達後多曬早晨陽光。</li>
        <li><a href="/taipei-new-york">台北↔紐約</a>（-12 小時）：日夜完全相反，抵達後第一天會比較辛苦，但剛好可以利用「白天就是對方的夜晚」來快速切換。</li>
        <li><a href="/taipei-london">台北↔倫敦</a>（-7/-8 小時）：中等時差，大多數人 3-4 天可以適應。</li>
        <li><a href="/taipei-paris">台北↔巴黎</a>（-6/-7 小時）：跟倫敦類似，稍好一些。</li>
        <li><a href="/taipei-tokyo">台北↔東京</a>（+1 小時）：幾乎沒有時差感，不用特別調整。</li>
      </ul>

      <h2>褪黑激素可以吃嗎？</h2>
      <p>褪黑激素（Melatonin）是一種人體自然分泌的荷爾蒙，在國外很容易買到。研究顯示，在目的地的就寢前 30 分鐘服用低劑量（0.5-3mg）褪黑激素，確實能幫助縮短時差適應時間。但它不是安眠藥，效果因人而異。建議出國前先諮詢醫生，特別是有慢性疾病或正在服藥的人。</p>

      <h2>重點整理</h2>
      <ul>
        <li>提前 3-4 天開始調整作息</li>
        <li>機上按目的地時間睡 / 醒</li>
        <li>抵達後多曬太陽、撐到晚上再睡</li>
        <li>按當地時間用餐</li>
        <li>使用<a href="/">時區轉換器</a>提前規劃行程</li>
      </ul>
    </>
  );
}
