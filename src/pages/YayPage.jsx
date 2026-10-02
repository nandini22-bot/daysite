import React from 'react';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import LaceBorder from '../components/LaceBorder';
import { content } from '../data/content';

export const YayPage = ({ onNext, onPrev }) => {
  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card gingham-pattern"
        style={{
          width: '100%',
          maxWidth: '620px',
          padding: '45px 36px 30px 36px',
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

        {/* Cute Couple SVG Illustration */}
        <div style={{ margin: '15px 0' }}>
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="40" r="22" fill="#F5EFEB" stroke="#8B1E2D" strokeWidth="2" />
            <path d="M38 38 C38 42, 42 42, 42 38" stroke="#3B0D18" strokeWidth="2" strokeLinecap="round" />
            <path d="M48 38 C48 42, 52 42, 52 38" stroke="#3B0D18" strokeWidth="2" strokeLinecap="round" />
            <path d="M42 48 Q45 52 48 48" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" />

            <circle cx="75" cy="40" r="22" fill="#FAF6F0" stroke="#8B1E2D" strokeWidth="2" />
            <path d="M68 38 C68 42, 72 42, 72 38" stroke="#3B0D18" strokeWidth="2" strokeLinecap="round" />
            <path d="M78 38 C78 42, 82 42, 82 38" stroke="#3B0D18" strokeWidth="2" strokeLinecap="round" />
            <path d="M72 48 Q75 52 78 48" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" />

            <path d="M60 15 Q55 5 45 10 Q35 20 60 35 Q85 20 75 10 Q65 5 60 15 Z" fill="#8B1E2D" />
          </svg>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--wine-red)', marginBottom: '15px' }}>
          {content.yay.title}
        </h2>

        <div 
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.6rem',
            lineHeight: '1.6',
            color: 'var(--brown-ink)',
            whiteSpace: 'pre-wrap',
            margin: '20px 0 20px 0'
          }}
        >
          {content.yay.text}
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={4}
          totalPages={7}
        />

        <LaceBorder position="bottom" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
    </div>
  );
};

export default YayPage;
