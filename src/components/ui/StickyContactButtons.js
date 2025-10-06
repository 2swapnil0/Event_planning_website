import React from 'react';
import '../../styles/sticky-contact-buttons.css';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const StickyContactButtons = () => {
  return (
    <div className="sticky-contact-buttons">
      <a href="tel:+918879741987" className="sticky-btn phone-btn" aria-label="Call Us">
        <FaPhoneAlt />
      </a>
      <a href="https://wa.me/918879741987" target="_blank" rel="noopener noreferrer" className="sticky-btn whatsapp-btn" aria-label="WhatsApp Us">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/vidya_events?igsh=MXB4ZHFnbXcyNnNndg==" target="_blank" rel="noopener noreferrer" className="sticky-btn instagram-btn" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default StickyContactButtons;