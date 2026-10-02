import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import Polaroid from '../components/Polaroid';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import { content } from '../data/content';
import { photos } from '../data/photos';

export const MusicPage = ({ onNext, onPrev }) => {
  const samplePhoto = photos[3] || photos[0];

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          padding: '40px 30px 25px 30px',
          background: '#FAF6F0',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '2px solid var(--wine-red)'
        }}
      >
        <Tape position="top-left" />
        <Tape position="top-right" />

        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--burgundy-dark)' }}>
            {content.music.title}
          </h2>
          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.5rem', color: 'var(--wine-red)', marginTop: '4px' }}>
            {content.music.subtitle}
          </p>
        </div>

        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '35px',
            margin: '25px 0'
          }}
        >
          <div style={{ flex: '1', minWidth: '240px', maxWidth: '300px' }}>
            <Polaroid 
              src={samplePhoto?.src}
              caption="Listening Together 🎧"
              rotation={-4}
              fallbackTitle="Music Memory"
            />
          </div>

          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <MusicPlayer 
              title={content.music.songTitle}
              artist={content.music.artist}
            />
          </div>
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={6}
          totalPages={8}
        />
      </div>
    </div>
  );
};

export default MusicPage;
