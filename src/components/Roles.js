import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Collapse } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'; // Import plus icon
import { useLanguage } from './LanguageContext';
import './Roles.css';

const Roles = () => {
  const { targetLanguage } = useLanguage();
  const faqData = [
    { question: 'Бізнес-аналітик', answer: 'Розробка бізнес-вимог, підготовка технічних завдань, підтримка комунікації між клієнтом та розробницькою командою.' },
    { question: 'Верстальник', answer: 'Програмування користувацького інтерфейсу, втілення дизайну в код, оптимізація для роботи в різних браузерах.' },
    { question: 'Проєкт-менеджер', answer: 'Управління ресурсами, розподіл завдань, контроль термінів виконання, вирішення конфліктів, звітність перед клієнтом.' },
    { question: 'Розробник', answer: 'Розробка серверної частини сайту, робота з базою даних, взаємодія з фронтенд розробниками для створення повноцінного веб-додатка.' },
    { question: 'Веб-дизайнер', answer: 'Розробка користувацького досвіду та інтерфейсу, створення дизайн-концепцій, прототипування, тестування користування.' },
    { question: 'Тестувальник', answer: 'Виконання тестів для перевірки функціональності, виявлення помилок та недоліків, забезпечення якості продукту.' },
  ];

   const enfaqData = [
    { question: 'Business analyst', answer: 'Development of business requirements, preparation of technical tasks, support of communication between the client and the development team.' },
    { question: 'Front-End Developer', answer: 'User interface programming, implementation of design into code, optimization for work in different browsers.' },
    { question: 'Project manager', answer: 'Resource management, assignment of tasks, control of deadlines, conflict resolution, reporting to the client.' },
    { question: 'Developer', answer: 'Development of the server part of the site, work with the database, interaction with front-end developers to create a full-fledged web application.' },
    { question: 'Web designer', answer: 'Development of user experience and interface, creation of design concepts, prototyping, usability testing.' },
    { question: 'Test Engineer', answer: 'Performing tests to check functionality, identify errors and deficiencies, ensure product quality.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isRotated = (index) => (openIndex === index ? 'rotate-icon' : '');

  return (
    <div className="container">
      <h1 className='h1rol'>{targetLanguage === 'Uk' ? 'Хто займається проектом?' : 'Who is involved in the project?'}</h1>
      <div className="row">
        <div className="col-md-41">
          <Card>
            <Card.Body style={{height: window.innerWidth >= 928 ? '300px' : '230px'}}>
            {targetLanguage === 'Uk' ? <p>
                У кожної людини нашої команди є своя роль у створенні проектів, але наш успіх ґрунтується на взаємодії та колективному зусиллі.
                Кожен учасник нашої команди - невід'ємна частина успішного завершення проектів.
              </p> :  <p>
                Each person on our team has a role in creating projects, but our success is based on interaction and collective effort.
                Each member of our team is an integral part of the successful completion of projects.
              </p>}
               {targetLanguage === 'Uk' ?
               <p>
                Ми цінуємо ваш бізнес, і кожен учасник нашої команди працює для того, щоб забезпечити вам найкращі результати.
              </p> : <p>
                We value your business and every member of our team works to provide you with the best results.
              </p>}
            </Card.Body>
          </Card>
        </div>
         <div className="col-md-1"></div>
        <div className="col-md-32">
          {targetLanguage === 'Uk' ? faqData.slice(0, 3).map((item, index) => (
            <Card key={index}>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className='txt'>
                    {item.question}
                  </span>
                  <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                </div>
              </Card.Header>
              <Collapse in={openIndex === index}>
                <div id={`faq-collapse-${index}`}>
                  <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                </div>
              </Collapse>
            </Card>
          )):enfaqData.slice(0, 3).map((item, index) => (
            <Card key={index}>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className='txt'>
                    {item.question}
                  </span>
                  <div className={`rotatet ${isRotated(index)}`} onClick={() => handleAccordionToggle(index)}>+ </div>
                </div>
              </Card.Header>
              <Collapse in={openIndex === index}>
                <div id={`faq-collapse-${index}`}>
                  <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                </div>
              </Collapse>
            </Card>
          ))}
        </div>
       
        <div className="col-md-31">
          {targetLanguage === 'Uk' ? faqData.slice(3, 6).map((item, index) => (
            <Card key={index + 3}>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className='txt'>
                    {item.question}
                  </span>
                  <div className={`rotatet ${isRotated(index+3)}`} onClick={() => handleAccordionToggle(index+3)}>+ </div>
                </div>
              </Card.Header>
              <Collapse in={openIndex === index + 3}>
                <div id={`faq-collapse-${index + 3}`}>
                  <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                </div>
              </Collapse>
            </Card>
          )):enfaqData.slice(3, 6).map((item, index) => (
            <Card key={index}>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className='txt'>
                    {item.question}
                  </span>
                  <div className={`rotatet ${isRotated(index+3)}`} onClick={() => handleAccordionToggle(index+3)}>+ </div>
                </div>
              </Card.Header>
              <Collapse in={openIndex === index+3}>
                <div id={`faq-collapse-${index+3}`}>
                  <Card.Body><span className='txt1'>{item.answer}</span></Card.Body>
                </div>
              </Collapse>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;