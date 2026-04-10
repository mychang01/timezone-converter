import { TAIPEI, OTHER_CITIES, CITIES, cityBySlug, type City } from './cities';

export interface CityPair {
  cityA: City;
  cityB: City;
  slug: string; // e.g. "taipei-paris"
}

// Tier 1: all Taipei ↔ X pairs
export const TIER1_PAIRS: CityPair[] = OTHER_CITIES.map((city) => ({
  cityA: TAIPEI,
  cityB: city,
  slug: `${TAIPEI.slug}-${city.slug}`,
}));

// Tier 2: popular non-Taipei pairs for Taiwan audience
const TIER2_SLUGS = [
  ['tokyo', 'new-york'],
  ['tokyo', 'london'],
  ['london', 'new-york'],
  ['london', 'paris'],
  ['new-york', 'los-angeles'],
  ['tokyo', 'paris'],
  ['seoul', 'new-york'],
  ['sydney', 'london'],
  ['hong-kong', 'london'],
  ['singapore', 'london'],
  ['tokyo', 'seoul'],
  ['berlin', 'new-york'],
  ['dubai', 'london'],
  ['sydney', 'new-york'],
  ['hong-kong', 'new-york'],
  ['singapore', 'tokyo'],
  ['bangkok', 'tokyo'],
  ['vancouver', 'tokyo'],
  ['toronto', 'london'],
  ['paris', 'new-york'],
];

export const TIER2_PAIRS: CityPair[] = TIER2_SLUGS.map(([a, b]) => {
  const cityA = cityBySlug(a)!;
  const cityB = cityBySlug(b)!;
  return { cityA, cityB, slug: `${a}-${b}` };
}).filter((p) => p.cityA && p.cityB);

export const ALL_PAIRS: CityPair[] = [...TIER1_PAIRS, ...TIER2_PAIRS];

export function pairBySlug(slug: string): CityPair | undefined {
  return ALL_PAIRS.find((p) => p.slug === slug);
}

// Reverse slug lookup: "paris-taipei" → "taipei-paris"
export function canonicalSlug(slug: string): string | null {
  // Check if it's already canonical
  if (ALL_PAIRS.find((p) => p.slug === slug)) return slug;
  // Try reversing
  const parts = slug.split('-');
  // Handle multi-word slugs (e.g. "new-york-taipei" or "taipei-new-york")
  for (const pair of ALL_PAIRS) {
    const [a, b] = [pair.cityA.slug, pair.cityB.slug];
    // Check if the slug is the reverse
    if (slug === `${b}-${a}`) return pair.slug;
  }
  return null;
}

/**
 * Parse any valid "cityA-cityB" slug into a CityPair.
 * Handles multi-word slugs like "new-york-los-angeles".
 * Returns undefined if no valid parse found.
 */
export function parsePairSlug(slug: string): CityPair | undefined {
  // Try known pairs first
  const known = pairBySlug(slug);
  if (known) return known;

  // Try parsing: iterate all city slugs (longest first to handle multi-word)
  const allCities = [...new Set(CITIES.map((c) => c))];
  const sorted = allCities.sort((a, b) => b.slug.length - a.slug.length);

  for (const ca of sorted) {
    if (!slug.startsWith(ca.slug + '-')) continue;
    const rest = slug.slice(ca.slug.length + 1);
    const cb = cityBySlug(rest);
    if (cb && cb.slug !== ca.slug) {
      return { cityA: ca, cityB: cb, slug };
    }
  }
  return undefined;
}

// Get related pairs for internal linking
export function relatedPairs(pair: CityPair, limit = 8): CityPair[] {
  return ALL_PAIRS.filter(
    (p) =>
      p.slug !== pair.slug &&
      (p.cityA.slug === pair.cityA.slug ||
        p.cityA.slug === pair.cityB.slug ||
        p.cityB.slug === pair.cityA.slug ||
        p.cityB.slug === pair.cityB.slug)
  ).slice(0, limit);
}
