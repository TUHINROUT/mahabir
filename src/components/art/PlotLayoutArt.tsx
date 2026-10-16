type Variant = "bajarangi" | "maruti";

function grid(
  x: number,
  y: number,
  w: number,
  h: number,
  cols: number,
  rowsN: number,
) {
  const cells: { x: number; y: number; w: number; h: number }[] = [];
  const cw = w / cols;
  const ch = h / rowsN;
  for (let r = 0; r < rowsN; r++)
    for (let c = 0; c < cols; c++)
      cells.push({ x: x + c * cw + 1.5, y: y + r * ch + 1.5, w: cw - 3, h: ch - 3 });
  return cells;
}

function Plots({
  cells,
  offset = 0,
}: {
  cells: { x: number; y: number; w: number; h: number }[];
  offset?: number;
}) {
  return (
    <>
      {cells.map((c, i) => {
        const sold = (i + offset) % 5 === 2;
        return (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width={c.w}
            height={c.h}
            rx="1.5"
            fill={sold ? "#e0b978" : "#ffffff"}
            fillOpacity={sold ? 0.55 : 0.07}
            stroke="#f3dca6"
            strokeOpacity="0.75"
            strokeWidth="1"
          />
        );
      })}
    </>
  );
}

function Pin({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 14} rx="9" ry="3" fill="#000" opacity="0.35" />
      <path
        d={`M${x} ${y + 12} C ${x - 14} ${y - 2}, ${x - 12} ${y - 22}, ${x} ${y - 22} C ${x + 12} ${y - 22}, ${x + 14} ${y - 2}, ${x} ${y + 12} Z`}
        fill="#d32f1f"
      />
      <circle cx={x} cy={y - 9} r="4.5" fill="#fff" />
    </g>
  );
}

export default function PlotLayoutArt({
  variant,
  className = "h-full w-full",
}: {
  variant: Variant;
  className?: string;
}) {
  const id = `pl-${variant}`;
  if (variant === "bajarangi") {
    return (
      <svg
        aria-hidden
        focusable="false"
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        className={className}
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1f6a40" />
            <stop offset="1" stopColor="#0f3a24" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#${id}-bg)`} />
        <g opacity="0.12" stroke="#fff">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="260" />
          ))}
        </g>
        {/* roads */}
        <rect x="0" y="108" width="400" height="26" fill="#b98a55" />
        <rect x="189" y="0" width="22" height="108" fill="#b98a55" />
        <line x1="0" y1="121" x2="400" y2="121" stroke="#fff" strokeOpacity="0.7" strokeDasharray="8 7" />
        <line x1="200" y1="0" x2="200" y2="108" stroke="#fff" strokeOpacity="0.7" strokeDasharray="8 7" />
        <Plots cells={grid(10, 10, 172, 90, 4, 2)} />
        <Plots cells={grid(218, 10, 172, 90, 4, 2)} offset={3} />
        <Plots cells={grid(10, 142, 380, 108, 8, 2)} offset={1} />
        <Pin x={200} y={121} />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b2b1c" />
          <stop offset="1" stopColor="#c99a55" />
        </linearGradient>
        <linearGradient id={`${id}-gr`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f6a40" />
          <stop offset="1" stopColor="#0f3a24" />
        </linearGradient>
      </defs>
      <rect width="400" height="130" fill={`url(#${id}-sky)`} />
      <circle cx="320" cy="92" r="26" fill="#ffe6a8" opacity="0.85" />
      {/* station */}
      <g>
        <rect x="70" y="72" width="130" height="54" fill="#f4efe4" />
        <rect x="70" y="72" width="130" height="8" fill="#d32f1f" />
        <polygon points="62,72 135,48 208,72" fill="#8a5a2b" />
        <rect x="104" y="86" width="62" height="14" fill="#123424" />
        <g fill="#e0b978">
          {[82, 118, 154, 178].map((x) => (
            <rect key={x} x={x} y="106" width="10" height="20" />
          ))}
        </g>
      </g>
      <rect y="126" width="400" height="134" fill={`url(#${id}-gr)`} />
      {/* rail */}
      <rect x="0" y="134" width="400" height="4" fill="#2b2b2b" />
      <rect x="0" y="146" width="400" height="4" fill="#2b2b2b" />
      <g fill="#6b4a2a">
        {Array.from({ length: 34 }, (_, i) => (
          <rect key={i} x={i * 12 + 2} y="132" width="5" height="20" />
        ))}
      </g>
      {/* road */}
      <polygon points="150,160 250,160 300,260 100,260" fill="#3a3a3a" />
      <line x1="200" y1="160" x2="200" y2="260" stroke="#fff" strokeOpacity="0.8" strokeDasharray="8 7" />
      <Plots cells={grid(8, 166, 96, 88, 3, 3)} />
      <Plots cells={grid(296, 166, 96, 88, 3, 3)} offset={2} />
      <Pin x={200} y={112} />
    </svg>
  );
}
