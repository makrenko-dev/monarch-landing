import Slider from "react-slick";
import "./HorizontalScroll.css"; // Import your CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile, isTablet } from 'react-device-detect';
import { useLanguage } from './LanguageContext';
import React, { useState } from 'react';

const StageSlider = () => {
  const { targetLanguage } = useLanguage();
  const steps = [
    { title: "01", description: "Складання технічного завдання, яке визначає вимоги та функціональність проекту" },
    { title: "02", description: "Укладання договору надання послуг із розробки веб-сайту" },
    { title: "03", description: "Створення дизайн-концепції та інтерфейсу для сайту" },
    { title: "04", description: "Програмування користувацького інтерфейсу відповідно до дизайну" },
    { title: "05", description: "Створення логіки роботи сайту та взаємодії з базою даних" },
    { title: "06", description: "Виконання тестів для виявлення помилок та перевірки функціональності" },
    { title: "07", description: "Усунення помилок, оптимізація роботи сайту, покращення та ефективний веб-продукт" },
    { title: "08", description: "Розміщення сайту на реальному сервері для загального доступу" },
    { title: "09", description: "Надання клієнту готового проекту разом із всією необхідною документацією та доступами" },
  ];

  const ensteps = [
    { title: "01", description: "Compilation of the technical task, which defines the requirements and functionality of the project" },
    { title: "02", description: "Conclusion of a contract for the provision of website development services" },
    { title: "03", description: "Creating a design concept and interface for the site" },
    { title: "04", description: "User interface programming according to design" },
    { title: "05", description: "Creating the logic of the website and interaction with the database" },
    { title: "06", description: "Execution of tests to detect errors and verify functionality" },
    { title: "07", description: "Bug fixes, site optimization, improvements, and an effective web product" },
    { title: "08", description: "Placing the site on a real server for public access" },
    { title: "09", description: "Providing the client with a finished project together with all the necessary documentation and access" },
  ];

  const [currentStage, setCurrentStage] = useState(0);

  const handleScrollEnd = () => {
    // Custom logic when scroll ends
  };

  const handleScroll = (index) => {
    setCurrentStage(index);
  };

  let settings;

  if (window.innerWidth <= 928) {
    settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      dots: true,
      autoplay: true,
      initialSlide: 0,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      beforeChange: (_, next) => handleScroll(next),
      afterChange: () => handleScrollEnd()
    };
  }

  const currentSteps = targetLanguage === 'Uk' ? steps : ensteps;

  return (
    <div id="Stages" className="container12">
      <h1 className="title">{targetLanguage === 'Uk' ? 'Етапи роботи' : 'Stages of work'}</h1>
      <Slider {...settings}>
        {currentSteps.map((step, index) => (
          <div key={index} className="stage">
            <h2 className='step-title'>{step.title}</h2>
            <p className='step-description'>{step.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StageSlider;
