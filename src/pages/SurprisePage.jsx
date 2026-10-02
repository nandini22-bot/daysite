import React from 'react';
import Postcard from '../components/Postcard';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import { content } from '../data/content';

export const SurprisePage = ({ onNext, onPrev }) => {
  return (
    <div className="page-transition-wrapper">
      <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <Postcard 
          title={content.surprise.title}
          text={content.surprise.text}
          buttonText={content.surprise.button}
          revealedTitle={content.surprise.revealedTitle}
          revealedMessage={content.surprise.revealedMessage}
        />

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={3}
          totalPages={11}
        />
      </div>
    </div>
  );
};

export default SurprisePage;
