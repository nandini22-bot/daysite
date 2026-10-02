import React, { useState, useEffect } from 'react';
import HeartAnimation from './components/HeartAnimation';

import WelcomePage from './pages/WelcomePage';
import LoveLetterPage from './pages/LoveLetterPage';
import QuestionPage from './pages/QuestionPage';
import YayPage from './pages/YayPage';
import MemoriesPage from './pages/MemoriesPage';
import VideoPage from './pages/VideoPage';
import FinalPage from './pages/FinalPage';

import { content } from './data/content';

export function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Page Switcher (7 Pages)
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <WelcomePage onNext={goToNext} />;
      case 2:
        return <LoveLetterPage onNext={goToNext} onPrev={goToPrev} />;
      case 3:
        return <QuestionPage onNext={goToNext} onPrev={goToPrev} />;
      case 4:
        return <YayPage onNext={goToNext} onPrev={goToPrev} />;
      case 5:
        return <MemoriesPage onNext={goToNext} onPrev={goToPrev} />;
      case 6:
        return <VideoPage onNext={goToNext} onPrev={goToPrev} />;
      case 7:
        return <FinalPage onRestart={handleRestart} onPrev={goToPrev} />;
      default:
        return <WelcomePage onNext={goToNext} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Floating Hearts Animation Background */}
      <HeartAnimation />

      {/* Top Floating Scrapbook Header */}
      <header className="scrapbook-header">
        <div className="scrapbook-header-title">
          {content.names.girlfriend} ♡ {content.names.boyfriend}
        </div>
      </header>

      {/* Active Scrapbook Scene */}
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
