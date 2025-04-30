import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #007bff, #6c757d)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#007bff',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to iNoteBook! This is a simple and secure platform where you can
          create, manage, and organize your notes effectively. Our goal is to
          provide you with a seamless experience to keep your thoughts and ideas
          in one place.
        </p>
        <a
          href="/"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default About;
