import React, { useEffect } from 'react';
import '../../styles/lightbox.css';

const Lightbox = ({ content, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!content) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={content.src} 
          alt={content.title} 
          className="lightbox-image" 
        />
        <h3 className="lightbox-title">{content.title}</h3>
        <button className="lightbox-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Lightbox;