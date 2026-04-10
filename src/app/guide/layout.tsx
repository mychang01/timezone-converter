import { SumikkoMascot } from '@/components/sumikko-mascot';
import { TAIPEI, OTHER_CITIES } from '@/data/cities';

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[720px] mx-auto px-4 py-8">
      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[#2563eb] hover:text-[#1d4ed8] mb-6 transition-colors"
      >
        ← 回到世界時鐘
      </a>

      <article className="prose prose-gray prose-sm max-w-none
        prose-headings:text-gray-800 prose-h1:text-2xl prose-h1:font-extrabold
        prose-h2:text-lg prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3
        prose-p:text-gray-600 prose-p:leading-relaxed
        prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline
        prose-li:text-gray-600
        prose-strong:text-gray-800
      ">
        {children}
      </article>

      {/* Related tools */}
      <div className="mt-12 pt-6 border-t border-blue-100">
        <div className="flex items-center gap-2 mb-4">
          <SumikkoMascot type="rabbit" size={28} />
          <h3 className="text-sm font-semibold text-gray-500">試試時差轉換器</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {OTHER_CITIES.slice(0, 12).map((c) => (
            <a
              key={c.slug}
              href={`/${TAIPEI.slug}-${c.slug}`}
              className="text-xs px-3 py-1.5 bg-white rounded-lg text-gray-500 hover:text-[#2563eb] hover:bg-blue-50 transition-colors shadow-sm"
            >
              {TAIPEI.name} → {c.name}
            </a>
          ))}
        </div>
      </div>

      {/* Other guides */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">更多實用指南</h3>
        <div className="flex flex-col gap-2">
          <a href="/guide/jet-lag-tips" className="text-sm text-gray-500 hover:text-[#2563eb]">出國旅行時差調整完整攻略</a>
          <a href="/guide/remote-work-scheduling" className="text-sm text-gray-500 hover:text-[#2563eb]">跨時區遠距工作排程技巧</a>
          <a href="/guide/best-time-to-call" className="text-sm text-gray-500 hover:text-[#2563eb]">打國際電話的最佳時段指南</a>
          <a href="/guide/dst-explained" className="text-sm text-gray-500 hover:text-[#2563eb]">夏令時間懶人包</a>
          <a href="/guide/taiwan-flight-time-zones" className="text-sm text-gray-500 hover:text-[#2563eb]">台灣直飛航線時區總整理</a>
        </div>
      </div>
    </div>
  );
}
