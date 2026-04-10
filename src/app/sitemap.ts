import type { MetadataRoute } from 'next';
import { ALL_PAIRS } from '@/data/city-pairs';

const BASE = 'https://timezone.crispy.today';

export default function sitemap(): MetadataRoute.Sitemap {
  const pairUrls = ALL_PAIRS.map((p) => ({
    url: `${BASE}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guideUrls = [
    'jet-lag-tips',
    'remote-work-scheduling',
    'best-time-to-call',
    'dst-explained',
    'taiwan-flight-time-zones',
  ].map((slug) => ({
    url: `${BASE}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...pairUrls,
    ...guideUrls,
  ];
}
