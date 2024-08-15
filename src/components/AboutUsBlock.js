import React, { useState, useRef, useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import './AboutUsBlock.css';
import BlobAnimationSt from './BlobAnimationSt';
import WaveContainer from './WaveContainer';
import { useLanguage } from './LanguageContext';
import { useSprings, animated } from 'react-spring';

const AboutUsBlock = () => {
  const { targetLanguage } = useLanguage();
  const aboutUsRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

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

  const words = content.heading.split(' ').map(word => word);
  const words1 = content.firstParagraph.split(' ').map(word => word);
 
  const [springs, setSprings] = useSprings(words.length, (index) => ({
    opacity: 0,
    config: { duration: 500 },
  }));

  const [springs1, setSprings1] = useSprings(words1.length, (index) => ({
    opacity: 0,
    config: { duration: 500 },
  }));

  const getOffset = () => {
    if (isMobile || isTablet || window.innerWidth <= 1100) {
      return {
        titleOffset: aboutUsRef.current.offsetTop - 350,
        textOffset: aboutUsRef.current.offsetTop - 200, // Изменить смещение для текста, если нужно
      };
    } else if (window.innerWidth > 1101) {
      return {
        titleOffset: aboutUsRef.current.offsetTop - 350,
        textOffset: aboutUsRef.current.offsetTop - 150, // Изменить смещение для текста, если нужно
      };
    }
  };

  const handleScroll = () => {
    if (aboutUsRef.current) {
      const scrollY = window.scrollY;
      const { titleOffset, textOffset } = getOffset();

      const elementHeight = aboutUsRef.current.clientHeight;
      const progress = Math.max(0, Math.min((scrollY - titleOffset) / elementHeight, 1));
      const progressText = Math.max(0, Math.min((scrollY - textOffset) / elementHeight, 1));

      setSprings((index) => ({
        opacity: progress >= index / (words.length + 15) && progress > 0 ? 1 : 0,
      }));

      setSprings1((index) => ({
        opacity: progressText >= index / (words1.length + 15) && progressText > 0 ? 1 : 0,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSprings, setSprings1]);

  return (
    <div id="AboutUs" className="AboutUsBlock" ref={aboutUsRef}>
      <header className="AboutUsBlock-header">
        <BlobAnimationSt />
        <div className='st'>
          <h1 id="AboutUshed">{springs.map((props, index) => (
            <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
              {words[index]}&nbsp;
            </animated.span>
          ))}</h1>
          <p>{springs1.map((props, index) => (
            <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
              {words1[index]}&nbsp;
            </animated.span>
          ))}</p>
        </div>
        <WaveContainer />
      </header>
    </div>
  );
};

export default AboutUsBlock;
