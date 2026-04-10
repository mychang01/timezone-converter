import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '夏令時間懶人包 — 哪些國家有？什麼時候變？對你有什麼影響？',
  description: '台灣沒有夏令時間，但你聯繫的國家可能有。一篇搞懂 DST 是什麼、哪些國家實施、什麼時候切換、對時差有什麼影響。',
  alternates: { canonical: '/guide/dst-explained' },
};

export default function DSTExplained() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '夏令時間懶人包',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/dst-explained',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>夏令時間懶人包</h1>
      <p className="text-base text-gray-400 mb-6">DST 是什麼？為什麼會影響你跟國外朋友的約定？</p>

      <h2>什麼是夏令時間？</h2>
      <p>夏令時間（Daylight Saving Time, DST）是一些國家在夏季把時鐘往前撥 1 小時的做法。理由是夏天天亮比較早，把時鐘撥快 1 小時可以讓大家多利用日照時間，減少晚上的用電量。到了秋冬天短，再把時鐘撥回來。</p>
      <p>聽起來合理，但對跨國溝通來說，DST 是個大麻煩，因為它讓時差在一年中會變動。例如台灣和<a href="/taipei-london">倫敦</a>的時差，冬天是 8 小時，夏天變成 7 小時。如果你沒注意到切換日期，就可能早到或遲到整整 1 小時。</p>

      <h2>台灣有夏令時間嗎？</h2>
      <p><strong>沒有。</strong>台灣在 1979 年以後就停止實施夏令時間了。所以從台灣的角度來看，我們的時間全年不變（UTC+8），是對方在變。當對方進入夏令時間，跟台灣的時差就會縮小 1 小時；退出夏令時間後，時差又會恢復。</p>

      <h2>哪些國家有夏令時間？</h2>
      <p><strong>有 DST 的主要國家/地區：</strong></p>
      <ul>
        <li>🇺🇸 美國（大部分州，夏威夷和亞利桑那除外）</li>
        <li>🇨🇦 加拿大（大部分省份）</li>
        <li>🇬🇧 英國、🇫🇷 法國、🇩🇪 德國、🇮🇹 義大利等歐盟國家</li>
        <li>🇦🇺 澳洲（南部各州，昆士蘭除外）</li>
        <li>🇳🇿 紐西蘭</li>
      </ul>
      <p><strong>沒有 DST 的主要國家/地區：</strong></p>
      <ul>
        <li>🇹🇼 台灣、🇯🇵 日本、🇰🇷 韓國、🇨🇳 中國</li>
        <li>🇸🇬 新加坡、🇹🇭 泰國、🇻🇳 越南等東南亞國家</li>
        <li>🇮🇳 印度、🇦🇪 杜拜</li>
        <li>大多數熱帶和赤道國家（日照時間全年差不多，不需要調整）</li>
      </ul>

      <h2>什麼時候切換？</h2>
      <p>不同國家的切換日期不同，而且每年會變。大致的規律是：</p>
      <ul>
        <li><strong>北半球</strong>（美國、歐洲）：3 月中 ~ 4 月初開始夏令時間，10 月底 ~ 11 月初結束。</li>
        <li><strong>南半球</strong>（澳洲、紐西蘭）：因為季節相反，大約 9-10 月開始、3-4 月結束。</li>
      </ul>
      <p>這也是為什麼每年 3 月和 10-11 月是跨國溝通最容易搞混時差的時段，因為各國切換的日期不同步，可能會有 1-2 週的「過渡期」，時差跟你記憶中的不一樣。</p>

      <h2>對你的實際影響</h2>
      <p>如果你跟歐美有定期的會議或通話，DST 切換時一定要注意。最常見的慘案是：平常約好每週三台北時間晚上 9 點開會，DST 切換後對方變成早上 8 點（本來是 9 點），結果你照舊時間上線，對方已經等了 1 小時。</p>
      <p>最簡單的防範方法：用我們的<a href="/">時區轉換器</a>查看。我們的工具會自動偵測每個城市目前是否在夏令時間，並在頁面上標示清楚，你不需要自己記切換日期。</p>

      <h2>歐盟要廢除夏令時間？</h2>
      <p>是的，歐盟議會在 2019 年投票通過決議，計劃在 2021 年後讓各成員國自行決定是否保留 DST。但由於疫情和各國立場分歧，這個計畫一直被推遲。截至目前，歐洲各國仍然在實施夏令時間，但未來幾年可能會有變化。美國也有類似的討論（Sunshine Protection Act），但目前也還沒正式廢除。</p>
    </>
  );
}
