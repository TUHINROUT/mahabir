const VX = 900;
const HORIZON = 520;
const BOTTOM = 900;

const fan = Array.from({ length: 27 }, (_, i) => -1300 + i * 140);
const rows = [0.04, 0.09, 0.16, 0.26, 0.4, 0.58, 0.8, 1].map(
  (t) => HORIZON + (BOTTOM - HORIZON) * t,
);
const stars = Array.from({ length: 46 }, (_, i) => ({
  x: (i * 197 + 41) % 1440,
  y: (i * 83 + 17) % 330,
  r: 0.7 + ((i * 7) % 10) / 9,
  o: 0.25 + ((i * 13) % 10) / 16,
}));
const buildings = Array.from({ length: 16 }, (_, i) => ({
  x: 1000 + i * 28,
  w: 20 + ((i * 5) % 14),
  h: 26 + ((i * 17) % 58),
}));

export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#030b07" />
          <stop offset="0.55" stopColor="#0b2b1c" />
          <stop offset="0.85" stopColor="#6d5a2c" />
          <stop offset="1" stopColor="#d6a65a" />
        </linearGradient>
        <linearGradient id="hs-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14382a" />
          <stop offset="1" stopColor="#050f09" />
        </linearGradient>
        <radialGradient id="hs-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe6a8" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#e0b978" stopOpacity="0.45" />
          <stop offset="1" stopColor="#c9974a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e0b978" stopOpacity="0.55" />
          <stop offset="1" stopColor="#c9974a" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <rect width="1440" height={HORIZON} fill="url(#hs-sky)" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={s.o} />
      ))}

      <circle cx={VX} cy={HORIZON - 40} r="340" fill="url(#hs-sun)" />
      <circle cx={VX} cy={HORIZON - 30} r="64" fill="#ffe9b4" opacity="0.9" />

      {/* far skyline */}
      <g fill="#0a2417" opacity="0.95">
        {buildings.map((b, i) => (
          <rect key={i} x={b.x} y={HORIZON - b.h} width={b.w} height={b.h} />
        ))}
      </g>
      <g fill="#e0b978" opacity="0.7">
        {buildings.map((b, i) =>
          i % 2 === 0 ? (
            <rect key={i} x={b.x + 5} y={HORIZON - b.h + 8} width="3" height="3" />
          ) : null,
        )}
      </g>

      {/* hills */}
      <path
        d="M0 470 C 160 400, 320 430, 470 455 C 600 475, 700 430, 820 470 L 820 520 L 0 520 Z"
        fill="#0e3022"
      />
      <path
        d="M0 500 C 200 455, 380 490, 560 500 C 700 508, 760 480, 900 505 L 900 520 L 0 520 Z"
        fill="#0a2417"
      />

      {/* ground */}
      <rect y={HORIZON} width="1440" height={BOTTOM - HORIZON} fill="url(#hs-ground)" />
      <g stroke="#e0b978" strokeWidth="1" opacity="0.28">
        {fan.map((x) => (
          <line key={x} x1={VX} y1={HORIZON} x2={x} y2={BOTTOM} />
        ))}
        {rows.map((y) => (
          <line key={y} x1="0" y1={y} x2="1440" y2={y} />
        ))}
      </g>

      {/* road */}
      <polygon
        points={`${VX - 6},${HORIZON} ${VX + 6},${HORIZON} ${VX + 300},${BOTTOM} ${VX - 300},${BOTTOM}`}
        fill="url(#hs-road)"
      />
      <line
        x1={VX}
        y1={HORIZON}
        x2={VX}
        y2={BOTTOM}
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="14 18"
      />

      {/* plot boundary pillars */}
      <g fill="#ffe3a3">
        {[0.18, 0.3, 0.46, 0.66].map((t, i) => {
          const y = HORIZON + (BOTTOM - HORIZON) * t;
          const off = 40 + t * 520;
          return (
            <g key={i} opacity={0.4 + t * 0.6}>
              <circle cx={VX - off} cy={y} r={2 + t * 4} />
              <circle cx={VX + off} cy={y} r={2 + t * 4} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
