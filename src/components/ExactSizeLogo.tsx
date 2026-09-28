import React from 'react';

interface ExactSizeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

/**
 * ExactSizeIcon
 * 
 * Geometric brand symbol combining:
 * 1. Document / File sheet with folded top-right corner
 * 2. Precision Caliper Brackets (⌜ ⌝ ⌞ ⌟) defining exact bounding constraints
 * 3. Inward dimension alignment ticks
 * 4. Calibrated center target core representing the exact target file size achieved
 */
export const ExactSizeIcon: React.FC<ExactSizeIconProps> = ({
  size = 32,
  className = '',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      aria-label="ExactSize Icon"
      {...props}
    >
      <defs>
        <linearGradient id="exactsize-icon-body" x1="5" y1="3.5" x2="27" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="exactsize-icon-fold" x1="19" y1="3.5" x2="26.5" y2="11" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Main File Document Silhouette */}
      <path
        d="M 7.5 4.5 C 6.67157 4.5 6 5.17157 6 6 V 26 C 6 26.8284 6.67157 27.5 7.5 27.5 H 24.5 C 25.3284 27.5 26 26.8284 26 26 V 11 L 19.5 4.5 H 7.5 Z"
        fill="url(#exactsize-icon-body)"
      />

      {/* Fold Flap with Precision Angle */}
      <path
        d="M 19.5 4.5 V 9.75 C 19.5 10.4404 20.0596 11 20.75 11 H 26 L 19.5 4.5 Z"
        fill="url(#exactsize-icon-fold)"
      />
      <path
        d="M 19.5 4.5 L 26 11"
        stroke="#0369A1"
        strokeWidth="0.6"
        strokeOpacity="0.3"
      />

      {/* Precision Caliper Brackets (Corner Framing ⌜ ⌝ ⌞ ⌟) */}
      {/* Top Left Bracket */}
      <path
        d="M 10.5 15.5 V 14 C 10.5 13.4477 10.9477 13 11.5 13 H 13"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top Right Bracket */}
      <path
        d="M 19 13 H 20.5 C 21.0523 13 21.5 13.4477 21.5 14 V 15.5"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Left Bracket */}
      <path
        d="M 10.5 21.5 V 23 C 10.5 23.5523 10.9477 24 11.5 24 H 13"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Right Bracket */}
      <path
        d="M 19 24 H 20.5 C 21.0523 24 21.5 23.5523 21.5 23 V 21.5"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Precision Inward Caliper Alignment Guides */}
      <line
        x1="10.5"
        y1="18.5"
        x2="12.25"
        y2="18.5"
        stroke="#BAE6FD"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <line
        x1="19.75"
        y1="18.5"
        x2="21.5"
        y2="18.5"
        stroke="#BAE6FD"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* Exact Target Center Core */}
      <circle cx="16" cy="18.5" r="2" fill="#38BDF8" />
      <circle cx="16" cy="18.5" r="0.75" fill="#FFFFFF" />
    </svg>
  );
};

interface ExactSizeLogoProps {
  variant?: 'header' | 'footer' | 'modal' | 'standalone';
  showTagline?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * ExactSizeLogo
 * 
 * Unified brand logo uniting the precision icon mark with the ExactSize wordmark.
 */
export const ExactSizeLogo: React.FC<ExactSizeLogoProps> = ({
  variant = 'header',
  showTagline = true,
  onClick,
  className = '',
}) => {
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 rounded-xl brand-gradient-bg p-0.5 shadow-md shadow-blue-500/10 flex-shrink-0">
          <div className="w-full h-full bg-[#0A101D] rounded-[10px] flex items-center justify-center p-1.5">
            <ExactSizeIcon className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-white tracking-tight">
            Exact<span className="text-blue-400">Size</span>
          </div>
          {showTagline && (
            <div className="text-xs text-slate-400">
              Precision in-browser file compression.
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className={`w-12 h-12 rounded-2xl brand-gradient-bg p-0.5 shadow-md mb-4 flex-shrink-0 ${className}`}>
        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center p-2">
          <ExactSizeIcon className="w-full h-full" />
        </div>
      </div>
    );
  }

  // Header / Standalone variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={onClick}
        className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
        aria-label="ExactSize Home"
      >
        <div className="w-10 h-10 rounded-xl brand-gradient-bg p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center p-1.5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 pointer-events-none"></div>
            <ExactSizeIcon className="w-full h-full relative z-10" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-0.5">
            Exact<span className="text-blue-600 dark:text-blue-400">Size</span>
          </span>
          {showTagline && (
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5 hidden sm:inline">
              Get your files to the size you need.
            </span>
          )}
        </div>
      </button>
    </div>
  );
};
