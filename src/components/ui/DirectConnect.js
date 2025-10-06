import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../../styles/direct-connect.css';

const DirectConnect = () => {
  return (
    <div className="direct-connect-prompt">
      <h4>Want a faster response?</h4>
      <p>Connect with us directly:</p>
      <div className="direct-connect-cards">
        <a href="tel:+918879741987" className="connect-card phone-card">
          <FaPhoneAlt />
          <span>Call Us Now</span>
        </a>
        <a href="https://wa.me/918879741987" target="_blank" rel="noopener noreferrer" className="connect-card whatsapp-card">
          <FaWhatsapp />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};

export default DirectConnect;