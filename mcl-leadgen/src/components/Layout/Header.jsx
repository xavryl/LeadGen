import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        
        {/* LOGO SECTION */}
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          {/* UPDATED LOGO PATH BELOW: */}
          <img src="/newlogo.png" alt="MCL Generation" />
        </a>

        {/* MOBILE TOGGLE */}
        <div className="mobile-toggle" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVIGATION */}
        <div className={`nav-menu-wrapper ${click ? 'active' : ''}`}>
          
          <ul className="nav-menu">
            <li><a href="#hero" className="nav-link" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#process" className="nav-link" onClick={closeMobileMenu}>Process</a></li>
            
            <li>
              <a href="#why-choose-us" className="nav-link" onClick={closeMobileMenu}>Benefits</a>
            </li>

            <li><a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#join" className="nav-link" onClick={closeMobileMenu}>Careers</a></li>
          </ul>

          <a href="#contact" className="btn-header" onClick={closeMobileMenu}>
            Get a Quote
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;