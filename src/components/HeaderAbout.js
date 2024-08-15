import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { isMobile, isTablet } from 'react-device-detect';
import './AboutUsBlock.css';
import BlobAnimationSt from './BlobAnimationSt';
import WaveContainer from './WaveContainer';
import { useLanguage } from './LanguageContext';
import { useSprings, animated } from 'react-spring';

const AboutUsBlock = () => {
  const { targetLanguage } = useLanguage();
  const aboutUsRef = useRef(null);
  const arrowRef = useRef(null);
  const [isArrowVisible, setIsArrowVisible] = useState(false);


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

  const wordsFirstParagraph = content.firstParagraph.split(' ').map(word => word);
 
  const [springsFirstParagraph, setSpringsFirstParagraph] = useSprings(wordsFirstParagraph.length, (index) => ({
    opacity: 0,
    config: { duration: 500 },
  }));

 

  const [currentIndexFirstParagraph, setCurrentIndexFirstParagraph] = useState(0);
   let elementOffset;
 useEffect(() => {
  const intervalId = setInterval(() => {
    handleScroll();
  }, 0);

  return () => {
    clearInterval(intervalId);
    window.removeEventListener('scroll', handleScroll);
  };
}, [setSpringsFirstParagraph, currentIndexFirstParagraph]);

const handleScroll = () => {
  if (aboutUsRef.current) {
    const scrollY = window.scrollY;
    if (isMobile || isTablet || window.innerWidth <= 1100) {
      elementOffset = aboutUsRef.current.offsetTop - 400;
    } else if (window.innerWidth > 1101) {
      elementOffset = aboutUsRef.current.offsetTop + 50;
    }
  
    const elementHeight = aboutUsRef.current.clientHeight;
    const progress = Math.max(0, Math.min((scrollY - elementOffset) / elementHeight, 1));
  
    setSpringsFirstParagraph((index) => ({
      opacity: progress >= index / (wordsFirstParagraph.length + 15) && progress > 0 ? 1 : 0,
    }));
  
    const wordIndexFirstParagraph = Math.floor(progress * wordsFirstParagraph.length);
  
    if (wordIndexFirstParagraph !== currentIndexFirstParagraph) {
      setCurrentIndexFirstParagraph(wordIndexFirstParagraph);
    }
  }
};

  const generateStyledTextFirstParagraph = () => {
    return (
      <>
        {springsFirstParagraph.map((props, index) => (
          <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
           {wordsFirstParagraph[index]}&nbsp;
          </animated.span>
        ))}
      </>
    );
  };

  

  return (
    <div id="AboutUs" className="AboutUsBlock" ref={aboutUsRef}>
      <header className="AboutUsBlock-header">
        {isMobile || isTablet || window.innerWidth <= 928 ? '' : <BlobAnimationSt />} 
          <div className='st'>
            <h1 id="AboutUshed">{content.heading}</h1>
         </div>
      </header>
    </div>
  );
};

export default AboutUsBlock;