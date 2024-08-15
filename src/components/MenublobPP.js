import React, { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import logomenu from "../images/logomenu.svg";

export default function MenublobPP({onMenuPageChange }) {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const { targetLanguage } = useLanguage();

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  const menuItems = [
    { id: "AboutUs", text: targetLanguage === "Uk" ? "Про нас" : "About Us" },
    { id: "Napryamy", text: targetLanguage === "Uk" ? "Послуги" : "Services" },
    { id: "Stages", text: targetLanguage === "Uk" ? "Етапи" : "Stages" },
    { id: "Portfolio", text: targetLanguage === "Uk" ? "Проекти" : "Projects" },
    { id: "FAQ", text: "FAQ" },
    { id: "contact", text: targetLanguage === "Uk" ? "Контакти" : "Contacts" },
  ];

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 180 : 0,
        height: open ? "fit-content" : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate("li", open ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 }, {
      duration: 0.2,
      delay: open ? staggerList : 0,
    });
  }, [open]);

  const handleMenuItemClick = (id) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Добавляем небольшую задержку перед прокруткой, чтобы дать время для анимации закрытия меню
  };

  // Обработчик нажатия на пункт меню
  const handleMenuPageChange = (id) => {
 
    onMenuPageChange(); // Вызываем функцию для изменения страницы
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Прокручиваем страницу к целевому элементу с задержкой
      setTimeout(() => {
        const offsetPosition = targetElement.offsetTop - 50; // Смещаем на 50px выше
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 200); // Задержка в 200 миллисекунд
    }
  };

  return (
    <div className="menublob" ref={scope} style={{ marginRight: '0px', position:'fixed', right:'60px'}}>
      <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        <img className="imgforburger" alt="robots" src={logomenu} />
      </motion.button>
      <ul className="ulc">
        {menuItems.map((item, index) => (
          <motion.li className="lic" key={index}>
            {/* Добавляем обработчик onClick для каждого пункта меню */}
            <a className="text-light" href={`#${item.id}`} onClick={() => handleMenuPageChange(item.id)}>
              {item.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
