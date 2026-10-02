import React from 'react';
import Polaroid from '../components/Polaroid';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import LaceBorder from '../components/LaceBorder';
import { FlowerDecoration } from '../components/FlowerDecoration';
import { content } from '../data/content';
import { photos } from '../data/photos';

export const FinalPage = ({ onRestart, onPrev }) => {
  const finalPhoto = photos[photos.length - 1] || photos[0];

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card gingham-pattern"
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '50px 36px 30px 36px',
          textAlign: 'center',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '3px solid var(--wine-red)'
        }}
      >
        <LaceBorder position="top" style={{ position: 'absolute', top: 0, left: 0 }} />
        <Tape position="top-left" />
        <Tape position="top-right" />

        <div style={{ width: '220px', margin: '15px auto 25px auto' }}>
          <Polaroid 
            src={finalPhoto?.src}
            caption="Us Forever ❤️"
            rotation={-3}
            fallbackTitle="Forever Memory"
          />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--burgundy-dark)' }}>
          {content.final.title}
        </h2>

        <div 
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.65rem',
            lineHeight: '1.6',
            color: 'var(--brown-ink)',
            whiteSpace: 'pre-wrap',
            margin: '20px 0 25px 0'
          }}
        >
          {content.final.message}
        </div>

        <div 
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '2rem',
            color: 'var(--wine-red)',
            marginBottom: '20px'
          }}
        >
          {content.final.signature}
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <FlowerDecoration size={42} color="var(--wine-red)" />
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onRestart={onRestart}
          showNext={false}
          showRestart={true}
          currentPage={7}
          totalPages={7}
        />

        <LaceBorder position="bottom" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
    </div>
  );
};

export default FinalPage;
