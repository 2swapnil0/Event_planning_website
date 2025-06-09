import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../styles/navbar.css';

const Navbar = ({ onEnquireClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Toggle body scroll lock
    if (newIsOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Ensure menu-open class is removed when component unmounts
      document.body.classList.remove('menu-open');
    };
  }, []);

  // Scroll to section function
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
      closeMenu();
    }
  };

  // Handle enquiry button click
  const handleEnquireClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Vidya Events" className="logo-img" />
          <span className="logo-text">Vidya Events</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a 
              href="#services" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#gallery" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
            >
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#testimonials" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
            >
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
          <li className="nav-item nav-item-cta">
            <a 
              href="#enquiry" 
              className="nav-link nav-cta" 
              onClick={handleEnquireClick}
            >
              Enquire Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;