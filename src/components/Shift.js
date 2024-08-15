import React, { useEffect, useRef } from 'react';
import { isMobile, isTablet, isDesktop} from 'react-device-detect';
import { useSprings, animated } from 'react-spring';
import './WhyUs.css';
import { useLanguage } from './LanguageContext';
import { translateTextAPI } from "../http/translateAPI";


const WhyUs = () => {
  const contentRef = useRef(null);
  const { targetLanguage } = useLanguage();
  const [translatedTitle, setTranslatedTitle] = React.useState('');
  const [translatedParagraph, setTranslatedParagraph] = React.useState('');

  const decodeHtmlEntities = (htmlString) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = htmlString;
    return textarea.value;
  };
  // English content
  const title = "Чому ми";
   const entitle = "Why Us";
   let paragraph;
  if(targetLanguage==='Uk'){
    paragraph =
    "Ми не просто робимо проекти 'під ключ'. Ми створюємо простір, де ваш бізнес розквітає. Чому ми? Тому що ми дбаємо про ваш успіх так, наче це наш власний.";
  }
  else{
   paragraph =
    "We don't just do turnkey projects. We create a space where your business flourishes. Why us? Because we care about your success as if it were our own.";

  }
 

  const words = paragraph.split(' ');

  const [springs, setSprings] = useSprings(words.length, (index) => ({
    opacity: 0,
  }));

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollY = window.scrollY;
      let elementOffset;

      if (isMobile || isTablet || window.innerWidth <= 1100) {
        elementOffset = contentRef.current.offsetTop - 400;
      } else if (window.innerWidth > 1200) {
        elementOffset = contentRef.current.offsetTop - 50;
      }

      const elementHeight = contentRef.current.clientHeight;
      const progress = Math.max(0, Math.min((scrollY - elementOffset) / elementHeight, 1));

      setSprings((index) => ({
        opacity: progress >= index / (words.length + 10) ? 1 : 0,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSprings]);

  const generateStyledText = () => {
    return springs.map((props, index) => (
      <animated.span key={index} className="word" style={{ ...props, display: 'inline-block' }}>
        {words[index]}&nbsp;
      </animated.span>
    ));
  };

  return (
    <div className="WhyUS" ref={contentRef}>
      <header className="WhyUS-header">
      <div className='st'>
        <h1>{targetLanguage === 'Uk' ? title :entitle}</h1>
        <p className="p11ab">{generateStyledText()}</p>
        </div>
      </header>
    </div>
  );
};

export default WhyUs;