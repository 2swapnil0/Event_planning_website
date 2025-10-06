import React from 'react';
import '../../styles/skeleton-loader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
    </div>
  );
};

export default SkeletonLoader;