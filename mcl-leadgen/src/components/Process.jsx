import React from 'react';
import { FaSearchDollar, FaPaperPlane, FaUserCheck, FaChartLine } from 'react-icons/fa';
// 1. IMPORT YOUR IMAGE
import cityBg from '../assets/city.png';
import './Process.css';

const steps = [
  {
    id: "01",
    icon: <FaSearchDollar />,
    title: "Data Sourcing",
    desc: "We identify high-value prospects using proprietary databases and rigorous manual verification to ensure 99% accuracy."
  },
  {
    id: "02",
    icon: <FaPaperPlane />,
    title: "Strategic Outreach",
    desc: "Our team crafts personalized, human-led messaging campaigns designed to bypass spam filters and engage decision-makers."
  },
  {
    id: "03",
    icon: <FaUserCheck />,
    title: "Lead Qualification",
    desc: "We filter responses, engage in initial dialogue, and only hand off warm, qualified leads ready for your sales team."
  },
  {
    id: "04",
    icon: <FaChartLine />,
    title: "Optimization",
    desc: "Continuous A/B testing of messaging and targeting parameters ensures your ROI improves month over month."
  }
];

const Process = () => {
  return (
    <section 
      id="process" 
      className="process-section"
      style={{
        /* LAYER 1: Navy Blue Overlay with 85% Opacity (15% Transparency)
           LAYER 2: The City Image
        */
        backgroundImage: `linear-gradient(rgba(19, 60, 85, 0.85), rgba(19, 60, 85, 0.85)), url(${cityBg})`
      }}
    >
      <div className="process-header">
        <span className="process-tag">How It Works</span>
        <h2 className="process-title">Our Proven Process</h2>
        <p className="process-subtitle">
          A streamlined 4-step workflow designed to convert cold data into closed deals.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.id} className="process-card">
            <div className="watermark">{step.id}</div>
            <div className="icon-box">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;