import type { FAQItem } from '@/data/faq-content';
import type { City } from '@/data/cities';

/** Generate FAQPage JSON-LD for rich snippets. */
export function faqJsonLd(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** Generate HowTo JSON-LD for "how to check time difference" */
export function howToJsonLd(cityA: City, cityB: City, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `如何查詢${cityA.name}到${cityB.name}的時差`,
    description: `使用線上工具即時查看${cityA.name}和${cityB.name}之間的時差、最佳通話時段和生活時間對照。`,
    totalTime: 'PT1M',
    tool: { '@type': 'HowToTool', name: '時區轉換器' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '打開時區轉換器',
        text: `前往 timezone.crispy.today 首頁，或直接訪問 timezone.crispy.today/${slug}。`,
        url: `https://timezone.crispy.today/${slug}`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '查看即時時間對照',
        text: `頁面頂部會顯示${cityA.name}和${cityB.name}的即時時鐘，包含日期、時區縮寫和 UTC 偏移量。`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '查看時差資訊',
        text: `時鐘下方的時差卡片會告訴你兩地相差幾小時、目前的日夜狀態，以及是否有夏令時間影響。`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: '找到最佳通話時段',
        text: `通話時段色條以綠色標示雙方都方便的時段（8:00-22:00），幫你快速找到最適合聯繫的時間。`,
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: '用滑桿模擬不同時間',
        text: `拖動時間滑桿可以模擬任意時間點的對照結果，也可以切換日期來查看特定日子的時差（夏令時間會自動調整）。`,
      },
    ],
  };
}
