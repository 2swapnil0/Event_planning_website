import React from 'react';
import '../../styles/hero.css';

const Hero = ({ onEnquireClick }) => {
  return (
    <section className="hero" id="home" itemScope itemType="https://schema.org/WPHeader">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title" itemProp="headline">
          <span className="hero-title-line">Your Dream Event</span>
          <span className="hero-title-line">Delivered with Excellence</span>
        </h1>
        <p className="hero-subtitle" itemProp="description">
          Transforming ordinary spaces into extraordinary experiences in Nerul, Navi Mumbai
        </p>
        <p className="hero-description">
          Vidya Events specializes in balloon decoration, baby shower decoration, theme decoration, 
          naming ceremony, birthday decoration, anniversary decoration and more.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary btn-lg hero-btn" 
            onClick={onEnquireClick}
            aria-label="Enquire about our event decoration services"
          >
            Enquire Now
          </button>
          <a 
            href="#services" 
            className="btn btn-outline btn-lg hero-btn"
            aria-label="View our event decoration services"
          >
            Our Services
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <p className="scroll-text">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;