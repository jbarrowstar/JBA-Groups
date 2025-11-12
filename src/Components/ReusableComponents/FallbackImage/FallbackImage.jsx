import React from 'react';
import './FallbackImage.css';

const FallbackImage = ({ className, alt }) => {
  return (
    <div className={`fallback-image ${className || ''}`} role="img" aria-label={alt || 'Image placeholder'}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#f0f0f0" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#666" fontSize="12">
          {alt || 'Image'}
        </text>
      </svg>
    </div>
  );
};

export default FallbackImage; 