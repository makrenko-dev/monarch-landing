import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import Slider from 'react-slick';
import './Napryamy.css'; // Import the CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from './LanguageContext';
import BlobAnimationSt from './BlobAnimationSt';
import LanguageSelector from './PopupChoose';

const Napryamy = () => {
  const { targetLanguage } = useLanguage();
  const cards = [
    {
      id: 1,
      title: 'Лендінг',
      description: 'Веб-сторінка для ефективного маркетингу та просування продукту чи послуги, з метою привернення уваги та викликання конкретних дій відвідувача, таких як покупка або підписка.',
      price: 'Від $400',
      duration: 'Від 14 днів',
      margin: targetLanguage === 'Uk' ? '30px' : '50px',
    },
    {
      id: 2,
      title: 'Інтернет-магазин',
      description: 'Веб-ресурс для онлайн-покупок, що містить каталог товарів, кошик покупок, систему оплати та інші функції для зручних та безпечних електронних транзакцій.',
      price: 'Від $550',
      duration: 'Від 14 днів',
      margin: targetLanguage === 'Uk' ? '45px' : '65px',
    },
    {
      id: 3,
      title: 'Корпоративний сайт',
      description: 'Розкрита інформація про компанію, її продукти, контактні дані та ключові аспекти. Мета спрямована на надання клієнтам повну та достовірну інформацію про діяльність компанії.',
      price: 'Від $800',
      duration: 'Від 21 днів',
      margin: '25px',
    },
    {
      id: 4,
      title: 'Бізнес оптимізація',
      description: 'Впровадження технологій та стратегій для покращення ефективності робочих процесів у компанії, спрощення взаємодії та підвищення продуктивності.',
      price: 'Ціна договірна',
      duration: 'Час залежить від складності проекту',
      margin: '40px',
    },
  ];

  const encards = [
    {
      id: 1,
      title: 'Landing',
      description: 'A web page for the effective marketing and promotion of a product or service, with the goal of attracting attention and eliciting a specific action from the visitor, such as a purchase or subscription.',
      price: 'From $400',
      duration: 'From 14 days',
      margin: targetLanguage === 'Uk' ? '30px' : '50px',
    },
    {
      id: 2,
      title: 'Internet-shop',
      description: 'A web resource for online shopping that includes a product catalog, shopping cart, payment system and other features for convenient and secure electronic transactions.',
      price: 'From $550',
      duration: 'From 14 days',
      margin: targetLanguage === 'Uk' ? '45px' : '65px',
    },
    {
      id: 3,
      title: 'Corporate site',
      description: `Information about the company, its products, contact details and key aspects is revealed. The goal is to provide customers with complete and reliable information about the company's activities.`,
      price: 'From $800',
      duration: 'From 21 days',
      margin: '45px',
    },
    {
      id: 4,
      title: 'Business optimization',
      description: 'Implementation of technologies and strategies to improve the efficiency of work processes in the company, simplify interaction and increase productivity.',
      price: 'The price is negotiable',
      duration: 'The time depends on the complexity of the project',
      margin: '40px',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    initialSlide: 0,
  };

  const title = (
    <div>
      Ми найкращі
      <br />
      в цих напрямках
    </div>
  );

  const entitle = (
    <div>
      We are the best
      <br />
      in these areas
    </div>
  );

  const [openCards, setOpenCards] = useState(cards.map(card => false));

  // Функция для открытия модального окна
  const openLanguageModal = (cardId) => {
    setOpenCards(prevOpenCards => {
      const updatedOpenCards = [...prevOpenCards];
      updatedOpenCards[cardId - 1] = true;
      return updatedOpenCards;
    });
  };

  // Функция для закрытия модального окна
  const closeLanguageModal = (cardId) => {
    setOpenCards(prevOpenCards => {
      const updatedOpenCards = [...prevOpenCards];
      updatedOpenCards[cardId - 1] = false;
      return updatedOpenCards;
    });
  };

  // Функция для обработки повторного клика на карточку
  const toggleLanguageModal = (cardId) => {
    setOpenCards(prevOpenCards => {
      const updatedOpenCards = [...prevOpenCards];
      updatedOpenCards[cardId - 1] = !updatedOpenCards[cardId - 1];
      return updatedOpenCards;
    });
  };

  return (
    <>
      {window.innerWidth <= 928 ? (
        <div id="Napryamy" className="container-napryamy" style={{ marginLeft: '0px' }}>
          <BlobAnimationSt />
          <h2 className="h2m">{targetLanguage === 'Uk' ? title : entitle}</h2>
          <Slider {...settings}>
            {(targetLanguage === 'Uk' ? cards : encards).map((card) => (
             <div key={card.id} className="card-napryamy" onClick={() => toggleLanguageModal(card.id)}>
                <Card className="ccs-napryamy" style={{ width: '75%', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid white', borderRadius: '20px', height: targetLanguage === 'Uk' ? '410px' : '450px' }}>
                  <Card.Body className="ccs-napryamy-body">
                    <Card.Title style={{ wordWrap: 'break-word', fontSize: '30px', height: '80px', fontFamily: 'Helvetica Light', fontWeight: '600' }} className="card-title-napryamy">
                      {card.title}
                    </Card.Title>
                    <Card.Text style={{ wordWrap: 'break-word', fontSize: '16px', height: '150px', fontFamily: 'Helvetica Light', fontWeight: '400' }} className="card-text-napryamy">{card.description}</Card.Text>
                    <Card.Text style={{ marginBottom: '9px', fontSize: '25px', marginTop: '50px', fontFamily: 'Helvetica Light', fontWeight: '600' }} className="font-weight-bold-napryamy price-napryamy">{` ${card.price}`}</Card.Text>
                    <Card.Text style={{ fontSize: '13px', marginTop: '0px', fontFamily: 'Helvetica Light', fontWeight: '200' }} className="font-weight-bold-napryamy time-napryamy">{` ${card.duration}`}</Card.Text>
                  </Card.Body>
                </Card>
                {openCards[card.id - 1] && <LanguageSelector closeModal={() => closeLanguageModal(card.id)} />}
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div id="Napryamy" className="container">
          <BlobAnimationSt />
          <h2 className="h2m" style={{ zIndex: '50', position: 'relative', fontSize: '98px', textAlign: 'left', color: 'white', marginTop: '130px', width: '1200px' }}>{targetLanguage === 'Uk' ? title : entitle}</h2>
          <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '90px' }}>
            {(targetLanguage === 'Uk' ? cards : encards).map((card) => (
              <div key={card.id} className="card-napryamy" style={{ width: '265px', margin: '10px' }} onClick={() => toggleLanguageModal(card.id)}>
                <Card style={{ height: targetLanguage === 'Uk' ? '420px' : '450px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.07)', border: '1px solid white', borderRadius: '20px' }}>
                  <Card.Body className='ccs'>
                    <Card.Title style={{ wordWrap: 'break-word', fontSize: '29px', height: '90px', fontFamily: 'Helvetica Light', fontWeight: '600' }}> {card.title}</Card.Title>
                    <Card.Text style={{ wordWrap: 'break-word', fontSize: '15px' }}>
                      {card.description}
                    </Card.Text>
                    <Card.Text className="font-weight-bold" style={{ marginBottom: '3px', fontSize: '25px', marginTop: card.margin || '70px', fontFamily: 'Helvetica Light', fontWeight: '600', width: '100%' }}>
                      {` ${card.price}`}
                    </Card.Text>
                    <Card.Text className="font-weight-bold" style={{ fontSize: '13px', marginTop: '0px', fontFamily: 'Helvetica Ultra Light', fontWeight: '200' }}>
                      {` ${card.duration}`}
                    </Card.Text>
                  </Card.Body>
                </Card>
                {openCards[card.id - 1] && <LanguageSelector closeModal={() => closeLanguageModal(card.id)} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Napryamy;

