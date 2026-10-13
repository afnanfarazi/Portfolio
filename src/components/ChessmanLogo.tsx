import React, { useState } from 'react';

interface ChessmanLogoProps {
  className?: string;
  size?: number;
}

export const ChessmanLogo: React.FC<ChessmanLogoProps> = ({ className = '', size = 28 }) => {
  const [imageError, setImageError] = useState(false);

  // If the PNG image is available in public directory, render it
  if (!imageError) {
    return (
      <img
        src="/THE CHESSMAN LOGO only.png"
        alt="The Chessman Logo"
        width={size}
        height={size}
        onError={() => setImageError(true)}
        className={`object-contain ${className}`}
      />
    );
  }

  // High-fidelity Vector SVG replica of the Chessman geometric emblem
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="The Chessman Logo"
    >
      {/* Top Bar - Grey */}
      <path
        d="M27 15H51L38 28H27V15Z"
        fill="#8E8E8E"
      />
      <path
        d="M57 15H70V28H57V15Z"
        fill="#F4F4F0"
        opacity="0.9"
      />

      {/* Left White C-Bracket */}
      <path
        d="M13 32H34V45H23V73H34V86H13V32Z"
        fill="#F4F4F0"
      />

      {/* Center Grey Geometric Polygon */}
      <path
        d="M38 32H61L70 41V50L49 29V86H38V32Z"
        fill="#8E8E8E"
      />

      {/* Right Grey Bracket */}
      <path
        d="M66 32H87V51H74V43L66 35V32Z"
        fill="#8E8E8E"
      />
      <path
        d="M74 63H87V86H64L74 74V63Z"
        fill="#8E8E8E"
      />

      {/* Center White Fill Chevron */}
      <path
        d="M50 44L63 56L50 69V44Z"
        fill="#F4F4F0"
        opacity="0.9"
      />

      {/* Bottom Pedestal Trapezoid - White */}
      <path
        d="M34 91L40 85H60L66 91H34Z"
        fill="#F4F4F0"
      />
    </svg>
  );
};
