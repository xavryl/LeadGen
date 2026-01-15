import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="hero">
      
      {/* BACKGROUND VIDEO */}
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        /* This image shows instantly while the video loads or if it fails */
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      >
        <source src="/City.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to make text readable */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to MCL <br />
            <span className="hero-highlight">Lead Generation Services</span>
          </h1>
          
          <p className="hero-subtitle">
            Your All-in-One Partner for Investor Outreach, Lead Generation, and
            Scalable Business Growth. We help investors, buyers, and growing 
            businesses reach the right opportunities faster.
          </p>

          <div className="hero-stats">
             <div className="stat-item">
               <h3>200+</h3>
               <span>Projects</span>
             </div>
             <div className="stat-divider"></div>
             <div className="stat-item">
               <h3>85K+</h3>
               <span>Hours</span>
             </div>
          </div>

          <div className="hero-buttons">
            <button onClick={onOpenModal} className="btn-primary">
              Get a Free Sample – Bankruptcy Bulletin
            </button>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;