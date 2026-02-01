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

  // Closes the mobile menu
  const closeMobileMenu = () => setIsMobileActive(false);

  // Handles FAQ click
  const handleFAQClick = () => {
    onOpenFAQ();
    closeMobileMenu();
  };

  // --- FORCE SCROLL FUNCTION ---
  // This manually finds the section and scrolls to it
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor jump
    closeMobileMenu();  // Close mobile menu if open
    
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Section #${targetId} not found!`);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        
        {/* Logo - Scroll to Hero */}
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <img src="/newlogo.png" alt="MCL Logo" />
        </a>

        {/* Navigation Menu */}
        <div className={`nav-menu-wrapper ${isMobileActive ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li>
              <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            </li>
            <li>
              <a href="#pricing" className="nav-link" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
            </li>
            
            {/* Dropdown (Company) */}
            <li className="dropdown">
              <span className="nav-link dropdown-toggle" style={{cursor: 'pointer'}}>
                Company <span className="arrow">▼</span>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a href="#about" className="dropdown-item" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
                </li>
                <li>
                  <a href="#process" className="dropdown-item" onClick={(e) => handleNavClick(e, 'process')}>Our Process</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="dropdown-item" onClick={(e) => handleNavClick(e, 'why-choose-us')}>Why Choose Us</a>
                </li>
                <li>
                  <a href="#careers" className="dropdown-item" onClick={(e) => handleNavClick(e, 'careers')}>Careers</a>
                </li>
              </ul>
            </li>
            
            <li>
              <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, 'testimonials')}>Reviews</a>
            </li>

            {/* FAQ Button */}
            <li>
              <button className="nav-faq-btn" onClick={handleFAQClick}>
                FAQ
              </button>
            </li>
          </ul>

          {/* Contact Button */}
          <a href="#contact" className="btn-header" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
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