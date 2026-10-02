import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import ScrapbookButton from '../components/ScrapbookButton';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import { content } from '../data/content';

export const QuestionPage = ({ onNext, onPrev }) => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPositionOffset, setNoPositionOffset] = useState({ x: 0, y: 0 });

  const messages = content.question.noWiggleMessages || [
    "Are you sure? 🥺",
    "Think again, Anmol! 💕",
    "Give it another try! 🙈"
  ];

  const currentNoMsg = messages[noClickCount % messages.length];

  const handleYes = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B1E2D', '#D48C95', '#FAF6F0', '#E8B4B8']
    });
    onNext();
  };

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 80) - 40;
    const randomY = Math.floor(Math.random() * 40) - 20;
    setNoPositionOffset({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    handleNoHover();
  };

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card"
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '50px 36px 30px 36px',
          textAlign: 'center',
          background: 'var(--cream-paper)',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '2px solid var(--wine-red)'
        }}
      >
        <Tape position="top-left" />
        <Tape position="top-right" />

        <h3 
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '2rem',
            color: 'var(--wine-red)',
            marginBottom: '10px'
          }}
        >
          {content.question.title}
        </h3>

        <h2 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: 'var(--burgundy-dark)',
            margin: '20px 0 30px 0',
            lineHeight: '1.3'
          }}
        >
          {content.question.question}
        </h2>

        {noClickCount > 0 && (
          <p 
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.5rem',
              color: 'var(--wine-red)',
              marginBottom: '20px'
            }}
          >
            {currentNoMsg}
          </p>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', marginTop: '20px', minHeight: '60px', position: 'relative' }}>
          <ScrapbookButton 
            variant="primary" 
            onClick={handleYes}
            style={{ fontSize: '1.6rem', padding: '14px 40px', transform: 'scale(1.1)' }}
          >
            {content.question.yes}
          </ScrapbookButton>

          <div 
            style={{
              transform: `translate(${noPositionOffset.x}px, ${noPositionOffset.y}px)`,
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={handleNoHover}
          >
            <ScrapbookButton 
              variant="secondary" 
              onClick={handleNoClick}
              style={{ fontSize: '1.3rem', opacity: Math.max(0.4, 1 - noClickCount * 0.15) }}
            >
              {content.question.no}
            </ScrapbookButton>
          </div>
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          showNext={false}
          currentPage={3}
          totalPages={7}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
