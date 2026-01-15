import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MCL Lead Generation Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;