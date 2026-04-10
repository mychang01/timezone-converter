import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '跨時區遠距工作排程技巧 — 讓全球團隊高效協作',
  description: '在不同時區的團隊怎麼安排會議和協作？本文分享實用的跨時區排程策略，包含重疊時間計算、非同步溝通技巧、推薦工具。',
  alternates: { canonical: '/guide/remote-work-scheduling' },
};

export default function RemoteWorkScheduling() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '跨時區遠距工作排程技巧',
    description: '讓全球團隊高效協作的實用排程策略。',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/remote-work-scheduling',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>跨時區遠距工作排程技巧</h1>
      <p className="text-base text-gray-400 mb-6">全球分散團隊的高效協作指南</p>

      <h2>遠距工作最大的挑戰不是溝通，是時間</h2>
      <p>如果你的團隊橫跨台北、倫敦、舊金山三個城市，你會發現三方同時在線的時間可能只有 1-2 小時，甚至完全沒有。這不是用更多工具就能解決的問題，而是需要從排程策略根本改變工作方式。</p>

      <h2>第一步：找出你的「黃金交叉時段」</h2>
      <p>所謂黃金交叉時段，就是所有成員都在合理工作時間（大約早 8 點到晚 8 點）的重疊區間。用我們的<a href="/">時差轉換器</a>可以快速查看任意兩個城市的重疊時段，頁面上的「最佳通話時段」色條會幫你一眼看出綠色區域。</p>
      <p>常見台灣外商的重疊狀況：</p>
      <ul>
        <li><strong>台北 + 東京/首爾：</strong>幾乎全天重疊，排程不是問題。</li>
        <li><strong>台北 + 歐洲：</strong>台北下午 3-6 點 = 歐洲早上 8-11 點，大約有 3 小時重疊。</li>
        <li><strong>台北 + 美西：</strong>台北早上 8-9 點 = 美西下午 4-5 點，重疊非常少。</li>
        <li><strong>台北 + 美東：</strong>台北晚上 9-10 點 = 美東早上 8-9 點，需要有人稍微延長工時。</li>
        <li><strong>台北 + 歐洲 + 美國：</strong>三方同時在線幾乎不可能，需要用分組會議代替。</li>
      </ul>

      <h2>第二步：區分同步 vs 非同步工作</h2>
      <p>跨時區的關鍵心法是：<strong>只有真正需要即時討論的事情才用同步會議，其他一律用非同步。</strong></p>
      <p><strong>適合同步（即時開會）的事：</strong></p>
      <ul>
        <li>需要即時腦力激盪的創意討論</li>
        <li>衝突或敏感議題的釐清</li>
        <li>重要決策的最終確認</li>
        <li>專案啟動或里程碑回顧</li>
      </ul>
      <p><strong>適合非同步（文件 / 影片 / 留言）的事：</strong></p>
      <ul>
        <li>進度更新和每日站會（改用文字回報）</li>
        <li>Code review 和設計回饋</li>
        <li>會議錄影 + 摘要分享</li>
        <li>決策的背景資料收集</li>
      </ul>

      <h2>第三步：建立公平的會議輪替制度</h2>
      <p>如果每次會議都安排在台北的深夜、對方的上午，久了會讓台灣這邊的人非常疲勞。好的做法是輪替：這週用台北友善的時段，下週用對方友善的時段。讓犧牲是共同承擔的，而不是永遠由某一方吸收。</p>

      <h2>實用排程工具推薦</h2>
      <ul>
        <li><strong><a href="/">timezone.crispy.today</a>：</strong>即時時差查詢和最佳通話時段一覽，免費。</li>
        <li><strong>Google Calendar：</strong>建立會議時自動顯示各方的當地時間。</li>
        <li><strong>World Time Buddy：</strong>多時區並列比較。</li>
        <li><strong>Slack scheduled messages：</strong>在你的工作時間寫好訊息，排程到對方上班時送出。</li>
      </ul>

      <h2>給主管的建議</h2>
      <p>如果你在管理跨時區團隊，最重要的一件事不是買什麼工具，而是<strong>建立「尊重彼此時區」的文化</strong>。這意味著：不在別人的深夜 @他、不期待即時回覆、會議一定要有錄影、所有決策都留文字紀錄。遠距團隊的信任建立在可預測性上，而尊重時區是可預測性的基礎。</p>
    </>
  );
}
