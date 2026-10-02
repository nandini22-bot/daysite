import React, { useState, useEffect } from 'react';
import Tape from './Tape';

export const Polaroid = ({ 
  src, 
  caption = '', 
  rotation = 0, 
  onClick, 
  tape = true,
  tapePosition = 'top-left',
  width = '100%',
  className = '',
  style = {},
  fallbackTitle = 'Our Memory'
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (currentSrc && currentSrc.endsWith('.jpg')) {
      setCurrentSrc(`${currentSrc}.png`);
    } else if (currentSrc && currentSrc.endsWith('.png') && !currentSrc.endsWith('.jpg.png')) {
      setCurrentSrc(currentSrc.replace(/\.png$/, '.jpg'));
    } else {
      setHasFailed(true);
    }
  };

  return (
    <div 
      className={`polaroid-frame ${className}`}
      style={{
        width: width,
        transform: `rotate(${rotation}deg)`,
        ...style
      }}
      onClick={onClick}
    >
      {tape && <Tape position={tapePosition} />}
      
      <div className="polaroid-img-wrapper">
        {!hasFailed && currentSrc ? (
          <img 
            src={currentSrc} 
            alt={caption || "Scrapbook Polaroid"} 
            className="polaroid-img"
            onError={handleError}
            loading="lazy"
          />
        ) : (
          <div className="polaroid-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span style={{ marginTop: '8px', fontSize: '0.9rem', fontFamily: 'var(--font-handwriting)', color: '#8B1E2D' }}>
              {fallbackTitle} ❤️
            </span>
          </div>
        )}
      </div>

      {caption && (
        <div className="polaroid-caption">
          {caption}
        </div>
      )}
    </div>
  );
};

export default Polaroid;
