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
        ← 回到時區轉換器
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
          <h3 className="text-sm font-semibold text-gray-500">試試時區轉換器</h3>
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
          <a href="/guide/us-time-zones" className="text-sm text-gray-500 hover:text-[#2563eb]">美國四大時區完整指南</a>
          <a href="/guide/zoom-meeting-across-timezones" className="text-sm text-gray-500 hover:text-[#2563eb]">跨時區 Zoom 會議排程攻略</a>
          <a href="/guide/japan-travel-time" className="text-sm text-gray-500 hover:text-[#2563eb]">日本旅遊時差調整</a>
          <a href="/guide/europe-travel-time" className="text-sm text-gray-500 hover:text-[#2563eb]">歐洲自助旅行時差全攻略</a>
          <a href="/guide/australia-working-holiday-timezone" className="text-sm text-gray-500 hover:text-[#2563eb]">澳洲打工度假時區指南</a>
          <a href="/guide/student-abroad-video-call" className="text-sm text-gray-500 hover:text-[#2563eb]">留學生視訊最佳時間</a>
          <a href="/guide/digital-nomad-timezone" className="text-sm text-gray-500 hover:text-[#2563eb]">數位遊牧全球時區效率表</a>
          <a href="/guide/utc-gmt-explained" className="text-sm text-gray-500 hover:text-[#2563eb]">UTC 和 GMT 一次搞懂</a>
          <a href="/guide/international-date-line" className="text-sm text-gray-500 hover:text-[#2563eb]">國際換日線完整解析</a>
          <a href="/guide/taiwan-direct-flights-2026" className="text-sm text-gray-500 hover:text-[#2563eb]">2026 台灣直飛航班時差整理</a>
        </div>
      </div>
    </div>
  );
}
