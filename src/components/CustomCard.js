// CustomCard.js

import React from 'react';
import './OurTeam.css'; // Используем стили от OurTeam, чтобы сохранить единообразие
import { useLanguage } from './LanguageContext';

const CustomCard = ({ item, handleExpand, expandedId }) => {
  const isExternalLink = /^(https?:\/\/)/i.test(item.link);
  const { targetLanguage } = useLanguage();

  const handleClick = () => {
    if (isExternalLink) {
      window.open(item.link, '_blank');
    } else {
      handleExpand(item.id);
    }
  };

  const splitDescription = (description) => {
    return description.split('.').map((sentence, index) => (
      <p key={index} className="full-description-paragraph">{sentence.trim() && `${sentence.trim()}.`}</p>
    ));
  };

  return (
    <div className={`card-napryamy ${isExternalLink ? 'non-expandable' : ''}`} onClick={handleClick}>
      <div key={item.id} className={`team-member ${expandedId === item.id ? 'expanded' : ''}`}>
        <div className="photo">
          <img src={item.photo} alt={item.name} />
          <div className="info">
            <h3>{item.name}</h3>
            <p className="short-description">{item.role}</p><br/>
            <div className="full-description">
              {targetLanguage === 'Uk' ? (
                splitDescription(item.link)
              ) : (
                <p>
                  The internal table reservation system greatly simplifies the work of the administrator, representing an improved electronic magazine.<br/>
                  The system includes a plan of all tables with their location in the halls, which allows you to easily and efficiently manage reservations and guest accommodation.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
