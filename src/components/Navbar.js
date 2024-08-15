import logo from '../images/logo.svg';
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { useLanguage } from './LanguageContext';
import logomenu from "../images/logomenu.svg";

const Header = ({ onNavbarLinkClick }) => {
  const { targetLanguage } = useLanguage();
  const navbarRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = (event) => {
     onNavbarLinkClick();
    if (onNavbarLinkClick) {
      const targetId = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Прокручиваем страницу с задержкой
        setTimeout(() => {
          const offsetPosition = targetElement.offsetTop - 50; // Смещаем на 50px выше
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 200); // Задержка в 400 миллисекунд
      }
      setExpanded(false); // Закрываем Navbar после клика
    }
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="bg-dark" ref={navbarRef}>
      <Container>
        <Navbar.Brand href="#main_p"><img alt='robots' src={logomenu} style={{width:'40px', height:'40px' }}/></Navbar.Brand>
        <Navbar.Toggle className="navbar sticky-top navbar-dark bg-light" placement="end" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav navosn">
          <Nav className="ms-auto navtxt">
            <Nav.Link className="text-light" href="#AboutUs" onClick={handleNavLinkClick}>{targetLanguage === 'Uk' ? 'Про нас' : 'About Us' }</Nav.Link>
            <Nav.Link className="text-light" href="#Napryamy" onClick={handleNavLinkClick}>{targetLanguage === 'Uk' ? 'Послуги' : 'Services' }</Nav.Link>
            <Nav.Link className="text-light" href="#Stages" onClick={handleNavLinkClick}>{targetLanguage === 'Uk' ? 'Етапи' : 'Stages' }</Nav.Link>
            <Nav.Link className="text-light" href="#Portfolio" onClick={handleNavLinkClick}>{targetLanguage === 'Uk' ? 'Проекти' : 'Projects' }</Nav.Link>
            <Nav.Link className="text-light" href="#FAQ" onClick={handleNavLinkClick}>FAQ</Nav.Link>
            <Nav.Link className="text-light" href="#contact" onClick={handleNavLinkClick}>{targetLanguage === 'Uk' ? 'Контакти' : 'Contacts' }</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
