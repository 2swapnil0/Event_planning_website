import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';
import logo from '../../images/logo.png';
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="Vidya Events" className="footer-logo-img" />
                <span className="footer-logo-text">Vidya Events</span>
              </Link>
              <p className="footer-description">
                Your premier event decoration company with over five years of excellence in the industry.
                We transform ordinary spaces into extraordinary experiences.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/vidya_events?igsh=MXB4ZHFnbXcyNnNndg==" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <FaInstagram />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <FaWhatsapp />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <FaFacebookF />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="footer-link-item">
                  <a 
                    href="#services" 
                    className="footer-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                </li>
                <li className="footer-link-item">
                  <a 
                    href="#about" 
                    className="footer-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="footer-link-item">
                  <a 
                    href="#gallery" 
                    className="footer-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('gallery');
                    }}
                  >
                    Gallery
                  </a>
                </li>
                <li className="footer-link-item">
                  <a 
                    href="#testimonials" 
                    className="footer-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('testimonials');
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li className="footer-link-item">
                  <a 
                    href="#contact" 
                    className="footer-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-services">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Birthday Celebrations</a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Anniversary Parties</a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Baby Showers</a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Naming Ceremonies</a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Theme Decorations</a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-link">Haldi Ceremonies</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3 className="footer-title">Contact Info</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="footer-contact-text">
                    Bhagwan Niwas House No 1427 Room No 203, Near Shiv Sena Shaka, Shiravane Nerul Navi Mumbai
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="footer-contact-text">
                    <a href="tel:+918879741987">+91-8879741987</a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="footer-contact-text">
                    <a href="mailto:info.vidyaevents@gmail.com">info.vidyaevents@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} Vidya Events. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms-of-service" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;