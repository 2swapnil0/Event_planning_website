import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import EnquiryModal from '../components/ui/EnquiryModal';

const HomePage = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  
  const toggleEnquiryModal = () => {
    setShowEnquiryModal(!showEnquiryModal);
  };

  return (
    <div className="home-page">
      <Navbar onEnquireClick={toggleEnquiryModal} />
      
      <main>
        <Hero onEnquireClick={toggleEnquiryModal} />
        <Services onEnquireClick={toggleEnquiryModal} />
        <About onEnquireClick={toggleEnquiryModal} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {showEnquiryModal && <EnquiryModal onClose={toggleEnquiryModal} />}
    </div>
  );
};

export default HomePage;