import React, { useState } from 'react';
import '../../styles/services.css';

const ServiceCard = ({ service, onEnquireClick }) => {
  const { id, title, description, icon, image } = service;
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

  // Create a more descriptive alt text for better accessibility and SEO
  const imageAltText = `${title} - Vidya Events decoration service in Nerul, Navi Mumbai`;

  return (
    <article 
      className={`service-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleCardFlip}
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="service-card-inner">
        <div className="service-card-front">
          <div className="service-image-container">
            <img 
              src={image} 
              alt={imageAltText} 
              className="service-image"
              itemProp="image" 
              loading="lazy" 
            />
            <div className="service-overlay"></div>
          </div>
          <div className="service-icon">{icon}</div>
          <h3 className="service-title" itemProp="name">{title}</h3>
        </div>
        <div className="service-card-back">
          <div className="service-content">
            <div className="service-icon-back">{icon}</div>
            <h3 className="service-title" itemProp="name">{title}</h3>
            <p className="service-description" itemProp="description">{description}</p>
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
    </article>
  );
};

export default ServiceCard;