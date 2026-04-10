import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_PAIRS, pairBySlug, canonicalSlug } from '@/data/city-pairs';
import { diffHours, hasDST } from '@/lib/timezone';
import { ClockDisplay } from '@/components/clock-display';
import { TimeDiffCard } from '@/components/time-diff-card';
import { CallHoursBar } from '@/components/call-hours-bar';
import { LifeComparison } from '@/components/life-comparison';
import { TimelineStrip } from '@/components/timeline-strip';
import { RelatedLinks } from '@/components/related-links';
import { SumikkoMascot } from '@/components/sumikko-mascot';
import { FAQSection } from '@/components/faq-section';
import { faqJsonLd, howToJsonLd } from '@/lib/seo';
import { generateFAQ } from '@/data/faq-content';

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALL_PAIRS.map((p) => ({ pair: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair: slug } = await params;
  const pair = pairBySlug(slug);
  if (!pair) return {};

  const { cityA, cityB } = pair;
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);
  const absDiff = Math.abs(diff);
  const dstNote = hasDST(cityB.tz, now.getFullYear())
    ? '含夏令時間資訊。'
    : '';

  return {
    title: `${cityA.name}${cityB.name}時差 — 即時時間對照`,
    description: `${cityA.name}和${cityB.name}時差${absDiff}小時。即時對照兩地時間、最佳通話時段。${dstNote}`,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${cityA.name} ↔ ${cityB.name} 時差對照`,
      description: `${cityA.name}和${cityB.name}時差${absDiff}小時。`,
    },
  };
}

export default async function PairPage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair: slug } = await params;
  const pair = pairBySlug(slug);

  if (!pair) {
    const canonical = canonicalSlug(slug);
    if (canonical) {
      // This shouldn't happen with dynamicParams=false + redirects, but just in case
      notFound();
    }
    notFound();
  }

  const { cityA, cityB } = pair;
  const faqItems = generateFAQ(cityA, cityB);

  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);
  const absDiff = Math.abs(diff);

  // JSON-LD: WebApplication
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${cityA.name}${cityB.name}時差轉換器`,
    description: `即時對照${cityA.name}與${cityB.name}的時間和時差`,
    url: `https://timezone.crispy.today/${slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TWD' },
  };

  // JSON-LD: FAQ
  const faqLd = faqJsonLd(faqItems);

  // JSON-LD: HowTo
  const howToLd = howToJsonLd(cityA, cityB, slug);

  // JSON-LD: BreadcrumbList
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '世界時鐘', item: 'https://timezone.crispy.today' },
      { '@type': 'ListItem', position: 2, name: `${cityA.name}${cityB.name}時差`, item: `https://timezone.crispy.today/${slug}` },
    ],
  };

  return (
    <main className="max-w-[960px] mx-auto px-4 py-5">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />

      {/* Back link */}
      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[#7c6dd8] hover:text-[#5b4bc0] mb-3 transition-colors"
      >
        ← 重新選擇城市
      </a>

      {/* Title — SEO: directly match search query "台北巴黎時差" */}
      <h1 className="text-center text-xl font-bold text-gray-800 mb-1">
        {cityA.flag} {cityA.name}{cityB.flag} {cityB.name}時差 — 即時時間對照
      </h1>
      <p className="text-center text-sm text-gray-400 mb-5">
        時差 {absDiff} 小時 · 即時轉換 · 最佳通話時段
      </p>

      {/* Clocks */}
      <ClockDisplay cityA={cityA} cityB={cityB} format={24} />

      {/* Mascot next to diff card */}
      <div className="flex items-start gap-3 mt-1">
        <div className="flex-1">
          <TimeDiffCard cityA={cityA} cityB={cityB} />
        </div>
        <div className="hidden md:flex flex-col items-center pt-4">
          <SumikkoMascot type="bear" size={56} />
        </div>
      </div>

      {/* Life comparison */}
      <LifeComparison cityA={cityA} cityB={cityB} />

      {/* Call hours */}
      <CallHoursBar cityA={cityA} cityB={cityB} />

      {/* Timeline + sliders */}
      <TimelineStrip cityA={cityA} cityB={cityB} format={24} />

      {/* FAQ */}
      <FAQSection items={faqItems} />

      {/* Related links */}
      <RelatedLinks pair={pair} />

      {/* Bottom mascot */}
      <div className="flex justify-center gap-6 mt-6 mb-4">
        <SumikkoMascot type="cat" size={40} />
        <SumikkoMascot type="penguin" size={36} />
      </div>
    </main>
  );
}
