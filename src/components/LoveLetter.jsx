import React from 'react';
import Tape from './Tape';
import Stamp from './Stamp';

export const LoveLetter = ({ 
  greeting = "Dear Anmol,", 
  body = "", 
  signature = "With all my love,\nNandini ♡" 
}) => {
  return (
    <div 
      className="paper-card"
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        padding: '40px 36px',
        backgroundColor: '#FFFDF9',
        border: '1px solid rgba(139, 30, 45, 0.2)',
        boxShadow: 'var(--shadow-paper)',
        position: 'relative'
      }}
    >
      <Tape position="top-left" />
      <Tape position="top-right" />

      <div style={{ position: 'absolute', top: '20px', right: '25px' }}>
        <Stamp text="LOVE MAIL" icon="🌹" rotation={4} />
      </div>

      <h2 
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '2.5rem',
          color: 'var(--wine-red)',
          marginBottom: '20px',
          borderBottom: '1px dashed var(--rose-pink)',
          paddingBottom: '8px'
        }}
      >
        {greeting}
      </h2>

      <div 
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.65rem',
          lineHeight: '1.7',
          color: 'var(--brown-ink)',
          whiteSpace: 'pre-wrap',
          minHeight: '220px',
          marginBottom: '30px'
        }}
      >
        {body || "[YOUR LOVE LETTER WILL GO HERE]"}
      </div>

      <div 
        style={{
          textAlign: 'right',
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.9rem',
          color: 'var(--wine-red)',
          whiteSpace: 'pre-wrap',
          borderTop: '1px dashed rgba(139, 30, 45, 0.15)',
          paddingTop: '16px'
        }}
      >
        {signature}
      </div>
    </div>
  );
};

export default LoveLetter;
