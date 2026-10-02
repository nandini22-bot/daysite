import React from 'react';

export const VintageCamera = ({ size = 64, className = '', style = {} }) => {
  return (
    <div className={`vintage-camera-wrapper ${className}`} style={{ display: 'inline-block', ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Camera Body */}
        <rect x="10" y="30" width="80" height="55" rx="8" fill="#4A3525" stroke="#3B0D18" strokeWidth="3" />
        <rect x="10" y="45" width="80" height="25" fill="#7C5E4A" />
        {/* Top Flash & Dial */}
        <rect x="25" y="20" width="20" height="10" rx="3" fill="#8B1E2D" stroke="#3B0D18" strokeWidth="2" />
        <circle cx="75" cy="24" r="5" fill="#E8DFD8" stroke="#3B0D18" strokeWidth="2" />
        {/* Lens */}
        <circle cx="50" cy="57" r="22" fill="#FAF6F0" stroke="#3B0D18" strokeWidth="3" />
        <circle cx="50" cy="57" r="16" fill="#3B0D18" />
        <circle cx="50" cy="57" r="8" fill="#8B1E2D" />
        <circle cx="47" cy="54" r="3" fill="#FFF" />
      </svg>
    </div>
  );
};

export default VintageCamera;
