import React from 'react';

export const LaceBorder = ({ position = "top", style = {} }) => {
  return (
    <div 
      className={position === "bottom" ? "lace-bottom-border" : "lace-top-border"} 
      style={style} 
    />
  );
};

export default LaceBorder;
