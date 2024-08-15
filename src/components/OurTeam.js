import React, { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop} from 'react-device-detect';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WaveContainer1 from './WaveContainer1';
import './OurTeam.css';
import blankph from '../images/blankph.png';
import { useLanguage } from './LanguageContext';
import BlobAnimationEnd from './BlobAnimationEnd';

const OurTeam = () => {
   const { targetLanguage } = useLanguage();
  const [teamMembers, setTeamMembers] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

 useEffect(() => {
  const fetchTeamData = async () => {
    try {
      const response = await fetch('https://monarch-entertainment.com.ua/api/team');
      const data = await response.json();

  
      // Разделяем мемберов на два массива по языку и загружаем изображения
      const enMembers = await Promise.all(
        data
          .filter((member) => member.language === "en")
          .map(async (member) => {
            const imgResponse = await fetch(`https://monarch-entertainment.com.ua/photo/${member.img}`);
            const imgData = await imgResponse.blob();
            const imgUrl = URL.createObjectURL(imgData);

            return {
              ...member,
              img: imgUrl,
            };
          })
      );

      const uaMembers = await Promise.all(
        data
          .filter((member) => member.language === "ua")
          .map(async (member) => {
            const imgResponse = await fetch(`https://monarch-entertainment.com.ua/photo/${member.img}`);
            const imgData = await imgResponse.blob();
            const imgUrl = URL.createObjectURL(imgData);

            return {
              ...member,
              img: imgUrl,
            };
          })
      );



      // Обновляем состояние
      setTeamMembers({
        en: enMembers,
        ua: uaMembers,
      });
    } catch (error) {
     
    }
  };

  fetchTeamData();
}, []);


   let settings;

 if (isMobile || isTablet || window.innerWidth <= 928) {
  settings = {
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
  settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: false,
    arrows: true,
    dots: false,
    autoplay:false,
    initialSlide: 0,
  };
}

  const renderDescription = (fullDescription) => {
    return fullDescription.map((desc, index) => {

       let isBold;
    if (targetLanguage === 'Uk') {
      isBold =
        desc.includes('Досвід роботи:') ||
        desc.includes('Курси:') ||
        desc.includes('Найсильніша навичка:') ||
        desc.includes('Цікаве:');
    } else {
      isBold = 
        desc.includes('Experience:') ||
        desc.includes('Courses:') ||
        desc.includes('The strongest skill:') ||
        desc.includes('Interesting:');
    }

      if (isBold) {
        const [title, items] = desc.split(/:(.+)/);

        if (items) {
         const itemList = items
        .split('.')
        .filter(item => item.trim() !== '') // фильтруем пустые строки
        .map((item, i) => <li key={i} style={{ fontSize: '12px' }}>{item.trim()}</li>);

          if (itemList.length >= 2) {
            return (
              <div key={index}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{title}:</p>
                <ul>{itemList}</ul>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{desc.split(':')[0]}:</p>
                <p style={{ fontSize: '12px' }}>{items.trim()}</p>
              </div>
            );
          }
        }
      }

      return (
        <p key={index} style={{ fontSize: '18px', fontWeight: isBold ? 'bold' : 'normal' }}>
          {desc}
        </p>
      );
    });
  };

  const handleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

 return (
  <div id='team' className="our-team-container">
  <BlobAnimationEnd/>
    <h1>{targetLanguage === 'Uk' ? 'Наша команда мрії' : 'Our dream team'}</h1>

    <Slider {...settings}>
    {targetLanguage === 'Uk' ? 
      teamMembers["ua"] && teamMembers["ua"].map((member) => (
        <div className="card-napryamy" >
        <div
          key={member.id}
          className={`team-member ${expandedId === member.id ? 'expanded' : ''}`}
          onClick={() => handleExpand(member.id)}
        >
          <div className="photo">
            <img src={member.img} alt={`${member.first_name} ${member.last_name}`} />
            <div className="info">
              <h3>{`${member.first_name} ${member.last_name}`}</h3>
              <p className="short-description">{member.role}</p>
              <div className="full-description">
                {renderDescription([
                  targetLanguage === 'Uk' ? `Досвід роботи: ${member.experience}` : `Experience: ${member.experience}`,
                  targetLanguage === 'Uk' ? `Курси: ${member.courses}` : `Courses: ${member.courses}`,
                  targetLanguage === 'Uk' ? `Найсильніша навичка: ${member.strongest_skill}` : `The strongest skill: ${member.strongest_skill}`,
                  targetLanguage === 'Uk' ? `Цікаве: ${member.interesting}` : `Interesting: ${member.interesting}`,
                ])}
              </div>
            </div>
          </div>
        </div>
        </div>
      )) : teamMembers["en"] && teamMembers["en"].map((member) => (
       <div className="card-napryamy" >
        <div
          key={member.id}
          className={`team-member ${expandedId === member.id ? 'expanded' : ''}`}
          onClick={() => handleExpand(member.id)}
        >
          <div className="photo">
            <img src={member.img} alt={`${member.first_name} ${member.last_name}`} />
            <div className="info">
              <h3>{`${member.first_name} ${member.last_name}`}</h3>
              <p className="short-description">{member.role}</p>
              <div className="full-description">
                {renderDescription([
                  targetLanguage === 'Uk' ? `Досвід роботи: ${member.experience}` : `Experience: ${member.experience}`,
                  targetLanguage === 'Uk' ? `Курси: ${member.courses}` : `Courses: ${member.courses}`,
                  targetLanguage === 'Uk' ? `Найсильніша навичка: ${member.strongest_skill}` : `The strongest skill: ${member.strongest_skill}`,
                  targetLanguage === 'Uk' ? `Цікаве: ${member.interesting}` : `Interesting: ${member.interesting}`,
                ])}
              </div>
            </div>
          </div>
        </div>
         </div>
      ))
    }
    </Slider>
    <WaveContainer1 />
  </div>
);
};

export default OurTeam;