import './FAQ.css';
import React, { useState } from 'react';
import { isMobile, isTablet, isDesktop} from 'react-device-detect';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Collapse } from 'react-bootstrap';
import { translateTextAPI } from "../http/translateAPI";
import { FaPlus } from 'react-icons/fa'; // Import plus icon
import { useLanguage } from './LanguageContext';


const FAQ = () => {
  const { targetLanguage } = useLanguage();

  const faqData = [
    { question: '1.Які послуги ваша айті-фірма надає?', answer: 'Наша айті-фірма надає повний спектр послуг з розробки веб-сайтів під ключ, включаючи проектування, розробку, тестування, розгортання та підтримку.' },
    { question: '2.Які області бізнесу ви обслуговуєте?', answer: 'Ми працюємо з різними галузями бізнесу, включаючи e-commerce, освіту, медицину, туризм, нерухомість та інші.' },
    { question: '3.Як відбувається співпраця з клієнтами під час розробки?', answer: `Наша команда надає постійну зворотню зв'язок та включає клієнтів у кожен етап розробки, щоб забезпечити відповідність проекту їхнім очікуванням.` },
    { question: '4.Якщо ми маємо вже існуючий веб-сайт, чи можна вам замовити певні модифікації чи оновлення?', answer: `Так, ми з радістю вам допоможемо з модифікаціями та оновленнями вашого вже існуючого веб-сайту, щоб відповідати вашим зміненим потребам та вимогам.` },
  ];

   const enfaqData = [
    { question: '1.What services does your IT company provide?', answer: 'Our IT firm provides a full range of turnkey website development services, including design, development, testing, deployment and support.' },
    { question: '2.What areas of business do you serve?', answer: 'We work with various business sectors, including e-commerce, education, medicine, tourism, real estate and others.' },
    { question: '3.How is cooperation with clients during development?', answer: `Our team provides constant feedback and involves clients at every stage of development to ensure the project meets their expectations.` },
    { question: '4.If we have an existing website, can you order certain modifications or updates?', answer: `Yes, we are happy to help you with modifications and updates to your existing website to meet your changing needs and requirements.` },
  ];
 const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isRotated = (index) => (expandedIndex === index ? 'rotate-icon' : '');

  return (
    <div id="FAQ" className="container">
      <h1 className='h1faq'>{targetLanguage === 'Uk' ?"Найчастіші питання до нас":"The most frequent questions to us"}</h1>
        {isMobile || isTablet || window.innerWidth <= 928 ? (
          <div className="row">
        {/* Left side with text */}
        
        <div className="col-md-1"></div>
        {/* Right side with FAQ */}
        <div className="col-md-7">
          <div className="row1">
            {targetLanguage === 'Uk' ? faqData.map((item, index) => (
              <div key={index} className="col-lg-12">
                <Card>
                  <Card.Header>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className='txt'>
                        {item.question}
                      </span>
                      <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                    </div>
                  </Card.Header>
                  <Collapse in={expandedIndex === index}>
                    <div id={`faq-collapse-${index}`}>
                      <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                    </div>
                  </Collapse>
                </Card>
              </div>
            )) : enfaqData.map((item, index) => (
              <div key={index} className="col-lg-12">
                <Card>
                  <Card.Header>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className='txt'>
                        {item.question}
                      </span>
                      <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                    </div>
                  </Card.Header>
                  <Collapse in={expandedIndex === index}>
                    <div id={`faq-collapse-${index}`}>
                      <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                    </div>
                  </Collapse>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 align-bottom">
          <p className='p2'>
            {targetLanguage === 'Uk' ?"Маєте ще питання? Наша команда завжди на зв'язку! Не соромтеся звертатися, і ми з радістю вам допоможемо та відповімо на всі ваші питання.":"Do you have any other questions? Our team is always in touch! Do not hesitate to contact us and we will be happy to help you and answer all your questions."}
          </p>
        </div>
      </div>
      ):(
      <div className="row">
        {/* Left side with text */}
        <div className="col-md-4 align-bottom">
          <p className='p2'>
           {targetLanguage === 'Uk' ?"Маєте ще питання? Наша команда завжди на зв'язку! Не соромтеся звертатися, і ми з радістю вам допоможемо та відповімо на всі ваші питання.":"Do you have any other questions? Our team is always in touch! Do not hesitate to contact us and we will be happy to help you and answer all your questions."}
          </p>
        </div>
        <div className="col-md-1"></div>
        {/* Right side with FAQ */}
        <div className="col-md-7">
          <div className="row1">
            {targetLanguage === 'Uk' ? faqData.map((item, index) => (
              <div key={index} className="col-lg-12">
                <Card>
                  <Card.Header>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className='txt'>
                        {item.question}
                      </span>
                      <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                    </div>
                  </Card.Header>
                  <Collapse in={expandedIndex === index}>
                    <div id={`faq-collapse-${index}`}>
                      <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                    </div>
                  </Collapse>
                </Card>
              </div>
            )):enfaqData.map((item, index) => (
              <div key={index} className="col-lg-12">
                <Card>
                  <Card.Header>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className='txt'>
                        {item.question}
                      </span>
                      <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                    </div>
                  </Card.Header>
                  <Collapse in={expandedIndex === index}>
                    <div id={`faq-collapse-${index}`}>
                      <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                    </div>
                  </Collapse>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default FAQ;