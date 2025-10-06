import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/gallery-page.css';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderId = '1Mq0PMh4lFO4986OntpeL3-Pn1fG0JWaS';
        const webAppUrl = `https://script.google.com/macros/s/AKfycbxQOEuans93OpaClkx5hSE8gk4KdINO8ehvJD7182q3tKBVPZS3i3KDb9oQaIGOnoge/exec?folderId=${folderId}`;
        const response = await axios.get(webAppUrl);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-page">
      <Navbar />
      <main>
        <section className="gallery-section section">
          <div className="container">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">
              A collection of our beautiful event decorations
            </p>
            {loading ? (
              <div className="loader">Loading...</div>
            ) : (
              <div className="gallery-grid">
                {images.map((image) => (
                  <div key={image.id} className="gallery-item">
                    <img src={image.src} alt={image.title} className="gallery-image" />
                    <div className="gallery-item-overlay">
                      <h4 className="gallery-item-title">{image.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;