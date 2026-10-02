import React, { useState } from 'react';
import ScrapbookPageNav from '../components/ScrapbookPageNav';
import Tape from '../components/Tape';
import { FlowerDecoration } from '../components/FlowerDecoration';
import { VIDEO_PATH, VIDEO_URL } from '../config';
import { content } from '../data/content';

export const VideoPage = ({ onNext, onPrev }) => {
  const [videoSrc, setVideoSrc] = useState(VIDEO_PATH || "/assets/photos/video.mp4.mp4");
  const [videoFailed, setVideoFailed] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url || typeof url !== 'string' || !url.trim()) return null;
    
    let videoId = null;

    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0` : null;
  };

  const youtubeEmbedUrl = getEmbedUrl(VIDEO_URL);

  const handleVideoError = () => {
    if (videoSrc === "/assets/photos/video.mp4.mp4") {
      setVideoSrc("/assets/video.mp4");
    } else if (videoSrc === "/assets/video.mp4") {
      setVideoSrc("/assets/photos/video.mp4");
    } else if (videoSrc === "/assets/photos/video.mp4") {
      setVideoSrc("/assets/video.mov");
    } else {
      setVideoFailed(true);
    }
  };

  return (
    <div className="page-transition-wrapper">
      <div 
        className="paper-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          padding: '40px 30px 25px 30px',
          background: 'var(--cream-paper)',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-paper)',
          position: 'relative',
          border: '2px solid var(--wine-red)'
        }}
      >
        <Tape position="top-left" />
        <Tape position="top-right" />

        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--burgundy-dark)' }}>
            {content.video.title || "Our Special Video Memory 🎥"}
          </h2>
          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.5rem', color: 'var(--wine-red)', marginTop: '4px' }}>
            {content.video.subtitle || "A beautiful moment captured in time 💕"}
          </p>
        </div>

        {/* Vintage TV / Video Frame */}
        <div 
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            maxHeight: '400px',
            backgroundColor: '#1E1215',
            borderRadius: '12px',
            border: '6px solid #4A3525',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {youtubeEmbedUrl ? (
            <iframe 
              src={youtubeEmbedUrl} 
              title="Romantic Video Memory" 
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : !videoFailed ? (
            <video 
              src={videoSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
              onError={handleVideoError}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <div 
              style={{
                textAlign: 'center',
                color: 'var(--rose-pink)',
                padding: '20px',
                fontFamily: 'var(--font-handwriting)'
              }}
            >
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '10px' }}>📹</span>
              <p style={{ fontSize: '1.8rem', color: '#FFFDF9' }}>
                Your video will appear here ❤️
              </p>
            </div>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <FlowerDecoration size={40} color="var(--wine-red)" />
        </div>

        <ScrapbookPageNav 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={6}
          totalPages={7}
        />
      </div>
    </div>
  );
};

export default VideoPage;
