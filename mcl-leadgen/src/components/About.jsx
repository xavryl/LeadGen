import React from 'react';
import { FaUserTie, FaCheckDouble, FaAward, FaChartLine } from 'react-icons/fa';
import newWomanImg from '../assets/newwoman.png'; 
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      
      {/* BUBBLE BACKGROUND ANIMATION */}
      <div className="bubbles-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="about-container">
        
        {/* LEFT SIDE: Visuals (Clean Image Now) */}
        <div className="about-visual">
          <div className="img-backdrop"></div>
          <img 
            src={newWomanImg} 
            alt="MCL Leadership" 
            className="about-main-img" 
          />
          <div className="dot-pattern"></div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="about-content">
          <div className="content-header">
            <span className="about-tag">About Us</span>
            <h2 className="about-title">
              We Don't Just Find Leads. <br />
              <span className="highlight">We Find Revenue.</span>
            </h2>
            <p className="about-desc">
              MCL Lead Generation Services is your strategic partner in scaling operations. 
              We bridge the gap between investment firms and high-value opportunities through 
              rigorous data verification and human-led outreach.
            </p>
          </div>

          <div className="about-grid">
            <div className="grid-item">
              <FaUserTie className="grid-icon" />
              <div>
                <h4>Expert Staff</h4>
                <p>Top-rated professionals.</p>
              </div>
            </div>
            <div className="grid-item">
              <FaCheckDouble className="grid-icon" />
              <div>
                <h4>99% Verified</h4>
                <p>Zero bounce rates.</p>
              </div>
            </div>
            <div className="grid-item">
              <FaChartLine className="grid-icon" />
              <div>
                <h4>Scalable</h4>
                <p>Grow without friction.</p>
              </div>
            </div>
            <div className="grid-item">
              <FaAward className="grid-icon" />
              <div>
                <h4>Top Rated</h4>
                <p>100% Job Success.</p>
              </div>
            </div>
          </div>

          {/* ACTIONS AREA: Button + Stats Badge */}
          <div className="about-actions">
            <a href="#contact" className="btn-about-primary">Meet The Team</a>
            
            {/* STAT MOVED HERE */}
            <div className="stat-badge">
              <div className="badge-icon"><FaAward /></div>
              <div className="badge-info">
                <span className="badge-number">85k+</span>
                <span className="badge-label">Hours on Upwork</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;