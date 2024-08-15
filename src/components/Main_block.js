import React, { useState, useEffect, useRef } from 'react';
import './Main_block.css';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import MouseTrail from './MouseTrail';
import BlobsMain from './BlobsMain';
import { useLanguage } from './LanguageContext';

export default function Main_block() {
  const [shouldScrollToAboutUs, setShouldScrollToAboutUs] = useState(false);
  const [languageChangeCount, setLanguageChangeCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showM, setShowM] = useState(false);
  const mainRef = useRef(null);
  const arrowRef = useRef(null);
  const { targetLanguage } = useLanguage();

  const text1 = ['M', 'o', 'n', 'a', 'r', 'c', 'h'];
  const text2 = ['E', 'n', 't', 'e', 'r', 't', 'a', 'i', 'n', 'm', 'e', 'n', 't'];

  const isElementVisible = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    if (targetLanguage) {
      setLanguageChangeCount(prevCount => prevCount + 1);
    }
  }, [targetLanguage]);

  useEffect(() => {
    const handleResize = () => {
      if (arrowRef.current) {
        setShouldScrollToAboutUs(isElementVisible(arrowRef.current));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('AboutUs');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHoverStart = () => {
    setHovered(true);
    setTimeout(() => {
      setShowM(true);
    }, );
  };

  const handleHoverEnd = () => {
    setHovered(false);
    setTimeout(() => {
      setShowM(false);
    },); // Delay to smooth the transition
  };

  return (
    <div id="Main" ref={mainRef} className="main-container1">
      {isMobile || isTablet || window.innerWidth <= 928 ? (
        <>
          <div className="group1">
            <div className="text-1">
              {text1.map((letter, index) => (
                <span
                  key={index}
                  className="animated-letter"
                  style={{ display: 'inline-block', transitionDelay: `${0.1 * index}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          <div className="group2">
            <div className="text-2">
              {text2.map((letter, index) => (
                <span
                  key={index}
                  className="animated-letter"
                  style={{ display: 'inline-block', transitionDelay: `${0.1 * index}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="maincont">
          <div className="group1">
            <span className="text-1">Monarch</span>
            <span className="text-2">Entertainment</span>
          </div>

          {!shouldScrollToAboutUs && (
            <div
              className="scroll-to-top-btn"
              ref={arrowRef}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              onClick={() => { hovered ? scrollToAboutUs() : scrollToTop(); }}
            >
              <span className={`animated-v ${hovered ? 'hide' : ''}`}>
                V
              </span>
              <span className={`static-m ${showM ? 'visible' : ''}`}>
                M
              </span>
            </div>
          )}

          <div className="background"></div>

          {isDesktop && <MouseTrail targetBlock={mainRef.current} />}
        </div>
      )}

      {window.innerWidth <= 1200 && <BlobsMain />}
    </div>
  );
}
