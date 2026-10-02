import React from 'react';

export const FlowerDecoration = ({ size = 48, color = "#8B1E2D", style = {} }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {/* Rose Petals */}
      <circle cx="50" cy="50" r="30" fill={color} opacity="0.85" />
      <path d="M50 20C40 30 40 45 50 50C60 45 60 30 50 20Z" fill="#D48C95" />
      <path d="M20 50C30 40 45 40 50 50C45 60 30 60 20 50Z" fill="#D48C95" />
      <path d="M50 80C60 70 60 55 50 50C40 55 40 70 50 80Z" fill="#D48C95" />
      <path d="M80 50C70 60 55 60 50 50C55 40 70 40 80 50Z" fill="#D48C95" />
      <circle cx="50" cy="50" r="10" fill="#FFFDF9" />
      <circle cx="50" cy="50" r="6" fill="#3B0D18" />
    </svg>
  );
};

export const BouquetIllustration = ({ width = 280, style = {} }) => {
  return (
    <svg width={width} height={width * 1.2} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {/* Kraft Wrapper */}
      <polygon points="60,130 140,130 115,220 85,220" fill="#E8DFD8" stroke="#7C5E4A" strokeWidth="2" />
      <path d="M60 130 Q100 160 140 130" fill="#F5EFEB" stroke="#7C5E4A" strokeWidth="2" />
      {/* Ribbon */}
      <rect x="82" y="160" width="36" height="12" rx="4" fill="#8B1E2D" />
      <path d="M90 172 L80 200 L95 190 L100 200 L90 172" fill="#8B1E2D" />
      {/* Leaves */}
      <path d="M50 110 Q30 70 70 80 Z" fill="#7A8B76" />
      <path d="M150 110 Q170 70 130 80 Z" fill="#7A8B76" />
      <path d="M100 70 Q70 40 100 30 Q130 40 100 70 Z" fill="#6A7B66" />
      {/* Flowers */}
      <circle cx="80" cy="85" r="24" fill="#8B1E2D" />
      <circle cx="80" cy="85" r="16" fill="#D48C95" />
      <circle cx="120" cy="85" r="24" fill="#6B1724" />
      <circle cx="120" cy="85" r="16" fill="#E8B4B8" />
      <circle cx="100" cy="60" r="26" fill="#A52A2A" />
      <circle cx="100" cy="60" r="18" fill="#F8E5E7" />
      <circle cx="100" cy="60" r="8" fill="#8B1E2D" />
    </svg>
  );
};

export default FlowerDecoration;
