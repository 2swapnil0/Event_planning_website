  import React, { useState, useEffect, useRef } from 'react';
  import axios from 'axios';
  import Event from '../images/home.jpeg';
  import Testimonial from '../images/bossbaby.jpg';
  import ABTUS from '../images/aboutus.jpeg';
  import Video1 from '../videos/video1.mp4'
  import Video2 from '../videos/video2.mp4'
  import Video3 from '../videos/video3.mp4'
  import Video4 from '../videos/video4.mp4'
  import Video5 from '../videos/video5.mp4'
  import Appbar from './appbar.js';
  import MultiActionAreaCard from './multicardservices.js'
  import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button, Modal, Box, Paper } from '@mui/material';
  import EnquiryNow from './enquirynow.js';
  import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
  import Carousel from 'react-material-ui-carousel'
  import './animation.css';





  function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      mobileNumber: '',
      message: ''
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    const toggleEnquiryModal = () => {
      setShowEnquiryModal(!showEnquiryModal);
    };
      
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const redirectToPage = (pageUrl) => {
      window.location.href = pageUrl;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4000/send-enquiry', formData)
        .then(() => {
          setShowSuccessPopup(true);
          setFormData({ fullName: '', email: '', mobileNumber: '', message: '' });
        })
        .catch((error) => {
          console.error('There was an error sending the enquiry!', error);
        });
    };

    const closeSuccessPopup = () => {
      setShowSuccessPopup(false);
    };

  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (hoveredVideo !== null) {
      videoRefs.current[hoveredVideo].pause();
    }
    videoRefs.current[index].play();
    setHoveredVideo(index);
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    setHoveredVideo(null);
  };

    return (
      <div>
        <div className="container">
          <Appbar hasImage={!scrolled} />
          <img src={Event} alt="Event" className="image" />
          <div className='textContainer'>
            <h2 className="text">Your Dream Event</h2>
            <h2 className="text">Delivered</h2>
            <button className="button" onClick={toggleEnquiryModal}>Enquiry Now</button>
          </div>
        </div>
        {/* {start of services section} */}
        <br id="services"></br>
        <div className='servicecontent'>
          <h1 className="titles">Services</h1>
          <MultiActionAreaCard />
          {/* {end of services section} */}
          {/* {start of aboutus section} */}
          <br id="aboutus" />
          <br />
          <div className='aboutContainer'>
            <div className='aboutimageContainer'>
              <img src={ABTUS} alt="About Us Image" className='aboutImage'  />
            </div>
            <div className='aboutText' >
              <h2 className="titles">About Us</h2>
              <p  className='aboutContent' >
                Welcome to Vidya Events, your premier event decoration company with over five years of excellence in the industry.
                Since our inception, we have been dedicated to transforming ordinary spaces into extraordinary experiences.
                Our passion for creativity and attention to detail ensures that every event we touch becomes a memorable masterpiece.
                Whether it’s a wedding, corporate gathering, birthday party, or any special occasion, Vidya Events brings your vision to life with impeccable style and sophistication.
                Trust us to elevate your event with our unparalleled expertise and personalized service.
                Discover the art of celebration with Vidya Events, where your dreams are our inspiration.
              </p>
             
              <div ></div>
            </div  >
          </div>
          <br id="videos"></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div >
            {/* {end of aboutus section} */}
            {/* {start of video section} */}
            <div  >
            <h2 className="titles">Videos</h2>
            <div className="videoContainer">
              <div onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                <video ref={(video) => (videoRefs.current[0] = video)} className="videoContent">
                  <source src={Video1} />
                </video>
              </div>
              <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                <video ref={(video) => (videoRefs.current[1] = video)} className="videoContent">
                  <source src={Video2} />
                </video>
              </div><div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                <video ref={(video) => (videoRefs.current[2] = video)}  className="videoContent">
                  <source src={Video3} />
                </video>
              </div><div onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                <video ref={(video) => (videoRefs.current[3] = video)}  className="videoContent">
                  <source src={Video4} />
                </video>
              </div><div onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)}>
                <video ref={(video) => (videoRefs.current[4] = video)} className="videoContent">
                  <source src={Video5} />
                </video>
                <br id="testimonial"></br>
              </div>
            </div>
            </div>
            {/* {end of video section} */}
            {/* {start of testimonial section} */} 
            <div className= 'tstmcontainer' >
            
              <img src={Testimonial} alt="Testimonial" className= 'tstmimage'/>
              <div className= 'gradientOverlay'></div>
              <div className= 'tstmContent'>

                <h2 className= 'tmttext'>Testimonials</h2>
                <Carousel
                  showArrows
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  interval={2000}
                >
                  <div className= 'carouselContent'>
                    <p>John Doe</p>
                    <p>Excellent service and beautiful decorations!</p>
                  </div>
                  <div className= 'carouselContent'>
                    <p>Jane Smith</p>
                    <p>A wonderful experience from start to finish.</p>
                  </div>
                  <div className= 'carouselContent'>
                    <p>Bob Johnson</p>
                    <p>Highly recommend their services!</p>
                  </div>
                </Carousel>
              </div>
            </div>
    
          {/* {end of testimonial section} */} 
          {/* {start of contactus section} */}  
      </div>
          <br id="contactus"/>
          <br />
          <br />
          <br />
          <h2 className="titles">Contact Us</h2>
          <div className="contactContainer" >
            <div className="contactDetails">
              <h3>Contact Details</h3>
              <p><a href="tel:+918879741987" className="contact-text">+91-8879741987</a></p>
              <p><a href="mailto:info.vidyaevents@gmail.com" className="contact-text">info.vidyaevents@gmail.com</a></p>
            </div>
            <div className="address">
              <h3>Address</h3>
              <p>Bhagwan Niwas House No 1427 Room No 203, Near Shiv Sena Shaka, Shiravane Nerul Navi Mumbai, Panvel City, Navi Mumbai, Maharashtra 400706</p>
            </div>
            <div className="businessHours">
              <h3>Business Hours</h3>
              <p>Mon - Sun : Open 24 hrs</p>
            </div>
          </div>
          {/* {end of contactus section} */}  
          {/* {start of contactform section} */}  
          <div className= 'contactForm'>
            <form onSubmit={handleSubmit}>
              <div className= 'formRow'>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className= 'input' />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className= 'input' />
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" className= 'input' />
              </div>
              <div className= 'formRow'>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className= 'textarea'></textarea>
              </div>
              <button type="submit" className= 'submitButton'>Submit</button>
            </form>
          </div>
        </div>
        {showEnquiryModal && <EnquiryNow onClose={toggleEnquiryModal} />}
        <Modal open={showSuccessPopup} onClose={closeSuccessPopup}>
          <Box className= 'modalBox'>
            <Typography variant="h6" component="h2">
              Enquiry Sent Successfully!
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Thank you for reaching out to us. We will get back to you shortly.
            </Typography>
            <Button onClick={closeSuccessPopup} className= 'button'>
              Close
            </Button>
          </Box>
              </Modal>

            {/* {end of contactform section} */}  
            {/* {start of footer section} */}  
            <br></br>
            <div className= 'footerContainer'>
            <div className="contactDetails">
            <h4>Useful Links</h4>
            <p onClick={() => redirectToPage('/privacy-policy')} className= 'contactText'>Privacy Policy</p>
            <p onClick={() => redirectToPage('/services')} className= 'contactText'>Services</p>
            <p onClick={() => scrollToSection('testimonial')} className= 'contactText'>Testimonials</p>
            <p onClick={() => scrollToSection('contactus')} className= 'contactText'>Contact Us</p>
            </div>
            <div className="contactDetails">
            <h3><br></br></h3>
            <p onClick={() => redirectToPage('/')} className= 'contactText'>Home</p>
            <p onClick={() => scrollToSection('aboutus')} className= 'contactText'>About Us</p>
            <p onClick={() => scrollToSection('videos')} className= 'contactText'>Videos</p>
            
            </div>
            <div className="address">
              <h4>Contact Info</h4>
              <p>Bhagwan Niwas House No 1427 Room No 203, Near Shiv Sena Shaka, Shiravane Nerul Navi Mumbai, Panvel City, Navi Mumbai, Maharashtra 400706</p>
              <p>
        Phone: +91-8879741987
      </p>
            </div>
            <div className="businessHours">
              <h4>Follow Us</h4>
              <p><a href="https://www.instagram.com/vidya_events?igsh=MXB4ZHFnbXcyNnNndg==" target="_blank" className= 'logo' ><FaInstagram /></a></p>
              <p><a href="https://www.whatsapp.com" className= 'logo'><FaWhatsapp /></a></p>
              <p><a href="tel:+918879741987" className= 'logo'><FaPhoneAlt /></a></p>
            </div>
          </div>
    {/* {end of footer section} */}
      </div>
      
    );
  }


  // const styles = {
    
    
  //   text: {
  //     fontFamily: 'Dancing Script',
  //     color: 'white',
  //     fontSize: '50px',
  //     trnsition: 'all .1s ease-in',
  //     animation: 'slide-up 0.5s ease-out forwards',
  //   },
    
  //   reviewContainer: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   review: {
  //     flex: '0 0 50%',
  //     padding: '10px',
  //     boxSizing: 'border-box',
  //   },
    
    
  //   logo:{
  //     color:'white',
  //     fontSize: '22px',
  //     transition:'color 0.3s',
  //     hover : 'color orange',
  //   },
    
  //   mapContainer: {
  //     marginTop: '50px',
  //     textAlign: 'center',
  //     marginLeft: '5%',
  //     marginRight: '5%',
  //   },
  //   flexContainer: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     marginLeft: '5%',
  //     marginRight: '5%',
  //   },
  //   flexItem: {
  //     width: '22%',
  //     textAlign: 'center',
  //   },
  //   heading: {
  //     marginBottom: '10px',
  //   },
  //   ul: {
  //     listStyleType: 'none',
  //     padding: 0,
  //     margin: 0,
  //   },
  //   listItem: {
  //     marginBottom: '5px',
  //   },
  //   contactInfo: {
  //     margin: '5px 0',
  //   },
  //   socialIcons: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //   },
  //   socialIcon: {
  //     marginRight: '5px',
  //   },
  //   buttonStyles: {
  //     padding: '10px 20px',
  //     backgroundColor: 'orange',
  //     color: 'white',
  //     border: 'none',
  //     borderRadius: '20px',
  //     cursor: 'pointer',
  //     fontSize: '15px',
  //     '&:hover': {
  //       backgroundColor: 'orange',
  //     },
  //   },
  // cardStyles: {
  //   width: 300,
  //   height: 400,
  //   margin: '0 10px 20px',
  //   transition: 'box-shadow 0.3s',
  //   boxShadow: 'none',
  //   borderRadius: '0px',
  //   '&:hover': {
  //     boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
  //   },
  // },
  //   containerStyles: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexWrap: 'wrap',
  // },
  //   imageStyles: {
  //     height: 220,
  //     width: 260,
  //     borderRadius: '20px',
  //     objectFit: 'cover',
  //     border: '4px solid white',
  //     margin: 'auto',
  //   },
  //   videoContainer:{
  //     // backgroundColor:'black',
  //     // width : '200px',
  //     // height : '400px',
  //     display: 'flex',
  //     justifyContent : 'center',
      
  //   },
  //   videoContent: {
  //     borderRadius : '10px',
  //     margin : '20px',
  //     // marginRight: '5px',
  //     // marginLeft: '20px',
  //   },
  //   footerContainer: {
  //     display: 'flex',
  //     textAlign: 'center',
  //     backgroundColor: 'black',
  //     color:'white',
  //     opacity: '0.8',
  //     borderTopLeftRadius: '10px',
  //     borderTopRightRadius: '10px',
  //   },
    
  // };
  export default Home;
