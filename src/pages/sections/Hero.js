import React from 'react';
import '../../styles/hero.css';

const Hero = ({ onEnquireClick }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          <span className="hero-title-line">Your Dream Event</span>
          <span className="hero-title-line">Delivered with Excellence</span>
        </h1>
        <p className="hero-subtitle">
          Transforming ordinary spaces into extraordinary experiences
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary btn-lg hero-btn" onClick={onEnquireClick}>
            Enquire Now
          </button>
          <a href="#services" className="btn btn-outline btn-lg hero-btn">
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