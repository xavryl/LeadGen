import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import the icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Copyright Text */}
        <p className="footer-text">
          &copy; {new Date().getFullYear()} MCL Lead Generation Services. All rights reserved.
        </p>

        {/* Social Icons (Below Text) */}
        <div className="footer-socials">
          <a 
            href="https://www.linkedin.com/company/mcl-lead-generation-services/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100084450334387" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;