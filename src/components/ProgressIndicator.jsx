import React from 'react';

export const ProgressIndicator = ({ currentPage = 1, totalPages = 11 }) => {
  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="progress-tag" title={`Page ${currentPage} of ${totalPages}`}>
      {formatNum(currentPage)} / {formatNum(totalPages)}
    </div>
  );
};

export default ProgressIndicator;
