import React from 'react';

export const ScrapbookButton = ({ 
  children, 
  onClick, 
  variant = 'default', // 'default', 'primary', 'secondary'
  disabled = false,
  icon = null,
  className = '',
  style = {}
}) => {
  const getVariantClass = () => {
    if (variant === 'primary') return 'scrapbook-btn-primary';
    if (variant === 'secondary') return 'scrapbook-btn-secondary';
    return '';
  };

  return (
    <button 
      className={`scrapbook-btn ${getVariantClass()} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ScrapbookButton;
