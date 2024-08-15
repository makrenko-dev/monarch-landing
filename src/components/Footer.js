import React from 'react';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Footer.css';
import { useLanguage } from './LanguageContext';

const Footer = ({ onPrivacyPolicyClick, onTermsOfUseClick }) => { // Добавляем пропс для обработчика события нажатия на "Умови користування"
  const { targetLanguage } = useLanguage();
  return (
    <footer id="contact" style={{zIndex:'1500',position:'relative', backgroundColor: '#282828', borderTop:'2px solid rgb(255, 255, 255, 0.4)'}} className="text-white p-3">
      <div className="containertt">
        <div className="row">
          <div className="col-md-12">
             {window.innerWidth <= 928 ? ( <h1 style={{ fontSize:'40px',marginBottom:'7px',marginTop:'20px', fontFamily: 'Kharkiv Tone, sans-serif' }}>{targetLanguage === 'Uk' ? 'Наші контакти' : 'Our contacts' }</h1>):(<h1 style={{ fontSize:'80px',marginTop:'0px', fontFamily: 'Kharkiv Tone, sans-serif' }}>{targetLanguage === 'Uk' ? 'Наші контакти' : 'Our contacts' }</h1>)}
          </div>
          <div style={{ marginTop:'30px',fontSize:'25px', paddingTop:'25px',fontFamily: 'Helvetica Light', fontWeight:'200', alignItems:'flex-start' }} className="col-md-4">
            <p style={{ paddingTop:'0px',fontSize:'18px',fontFamily: 'Helvetica  Light', fontWeight:'400', letterSpacing:'2px',marginBottom:'20px',marginTop:'0px'}}>{targetLanguage === 'Uk' ? `Веб-рішення з професійним підходом для Ваших проектів. Розробка, підтримка та оптимізація під ключ – все для вашого бізнесу.` : 'Web solutions with a professional approach for your projects. Turnkey development, support and optimization - everything for your business.' }</p>
          </div>
          <div className="col-md-4"></div>
          <div style={{ marginTop:'30px',display:'flex', flexDirection:'column', alignItems: window.innerWidth <= 928 ? 'flex-start' : 'flex-end'  }} className="col-md-4 text-md-start">
           {window.innerWidth <= 928 ? (
            <>
          <p style={{ fontSize: '30px', marginBottom: '0px', fontFamily: 'Helvetica Light', fontWeight: '400' }}>
            <a href="tel:+380959481672" style={{ textDecoration: 'none', color: 'inherit' }}>+380 95 948 16 72</a>
            <br />
          </p>
          <p style={{ marginBottom: '0px', fontFamily: 'Helvetica Light', fontWeight: '400', fontSize:'17px' }}>
            <a href="mailto:monarch.it.entertainment@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>monarch.it.entertainment@gmail.com</a>
          </p>
          <br />
        </>
      ) : (
        <>
          <p style={{ fontSize: '40px', marginBottom: '0px', fontFamily: 'Helvetica Light', fontWeight: '400' }}>
            <a href="tel:+380959481672" style={{ textDecoration: 'none', color: 'inherit' }}>+380 95 948 16 72</a>
            <br />
          </p>
          <p style={{ marginBottom: '0px', fontFamily: 'Helvetica Light', fontWeight: '400' }}>
            <a href="mailto:monarch.it.entertainment@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>monarch.it.entertainment@gmail.com</a>
          </p>
          <br />
        </>)}
            <div style={{display:'flex', flexDirection:'row'}}>
            {/* Добавление иконок Instagram и Telegram из библиотеки react-icons */}
            <IconContext.Provider value={{ color: 'white', size: '1.9em', style: { marginRight: '10px' } }}>
              <a href="https://www.instagram.com/keycom_translate?igsh=MXhzcHF4MWk5cmt0" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://t.me/Monarch_Ent" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </IconContext.Provider>
            </div>
          </div>
          <div className="col-md-12 text-md-center mx-auto" style={{paddingTop:'20px'}}>
            {window.innerWidth <= 928 ? ( <div style={{ marginTop:'30px', display:'inline-flex',fontFamily: 'Helvetica Light', fontWeight:'400'}}>
              <h5 onClick={onPrivacyPolicyClick} style={{fontSize:'15px', paddingTop:'0px', marginRight:'30px', color:'#7D7D7D',textDecoration:'underline'}}>{targetLanguage === 'Uk' ? 'Політика конфіденційності' : 'Privacy Policy' } </h5>
              <h5 onClick={onTermsOfUseClick} style={{fontSize:'15px', paddingTop:'0px', color:'#7D7D7D',textDecoration:'underline'}}>{targetLanguage === 'Uk' ? 'Умови користування' : 'Terms of use' } </h5> {/* Добавляем обработчик события onClick */}
            </div>):(<div style={{ marginTop:'10px', display:'inline-flex',fontFamily: 'Helvetica Light', fontWeight:'400'}}>
              <h5 onClick={onPrivacyPolicyClick} style={{fontSize:'15px', paddingTop:'0px', marginRight:'30px', color:'#7D7D7D',textDecoration:'underline'}}>{targetLanguage === 'Uk' ? 'Політика конфіденційності' : 'Privacy Policy' } </h5>
              <h5 onClick={onTermsOfUseClick} style={{fontSize:'15px', paddingTop:'0px', color:'#7D7D7D',textDecoration:'underline'}}>{targetLanguage === 'Uk' ? 'Умови користування' : 'Terms of use' } </h5> {/* Добавляем обработчик события onClick */}
            </div>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


