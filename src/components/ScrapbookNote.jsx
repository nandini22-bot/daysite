import React from 'react';
import Tape from './Tape';

export const ScrapbookNote = ({ 
  text = "", 
  rotation = 0, 
  tapePosition = "top-left", 
  width = "100%",
  className = "",
  style = {} 
}) => {
  return (
    <div 
      className={`paper-card ${className}`}
      style={{
        width: width,
        padding: '24px 20px',
        backgroundColor: '#FFFDF9',
        transform: `rotate(${rotation}deg)`,
        boxShadow: 'var(--shadow-paper)',
        position: 'relative',
        border: '1px dashed rgba(139, 30, 45, 0.25)',
        ...style
      }}
    >
      <Tape position={tapePosition} />
      <p 
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.45rem',
          lineHeight: '1.5',
          color: 'var(--brown-ink)',
          whiteSpace: 'pre-wrap'
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ScrapbookNote;
