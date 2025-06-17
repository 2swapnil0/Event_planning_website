import React, { useState } from 'react';
import '../../styles/contact.css';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaInstagram, 
  FaWhatsapp, 
  FaFacebookF 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your enquiry! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
    
    // In a real application, you would send the form data to your backend
    // axios.post('http://localhost:4000/send-enquiry', formData)
    //   .then(() => {
    //     setFormStatus({
    //       submitted: true,
    //       success: true,
    //       message: 'Thank you for your enquiry! We will get back to you soon.'
    //     });
    //     setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
    //   })
    //   .catch((error) => {
    //     setFormStatus({
    //       submitted: true,
    //       success: false,
    //       message: 'There was an error sending your enquiry. Please try again.'
    //     });
    //   });
  };

  return (
    <section id="contact" className="contact-section section" itemScope itemType="https://schema.org/ContactPage">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Contact us for any enquiries or to book our services
        </p>
        
        <div className="contact-container">
          <div className="contact-info" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Vidya Events" />
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-content" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <h4>Our Location</h4>
                <p>
                  <span itemProp="streetAddress">Bhagwan Niwas House No 1427 Room No 203, Near Shiv Sena Shaka, Shiravane</span>, 
                  <span itemProp="addressLocality">Nerul Navi Mumbai</span>, 
                  <span itemProp="addressRegion">Maharashtra</span> 
                  <span itemProp="postalCode">400706</span>, 
                  <span itemProp="addressCountry">India</span>
                </p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-info-content">
                <h4>Phone Number</h4>
                <p><a href="tel:+918879741987" itemProp="telephone">+91-8879741987</a></p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-content">
                <h4>Email Address</h4>
                <p><a href="mailto:info.vidyaevents@gmail.com" itemProp="email">info.vidyaevents@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaClock />
              </div>
              <div className="contact-info-content">
                <h4>Business Hours</h4>
                <p itemProp="openingHours" content="Mo-Su 00:00-24:00">Monday - Sunday: Open 24 hours</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/vidya_events?igsh=MXB4ZHFnbXcyNnNndg==" target="_blank" rel="noopener noreferrer" className="social-icon" itemProp="sameAs">
                  <FaInstagram aria-label="Instagram" />
                </a>
                <a href="https://wa.me/918879741987" target="_blank" rel="noopener noreferrer" className="social-icon" itemProp="sameAs">
                  <FaWhatsapp aria-label="WhatsApp" />
                </a>
                <a href="https://www.facebook.com/vidyaevents" target="_blank" rel="noopener noreferrer" className="social-icon" itemProp="sameAs">
                  <FaFacebookF aria-label="Facebook" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <meta itemProp="potentialAction" itemScope itemType="https://schema.org/CommunicateAction" />
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                  aria-required="true"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                    aria-required="true"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                    aria-required="true"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventType" className="form-label">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Naming Ceremony">Naming Ceremony</option>
                    <option value="Haldi Ceremony">Haldi Ceremony</option>
                    <option value="Theme Decoration">Theme Decoration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventDate" className="form-label">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  required
                  aria-required="true"
                  placeholder="Tell us about your event and requirements"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary contact-submit-btn" aria-label="Submit contact form">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;