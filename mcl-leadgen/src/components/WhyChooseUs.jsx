import React from 'react';
import { FaUserShield, FaBullseye, FaStopwatch, FaHandshake } from 'react-icons/fa';
import './WhyChooseUs.css';

const reasons = [
  {
    id: 1,
    icon: <FaBullseye />,
    title: "Precision Targeting",
    desc: "We don't guess. We use multi-layer verification to ensure every lead matches your Ideal Customer Profile (ICP) with 99% accuracy."
  },
  {
    id: 2,
    icon: <FaUserShield />,
    title: "100% Human-Verified",
    desc: "Bots miss context. Our human experts manually verify every contact, ensuring your messages land in valid inboxes, not spam folders."
  },
  {
    id: 3,
    icon: <FaStopwatch />,
    title: "Rapid Scalability",
    desc: "Need 100 leads or 10,000? Our infrastructure scales instantly to meet your campaign demands without sacrificing quality."
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: "Partner Mentality",
    desc: "We aren't just a vendor. We treat your business like our own, offering transparent reporting and strategic pivot advice."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-section">
      <div className="why-container">
        
        {/* HEADER */}
        <div className="why-header">
          <span className="why-tag">The MCL Difference</span>
          <h2 className="why-title">Why Industry Leaders Trust Us</h2>
          <p className="why-subtitle">
            In a market flooded with automated tools and outdated lists, we deliver 
            the one thing that matters: <span className="highlight-text">Relevance.</span>
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="why-grid">
          {reasons.map((item) => (
            <div key={item.id} className="why-card">
              <div className="icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              
              {/* Hover Effect: Bottom Gold Line */}
              <div className="hover-bar"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;