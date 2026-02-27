import React, { useState, useEffect } from 'react';
import '../../styles/enquiry-modal.css';
import { FaTimes } from 'react-icons/fa';
import DirectConnect from './DirectConnect';
import emailjs from '@emailjs/browser';

const EnquiryModal = ({ onClose }) => {
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
  
  const [loading, setLoading] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS Configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.eventDate,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log('SUCCESS!', response.status, response.text);
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
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your enquiry. Please check your connection and try again.'
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Enquire Now</h2>
          <p className="modal-subtitle">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        {formStatus.submitted ? (
          <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
            {formStatus.message}
          </div>
        ) : (
          <>
            <DirectConnect />
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">Your Name *</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="modal-phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-eventType" className="form-label">Event Type</label>
                <select
                  id="modal-eventType"
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
                <label htmlFor="modal-eventDate" className="form-label">Event Date</label>
                <input
                  type="date"
                  id="modal-eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="modal-message" className="form-label">Your Message *</label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary modal-submit-btn" disabled={loading}>
              {loading ? <span className="spinner"></span> : null}
              {loading ? 'Sending...' : 'Send Enquiry'}
            </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;