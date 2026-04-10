'use client';

/**
 * Analog clock face — pure SVG.
 * Dark mode when isNight=true (hour < 6 or >= 20).
 */
interface AnalogClockProps {
  hour: number;
  minute: number;
  second: number;
  size?: number;
  label: string;
  sublabel?: string;
  timeStr: string;
  isNight?: boolean;
}

export function AnalogClock({
  hour,
  minute,
  second,
  size = 120,
  label,
  sublabel,
  timeStr,
  isNight = false,
}: AnalogClockProps) {
  const hAngle = ((hour % 12) + minute / 60) * 30;
  const mAngle = (minute + second / 60) * 6;
  const sAngle = second * 6;

  // Color scheme
  const face = isNight ? '#1a1a2e' : '#fff';
  const border = isNight ? '#2a2a4a' : '#e2e2e2';
  const markerMain = isNight ? '#aaa' : '#333';
  const markerSub = isNight ? '#555' : '#ccc';
  const numColor = isNight ? '#999' : '#666';
  const hourHand = isNight ? '#ddd' : '#333';
  const minHand = isNight ? '#bbb' : '#555';
  const centerDot = isNight ? '#ddd' : '#333';
  const labelColor = isNight ? 'text-gray-300' : 'text-gray-800';
  const subColor = isNight ? 'text-gray-500' : 'text-gray-400';
  const timeColor = isNight ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="drop-shadow-sm"
      >
        {/* Face */}
        <circle cx="60" cy="60" r="56" fill={face} stroke={border} strokeWidth="2" />
        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          const rad = (angle * Math.PI) / 180;
          const x1 = 60 + 45 * Math.sin(rad);
          const y1 = 60 - 45 * Math.cos(rad);
          const x2 = 60 + 50 * Math.sin(rad);
          const y2 = 60 - 50 * Math.cos(rad);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={i % 3 === 0 ? markerMain : markerSub}
              strokeWidth={i % 3 === 0 ? 2.5 : 1.2}
              strokeLinecap="round"
            />
          );
        })}
        {/* Numbers */}
        {[
          { n: '12', x: 60, y: 20 },
          { n: '3', x: 96, y: 64 },
          { n: '6', x: 60, y: 106 },
          { n: '9', x: 24, y: 64 },
        ].map((p) => (
          <text
            key={p.n} x={p.x} y={p.y}
            textAnchor="middle" fontSize="11" fontWeight="600"
            fill={numColor} fontFamily="sans-serif"
          >
            {p.n}
          </text>
        ))}
        {/* Hour hand */}
        <line
          x1="60" y1="60"
          x2={60 + 28 * Math.sin((hAngle * Math.PI) / 180)}
          y2={60 - 28 * Math.cos((hAngle * Math.PI) / 180)}
          stroke={hourHand} strokeWidth="3.5" strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1="60" y1="60"
          x2={60 + 38 * Math.sin((mAngle * Math.PI) / 180)}
          y2={60 - 38 * Math.cos((mAngle * Math.PI) / 180)}
          stroke={minHand} strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1="60" y1="60"
          x2={60 + 40 * Math.sin((sAngle * Math.PI) / 180)}
          y2={60 - 40 * Math.cos((sAngle * Math.PI) / 180)}
          stroke="#e74c3c" strokeWidth="1" strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx="60" cy="60" r="3" fill={centerDot} />
        <circle cx="60" cy="60" r="1.5" fill="#e74c3c" />
        {/* Night indicator */}
        {isNight && (
          <text x="60" y="42" textAnchor="middle" fontSize="12">🌙</text>
        )}
      </svg>
      <div className="mt-2 text-center">
        <div className={`text-sm font-bold leading-tight ${labelColor}`}>
          {label}
        </div>
        {sublabel && (
          <div className={`text-[10px] ${subColor}`}>{sublabel}</div>
        )}
        <div className={`font-mono text-sm font-semibold mt-0.5 ${timeColor}`}>
          {timeStr}
        </div>
      </div>
    </div>
  );
}
