import React from 'react';
import { FaRocket, FaTrophy, FaLaptopHouse, FaArrowRight } from 'react-icons/fa';
import './Careers.css';

const highlights = [
  {
    id: 1,
    icon: <FaRocket />,
    title: "Growth Opportunities",
    desc: "Advance your career with unlimited growth potential in a rapidly expanding company."
  },
  {
    id: 2,
    icon: <FaTrophy />,
    title: "Top-Rated Team",
    desc: "Work alongside industry experts in a Top Rated Plus Upwork agency environment."
  },
  {
    id: 3,
    icon: <FaLaptopHouse />,
    title: "Remote Flexibility",
    desc: "Enjoy the freedom of remote work while collaborating with a global team of professionals."
  }
];

const Careers = () => {
  return (
    // CRITICAL: id="careers" allows the navbar to scroll here
    <section id="careers" className="join-section">
      
      {/* FLOATING BACKGROUND SHAPES */}
      <div className="career-floating-shapes">
        <div className="c-shape shape-1"></div>
        <div className="c-shape shape-2"></div>
        <div className="c-shape shape-3"></div>
      </div>

      <div className="join-container">
        
        {/* HEADER CONTENT */}
        <div className="join-header">
          <span className="join-tag">Join our team</span>
          <h2 className="join-title">Join Our Remote Team of Experts!</h2>
          <p className="join-desc">
            Be part of a dynamic team that's transforming how businesses connect 
            with their ideal customers. We're looking for passionate professionals 
            who want to make a real impact in the lead generation industry.
          </p>
        </div>

        {/* HIGHLIGHTS GRID */}
        <div className="join-highlights">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="join-cta">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3KZm8Qw4KxJGt2NEzThxxlvn-T2fXpjtQC6uKNVaOIIhiDQ/viewform" 
            className="btn-apply"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Apply Now <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Careers;