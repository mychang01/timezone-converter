import { ImageResponse } from 'next/og';
import { parsePairSlug } from '@/data/city-pairs';
import { diffHours } from '@/lib/timezone';

export const alt = '時差對照';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair: slug } = await params;
  const pair = parsePairSlug(slug);

  if (!pair) {
    return new ImageResponse(
      (
        <div style={{ fontSize: 48, background: '#7c6dd8', color: 'white', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          時區轉換器
        </div>
      ),
      { ...size }
    );
  }

  const { cityA, cityB } = pair;
  const now = new Date();
  const diff = diffHours(now, cityA.tz, cityB.tz);
  const sign = diff >= 0 ? '+' : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c6dd8, #5b8def)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* City names */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 64 }}>{cityA.flag}</span>
            <span style={{ fontSize: 40, fontWeight: 700, marginTop: 8 }}>{cityA.name}</span>
          </div>
          <span style={{ fontSize: 48, opacity: 0.7 }}>↔</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 64 }}>{cityB.flag}</span>
            <span style={{ fontSize: 40, fontWeight: 700, marginTop: 8 }}>{cityB.name}</span>
          </div>
        </div>
        {/* Diff */}
        <div style={{ fontSize: 72, fontWeight: 800, marginBottom: 12 }}>
          時差 {sign}{diff} 小時
        </div>
        {/* Branding */}
        <div style={{ fontSize: 20, opacity: 0.7 }}>
          timezone.crispy.today — 即時時間對照
        </div>
      </div>
    ),
    { ...size }
  );
}
