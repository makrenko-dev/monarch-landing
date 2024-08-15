import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Popup.css';
import { useLanguage } from './LanguageContext';

const LanguageSelector = ({ onLanguageSelected }) => {
  const { handleLanguageChange } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [ukStyle, setUkStyle] = useState({
    background: 'linear-gradient(to bottom right, #FF8A1E, #FBF218)',
    WebkitBackgroundClip: 'text',
    display: 'inline-flex',
    transition: 'color 0.3s ease',
    color: 'gray',
    boxSizing: 'border-box',
    padding: '10px',
  });
  const [enStyle, setEnStyle] = useState({
    background: 'linear-gradient(to bottom right, #FF8A1E, #FBF218)',
    WebkitBackgroundClip: 'text',
    display: 'inline-flex',
    transition: 'color 0.3s ease',
    color: 'gray',
    boxSizing: 'border-box',
    padding: '10px',
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    handleLanguageChange(language);
    onLanguageSelected();
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
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1500,
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
          },
          content: {
            width: window.innerWidth <= 928 ? '85vw' : '60%',
            borderRadius: window.innerWidth <= 928 ? '16px' : '20px',
            color: 'black',
            top: window.innerWidth <= 928 ? '25%' : '50%',
            left: window.innerWidth <= 390 ? 'auto' : (window.innerWidth <= 928 ? 'auto' : '50%'),
            right: 'auto',
            bottom: 'auto',
            transform: window.innerWidth <= 928 ? '' : 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: window.innerWidth <= 928 ? '5%' : '5%',
            zIndex: 1501,
          },
        }}
      >
        <h2>Оберіть мову</h2>
        <div className='bt'>
          <div
            onMouseEnter={() => setUkStyle({ ...ukStyle, color: 'transparent' })}
            onMouseLeave={() => setUkStyle({ ...ukStyle, color: 'gray' })}
            onClick={() => handleLanguageSelect('Uk')}
            style={ukStyle}
            className='uk'
          >
            <p>Uk</p>
            Наша <br/>рідненька
          </div>
          <div
            onMouseEnter={() => setEnStyle({ ...enStyle, color: 'transparent' })}
            onMouseLeave={() => setEnStyle({ ...enStyle, color: 'gray' })}
            onClick={() => handleLanguageSelect('En')}
            style={enStyle}
            className='en'
          >
            <p>En</p>
            <span>Англійська</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LanguageSelector;
