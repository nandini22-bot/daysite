import React, { useState } from 'react';
import Polaroid from '../components/Polaroid';
import PhotoLightbox from '../components/PhotoLightbox';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import { photos } from '../data/photos';

export const MemoriesPage = ({ onNext, onPrev }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handleNextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="page-transition-wrapper" style={{ paddingBottom: '40px' }}>
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ display: 'inline-block', position: 'relative', marginBottom: '30px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--cream-light)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Our Scrapbook Photo Gallery 🖼️
          </h2>
          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem', color: 'var(--soft-pink)', marginTop: '4px' }}>
            Click on any Polaroid to enlarge & read captions!
          </p>
        </div>

        {/* Dynamic Scrapbook Photo Grid (10 Photos) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '28px',
            padding: '20px 10px',
            alignItems: 'center'
          }}
        >
          {photos.map((photo, index) => (
            <Polaroid
              key={photo.id || index}
              src={photo.src}
              caption={photo.caption || `Memory ${index + 1}`}
              rotation={photo.rotation || (index % 2 === 0 ? -3 : 4)}
              onClick={() => handleOpenLightbox(index)}
              fallbackTitle={`Memory ${index + 1}`}
              style={{
                zIndex: index % 5
              }}
            />
          ))}
        </div>

        <div style={{ maxWidth: '600px', margin: '30px auto 0 auto' }}>
          <ScrapbookPageNav 
            onPrev={onPrev}
            onNext={onNext}
            nextText="Next Page →"
            currentPage={5}
            totalPages={7}
          />
        </div>

        {/* Lightbox Modal */}
        <PhotoLightbox 
          photos={photos}
          currentIndex={activePhotoIndex ?? 0}
          isOpen={activePhotoIndex !== null}
          onClose={handleCloseLightbox}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      </div>
    </div>
  );
};

export default MemoriesPage;
