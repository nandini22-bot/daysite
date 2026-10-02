import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Disc, Music, AlertCircle } from 'lucide-react';
import { MUSIC_PATH } from '../config';

export const MusicPlayer = ({ title = "Our Special Song", artist = "Anmol & Nandini" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setHasError(true);
        setIsPlaying(false);
      });
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration || hasError) return;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs === 0) return "0:00";
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div 
      className="paper-card"
      style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        padding: '30px 24px',
        textAlign: 'center',
        background: '#FAF6F0',
        borderRadius: '12px',
        border: '2px solid var(--wine-red)',
        boxShadow: 'var(--shadow-paper)',
        position: 'relative'
      }}
    >
      <audio ref={audioRef} src={MUSIC_PATH} preload="metadata" />

      {/* Spinning Vinyl Record Visual */}
      <div 
        style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 20px auto',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #222 0%, #111 60%, #333 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
          animation: isPlaying ? 'spin 6s linear infinite' : 'none',
          border: '4px solid #444',
          position: 'relative'
        }}
      >
        <style>{`
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          background: 'var(--wine-red)',
          border: '2px solid var(--cream-paper)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF'
        }}>
          <Disc size={20} />
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--burgundy-dark)' }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.3rem', color: 'var(--wine-red)', marginTop: '4px' }}>
        {artist}
      </p>

      {/* Audio Error Placeholder */}
      {hasError ? (
        <div 
          style={{
            margin: '20px 0',
            padding: '12px',
            background: 'var(--blush-light)',
            border: '1px dashed var(--wine-red)',
            borderRadius: '6px',
            color: 'var(--wine-red)',
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <AlertCircle size={20} />
          <span>Your song will go here ❤️</span>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
          <div style={{ margin: '20px 0 10px 0' }}>
            <input 
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              style={{
                width: '100%',
                accentColor: 'var(--wine-red)',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-handwriting)', fontSize: '1.1rem', color: 'var(--brown-vintage)', marginTop: '4px' }}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Play / Pause Button */}
          <button 
            onClick={togglePlay}
            className="scrapbook-btn scrapbook-btn-primary"
            style={{ borderRadius: '50%', width: '56px', height: '56px', padding: 0, justifyContent: 'center' }}
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
          </button>
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
