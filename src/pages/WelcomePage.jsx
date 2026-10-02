import React, { useState } from 'react';
import ScrapbookButton from '../components/ScrapbookButton';
import Tape from '../components/Tape';
import Stamp from '../components/Stamp';
import LaceBorder from '../components/LaceBorder';
import { FlowerDecoration } from '../components/FlowerDecoration';
import { content } from '../data/content';

export const WelcomePage = ({ onNext }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onNext();
    }, 600);
  };

  return (
    <div 
      className="page-transition-wrapper"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px'
      }}
    >
      <div 
        className="paper-card gingham-pattern"
        style={{
          width: '100%',
          maxWidth: '620px',
          padding: '50px 36px',
          textAlign: 'center',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '3px solid var(--wine-red)',
          transform: isOpening ? 'rotateY(90deg) scale(0.95)' : 'rotateY(0deg) scale(1)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <LaceBorder position="top" style={{ position: 'absolute', top: 0, left: 0 }} />
        <Tape position="top-left" />
        <Tape position="top-right" />

        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <Stamp text="LOVE EDITION" icon="💖" rotation={6} />
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <FlowerDecoration size={40} color="var(--wine-red)" />
        </div>

        <div style={{ margin: '20px 0' }}>
          <span style={{ fontSize: '3rem', display: 'inline-block', animation: 'pulse 2s infinite' }}>💌</span>
          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
          `}</style>
          
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.8rem',
              color: 'var(--burgundy-dark)',
              marginTop: '10px',
              textShadow: '1px 1px 0px rgba(255,255,255,0.8)'
            }}
          >
            {content.opening.title}
          </h1>

          <h2 
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '2.4rem',
              color: 'var(--wine-red)',
              margin: '12px 0 6px 0'
            }}
          >
            {content.opening.subtitle}
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.6rem',
              color: 'var(--brown-vintage)',
              marginBottom: '35px'
            }}
          >
            {content.opening.smallText}
          </p>

          <ScrapbookButton 
            variant="primary" 
            onClick={handleOpen}
            style={{ fontSize: '1.5rem', padding: '14px 36px' }}
          >
            {content.opening.button}
          </ScrapbookButton>
        </div>

        <LaceBorder position="bottom" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
    </div>
  );
};

export default WelcomePage;
