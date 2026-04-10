import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '跨時區 Zoom 會議排程攻略 — 不再讓同事半夜上線',
  description: '跟美國、歐洲同事開 Zoom，總是有人要犧牲睡眠？本文分享實戰排程技巧，附各時區重疊時段速查。',
  alternates: { canonical: '/guide/zoom-meeting-across-timezones' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '跨時區 Zoom 會議排程攻略',
    author: { '@type': 'Organization', name: '脆新聞' },
    publisher: { '@type': 'Organization', name: '脆新聞', url: 'https://crispy.today' },
    datePublished: '2026-04-11',
    url: 'https://timezone.crispy.today/guide/zoom-meeting-across-timezones',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>跨時區 Zoom 會議排程攻略</h1>
      <p className="text-base text-gray-400 mb-6">讓每個時區的人都能在合理時間上線的實戰技巧</p>

      <h2>問題的本質</h2>
      <p>如果你在台灣的外商公司工作，或是跟海外客戶合作，你一定碰過這個問題：「我們來 schedule 一個 call」，然後開始了痛苦的時差計算。台北下午 3 點？倫敦早上 8 點？紐約... 凌晨 3 點。</p>
      <p>問題不是數學不好，是地球太大。但只要掌握幾個原則，就能讓大部分人都在合理時間上線。</p>

      <h2>第一步：找出「黃金重疊時段」</h2>
      <p>所謂黃金時段，就是所有參與者都在早 8 點到晚 8 點之間。用<a href="/">時區轉換器</a>可以快速看到兩個城市的重疊區間。</p>
      <p>常見組合的重疊時段：</p>
      <ul>
        <li><strong>台北 + 倫敦</strong>：台北 15:00-20:00 = 倫敦 08:00-13:00（重疊 5 小時）✅ 足夠</li>
        <li><strong>台北 + 紐約</strong>：台北 21:00-22:00 = 紐約 08:00-09:00（重疊 1-2 小時）⚠️ 勉強</li>
        <li><strong>台北 + 洛杉磯</strong>：幾乎沒有重疊 ❌ 需要有人犧牲</li>
        <li><strong>台北 + 倫敦 + 紐約</strong>：三方同時？台北 21:00 = 倫敦 14:00 = 紐約 09:00。可以，但台北要加班。</li>
      </ul>

      <h2>第二步：三個排程策略</h2>

      <h3>策略 A：固定時段法</h3>
      <p>適合每週例會。找到一個所有人都能接受的固定時段，然後永遠不要改。人的痛苦不在於偶爾早起，而在於每次都要重新適應不同時間。建議用 Google Calendar 建立 recurring event，讓系統自動處理夏令時間。</p>

      <h3>策略 B：輪替法</h3>
      <p>如果沒有理想重疊時段，公平的做法是輪替。這週用台北友善的時間，下週用對方友善的時間。這樣犧牲是共同承擔的。千萬不要讓同一個時區的人永遠吃虧，那會嚴重影響士氣。</p>

      <h3>策略 C：非同步 + 精簡同步</h3>
      <p>最成熟的做法。把大部分討論改成非同步（Slack、Notion、Loom 錄影），只留真正需要即時互動的事情（決策、腦力激盪、衝突處理）才開會。會議時間控制在 30 分鐘內，因為有人可能在非正常時段上線。</p>

      <h2>Zoom 的時區小功能你可能不知道</h2>
      <ul>
        <li><strong>排程時選時區</strong>：建立 Zoom 會議時，可以明確指定時區。建議用 UTC 作為基準，附上各地的當地時間。</li>
        <li><strong>Zoom 日曆整合</strong>：連結 Google Calendar 後，邀請函會自動顯示對方的當地時間。</li>
        <li><strong>錄影 + 摘要</strong>：無法出席的人看錄影。Zoom AI Companion 可以自動產生會議摘要。</li>
      </ul>

      <h2>會議邀請的寫法</h2>
      <p>不要只寫「Tuesday 3pm」，寫清楚每個時區的時間：</p>
      <p><em>「Weekly sync: Tuesday 15:00 TPE / 08:00 LON / 03:00 NYC」</em></p>
      <p>這樣每個人一眼就知道自己幾點要上線。或者直接附上<a href="/">時區轉換器</a>的連結。</p>

      <h2>給主管的一句話</h2>
      <p>如果你發現某個同事每次都在深夜上線開會，那不是他「很有奉獻精神」，那是你的排程不公平。好的跨國團隊管理，是讓犧牲對等、讓非同步成為常態、讓同步會議成為例外。</p>
    </>
  );
}
