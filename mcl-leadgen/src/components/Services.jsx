import React, { useState } from 'react';
import { FaChartLine, FaFilter, FaEnvelopeOpenText, FaHeadset, FaRobot } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import './Services.css';

const servicesData = [
  {
    id: 0,
    title: "Lead Research",
    icon: <FaChartLine />,
    desc: "We verify every data point to give you direct access to decision-makers. Our lists are hand-curated to ensure 99% deliverability.",
    stat: "99% Data Accuracy",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" // Data Analysis
  },
  {
    id: 1,
    title: "Sales Funnels",
    icon: <FaFilter />,
    desc: "We architect the entire journey so you stop losing customers. From the first ad click to the final checkout, we optimize every step.",
    stat: "2x Conversion Rate",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" // Strategic Meeting
  },
  {
    id: 2,
    title: "Email Marketing",
    icon: <FaEnvelopeOpenText />,
    desc: "Stop landing in spam. We build high-deliverability campaigns that actually get opened, read, and replied to by your prospects.",
    stat: "40%+ Open Rate",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" // Digital Marketing/Tech
  },
  {
    id: 3,
    title: "Cold Calling",
    icon: <FaHeadset />,
    desc: "Native-level pros handling rejection so you handle the closing. We set the appointments; you sign the deals.",
    stat: "15+ Meetings/Week",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" // Call Center/Headset
  },
  {
    id: 4,
    title: "Virtual Assistants",
    icon: <FaRobot />,
    desc: "Scale faster. Hand off repetitive tasks to dedicated experts who learn your specific business workflow inside out.",
    stat: "24/7 Availability",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" // Collaborative/Teamwork
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        <div className="services-header">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Growth Engines</h2>
          <p className="section-subtitle">
            Select a service below to see how we help you scale.
          </p>
        </div>

        <div className="feature-deck">
          
          {/* MENU: Vertical List (Desktop) / Grid Buttons (Mobile) */}
          <div className="deck-menu">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`menu-item ${activeTab === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveTab(index)} // Desktop Hover
                onClick={() => setActiveTab(index)}      // Mobile Tap
              >
                <div className="menu-item-header">
                  <div className="menu-icon">{service.icon}</div>
                  <span className="menu-title">{service.title}</span>
                  <BsArrowRight className="menu-arrow desktop-only" />
                </div>
              </div>
            ))}
          </div>

          {/* PREVIEW AREA */}
          <div className="deck-preview">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className={`preview-card ${activeTab === index ? 'show' : ''}`}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="card-bg-image" 
                  style={{ backgroundImage: `url(${service.img})` }}
                ></div>
                
                {/* Content */}
                <div className="preview-content">
                  <div className="preview-badge">{service.stat}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  
                  <a 
                    href="https://exclusive.mclleads.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-deck"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;