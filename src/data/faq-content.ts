import type { City } from './cities';
import { diffHours, hasDST } from '@/lib/timezone';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQ items for a city pair.
 * Answers are 80-120 chars, conversational tone like explaining to a friend.
 */
export function generateFAQ(cityA: City, cityB: City): FAQItem[] {
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);
  const absDiff = Math.abs(diff);
  const direction = diff > 0 ? '快' : diff < 0 ? '慢' : '相同';
  const year = now.getFullYear();
  const dst = hasDST(cityB.tz, year);

  const items: FAQItem[] = [
    {
      question: `${cityA.name}和${cityB.name}時差幾小時？`,
      answer: diff === 0
        ? `${cityA.name}和${cityB.name}其實沒有時差，兩邊的時鐘顯示的時間完全一樣。不過要注意的是，雖然時間相同，兩地的日出日落時間可能還是會有些微差異，因為經度位置不同。所以如果你在安排行程，時間上不用換算，但天黑天亮的感覺可能會有點不一樣。`
        : `簡單來說，${cityB.name}比${cityA.name}${direction} ${absDiff} 個小時。舉個例子，當${cityA.name}是中午 12 點的時候，${cityB.name}已經是${diff > 0 ? `晚上 ${12 + diff > 24 ? (12 + diff) - 24 : 12 + diff} 點` : `${12 + diff < 0 ? 12 + diff + 24 : 12 + diff} 點`}了。${dst ? `不過要特別留意，${cityB.name}有實施夏令時間（DST），每年春天會把時鐘撥快一小時、秋天再撥回來，所以冬天和夏天的時差會差 1 小時。我們的工具會自動幫你判斷目前是哪個狀態。` : `這個時差全年固定，不會因為季節改變，所以你可以放心記住這個數字。`}`,
    },
    {
      question: `${cityA.name}早上 9 點的時候，${cityB.name}是幾點？`,
      answer: (() => {
        const hB = ((9 + diff) % 24 + 24) % 24;
        const isNextDay = 9 + diff >= 24;
        const isPrevDay = 9 + diff < 0;
        const period = hB >= 6 && hB < 12 ? '早上' : hB >= 12 && hB < 18 ? '下午' : hB >= 18 && hB < 22 ? '傍晚' : '深夜';
        const dayNote = isNextDay ? '（已經是隔天了）' : isPrevDay ? '（還在前一天）' : '';
        return `當${cityA.name}早上 9 點準備開始上班的時候，${cityB.name}那邊是${period} ${Math.floor(hB)} 點${dayNote}。${hB >= 22 || hB < 7 ? `這個時間對方很可能已經在睡覺了，所以如果你要打電話或傳訊息給在${cityB.name}的朋友，建議避開這個時段，改在雙方都醒著的時間聯繫比較禮貌。` : `這個時間對方也在活動中，是很適合聯繫的時段。`}`;
      })(),
    },
    {
      question: `從${cityA.name}打電話到${cityB.name}，什麼時間最適合？`,
      answer: (() => {
        const slots: string[] = [];
        for (let h = 8; h < 22; h++) {
          const hB = ((h + diff) % 24 + 24) % 24;
          if (hB >= 8 && hB < 22) slots.push(`${h}:00`);
        }
        if (slots.length === 0)
          return `因為${cityA.name}和${cityB.name}的時差達到 ${absDiff} 小時，兩地正常作息時間（早上 8 點到晚上 10 點）幾乎完全不重疊，這確實讓通話變得比較困難。建議的做法是：你可以稍微早起或晚睡，選在${cityA.name}的清晨或深夜時段，對應到${cityB.name}的白天來聯繫。如果是工作需求，建議用非同步溝通工具（email、Slack）會更實際。`;
        return `最推薦的通話時段是${cityA.name}時間 ${slots[0]} 到 ${slots[slots.length - 1]}，這段期間雙方都在正常活動時間（早 8 點到晚 10 點），一共有 ${slots.length} 個小時的重疊。如果是商務電話，建議選在重疊時段的中間，避免踩到對方剛起床或準備休息的時間。上方的「最佳通話時段」色條可以幫你一眼看出哪些時段最適合。`;
      })(),
    },
    {
      question: `${cityB.name}現在是白天還是晚上？`,
      answer: `這要看你現在幾點查看。我們的工具會即時幫你判斷：時鐘面板上會顯示 ☀️（白天）或 🌙（夜晚）的圖示，而且時鐘的背景顏色也會跟著變化。深色背景代表對方那邊是夜晚，淺色則是白天。這樣你不用換算，一眼就能知道現在適不適合打電話或傳訊息過去。如果顯示是夜晚，建議先傳個文字訊息就好，等對方醒來再回覆。`,
    },
    {
      question: `去${cityB.name}旅行要怎麼調時差？`,
      answer: (() => {
        if (absDiff <= 2) return `${cityA.name}到${cityB.name}只差 ${absDiff} 個小時，時差非常小，大部分人幾乎不會感覺到不適。抵達後正常作息就好，可能第一天稍微早起或晚睡一點點，但通常一天之內就能完全適應。`;
        if (absDiff <= 5) return `${absDiff} 小時的時差屬於中等程度。建議出發前兩三天開始慢慢調整作息，每天提前或延後一小時睡覺。到了${cityB.name}之後，白天盡量曬太陽、多活動，晚上避免看手機螢幕的藍光。通常 2-3 天就能調整過來。如果真的很難入睡，可以考慮短暫服用褪黑激素，但建議先諮詢醫生。`;
        return `${absDiff} 小時的時差算是蠻大的，調整起來需要一些策略。專家建議：出發前 3-4 天就開始慢慢調整睡眠時間，每天移動 1-2 小時；飛機上按照目的地時間作息（該睡就睡、該醒就醒）；抵達後第一天強迫自己撐到當地晚上再睡，白天多曬陽光幫助重設生理時鐘。一般來說，每差 1 小時的時差大約需要 1 天來適應，所以 ${absDiff} 小時時差可能需要將近一週才能完全調過來。`;
      })(),
    },
  ];

  if (dst) {
    items.push({
      question: `${cityB.name}有夏令時間嗎？什麼時候會變？`,
      answer: `有的，${cityB.name}每年會實施夏令時間（Daylight Saving Time, DST）。簡單來說，就是春天把時鐘往前撥一小時（少睡一小時），秋天再撥回來（多睡一小時）。這代表在夏令時間期間，${cityB.name}和${cityA.name}的時差會跟冬天不一樣，差了整整 1 小時。具體的切換日期每年不同，但我們的工具會自動偵測目前${cityB.name}是處於標準時間還是夏令時間，並且在時鐘面板上標示出來，你不需要自己記日期。`,
    });
  }

  items.push(
    {
      question: `這個工具的時間資料準確嗎？會自動更新嗎？`,
      answer: `我們使用的是你瀏覽器內建的 IANA 時區資料庫來計算所有時間，這是全世界最權威的時區資料來源，各大作業系統（Windows、macOS、iOS、Android）都在用。它會自動處理夏令時間的切換、時區規則的變更，而且隨著你的系統更新而更新，所以基本上你看到的時間都是準確的。唯一要注意的是，如果你的電腦或手機系統時間本身設定錯誤，顯示的結果也會跟著不對。`,
    },
    {
      question: `${cityA.name}和${cityB.name}適合安排視訊會議嗎？`,
      answer: (() => {
        const slots: number[] = [];
        for (let h = 9; h < 18; h++) {
          const hB = ((h + diff) % 24 + 24) % 24;
          if (hB >= 9 && hB < 18) slots.push(h);
        }
        if (slots.length === 0) return `坦白說，${cityA.name}和${cityB.name}之間 ${absDiff} 小時的時差讓安排工作時間的視訊會議非常困難，因為雙方的上班時間幾乎完全不重疊。比較務實的做法是輪流犧牲：這次你早起、下次對方晚走，或者改用非同步溝通工具。如果一定要開會，建議控制在 30 分鐘以內，減少對作息的影響。`;
        return `可以的！雙方的工作時間（上午 9 點到下午 6 點）有 ${slots.length} 個小時的重疊。建議把會議安排在${cityA.name}時間 ${slots[0]}:00 到 ${slots[slots.length - 1]}:00 之間，這樣兩邊都在正常上班時段，不用特別早起或加班。如果重疊時間不多，建議會議盡量精簡，把討論事項提前用文件共享。`;
      })(),
    },
  );

  return items;
}
