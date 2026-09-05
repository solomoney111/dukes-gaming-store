import type { ArtName } from "../data/products";

/**
 * Holographic product renders for items without photography.
 * Swap any of these for real photos later by setting `image` on the product.
 */
export function ProductArt({ art, className }: { art: ArtName; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className ?? "w-full h-full"} aria-hidden="true">
      <defs>
        <linearGradient id="pa-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E84D3" />
          <stop offset="1" stopColor="#00A8FF" />
        </linearGradient>
        <linearGradient id="pa-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2E63" />
          <stop offset="1" stopColor="#041B40" />
        </linearGradient>
        <linearGradient id="pa-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E6C425" />
          <stop offset="1" stopColor="#b99a12" />
        </linearGradient>
        <radialGradient id="pa-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#00A8FF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#00A8FF" stopOpacity="0" />
        </radialGradient>
        <filter id="pa-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <circle cx="100" cy="105" r="78" fill="url(#pa-glow)" />
      <ellipse cx="100" cy="172" rx="52" ry="8" fill="#00A8FF" opacity="0.18" filter="url(#pa-blur)" />

      {art === "cable" && (
        <g>
          <path d="M40 150 C 40 90, 90 130, 92 92 C 94 60, 60 62, 58 88 C 56 116, 100 108, 108 84" fill="none" stroke="#041B40" strokeWidth="13" strokeLinecap="round" />
          <path d="M40 150 C 40 90, 90 130, 92 92 C 94 60, 60 62, 58 88 C 56 116, 100 108, 108 84" fill="none" stroke="url(#pa-body)" strokeWidth="10" strokeLinecap="round" />
          <path d="M40 150 C 40 90, 90 130, 92 92 C 94 60, 60 62, 58 88 C 56 116, 100 108, 108 84" fill="none" stroke="#2E84D3" strokeWidth="2.4" strokeDasharray="7 5" opacity="0.9" />
          <path d="M108 84 L 128 64" stroke="#0B2E63" strokeWidth="14" strokeLinecap="round" />
          <rect x="122" y="38" width="30" height="26" rx="4" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2" transform="rotate(45 137 51)" />
          <rect x="133" y="27" width="9" height="12" rx="2" fill="url(#pa-blue)" transform="rotate(45 137 33)" />
          <circle cx="40" cy="150" r="8" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2" />
          <path d="M30 158 L 22 166" stroke="url(#pa-gold)" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {art === "stand" && (
        <g>
          <path d="M60 160 L 78 160 L 96 62 L 84 60 Z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2" />
          <rect x="78" y="38" width="52" height="92" rx="7" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" transform="rotate(12 104 84)" />
          <rect x="86" y="48" width="36" height="66" rx="3" fill="#041B40" stroke="#2E84D3" strokeWidth="1.4" transform="rotate(12 104 84)" />
          <path d="M92 62 l24 40 M116 66 l-22 34" stroke="#00A8FF" strokeWidth="1.4" opacity="0.75" transform="rotate(12 104 84)" />
          <circle cx="104" cy="124" r="2.6" fill="url(#pa-gold)" transform="rotate(12 104 84)" />
          <path d="M46 160 H 154" stroke="url(#pa-blue)" strokeWidth="5" strokeLinecap="round" />
          <path d="M70 148 L 82 160" stroke="#2E84D3" strokeWidth="2.4" />
        </g>
      )}

      {art === "mic" && (
        <g>
          <path d="M100 170 L 100 148" stroke="url(#pa-blue)" strokeWidth="4" />
          <path d="M70 170 H 130" stroke="url(#pa-body)" strokeWidth="9" strokeLinecap="round" />
          <path d="M70 170 H 130" stroke="#2E84D3" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
          <rect x="76" y="42" width="48" height="106" rx="24" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" />
          <g stroke="#2E84D3" strokeWidth="1.5" opacity="0.85">
            <path d="M82 58 h36 M82 68 h36 M82 78 h36 M82 88 h36" />
          </g>
          <rect x="76" y="104" width="48" height="7" fill="url(#pa-gold)" opacity="0.95" />
          <circle cx="100" cy="128" r="7" fill="#041B40" stroke="url(#pa-blue)" strokeWidth="2" />
          <path d="M100 124 v4 l3 2" stroke="#00A8FF" strokeWidth="1.6" />
          <path d="M62 70 a40 40 0 0 1 0 44 M138 70 a40 40 0 0 0 0 44" stroke="#00A8FF" strokeWidth="1.6" opacity="0.5" />
        </g>
      )}

      {art === "strip" && (
        <g>
          <path d="M30 128 C 55 88, 85 148, 110 108 C 130 78, 152 92, 172 66" fill="none" stroke="#041B40" strokeWidth="15" strokeLinecap="round" />
          <path d="M30 128 C 55 88, 85 148, 110 108 C 130 78, 152 92, 172 66" fill="none" stroke="url(#pa-body)" strokeWidth="11" strokeLinecap="round" />
          <path d="M30 128 C 55 88, 85 148, 110 108 C 130 78, 152 92, 172 66" fill="none" stroke="url(#pa-blue)" strokeWidth="2.4" strokeLinecap="round" />
          {[
            [38, 118], [52, 103], [68, 108], [84, 124], [100, 118], [112, 100], [128, 86], [144, 86], [160, 74],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4.6" fill={i % 3 === 0 ? "url(#pa-gold)" : "#00A8FF"} filter="url(#pa-blur)" />
          ))}
          {[
            [38, 118], [52, 103], [68, 108], [84, 124], [100, 118], [112, 100], [128, 86], [144, 86], [160, 74],
          ].map(([x, y], i) => (
            <circle key={`c${i}`} cx={x} cy={y} r="2.4" fill={i % 3 === 0 ? "#E6C425" : "#F0F4F6"} />
          ))}
          <rect x="156" y="44" width="26" height="20" rx="3" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="1.8" transform="rotate(-38 169 54)" />
        </g>
      )}

      {art === "grip" && (
        <g>
          <path d="M40 96 C 40 74, 60 62, 100 62 C 140 62, 160 74, 160 96 C 160 122, 148 140, 132 140 C 120 140, 116 128, 100 128 C 84 128, 80 140, 68 140 C 52 140, 40 122, 40 96 Z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" />
          <circle cx="66" cy="90" r="10" fill="#041B40" stroke="#2E84D3" strokeWidth="1.8" />
          <circle cx="134" cy="90" r="10" fill="#041B40" stroke="#2E84D3" strokeWidth="1.8" />
          <circle cx="100" cy="86" r="3" fill="url(#pa-gold)" />
          {[[58, 108], [66, 114], [74, 108], [126, 108], [134, 114], [142, 108], [62, 100], [70, 100], [130, 100], [138, 100]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.8" fill="#00A8FF" opacity="0.9" />
          ))}
          <path d="M44 88 C 44 72, 62 66, 100 66" stroke="#00A8FF" strokeWidth="1.4" opacity="0.5" />
        </g>
      )}

      {art === "earbuds" && (
        <g>
          <rect x="56" y="106" width="88" height="52" rx="14" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" />
          <rect x="56" y="98" width="88" height="16" rx="8" fill="#041B40" stroke="url(#pa-blue)" strokeWidth="1.6" />
          <path d="M92 106 h16" stroke="url(#pa-gold)" strokeWidth="2.4" />
          <g>
            <path d="M78 44 a16 16 0 0 1 16 16 c 0 12 -9 13 -9 26 l -1 10 h -13 l 1 -12 c 0 -9 -10 -10 -10 -24 a16 16 0 0 1 16 -16z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" transform="rotate(-14 78 66)" />
            <circle cx="76" cy="62" r="5" fill="#041B40" stroke="#00A8FF" strokeWidth="1.6" />
          </g>
          <g transform="translate(46 0)">
            <path d="M78 44 a16 16 0 0 1 16 16 c 0 12 -9 13 -9 26 l -1 10 h -13 l 1 -12 c 0 -9 -10 -10 -10 -24 a16 16 0 0 1 16 -16z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" transform="rotate(14 78 66)" />
            <circle cx="80" cy="62" r="5" fill="#041B40" stroke="url(#pa-gold)" strokeWidth="1.6" />
          </g>
        </g>
      )}

      {art === "chair" && (
        <g>
          <path d="M70 34 C 70 24, 130 24, 130 34 L 134 96 L 66 96 Z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" />
          <path d="M80 40 C 80 34, 120 34, 120 40 L 122 62 L 78 62 Z" fill="#041B40" stroke="#2E84D3" strokeWidth="1.5" />
          <path d="M92 48 h16 M92 55 h16" stroke="#00A8FF" strokeWidth="1.6" opacity="0.8" />
          <path d="M64 96 h72 l 6 34 h -84 Z" fill="url(#pa-body)" stroke="url(#pa-blue)" strokeWidth="2.2" />
          <path d="M64 102 h-12 l -4 24 h 14 M136 102 h12 l 4 24 h -14" fill="#041B40" stroke="url(#pa-blue)" strokeWidth="1.8" />
          <path d="M100 130 v26 M82 172 l18 -14 18 14" stroke="url(#pa-blue)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="82" cy="173" r="5" fill="#041B40" stroke="#2E84D3" strokeWidth="1.8" />
          <circle cx="118" cy="173" r="5" fill="#041B40" stroke="#2E84D3" strokeWidth="1.8" />
          <rect x="90" y="70" width="20" height="9" rx="3" fill="url(#pa-gold)" opacity="0.95" />
        </g>
      )}
    </svg>
  );
}
