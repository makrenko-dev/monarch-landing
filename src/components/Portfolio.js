import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isMobile, isTablet } from 'react-device-detect';
import { useLanguage } from './LanguageContext';
import CustomCard from './CustomCard'; // Импортируем новый компонент CustomCard
import './Portfolio.css';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  let settings2;
  const { targetLanguage } = useLanguage();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('https://monarch-entertainment.com.ua/api/portfolio');
        const data = await response.json();

        const updatedPortfolioItems = await Promise.all(
          data.map(async (item) => {
            const imgResponse = await fetch(`https://monarch-entertainment.com.ua/photo/${item.img}`);
            const imgData = await imgResponse.blob();
            const imgUrl = URL.createObjectURL(imgData);

            return {
              ...item,
              photo: imgUrl,
            };
          })
        );

        setPortfolioItems(updatedPortfolioItems);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, []);

  const handleExpand = (id) => {
    setExpandedItems((prevItems) =>
      prevItems.includes(id) ? prevItems.filter((itemId) => itemId !== id) : [...prevItems, id]
    );
  };

  if (isMobile || isTablet || window.innerWidth <= 928) {
    settings2 = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      dots: true,
      initialSlide: 0,
    };
  } else {
    settings2 = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      initialSlide: 0,
    };
  }

  return (
    <div id='Portfolio'>
      {isMobile || isTablet || window.innerWidth <= 928 ? (
        <div style={{ zIndex: '50', position: 'relative', fontFamily: 'Kharkiv Tone, sans-serif', marginLeft: '0px' }}>
          <h1 style={{ marginTop: '60px', marginBottom: '40px', color: 'white', fontSize: '47px', marginLeft: '30px' }}>
            {targetLanguage === 'Uk' ? `Наші проекти` : `Our projects`}
          </h1>
          <Slider {...settings2}>
            {portfolioItems.map((item) => (
              <CustomCard
                key={item.id}
                item={item}
                handleExpand={handleExpand}
                expandedId={expandedItems.includes(item.id) ? item.id : null}
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className='port' style={{ zIndex: '50', position: 'relative', fontFamily: 'Kharkiv Tone, sans-serif' }}>
          <h1 style={{ marginTop: '90px', marginBottom: '90px', marginLeft: '60px', color: 'white', fontSize: '98px' }}>
            {targetLanguage === 'Uk' ? `Наші проекти` : `Our projects`}
          </h1>
          <Slider {...settings2}>
            {portfolioItems.map((item) => (
              <CustomCard
                key={item.id}
                item={item}
                handleExpand={handleExpand}
                expandedId={expandedItems.includes(item.id) ? item.id : null}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
