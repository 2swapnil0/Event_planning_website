import React, { useState } from 'react';
import BillTemplate from '../pages/BillTemplate.tsx'; // Adjust path if needed

const BillPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);
  const correctPassword = 'admin123'; // Set your password here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setVerified(true);
    } else {
      alert('Incorrect password');
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F8F9FA', // --off-white
    padding: '2rem',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF', // --white
    padding: '2.5rem',
    borderRadius: '16px', // --radius-lg
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // --shadow-lg
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    color: '#2C3E50', // --secondary
    fontSize: '1.5rem',
    fontWeight: 600,
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outlineColor: '#FF8F00',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#FF8F00',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={containerStyle}>
      {!verified ? (
        <div style={cardStyle}>
          <form onSubmit={handleSubmit}>
            <h2 style={headingStyle}>Enter Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Password"
              required
            />
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <BillTemplate />
      )}
    </div>
  );
};

export default BillPage;
