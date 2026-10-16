const bars = Array.from({ length: 48 }, (_, i) => ({
  x: i * 30,
  w: 20 + ((i * 7) % 16),
  h: 22 + ((i * 29) % 70),
}));

export default function SkylineStrip({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
    >
      <g fill="#123424" opacity="0.85">
        {bars.map((b, i) => (
          <rect key={i} x={b.x} y={120 - b.h} width={b.w} height={b.h} />
        ))}
      </g>
      <g fill="#e0b978" opacity="0.55">
        {bars.map((b, i) =>
          i % 3 === 0 ? (
            <rect key={i} x={b.x + 5} y={120 - b.h + 8} width="3" height="3" />
          ) : null,
        )}
      </g>
    </svg>
  );
}
