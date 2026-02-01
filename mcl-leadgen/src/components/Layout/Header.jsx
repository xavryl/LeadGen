import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenFAQ }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);

  // Handle scroll for transparent-to-solid background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes the mobile menu when a link is clicked
  const closeMobileMenu = () => setIsMobileActive(false);

  // Handles FAQ click: opens modal and closes mobile menu
  const handleFAQClick = () => {
    onOpenFAQ();
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        
        {/* Logo */}
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          <img src="/newlogo.png" alt="MCL Logo" />
        </a>

        {/* Navigation Menu */}
        <div className={`nav-menu-wrapper ${isMobileActive ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li>
              <a href="#hero" className="nav-link" onClick={closeMobileMenu}>Home</a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a>
            </li>
            <li>
              <a href="#pricing" className="nav-link" onClick={closeMobileMenu}>Pricing</a>
            </li>
            
            {/* Dropdown (Company) */}
            <li className="dropdown">
              <a href="#about" className="nav-link dropdown-toggle" onClick={closeMobileMenu}>
                Company <span className="arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#about" className="dropdown-item" onClick={closeMobileMenu}>About Us</a>
                </li>
                <li>
                  <a href="#process" className="dropdown-item" onClick={closeMobileMenu}>Our Process</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="dropdown-item" onClick={closeMobileMenu}>Why Choose Us</a>
                </li>
                <li>
                  <a href="#careers" className="dropdown-item" onClick={closeMobileMenu}>Careers</a>
                </li>
              </ul>
            </li>
            
            <li>
              <a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Reviews</a>
            </li>

            {/* NEW: FAQ Button */}
            <li>
              <button className="nav-faq-btn" onClick={handleFAQClick}>
                FAQ
              </button>
            </li>
          </ul>

          {/* Contact Button */}
          <a href="#contact" className="btn-header" onClick={closeMobileMenu}>Contact Us</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileActive(!isMobileActive)}>
          {isMobileActive ? '✕' : '☰'}
        </div>

      </div>
    </header>
  );
};

export default Header;