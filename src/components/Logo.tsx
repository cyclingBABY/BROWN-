import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'iconOnly';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  // Sparkle 4-point star SVG path
  const StarSparkle = ({ x, y, size: starSize = 14 }: { x: number; y: number; size?: number }) => (
    <g transform={`translate(${x}, ${y})`}>
      <path
        d={`M 0,-${starSize / 2} Q 0,0 ${starSize / 2},0 Q 0,0 0,${starSize / 2} Q 0,0 -${starSize / 2},0 Q 0,0 0,-${starSize / 2} Z`}
        fill="url(#goldStarGrad)"
        filter="url(#sparkleGlow)"
      />
      <circle cx="0" cy="0" r={starSize / 6} fill="#FFF9E6" />
    </g>
  );

  const iconSizes = {
    sm: { w: 42, h: 48, scale: 0.45 },
    md: { w: 56, h: 64, scale: 0.6 },
    lg: { w: 76, h: 86, scale: 0.82 },
    xl: { w: 105, h: 120, scale: 1.15 }
  };

  const { w, h } = iconSizes[size];

  // The custom B emblem with geometric dual contours matching the brand flyer
  const BrandEmblem = () => (
    <svg
      width={w}
      height={h}
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Brown Entertainment Logo Mark"
    >
      <defs>
        <linearGradient id="goldGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B8" />
          <stop offset="35%" stopColor="#E4BA3E" />
          <stop offset="70%" stopColor="#C9971D" />
          <stop offset="100%" stopColor="#8A6305" />
        </linearGradient>

        <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF8D6" />
          <stop offset="50%" stopColor="#F3CE5A" />
          <stop offset="100%" stopColor="#A87A10" />
        </linearGradient>

        <filter id="sparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="bEmblemGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#D4AF37" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 4 Golden Sparkle Stars on the Left as in the official flyer */}
      <StarSparkle x={24} y={32} size={15} />
      <StarSparkle x={20} y={70} size={13} />
      <StarSparkle x={18} y={112} size={14} />
      <StarSparkle x={22} y={150} size={16} />

      {/* Stylized Double-Track Contour "B" */}
      <g filter="url(#bEmblemGlow)">
        {/* Outer Heavy Golden B Outline */}
        <path
          d="M 46 16 
             L 104 16 
             C 124 16 138 28 138 48 
             C 138 64 128 76 114 82 
             C 132 88 144 102 144 122 
             C 144 146 126 164 102 164 
             L 46 164 
             Z"
          fill="none"
          stroke="url(#goldGradientMain)"
          strokeWidth="15"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Inner Geometric Contours creating the signature double-band luxury look */}
        {/* Top Bowl Cutout */}
        <path
          d="M 68 40 
             L 98 40 
             C 107 40 114 45 114 53 
             C 114 62 107 68 98 68 
             L 68 68 
             Z"
          fill="none"
          stroke="url(#goldStrokeGrad)"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        {/* Bottom Bowl Cutout */}
        <path
          d="M 68 94 
             L 102 94 
             C 112 94 120 101 120 112 
             C 120 123 112 130 102 130 
             L 68 130 
             Z"
          fill="none"
          stroke="url(#goldStrokeGrad)"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        {/* Delicate inner accent line in the spine */}
        <line
          x1="58"
          y1="28"
          x2="58"
          y2="152"
          stroke="url(#goldStrokeGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <BrandEmblem />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <BrandEmblem />
        <div className="mt-2.5 flex flex-col items-center">
          <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-black tracking-wider text-white uppercase drop-shadow-md">
            BROWN
          </span>
          <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.35em] text-slate-200 uppercase -mt-1">
            ENTERTAINMENT
          </span>
          {showTagline && (
            <span className="mt-1.5 font-serif italic text-sm md:text-base font-medium tracking-wide text-[#E8C868] drop-shadow">
              "Let's fix it for you"
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal layout (perfect for navbar and clean headers)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <BrandEmblem />
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-lg md:text-xl font-extrabold tracking-wider text-white uppercase">
            BROWN
          </span>
          <span className="font-heading text-[11px] md:text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
            ENTERTAINMENT
          </span>
        </div>
        {showTagline && (
          <span className="font-serif italic text-xs md:text-sm text-[#E6C564] tracking-normal -mt-0.5">
            Let's fix it for you
          </span>
        )}
      </div>
    </div>
  );
};
