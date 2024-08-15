import React from 'react';
import { Blob } from 'react-blob';
import './BlobAnimation.css';
import { isMobile, isTablet } from 'react-device-detect'; // Import isMobile and isTablet

const BlobAnimation = () => {
  return (

    <div className="blob-container">
      <div className='blob blob1' />
      <div className='blob blob2' />
      <div className='blob blob3' />
      <div className='blob blob4' />
      <div className='blob blob5' />
      <div className='blob blob6' />
      <div className='blob blob7' />
      <div className='blob blob8' />
      <div className='blob blob9' />
      <div className='blob blob10' />
    </div>
  );
};

export default React.memo(BlobAnimation);
