import React from 'react';
import { Blob } from 'react-blob';
import './BlobAnimation.css';
import { isMobile, isTablet } from 'react-device-detect'; // Import isMobile and isTablet

const BlobAnimationEnd = () => {
  return (
    <div className="blob-container">
      <div className='blob blob1' />
      <div className='blob blob2' />
      <div className='blob blob3' />
      <div className='blob blob4' />
      <div className='blob blob5' />

    </div>
  );
};

export default React.memo(BlobAnimationEnd);
