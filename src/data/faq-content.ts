import type { City } from './cities';
import { diffHours, hasDST } from '@/lib/timezone';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQ items for a city pair.
 * Content is deterministic (build-time safe).
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
      answer:
        diff === 0
          ? `${cityA.name}和${cityB.name}沒有時差，兩地時間完全相同。`
          : `${cityB.name}比${cityA.name}${direction} ${absDiff} 小時。${dst ? `由於${cityB.name}實施夏令時間，冬夏季時差會有 1 小時的變動。` : ''}`,
    },
    {
      question: `${cityA.name}早上 9 點，${cityB.name}幾點？`,
      answer: (() => {
        const hB = ((9 + diff) % 24 + 24) % 24;
        const period = hB >= 6 && hB < 18 ? '白天' : '夜晚';
        return `${cityA.name}早上 9 點時，${cityB.name}是${period} ${Math.floor(hB)}:00。`;
      })(),
    },
    {
      question: `從${cityA.name}打電話到${cityB.name}，最佳時間是？`,
      answer: (() => {
        // Find overlap of 8:00-22:00 both sides
        const slots: string[] = [];
        for (let h = 8; h < 22; h++) {
          const hB = ((h + diff) % 24 + 24) % 24;
          if (hB >= 8 && hB < 22) slots.push(`${h}:00`);
        }
        if (slots.length === 0)
          return `由於時差較大（${absDiff} 小時），兩地正常作息時間幾乎沒有重疊。建議選擇一方早晨、另一方晚間的時段通話。`;
        return `建議在${cityA.name}時間 ${slots[0]}–${slots[slots.length - 1]} 之間通話，此時段雙方都在正常作息時間內（8:00–22:00）。共有 ${slots.length} 小時的重疊時段。`;
      })(),
    },
    {
      question: `${cityB.name}現在是白天還是晚上？`,
      answer: `這取決於您查看的即時時間。本工具會即時顯示${cityB.name}的日夜狀態（☀️ 白天 / 🌙 夜晚），並以時鐘背景顏色直覺呈現。`,
    },
  ];

  if (dst) {
    items.push({
      question: `${cityB.name}有夏令時間嗎？`,
      answer: `是的，${cityB.name}實施夏令時間（DST）。夏令時間期間，時鐘會撥快 1 小時，與${cityA.name}的時差也會相應變動。本工具會自動偵測並顯示目前是標準時間或夏令時間。`,
    });
  }

  items.push({
    question: `這個時區轉換器的資料準確嗎？`,
    answer: `本工具使用瀏覽器內建的 IANA 時區資料庫進行計算，會自動處理夏令時間（DST）轉換，資料與您的作業系統同步更新，確保準確性。`,
  });

  return items;
}
