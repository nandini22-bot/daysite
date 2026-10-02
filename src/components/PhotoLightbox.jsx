import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const PhotoLightbox = ({ 
  photos = [], 
  currentIndex = 0, 
  isOpen = false, 
  onClose, 
  onNext, 
  onPrev 
}) => {
  const currentPhoto = photos[currentIndex];
  const [currentSrc, setCurrentSrc] = useState(currentPhoto?.src || '');
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (currentPhoto) {
      setCurrentSrc(currentPhoto.src);
      setHasFailed(false);
    }
  }, [currentIndex, currentPhoto]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentPhoto) return null;

  const handleError = () => {
    if (currentSrc && currentSrc.endsWith('.jpg')) {
      setCurrentSrc(`${currentSrc}.png`);
    } else if (currentSrc && currentSrc.endsWith('.png') && !currentSrc.endsWith('.jpg.png')) {
      setCurrentSrc(currentSrc.replace(/\.png$/, '.jpg'));
    } else {
      setHasFailed(true);
    }
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-close-btn" 
          onClick={onClose}
          title="Close (Esc)"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {!hasFailed && currentSrc ? (
            <img 
              src={currentSrc} 
              alt={currentPhoto.caption || "Polaroid Memory"} 
              className="lightbox-image"
              onError={handleError}
            />
          ) : (
            <div 
              style={{
                width: '400px',
                height: '300px',
                background: 'linear-gradient(135deg, #F8E5E7 0%, #FAF6F0 100%)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--wine-red)',
                border: '2px dashed var(--rose-pink)'
              }}
            >
              <span style={{ fontSize: '3rem' }}>📷</span>
              <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.5rem', marginTop: '10px' }}>
                Photo {currentIndex + 1}
              </p>
            </div>
          )}
        </div>

        {currentPhoto.caption && (
          <div className="lightbox-caption">
            {currentPhoto.caption}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
          <button 
            className="scrapbook-btn scrapbook-btn-secondary"
            onClick={onPrev}
            style={{ padding: '8px 16px', fontSize: '1rem' }}
          >
            <ChevronLeft size={18} /> Prev
          </button>
          <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: 'var(--brown-vintage)' }}>
            {currentIndex + 1} / {photos.length}
          </span>
          <button 
            className="scrapbook-btn scrapbook-btn-secondary"
            onClick={onNext}
            style={{ padding: '8px 16px', fontSize: '1rem' }}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoLightbox;
