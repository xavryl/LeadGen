import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../../assets/newlogo.png'; 
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 50px, change header style
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { title: "Services", href: "#services" },
    { title: "About", href: "#about" },
    { title: "Process", href: "#process" },
    { title: "Benefits", href: "#benefits" },
    // "Join Us" and "Newsletter" kept simple
    { title: "Join Us", href: "#join" }, 
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <nav className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="#" onClick={closeMenu}>
            <img src={logoImg} alt="MCL Logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Call to Action Button (Mobile & Desktop) */}
          <div className="header-cta">
             <a href="#contact" className="btn-header" onClick={closeMenu}>
               Get a Quote
             </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;