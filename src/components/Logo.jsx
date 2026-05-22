import React from 'react';

// Inline voxel mark — stacked blocks form a stylized "R" with a base block.
// Uses currentColor so it adapts to context.
export default function Logo({ className = '', size = 28, withWordmark = true }) {
  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`} aria-label="RZKCITY — strona główna">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:rotate-[8deg]"
      >
        <rect x="0.5" y="0.5" width="31" height="31" rx="3" stroke="currentColor" strokeOpacity="0.4" />
        <g fill="currentColor">
          <rect x="6" y="6" width="5" height="5" />
          <rect x="11" y="6" width="5" height="5" />
          <rect x="16" y="6" width="5" height="5" />
          <rect x="6" y="11" width="5" height="5" />
          <rect x="16" y="11" width="5" height="5" />
          <rect x="6" y="16" width="5" height="5" />
          <rect x="11" y="16" width="5" height="5" />
          <rect x="6" y="21" width="5" height="5" />
          <rect x="16" y="21" width="5" height="5" />
          <rect x="21" y="21" width="5" height="5" />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-display text-[15px] tracking-[0.22em] uppercase">
          RZK<span className="text-gold">city</span>
        </span>
      )}
    </a>
  );
}
