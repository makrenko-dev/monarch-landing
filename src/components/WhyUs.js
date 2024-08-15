import React, { useEffect, useRef } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { useSprings, animated } from 'react-spring';
import './WhyUs.css';
import { useLanguage } from './LanguageContext';

const WhyUs = () => {
  const contentRef = useRef(null);
  const { targetLanguage } = useLanguage();
  const [isTitleVisible, setIsTitleVisible] = React.useState(false);

  const title = "Чому ми";
  const entitle = "Why Us";
  let paragraph;
  if (targetLanguage === 'Uk') {
    paragraph = "Ми не просто робимо проекти 'під ключ'. Ми створюємо простір, де ваш бізнес розквітає. Чому ми? Тому що ми дбаємо про ваш успіх так, наче це наш власний.";
  } else {
    paragraph = "We don't just do turnkey projects. We create a space where your business flourishes. Why us? Because we care about your success as if it were our own.";
  }

  const words = paragraph.split(' ');
  const words1 = title.split(' ');

  const [springs, setSprings] = useSprings(words.length, (index) => ({
    opacity: 0,
  }));

  const [springs1, setSprings1] = useSprings(words1.length, (index) => ({
    opacity: 0,
  }));

  const getOffset = () => {
    if (isMobile || isTablet || window.innerWidth <= 1100) {
      return {
        titleOffset: contentRef.current.offsetTop - 350,
        textOffset: contentRef.current.offsetTop - 450, // Изменить смещение для текста, если нужно
      };
    } else if (window.innerWidth > 1101) {
      return {
        titleOffset: contentRef.current.offsetTop - 150,
        textOffset: contentRef.current.offsetTop - 350, // Изменить смещение для текста, если нужно
      };
    }
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollY = window.scrollY;
      const { titleOffset, textOffset } = getOffset();

      const titleTop = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (titleTop < windowHeight) {
        setIsTitleVisible(true);
      } else {
        setIsTitleVisible(false);
      }

      const elementHeight = contentRef.current.clientHeight;
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

  const generateStyledText = () => {
    return springs.map((props, index) => (
      <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
        {words[index]}&nbsp;
      </animated.span>
    ));
  };

  const generateStyledText1 = () => {
    return springs1.map((props, index) => (
      <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
        {words1[index]}&nbsp;
      </animated.span>
    ));
  };

  return (
    <div className="WhyUS" ref={contentRef}>
      <header className="WhyUS-header">
        <div className='st'>
          <h1>{targetLanguage === 'Uk' ? generateStyledText1() : entitle}</h1>
          <p className="p11ab">{generateStyledText()}</p>
        </div>
      </header>
    </div>
  );
};

export default WhyUs;
