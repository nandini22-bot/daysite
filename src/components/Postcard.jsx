import React, { useState } from 'react';
import Tape from './Tape';
import Stamp from './Stamp';
import ScrapbookButton from './ScrapbookButton';

export const Postcard = ({ 
  title = "[YOUR SURPRISE TITLE]", 
  text = "[YOUR SURPRISE MESSAGE]", 
  buttonText = "Open It 💌",
  revealedTitle = "Surprise! 🎉",
  revealedMessage = "[YOUR REVEALED SURPRISE SECRET HERE]"
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div 
      className="paper-card"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '36px 30px',
        background: '#FAF6F0',
        borderRadius: '6px',
        boxShadow: 'var(--shadow-paper)',
        position: 'relative',
        border: '2px solid rgba(139, 30, 45, 0.2)',
        transition: 'all 0.5s ease'
      }}
    >
      <Tape position="top-right" />
      
      <div style={{ position: 'absolute', top: '15px', left: '20px' }}>
        <Stamp text="SURPRISE MAIL" icon="🎁" rotation={-5} />
      </div>

      <div style={{ marginTop: '35px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--wine-red)', marginBottom: '14px' }}>
          {isOpened ? revealedTitle : title}
        </h2>

        <div 
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            color: 'var(--brown-ink)',
            whiteSpace: 'pre-wrap',
            margin: '20px 0',
            minHeight: '100px',
            background: isOpened ? '#FFFDF9' : 'transparent',
            padding: isOpened ? '20px' : '0',
            borderRadius: '8px',
            border: isOpened ? '1px dashed var(--rose-pink)' : 'none',
            transition: 'all 0.4s ease'
          }}
        >
          {isOpened ? revealedMessage : text}
        </div>

        {!isOpened ? (
          <ScrapbookButton 
            variant="primary"
            onClick={() => setIsOpened(true)}
          >
            {buttonText}
          </ScrapbookButton>
        ) : (
          <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.3rem', color: 'var(--wine-red)', marginTop: '10px' }}>
            Unwrapped with love ❤️
          </div>
        )}
      </div>
    </div>
  );
};

export default Postcard;
