import React, { useState } from 'react';
import '../../styles/testimonials.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonialBg from '../../images/bossbaby.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Wedding Client',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      text: 'Vidya Events transformed our wedding into a magical experience. The attention to detail and creativity exceeded our expectations! Every corner was beautifully decorated, and our guests couldn\'t stop complimenting the arrangements.',
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Birthday Celebration',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      text: 'We hired Vidya Events for my daughter\'s 5th birthday party, and they did an amazing job! The theme decoration was perfect, and they took care of everything. It was stress-free for us and a memorable day for our little one.',
    },
    {
      id: 3,
      name: 'Anjali Desai',
      role: 'Baby Shower',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'The baby shower decoration by Vidya Events was absolutely stunning! They understood exactly what we wanted and delivered beyond our expectations. Their creativity and professionalism made our day special.',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Corporate Event',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 5,
      text: 'We\'ve worked with Vidya Events for multiple corporate functions, and they never disappoint. Their team is professional, punctual, and incredibly creative. They transform ordinary venues into extraordinary spaces.',
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="testimonials-bg">
        <img src={testimonialBg} alt="Testimonials Background" className="testimonials-bg-image" />
        <div className="testimonials-overlay"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title text-white">Client Testimonials</h2>
        <p className="section-subtitle text-white">
          What our clients say about our services
        </p>
        
        <div className="testimonials-container">
          <div className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-author-image" 
                    />
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-author-name">{testimonial.name}</h4>
                      <p className="testimonial-author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-nav testimonial-prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <button className="testimonial-nav testimonial-next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;