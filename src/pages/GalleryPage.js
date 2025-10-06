import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryImages } from '../data/gallery-images';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Lightbox from '../components/ui/Lightbox';
import '../styles/gallery-page.css';

const IMAGES_PER_PAGE = 6;

const GalleryPage = () => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxContent, setLightboxContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setDisplayedImages(galleryImages.slice(0, IMAGES_PER_PAGE));
  }, []);

  const loadMoreImages = useCallback(() => {
    const nextPage = currentPage + 1;
    const newImages = galleryImages.slice(0, nextPage * IMAGES_PER_PAGE);
    setDisplayedImages(newImages);
    setCurrentPage(nextPage);
  }, [currentPage]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 200) {
      return;
    }
    loadMoreImages();
  }, [loadMoreImages]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const openLightbox = (image) => {
    setLightboxContent(image);
  };

  const closeLightbox = () => {
    setLightboxContent(null);
  };

  return (
    <div className="gallery-page">
      <Navbar />
      <main>
        <section className="gallery-section section">
          <div className="container">
            <div className="gallery-header">
              <button onClick={() => navigate(-1)} className="back-button">← Back</button>
              <h2 className="section-title">Our Gallery</h2>
            </div>
            <p className="section-subtitle">
              A collection of our beautiful event decorations
            </p>
            <div className="gallery-grid">
              {displayedImages.map((image) => (
                <div key={image.id} className="polaroid-card" onClick={() => openLightbox(image)}>
                  <img src={image.src} alt={image.title} className="polaroid-image" />
                  <div className="polaroid-caption">{image.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {lightboxContent && <Lightbox content={lightboxContent} onClose={closeLightbox} />}
    </div>
  );
};

export default GalleryPage;