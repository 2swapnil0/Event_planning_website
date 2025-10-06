import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../../data/gallery-images';
import '../../styles/gallery.css';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';
import Lightbox from '../../components/ui/Lightbox';

// Import videos
import Video1 from '../../videos/video1.mp4';
import Video2 from '../../videos/video2.mp4';
import Video3 from '../../videos/video3.mp4';
import Video4 from '../../videos/video4.mp4';
import Video5 from '../../videos/video5.mp4';

// Import placeholder images
import birthdayImg from '../../images/birthday_services.jpg';
import anniversaryImg from '../../images/anniversary.jpg';
import babyShowerImg from '../../images/babyshower.JPG';
import namingImg from '../../images/naming.jpg';
import themeImg from '../../images/theme.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);
  
  const videoRefs = useRef([]);
  
  const videos = [
    { id: 1, src: Video1, thumbnail: birthdayImg, title: 'Birthday Celebration' },
    { id: 2, src: Video2, thumbnail: anniversaryImg, title: 'Anniversary Party' },
    { id: 3, src: Video3, thumbnail: babyShowerImg, title: 'Baby Shower' },
    { id: 4, src: Video4, thumbnail: namingImg, title: 'Naming Ceremony' },
    { id: 5, src: Video5, thumbnail: themeImg, title: 'Theme Decoration' },
  ];

  const homepageImages = galleryImages.slice(0, 6);
  
  const handleVideoPlay = (index) => {
    if (activeVideo === index) {
      if (isPlaying) {
        videoRefs.current[index].pause();
        setIsPlaying(false);
      } else {
        videoRefs.current[index].play();
        setIsPlaying(true);
      }
    } else {
      if (activeVideo !== null) {
        videoRefs.current[activeVideo].pause();
      }
      setActiveVideo(index);
      videoRefs.current[index].play();
      setIsPlaying(true);
    }
  };
  
  const openLightbox = (content) => {
    setLightboxContent(content);
  };
  
  const closeLightbox = () => {
    setLightboxContent(null);
  };

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">
          Browse through our collection of event decorations and setups
        </p>
        
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
          <button
            className={`gallery-tab ${activeTab === 'images' ? 'active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            Images
          </button>
        </div>
        
        {activeTab === 'videos' && (
          <div className="gallery-videos">
            {videos.map((video, index) => (
              <div key={video.id} className="video-item">
                <div className="video-container">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.src}
                    poster={video.thumbnail}
                    className="gallery-video"
                    onClick={() => handleVideoPlay(index)}
                  />
                  <div className="video-overlay">
                    <button
                      className="video-play-btn"
                      onClick={() => handleVideoPlay(index)}
                    >
                      {activeVideo === index && isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button
                      className="video-expand-btn"
                      onClick={() => openLightbox(video)}
                    >
                      <FaExpand />
                    </button>
                  </div>
                </div>
                <h4 className="video-title">{video.title}</h4>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'images' && (
          <div className="gallery-images">
            {homepageImages.map((image) => (
              <div
                key={image.id}
                className="image-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="image-overlay">
                  <h4 className="image-title">{image.title}</h4>
                  <button className="image-expand-btn">
                    <FaExpand />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="show-more-container">
          <Link to="/gallery" className="btn btn-primary">
            Show More
          </Link>
        </div>
      </div>
      
      {lightboxContent && <Lightbox content={lightboxContent} onClose={closeLightbox} />}
    </section>
  );
};

export default Gallery;