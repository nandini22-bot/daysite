import React, { useMemo } from 'react';

export const HeartAnimation = () => {
  // Generate deterministic random positions for 18 floating hearts
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + 2) % 96}%`,
      size: `${14 + (i % 5) * 6}px`,
      duration: `${9 + (i % 6) * 3.5}s`,
      delay: `${(i * 0.7) % 8}s`,
      opacity: 0.2 + (i % 4) * 0.12
    }));
  }, []);

  return (
    <div className="floating-hearts-container" aria-hidden="true">
      {hearts.map((h, i) => (
        <div
          key={h.id}
          className="heart-particle"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
            opacity: h.opacity
          }}
        >
          {i % 2 === 0 ? '❤️' : '💖'}
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;
