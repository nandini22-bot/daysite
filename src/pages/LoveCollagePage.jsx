import React from 'react';
import Polaroid from '../components/Polaroid';
import ScrapbookNote from '../components/ScrapbookNote';
import VintageCamera from '../components/VintageCamera';
import Stamp from '../components/Stamp';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import { FlowerDecoration } from '../components/FlowerDecoration';
import { content } from '../data/content';
import { photos } from '../data/photos';

export const LoveCollagePage = ({ onNext, onPrev }) => {
  const samplePhotos = photos.slice(0, 3);
  const notes = content.collage.notes || [];

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card gingham-pattern-fine"
        style={{
          width: '100%',
          maxWidth: '960px',
          padding: '40px 30px 25px 30px',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '2px solid var(--wine-red)'
        }}
      >
        <div style={{ position: 'absolute', top: '15px', right: '25px' }}>
          <Stamp text="LOVE COLLAGE" icon="❤️" rotation={4} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <VintageCamera size={50} style={{ marginBottom: '10px' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--burgundy-dark)' }}>
            {content.collage.title}
          </h2>
          <h1 
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '3.6rem',
              color: 'var(--wine-red)',
              margin: '5px 0'
            }}
          >
            {content.collage.mainTitle}
          </h1>
        </div>

        {/* Handmade Scrapbook Layout Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            margin: '30px 0'
          }}
        >
          {notes.map((noteText, idx) => (
            <ScrapbookNote 
              key={idx}
              text={noteText}
              rotation={(idx % 2 === 0 ? -4 : 3)}
              tapePosition={idx % 2 === 0 ? "top-left" : "top-right"}
            />
          ))}

          {samplePhotos.map((photo, i) => (
            <Polaroid 
              key={photo.id || i}
              src={photo.src}
              caption={photo.caption || `Pic ${i + 1}`}
              rotation={(i % 2 === 0 ? 3 : -4)}
              fallbackTitle={`Love Pic ${i + 1}`}
            />
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <FlowerDecoration size={44} color="var(--wine-red)" />
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={7}
          totalPages={11}
        />
      </div>
    </div>
  );
};

export default LoveCollagePage;
