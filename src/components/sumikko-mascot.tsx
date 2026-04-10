'use client';

/**
 * Sumikko Gurashi-style mascots.
 * Pure inline SVG — no external files needed.
 * Slow, gentle animations: breathing, blinking, head tilt.
 */

type MascotType = 'bear' | 'cat' | 'penguin' | 'rabbit';

interface SumikkoMascotProps {
  type: MascotType;
  size?: number;
  className?: string;
}

export function SumikkoMascot({
  type,
  size = 64,
  className = '',
}: SumikkoMascotProps) {
  return (
    <div
      className={`sumikko-mascot sumikko-${type} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {type === 'bear' && <Bear />}
        {type === 'cat' && <Cat />}
        {type === 'penguin' && <Penguin />}
        {type === 'rabbit' && <Rabbit />}
      </svg>
    </div>
  );
}

function Bear() {
  return (
    <g className="sumikko-body">
      {/* Ears */}
      <circle cx="30" cy="22" r="12" fill="#e8d5b7" />
      <circle cx="30" cy="22" r="7" fill="#d4b896" />
      <circle cx="70" cy="22" r="12" fill="#e8d5b7" />
      <circle cx="70" cy="22" r="7" fill="#d4b896" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="32" ry="36" fill="#e8d5b7" />
      {/* Eyes — blink animation applied via CSS */}
      <g className="sumikko-eyes">
        <ellipse cx="38" cy="48" rx="2.5" ry="3" fill="#2a2a2a" />
        <ellipse cx="62" cy="48" rx="2.5" ry="3" fill="#2a2a2a" />
      </g>
      {/* Blush */}
      <ellipse cx="30" cy="55" rx="6" ry="3.5" fill="#f5c6c6" opacity="0.6" />
      <ellipse cx="70" cy="55" rx="6" ry="3.5" fill="#f5c6c6" opacity="0.6" />
      {/* Nose */}
      <ellipse cx="50" cy="54" rx="3" ry="2" fill="#c4a882" />
      {/* Mouth */}
      <path
        d="M46 58 Q50 62 54 58"
        stroke="#c4a882"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function Cat() {
  return (
    <g className="sumikko-body">
      {/* Ears (triangles) */}
      <polygon points="26,18 18,35 34,35" fill="#f0ebe3" />
      <polygon points="28,22 22,32 34,32" fill="#f5c6c6" />
      <polygon points="74,18 66,35 82,35" fill="#f0ebe3" />
      <polygon points="72,22 66,32 78,32" fill="#f5c6c6" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="30" ry="35" fill="#f0ebe3" />
      {/* Eyes */}
      <g className="sumikko-eyes">
        <ellipse cx="38" cy="48" rx="2.5" ry="3" fill="#2a2a2a" />
        <ellipse cx="62" cy="48" rx="2.5" ry="3" fill="#2a2a2a" />
      </g>
      {/* Blush */}
      <ellipse cx="30" cy="55" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      <ellipse cx="70" cy="55" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      {/* Nose */}
      <ellipse cx="50" cy="53" rx="3" ry="2" fill="#f5b0b0" />
      {/* Whiskers */}
      <line x1="22" y1="52" x2="36" y2="54" stroke="#d4c8b8" strokeWidth="1" />
      <line x1="22" y1="56" x2="36" y2="56" stroke="#d4c8b8" strokeWidth="1" />
      <line x1="64" y1="54" x2="78" y2="52" stroke="#d4c8b8" strokeWidth="1" />
      <line x1="64" y1="56" x2="78" y2="56" stroke="#d4c8b8" strokeWidth="1" />
      {/* Mouth */}
      <path
        d="M47 57 Q50 60 53 57"
        stroke="#d4b8a0"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function Penguin() {
  return (
    <g className="sumikko-body">
      {/* Body */}
      <ellipse cx="50" cy="56" rx="28" ry="34" fill="#b8d8e8" />
      {/* Belly */}
      <ellipse cx="50" cy="62" rx="18" ry="22" fill="#f0f5f8" />
      {/* Eyes */}
      <g className="sumikko-eyes">
        <ellipse cx="40" cy="46" rx="2.5" ry="3" fill="#2a2a2a" />
        <ellipse cx="60" cy="46" rx="2.5" ry="3" fill="#2a2a2a" />
      </g>
      {/* Blush */}
      <ellipse cx="33" cy="52" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      <ellipse cx="67" cy="52" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      {/* Beak */}
      <ellipse cx="50" cy="51" rx="4" ry="2.5" fill="#f5d080" />
      {/* Feet */}
      <ellipse cx="40" cy="90" rx="8" ry="4" fill="#f5d080" />
      <ellipse cx="60" cy="90" rx="8" ry="4" fill="#f5d080" />
    </g>
  );
}

function Rabbit() {
  return (
    <g className="sumikko-body">
      {/* Ears (long, slightly droopy) */}
      <ellipse cx="36" cy="16" rx="8" ry="22" fill="#f5f0eb" transform="rotate(-8 36 16)" />
      <ellipse cx="36" cy="16" rx="4" ry="16" fill="#f5c6c6" opacity="0.4" transform="rotate(-8 36 16)" />
      <ellipse cx="64" cy="16" rx="8" ry="22" fill="#f5f0eb" transform="rotate(8 64 16)" />
      <ellipse cx="64" cy="16" rx="4" ry="16" fill="#f5c6c6" opacity="0.4" transform="rotate(8 64 16)" />
      {/* Body */}
      <ellipse cx="50" cy="60" rx="28" ry="32" fill="#f5f0eb" />
      {/* Eyes */}
      <g className="sumikko-eyes">
        <ellipse cx="40" cy="52" rx="2.5" ry="3" fill="#2a2a2a" />
        <ellipse cx="60" cy="52" rx="2.5" ry="3" fill="#2a2a2a" />
      </g>
      {/* Blush */}
      <ellipse cx="32" cy="58" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      <ellipse cx="68" cy="58" rx="5" ry="3" fill="#f5c6c6" opacity="0.5" />
      {/* Nose */}
      <ellipse cx="50" cy="56" rx="2.5" ry="2" fill="#f5b0b0" />
      {/* Mouth */}
      <path
        d="M47 60 Q50 63 53 60"
        stroke="#d4b8a0"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * CSS for sumikko animations.
 * Import this once in globals.css or inline it.
 */
export const sumikkoCSS = `
/* Gentle breathing */
.sumikko-body {
  animation: sumikko-breathe 6s ease-in-out infinite;
  transform-origin: 50% 60%;
}

/* Blink every ~5 seconds */
.sumikko-eyes {
  animation: sumikko-blink 5s ease-in-out infinite;
}

/* Gentle head tilt */
.sumikko-mascot {
  animation: sumikko-tilt 8s ease-in-out infinite;
  display: inline-block;
}

@keyframes sumikko-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes sumikko-blink {
  0%, 90%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
}

@keyframes sumikko-tilt {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(2deg); }
  60% { transform: rotate(-2deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sumikko-body,
  .sumikko-eyes,
  .sumikko-mascot {
    animation: none;
  }
}
`;
