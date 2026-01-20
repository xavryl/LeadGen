// File: src/components/Contact.jsx

import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Make sure to run: npm install @emailjs/browser
import { FaEnvelope, FaLink, FaArrowRight, FaTimes, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyWebsite: '',
    industry: '',
    contactTypes: '',
    deliveryFrequency: '',
    paymentModel: '',
    budgetRange: '',
    hearAboutUs: '',
    projectDetails: '',
    googleSheetLink: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- CONFIGURATION ---
    const serviceID = "service_4bwubli";
    const templateID = "template_txo056k";
    const publicKey = "gaWmTPnls6x2a3qp9"; 
    // ---------------------

    try {
      // FIX: Send directly via EmailJS SDK instead of fetch('/api/email')
      await emailjs.send(
        serviceID,
        templateID,
        formData, // We pass the form data directly
        publicKey
      );

      // SUCCESS HANDLING
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setShowModal(false);
        setSubmitSuccess(false);
        setFormData({
          fullName: '', businessEmail: '', companyWebsite: '', 
          industry: '', contactTypes: '', deliveryFrequency: '', 
          paymentModel: '', budgetRange: '', hearAboutUs: '', 
          projectDetails: '', googleSheetLink: ''
        });
      }, 2500);

    } catch (error) {
      // ERROR HANDLING
      setIsSubmitting(false);
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // ... (The rest of your Return/JSX code remains exactly the same)
  return (
    <section id="contact" className="contact-section">
      {/* Background Decor */}
      <div className="contact-bg-glow glow-1"></div>
      <div className="contact-bg-glow glow-2"></div>

      <div className="contact-container">
        
        {/* HEADER */}
        <div className="contact-header">
          <span className="contact-tag">Let's Talk Business</span>
          <h2 className="contact-title">Ready to Scale Your Growth?</h2>
          <p className="contact-subtitle">
            Don't settle for average leads. Partner with a team that treats your 
            business like their own. Let's build your pipeline today.
          </p>
        </div>

        {/* MODERN CARD LAYOUT */}
        <div className="contact-grid">
          
          {/* LEFT: DIRECT CONTACT (Glass Card) */}
          <div className="contact-card glass-card">
            <div className="card-content">
              <h3>Start a Conversation</h3>
              <p>
                Whether you need a one-time list or a full-scale lead generation engine, 
                we are ready to help.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="icon-circle"><FaEnvelope /></div>
                  <div className="info">
                    <span className="label">Email Us</span>
                    <a href="mailto:tina@mclleads.com" className="link">tina@mclleads.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle"><FaLink /></div>
                  <div className="info">
                    <span className="label">Upwork Profile</span>
                    <a 
                      href="https://www.upwork.com/agencies/655437511724298240/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="link"
                    >
                      View Agency Stats <FaArrowRight className="tiny-arrow"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-glow-gold" onClick={() => setShowModal(true)}>
              Request a Custom Quote
            </button>
          </div>

          {/* RIGHT: PARTNERSHIP (Dark Premium Card) */}
          <div className="contact-card premium-card">
            <div className="premium-badge">TOP RATED PLUS</div>
            <h3>Why Partner With Us?</h3>
            <p className="premium-desc">
              We aren't just freelancers; we are a verified agency.
            </p>
            
            <ul className="stats-grid">
              <li><strong>100%</strong><span>Job Success</span></li>
              <li><strong>85k+</strong><span>Hours Logged</span></li>
              <li><strong>200+</strong><span>Contracts</span></li>
            </ul>

            <div className="card-actions">
              <a href="https://www.upwork.com/freelancers/macristinaplao" target="_blank" rel="noreferrer" className="btn-outline-white">
                Hire on Upwork
              </a>
              <a href="https://exclusive.mclleads.com" target="_blank" rel="noreferrer" className="btn-solid-white">
                Get Strategy Plan
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* --- EXTENDED MODAL (All Fields Included) --- */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modern-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}><FaTimes /></button>
            
            <div className="modal-left">
              <div className="modal-left-content">
                <h2>Let's Build <br/>Something Great.</h2>
                <p>Fill out the details and we'll get back to you with a custom plan within 24 hours.</p>
                
                <div className="modal-steps">
                  <div className="step">
                    <span className="step-num">1</span>
                    <span>Tell us your goals</span>
                  </div>
                  <div className="step-line"></div>
                  <div className="step">
                    <span className="step-num">2</span>
                    <span>Get a custom plan</span>
                  </div>
                  <div className="step-line"></div>
                  <div className="step">
                    <span className="step-num">3</span>
                    <span>Launch & Grow</span>
                  </div>
                </div>
              </div>
              <div className="modal-decor-circle"></div>
            </div>

            <div className="modal-right">
              <form onSubmit={handleSubmit}>
                
                {/* SECTION 1: CONTACT INFO */}
                <h4 className="form-section-title">Contact Information</h4>
                <div className="input-row">
                  <div className="input-group">
                    <label>Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="input-group">
                    <label>Business Email *</label>
                    <input type="email" name="businessEmail" required value={formData.businessEmail} onChange={handleChange} placeholder="john@company.com" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Company Website *</label>
                  <input type="url" name="companyWebsite" required value={formData.companyWebsite} onChange={handleChange} placeholder="https://yourcompany.com" />
                </div>

                {/* SECTION 2: PROJECT SPECS */}
                <h4 className="form-section-title">Project Specifications</h4>
                
                <div className="input-row">
                  <div className="input-group">
                    <label>Industry *</label>
                    <select name="industry" required value={formData.industry} onChange={handleChange}>
                        <option value="">Choose an industry...</option>
                        <option value="Adult Beverage">Adult Beverage</option>
                        <option value="Agriculture, Agribusiness">Agriculture, Agribusiness</option>
                        <option value="Agtech">Agtech</option>
                        <option value="Animal Health, Pet Products">Animal Health, Pet Products</option>
                        <option value="Apparel & Fashion">Apparel & Fashion</option>
                        <option value="Beauty, Personal Care">Beauty, Personal Care</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Health & Wellness & Nutrition">Health & Wellness & Nutrition</option>
                        <option value="Home Goods">Home Goods</option>
                        <option value="Jewelry & Accessories">Jewelry & Accessories</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="OTC Pharma">OTC Pharma</option>
                        <option value="Recreational & Outdoor Products">Recreational & Outdoor Products</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Telecommunications">Telecommunications</option>
                        <option value="Therapeutic & Recovery">Therapeutic & Recovery</option>
                        <option value="Wellness & Nutrition, Supplements">Wellness & Nutrition</option>
                      </select>
                  </div>

                  <div className="input-group">
                    <label>Desired Contact Types</label>
                    <select name="contactTypes" value={formData.contactTypes} onChange={handleChange}>
                      <option value="">Select contact type...</option>
                      <option value="C-level executives">C-level executives</option>
                      <option value="Owner, President">Owner, President</option>
                      <option value="Director">Director</option>
                      <option value="Manager">Manager</option>
                      <option value="Managing Director">Managing Director</option>
                      <option value="Director of M&A, VP of M&A">Director of M&A, VP of M&A</option>
                      <option value="Vice Presidents">Vice Presidents</option>
                      <option value="Director/VP of Corp Comm">Director/VP of Corp Comm</option>
                    </select>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Lead Delivery Frequency</label>
                    <select name="deliveryFrequency" value={formData.deliveryFrequency} onChange={handleChange}>
                      <option value="">Select frequency...</option>
                      <option value="One-time project">One-time project</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Preferred Payment Model</label>
                    <select name="paymentModel" value={formData.paymentModel} onChange={handleChange}>
                      <option value="">Select model...</option>
                      <option value="Hourly billing with time tracker">Hourly billing</option>
                      <option value="Fixed project fee per lead">Fixed project fee</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                    <label>Budget Range</label>
                    <select name="budgetRange" value={formData.budgetRange} onChange={handleChange}>
                        <option value="">Select budget range...</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500–$1,000">$500–$1,000</option>
                        <option value="$1,000–$2,500">$1,000–$2,500</option>
                        <option value="$2,500+">$2,500+</option>
                        <option value="Not sure yet / Need advice">Not sure yet / Need advice</option>
                    </select>
                </div>

                {/* SECTION 3: DETAILS */}
                <h4 className="form-section-title">Additional Details</h4>

                <div className="input-group">
                  <label>How Did You Hear About Us?</label>
                  <input type="text" name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} placeholder="e.g. LinkedIn, Referral, Google..." />
                </div>

                <div className="input-group">
                  <label>Project Details / Requirements</label>
                  <textarea name="projectDetails" rows="4" value={formData.projectDetails} onChange={handleChange} placeholder="Describe your target audience, goals, or specific instructions..."></textarea>
                </div>

                <div className="input-group">
                  <label>Google Spreadsheet Link (Optional)</label>
                  <input type="url" name="googleSheetLink" value={formData.googleSheetLink} onChange={handleChange} placeholder="Share a brief or work file..." />
                </div>

                <button type="submit" className={`btn-submit ${submitSuccess ? 'success' : ''}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : submitSuccess ? <span><FaCheckCircle /> Request Sent!</span> : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;