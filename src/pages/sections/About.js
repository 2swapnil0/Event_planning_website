import React from 'react';
import '../../styles/about.css';
import aboutImage from '../../images/aboutus.jpeg';
import { FaAward, FaUsers, FaProjectDiagram, FaSmile } from 'react-icons/fa';

const About = ({ onEnquireClick }) => {
  const stats = [
    {
      id: 1,
      icon: <FaAward />,
      value: '5+',
      label: 'Years of Experience',
    },
    {
      id: 2,
      icon: <FaUsers />,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      value: '1000+',
      label: 'Events Completed',
    },
    {
      id: 4,
      icon: <FaSmile />,
      value: '100%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-container">
          <div className="about-image-container">
            <img src={aboutImage} alt="About Vidya Events" className="about-image" />
            <div className="about-image-shape"></div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">About Us</h2>
            <div className="about-subtitle">Transforming Spaces Since 2018</div>
            
            <p className="about-text">
              Welcome to Vidya Events, your premier event decoration company with over five years of excellence in the industry.
              Since our inception, we have been dedicated to transforming ordinary spaces into extraordinary experiences.
            </p>
            
            <p className="about-text">
              Our passion for creativity and attention to detail ensures that every event we touch becomes a memorable masterpiece.
              Whether it's a wedding, corporate gathering, birthday party, or any special occasion, Vidya Events brings your vision to life with impeccable style and sophistication.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Personalized Service</div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Creative Designs</div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Attention to Detail</div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Timely Execution</div>
              </div>
            </div>
            
            <button className="btn btn-primary about-btn" onClick={onEnquireClick}>Get in Touch</button>
          </div>
        </div>
        
        <div className="stats-container">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;