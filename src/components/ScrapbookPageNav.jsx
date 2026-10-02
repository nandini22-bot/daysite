import React from 'react';
import ScrapbookButton from './ScrapbookButton';

export const ScrapbookPageNav = ({ 
  onPrev, 
  onNext, 
  onRestart,
  currentPage = 1, 
  totalPages = 11,
  nextText = "Next →",
  prevText = "← Back",
  showPrev = true,
  showNext = true,
  showRestart = false
}) => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        marginTop: '35px',
        paddingTop: '20px',
        borderTop: '1px dashed rgba(139, 30, 45, 0.2)',
        width: '100%'
      }}
    >
      <div>
        {showPrev && currentPage > 1 && (
          <ScrapbookButton variant="secondary" onClick={onPrev}>
            {prevText}
          </ScrapbookButton>
        )}
      </div>

      <div 
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.25rem',
          color: 'var(--brown-vintage)',
          background: 'rgba(232, 180, 184, 0.2)',
          padding: '4px 14px',
          borderRadius: '15px',
          border: '1px dashed rgba(139, 30, 45, 0.3)'
        }}
      >
        {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </div>

      <div>
        {showNext && currentPage < totalPages && (
          <ScrapbookButton variant="primary" onClick={onNext}>
            {nextText}
          </ScrapbookButton>
        )}

        {showRestart && (
          <ScrapbookButton variant="primary" onClick={onRestart}>
            Start Again ↻
          </ScrapbookButton>
        )}
      </div>
    </div>
  );
};

export default ScrapbookPageNav;
