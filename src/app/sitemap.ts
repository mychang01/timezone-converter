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

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...pairUrls,
  ];
}
