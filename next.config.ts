import type { NextConfig } from 'next';

// Generate reverse-pair redirects at config time.
// E.g. /paris-taipei → /taipei-paris (301)
import { ALL_PAIRS } from './src/data/city-pairs';

const reverseRedirects = ALL_PAIRS.map((p) => ({
  source: `/${p.cityB.slug}-${p.cityA.slug}`,
  destination: `/${p.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return reverseRedirects;
  },
};

export default nextConfig;
