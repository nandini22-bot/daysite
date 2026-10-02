import React, { useState } from 'react';

export const Envelope = ({ 
  isOpen = false, 
  onToggle
}) => {
  const [opened, setOpened] = useState(isOpen);

  const handleClick = () => {
    const nextState = !opened;
    setOpened(nextState);
    if (onToggle) onToggle(nextState);
  };

  return (
    <div className="envelope-container" onClick={handleClick} title="Click to open letter">
      <div className="envelope-wrapper">
        <div className={`envelope-flap ${opened ? 'open' : ''}`}></div>
        
        {!opened && (
          <div className="wax-seal">
            <span>A</span>
          </div>
        )}

        <div className={`envelope-paper-inside ${opened ? 'extracted' : ''}`}>
          <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '2.8rem' }}>💌</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
