import React, { useState } from 'react';
import LoveLetter from '../components/LoveLetter';
import Envelope from '../components/Envelope';
import ScrapbookButton from '../components/ScrapbookButton';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import { content } from '../data/content';

export const LoveLetterPage = ({ onNext, onPrev }) => {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <div className="page-transition-wrapper">
      <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        {!letterOpen ? (
          <div style={{ padding: '20px 0' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--cream-light)', marginBottom: '25px' }}>
              A Letter Written From The Heart 💌
            </h2>
            <Envelope 
              isOpen={letterOpen} 
              onToggle={(open) => setLetterOpen(open)} 
              title="Click Envelope to Open"
              sender={content.names.girlfriend}
            />
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <ScrapbookButton 
                variant="secondary" 
                onClick={onPrev}
              >
                ← Back
              </ScrapbookButton>
              <ScrapbookButton 
                variant="primary" 
                onClick={() => setLetterOpen(true)}
              >
                Read Letter 📖
              </ScrapbookButton>
            </div>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            <LoveLetter 
              greeting={content.letter.greeting}
              body={content.letter.body}
              signature={content.letter.signature}
            />
            <ScrapbookPageNav 
              onPrev={() => setLetterOpen(false)}
              onNext={onNext}
              prevText="← Close Envelope"
              currentPage={2}
              totalPages={7}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetterPage;
