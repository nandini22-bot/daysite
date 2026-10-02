import React from 'react';

export const Tape = ({ position = 'top-left', className = '', style = {} }) => {
  const getPosClass = () => {
    switch (position) {
      case 'top-left': return 'tape-top-left';
      case 'top-right': return 'tape-top-right';
      case 'bottom-center': return 'tape-bottom-center';
      case 'center': return 'tape-center';
      default: return '';
    }
  };

  return <div className={`tape ${getPosClass()} ${className}`} style={style} />;
};

export default Tape;
