import type { City } from '@/data/cities';
import { hasDST, isDST } from '@/lib/timezone';

interface DirectAnswerProps {
  cityA: City;
  cityB: City;
  diff: number;
}

/**
 * AEO: Direct answer paragraph rendered at build time (Server Component).
 * This is the first thing AI engines and featured snippets will extract.
 * Format: short answer first, then context.
 */
export function DirectAnswer({ cityA, cityB, diff }: DirectAnswerProps) {
  const absDiff = Math.abs(diff);
  const direction = diff > 0 ? '快' : diff < 0 ? '慢' : '相同';
  const year = new Date().getFullYear();
  const dst = hasDST(cityB.tz, year);
  const dstNow = isDST(new Date(), cityB.tz);

  // Example conversion for concreteness
  const exampleHourA = 9; // 9 AM
  const exampleHourB = ((exampleHourA + diff) % 24 + 24) % 24;
  const periodB = exampleHourB >= 6 && exampleHourB < 18 ? '白天' : '夜晚';

  // Best call overlap
  let overlapHours = 0;
  for (let h = 8; h < 22; h++) {
    const hB = ((h + diff) % 24 + 24) % 24;
    if (hB >= 8 && hB < 22) overlapHours++;
  }

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-4 text-sm text-gray-700 leading-relaxed">
      <p className="mb-2">
        <strong>{cityA.name}和{cityB.name}的時差是 {absDiff} 小時</strong>，{cityB.name}比{cityA.name}{direction}。
        當{cityA.name}早上 {exampleHourA} 點時，{cityB.name}是{periodB} {exampleHourB} 點。
      </p>
      <p className="mb-2">
        {overlapHours > 0
          ? `兩地在正常作息時間（早 8 點到晚 10 點）有 ${overlapHours} 小時的重疊，適合安排通話或視訊會議。`
          : `由於時差較大，兩地正常作息時間幾乎沒有重疊，建議使用非同步溝通方式。`}
        {dst &&
          `${cityB.name}有實施夏令時間（DST），目前處於${dstNow ? '夏令' : '標準'}時間，冬夏季時差會差 1 小時。`}
      </p>
      <p className="text-xs text-gray-400">
        以下工具可即時查看兩地時間對照、最佳通話時段和生活作息比較。
      </p>
    </div>
  );
}
