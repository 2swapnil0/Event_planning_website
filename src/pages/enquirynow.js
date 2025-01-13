import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, Button } from '@mui/material';

const EnquiryNow = ({ onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/send-enquiry', formData)
      .then(() => {
        setShowSuccessPopup(true);

        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: '',
        });
        setModalOpen(false);
      })
      .catch((error) => {
        console.error('There was an error sending the enquiry!', error);
      });
  };

  const handleCloseModal = () => {
    onClose();
    setModalOpen(false);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <h2 style={styles.heading}>Send Enquiry</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
              <label style={styles.label}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <label style={styles.label}>Mobile Number:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <label style={styles.label}>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      )}
      <Modal open={showSuccessPopup} onClose={closeSuccessPopup}>
        <Box sx={styles.modalBox}>
          <Typography variant="h6" component="h2">
            Enquiry Sent Successfully!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Thank you for reaching out to us. We will get back to you shortly.
          </Typography>
          <Button onClick={closeSuccessPopup} sx={styles.button}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'orange',
    },
  },
  heading: {
    margin: '0 0 20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EnquiryNow;
