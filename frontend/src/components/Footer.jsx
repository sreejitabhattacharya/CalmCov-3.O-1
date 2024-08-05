// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 CalmCove. All rights reserved.</p>
      <p>Follow us on:
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;