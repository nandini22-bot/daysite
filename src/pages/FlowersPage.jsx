import React from 'react';
import { BouquetIllustration } from '../components/FlowerDecoration';
import ScrapbookNote from '../components/ScrapbookNote';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import Stamp from '../components/Stamp';
import { content } from '../data/content';

export const FlowersPage = ({ onNext, onPrev }) => {
  const flowerMessages = content.flowers.messages || [
    "[YOUR FLOWER MESSAGE 1]",
    "[YOUR FLOWER MESSAGE 2]",
    "[YOUR FLOWER MESSAGE 3]"
  ];

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          padding: '40px 30px 25px 30px',
          background: 'var(--cream-paper)',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '2px solid var(--wine-red)'
        }}
      >
        <Tape position="top-left" />
        <Tape position="top-right" />

        <div style={{ position: 'absolute', top: '15px', right: '20px' }}>
          <Stamp text="BLOOMING LOVE" icon="💐" rotation={-3} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--burgundy-dark)' }}>
            {content.flowers.title}
          </h2>
          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.5rem', color: 'var(--wine-red)', marginTop: '4px' }}>
            {content.flowers.subtitle}
          </p>
        </div>

        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            margin: '20px 0'
          }}
        >
          <div style={{ flex: '1', minWidth: '240px', display: 'flex', justifyContent: 'center' }}>
            <BouquetIllustration width={220} />
          </div>

          <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {flowerMessages.map((msg, i) => (
              <ScrapbookNote 
                key={i}
                text={msg}
                rotation={i % 2 === 0 ? -2 : 3}
                tapePosition={i % 2 === 0 ? "top-right" : "top-left"}
              />
            ))}
          </div>
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={8}
          totalPages={11}
        />
      </div>
    </div>
  );
};

export default FlowersPage;
