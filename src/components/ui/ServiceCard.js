import React, { useState } from 'react';
import '../../styles/services.css';

const ServiceCard = ({ service, onEnquireClick }) => {
  const { title, description, icon, image } = service;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleEnquireClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <div 
      className={`service-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleCardFlip}
    >
      <div className="service-card-inner">
        <div className="service-card-front">
          <div className="service-image-container">
            <img src={image} alt={title} className="service-image" />
            <div className="service-overlay"></div>
          </div>
          <div className="service-icon">{icon}</div>
          <h3 className="service-title">{title}</h3>
        </div>
        <div className="service-card-back">
          <div className="service-content">
            <div className="service-icon-back">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <button 
              className="service-btn" 
              onClick={handleEnquireClick}
              style={{ cursor: 'pointer' }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;