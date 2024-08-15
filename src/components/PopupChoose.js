import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Popup.css';
import translateText from './translateText';
import { useLanguage } from './LanguageContext';
import { MdSupportAgent } from "react-icons/md";
import { AiFillReconciliation } from "react-icons/ai";

const LanguageSelector = () => {
  const { handleLanguageChange } = useLanguage();
  const { targetLanguage } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [ukStyle, setUkStyle] = useState({
    background: 'linear-gradient(to bottom right, #FF8A1E, #FBF218)',
    WebkitBackgroundClip: 'text',
    display: 'inline-flex',
    transition: 'color 0.3s ease',
    color: 'gray', // Изменил цвет на серый
    fill:'gray',
    boxSizing: 'border-box', // Учтем padding и border при расчете ширины
    padding: '10px', // Добавил padding для отступов
    textDecoration:'none',
  });
  const [enStyle, setEnStyle] = useState({
    background: 'linear-gradient(to bottom right, #FF8A1E, #FBF218)',
    WebkitBackgroundClip: 'text',
    display: 'inline-flex',
    transition: 'color 0.3s ease',
    color: 'gray', // Изменил цвет на серый
    fill:'gray',
    boxSizing: 'border-box', // Учтем padding и border при расчете ширины
    padding: '10px', // Добавил padding для отступов
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

const handleChooseSelect = (choise) => {

    // Прокрутить к элементу с указанным идентификатором после выбора языка
    const elementId = choise === 'contactform' ? 'contactform' : 'contactform';
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
    
    closeModal(); // Закрыть модальное окно после выбора языка

  };

  useEffect(() => {
    if (selectedLanguage) {
      closeModal();
    }
  }, [selectedLanguage]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Language Selector Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1500,
            display:'flex',
            justifyContent:'center',
            width: '100vw',
          },
          content: {
            width: window.innerWidth <= 928 ? '85vw' :'50%',
            borderRadius: window.innerWidth <= 928 ?'16px':'20px',
            color: 'black',
            top:  window.innerWidth <= 928 ? '20%' : '50%',
           left: window.innerWidth <= 390 ? 'auto' : (window.innerWidth <= 928 ? 'auto' : '50%'),
            right: 'auto',
            bottom: 'auto',
            transform: window.innerWidth <= 928 ? '':'translate(-50%, -50%)',
            textAlign: 'center',
            padding: window.innerWidth <= 928 ? '5%':'5%',
            zIndex: 1501,
          },
        }}
      >
        <h2 className='contTyt'>{targetLanguage === 'Uk' ? 'Яким способом Вам зручніше буде заповнити бриф на розробку вашого продукту?':'Which way would be more convenient for you to fill out the brief for the development of your product?'}</h2>
        <div className='bt'>
      <a
          onMouseEnter={() => setUkStyle({ ...ukStyle, color: 'orange', fill: 'transparent' })}
          onMouseLeave={() => setUkStyle({ ...ukStyle, color: 'gray', fill: 'gray' })}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdCLc0q9rJoJqZf76MhMArTQXotLLvKgo96fPCScNL1zp0VUA/viewform?usp=sf_link"
          target="_blank" // Чтобы открыть ссылку в новой вкладке
          style={ukStyle}
          className='contactform'
        >
          <p>{targetLanguage === 'Uk' ? 'Мені буде зручно заповнити бриф самостійно' :'It will be convenient for me to fill out the brief myself'}</p>
          <div className='svgimg'>
            <MdSupportAgent/>
          </div>
        </a>
        <div
          onMouseEnter={() => setEnStyle({ ...enStyle, color: 'orange', fill: 'transparent' })}
          onMouseLeave={() => setEnStyle({ ...enStyle, color: 'gray', fill: 'gray' })}
          onClick={() => handleChooseSelect('contact')}
          style={enStyle}
          className='contact'
        >
          <p>{targetLanguage === 'Uk' ? 'Мені буде зручно заповнити бриф з допомогою команди':'It will be convenient for me to fill out the brief with the help of the team'}</p>
           <div className='svgimg'>
            <AiFillReconciliation />
            </div>
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default LanguageSelector;
