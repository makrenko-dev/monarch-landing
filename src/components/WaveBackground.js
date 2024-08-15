import React from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  return (
    <div className="curveWrap">
      <svg width="100%" height="100%" viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 138, 30, 0.4)" />
            <stop offset="100%" stopColor="rgba(251, 255, 49, 0.21)" />
          </linearGradient>
        </defs>
        <g className="curve" fill="none">
          <path d="M 0, 60 S 300, 160, 600, -30, 800, 160, 1200 120" stroke="url(#gradient1)" strokeWidth="1" />
          {/* Add more paths with different stroke properties if needed */}
        </g>
      </svg>
    </div>
  );
};

export default React.memo(WaveBackground);


