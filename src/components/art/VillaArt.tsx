export default function VillaArt({
  className = "h-full w-full",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 500 420"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="va-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b2b1c" />
          <stop offset="0.6" stopColor="#2f5a3a" />
          <stop offset="1" stopColor="#e0b978" />
        </linearGradient>
        <radialGradient id="va-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff0c4" />
          <stop offset="1" stopColor="#e0b978" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="va-wall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f7f1e4" />
          <stop offset="1" stopColor="#dcd1b9" />
        </linearGradient>
      </defs>
      <rect width="500" height="420" fill="url(#va-sky)" />
      <circle cx="380" cy="190" r="120" fill="url(#va-sun)" />
      <circle cx="380" cy="190" r="34" fill="#fff0c4" />
      <path d="M0 290 C 90 240, 170 270, 250 285 C 340 300, 420 250, 500 275 L 500 420 L 0 420 Z" fill="#1a4a30" />
      <path d="M0 330 C 120 300, 260 335, 500 310 L 500 420 L 0 420 Z" fill="#0f3a24" />
      {/* house */}
      <g>
        <rect x="120" y="230" width="190" height="110" fill="url(#va-wall)" />
        <rect x="290" y="260" width="110" height="80" fill="#e9dfc8" />
        <polygon points="105,232 215,170 325,232" fill="#123424" />
        <rect x="280" y="252" width="130" height="10" fill="#123424" />
        <rect x="120" y="226" width="190" height="6" fill="#c9974a" />
        <rect x="196" y="270" width="38" height="70" fill="#7a4e24" />
        <circle cx="228" cy="306" r="2.5" fill="#e0b978" />
        <g fill="#ffd98a">
          <rect x="136" y="256" width="40" height="34" />
          <rect x="254" y="256" width="40" height="34" />
          <rect x="310" y="280" width="30" height="34" />
          <rect x="356" y="280" width="30" height="34" />
        </g>
        <g stroke="#123424" strokeWidth="2">
          <line x1="156" y1="256" x2="156" y2="290" />
          <line x1="274" y1="256" x2="274" y2="290" />
        </g>
        <rect x="196" y="190" width="38" height="26" fill="#ffd98a" />
      </g>
      {/* trees */}
      <g>
        <rect x="63" y="288" width="6" height="52" fill="#4a2f17" />
        <circle cx="66" cy="272" r="32" fill="#2b7a47" />
        <circle cx="48" cy="290" r="22" fill="#236a3c" />
        <circle cx="86" cy="290" r="22" fill="#236a3c" />
        <rect x="437" y="300" width="5" height="40" fill="#4a2f17" />
        <circle cx="440" cy="288" r="24" fill="#2b7a47" />
      </g>
      {/* path & lawn */}
      <polygon points="206,340 226,340 270,420 170,420" fill="#e0b978" opacity="0.8" />
      <g fill="#0b2b1c" opacity="0.5">
        <rect x="0" y="384" width="500" height="36" />
      </g>
    </svg>
  );
}
