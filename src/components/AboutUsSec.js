import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { isMobile, isTablet } from 'react-device-detect';
import './AboutUsBlock.css';
import BlobAnimation from './BlobAnimation';
import WaveContainer from './WaveContainer';
import { useLanguage } from './LanguageContext';
import { useSprings, animated } from 'react-spring';

const AboutUsBlock = () => {
  const { targetLanguage } = useLanguage();
  const aboutUsRef = useRef(null);
  const arrowRef = useRef(null);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = entries => {
      const [entry] = entries;
      setIsArrowVisible(entry.isIntersecting);
      document.body.style.overflow = entry.isIntersecting ? 'hidden' : 'auto';
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }

    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, [arrowRef.current]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ukrainianContent = {
    heading: "Про нас",
    firstParagraph: "Ми – команда професіоналів, пристрасно віддана створенню унікальних та ефективних сайтів",
    secondParagraph: "Наші експерти в галузі IT поєднують у собі творчий підхід та технічну майстерність, щоб надати вам не просто веб-сайт, а цілий інструмент для досягнення ваших цілей"
  };

  const englishContent = {
    heading: "About us",
    firstParagraph: "We are a team of professionals passionately dedicated to creating unique and effective websites",
    secondParagraph: "Our IT experts combine creativity and technical prowess to provide you with more than just a website, but an entire tool to help you achieve your goals"
  };

  const content = targetLanguage === 'Uk' ? ukrainianContent : englishContent;

  
  const wordsSecondParagraph = content.secondParagraph.split(' ').map(word => word );

 

  const [springsSecondParagraph, setSpringsSecondParagraph] = useSprings(wordsSecondParagraph.length, (index) => ({
    opacity: 0,
    config: { duration: 500 },
  }));

 
  const [currentIndexSecondParagraph, setCurrentIndexSecondParagraph] = useState(0);

  const handleScroll = () => {
  if (aboutUsRef.current) {
    const scrollY = window.scrollY;
    let elementOffset;
    if (isMobile || isTablet || window.innerWidth <= 1100) {
      elementOffset = aboutUsRef.current.offsetTop - 400;
    } else if (window.innerWidth > 1101) {
      elementOffset = aboutUsRef.current.offsetTop - 200;
    }
    const elementHeight = aboutUsRef.current.clientHeight;
    const progress = Math.max(0, Math.min((scrollY - elementOffset) / elementHeight, 1));

    setSpringsSecondParagraph((index) => ({
      opacity: progress >= index / (wordsSecondParagraph.length + 15) && progress > 0 ? 1 : 0,
    }));

    const wordIndexSecondParagraph = Math.floor(progress * wordsSecondParagraph.length);

    if (wordIndexSecondParagraph !== currentIndexSecondParagraph) {
      setCurrentIndexSecondParagraph(wordIndexSecondParagraph);
    }
  }
};


  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll();
    }, 0);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ setSpringsSecondParagraph, currentIndexSecondParagraph]);

 

  const generateStyledTextSecondParagraph = () => {
    return (
      <>
        {springsSecondParagraph.map((props, index) => (
          <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
          {wordsSecondParagraph[index]}&nbsp;
          </animated.span>
        ))}
        
      </>
    );
  };

  return (
    <div id="AboutUs" className="AboutUsBlock" ref={aboutUsRef}>
      <header className="AboutUsSec-header">
        <div className='st'>
        <p className='p1'>{generateStyledTextSecondParagraph()}</p>
        </div>
         {isMobile || isTablet || window.innerWidth <= 928 ? '' :  <WaveContainer />}
      </header>
    </div>
  );
};

export default AboutUsBlock;

