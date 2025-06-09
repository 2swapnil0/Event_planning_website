import React from 'react';
import '../../styles/services.css';
import { FaBirthdayCake, FaRing, FaBaby, FaChild, FaPalette, FaLeaf } from 'react-icons/fa';
import ServiceCard from '../../components/ui/ServiceCard';

// Import service images
import birthdayImg from '../../images/birthday_services.jpg';
import anniversaryImg from '../../images/anniversary.jpg';
import babyShowerImg from '../../images/babyshower.JPG';
import namingImg from '../../images/naming.jpg';
import themeImg from '../../images/theme.jpg';
import haldiImg from '../../images/haldi.jpg';

const Services = ({ onEnquireClick }) => {
  const services = [
    {
      id: 1,
      title: 'Birthday Celebrations',
      description: 'Make your special day unforgettable with our creative and personalized birthday decoration services.',
      icon: <FaBirthdayCake />,
      image: birthdayImg,
    },
    {
      id: 2,
      title: 'Anniversary Parties',
      description: 'Celebrate your love story with elegant and romantic anniversary decorations tailored to your style.',
      icon: <FaRing />,
      image: anniversaryImg,
    },
    {
      id: 3,
      title: 'Baby Showers',
      description: 'Welcome your bundle of joy with our charming and customized baby shower decoration services.',
      icon: <FaBaby />,
      image: babyShowerImg,
    },
    {
      id: 4,
      title: 'Naming Ceremonies',
      description: 'Mark this significant milestone with beautiful decorations that reflect the importance of the occasion.',
      icon: <FaChild />,
      image: namingImg,
    },
    {
      id: 5,
      title: 'Theme Decorations',
      description: 'Transform your event with our creative theme-based decorations that bring your vision to life.',
      icon: <FaPalette />,
      image: themeImg,
    },
    {
      id: 6,
      title: 'Haldi Ceremonies',
      description: 'Add vibrant colors and traditional elements to your Haldi ceremony with our specialized decorations.',
      icon: <FaLeaf />,
      image: haldiImg,
    },
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a wide range of event decoration services to make your special occasions memorable
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onEnquireClick={onEnquireClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;