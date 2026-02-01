// File: src/App.jsx

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle } from 'react-icons/fa'; // Import check icon for success state

// Component Imports
import Header from './components/Layout/Header';
import Hero from './components/Hero';
import Services from './components/Services'; 
import Pricing from './components/Pricing'; 
import About from './components/About';       
import Process from './components/Process';   
import WhyChooseUs from './components/WhyChooseUs'; 
import Testimonials from './components/Testimonials'; 
import Careers from './components/Careers'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';     
import FAQWidget from './components/FAQWidget';

import './App.css';

function App() {
  // --- STATE MANAGEMENT ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // --- HANDLERS ---

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Reset status after a delay so it's fresh next time
    setTimeout(() => setSubmitStatus(null), 300); 
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceID = "service_4bwubli";
    const templateID = "template_491mnyv";
    const publicKey = "gaWmTPnls6x2a3qp9";

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      jobTitle: formData.jobTitle,
      companyName: formData.companyName,
      website: formData.website
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        // Clear form
        setFormData({ fullName: '', email: '', jobTitle: '', companyName: '', website: '' });
      }, (err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="app">
      {/* Pass toggle function to Header so Navbar button works */}
      <Header onOpenFAQ={() => setIsFAQOpen(true)} />
      
      <main>
        {/* Pass openModal to Hero so the 'Get Free Sample' button works */}
        <Hero onOpenModal={openModal} />
        <Services />
        <Pricing /> 
        <About />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Careers />
        <Contact />
      </main>

      <Footer />
      
      {/* FAQ Widget Controlled State */}
      <FAQWidget isOpen={isFAQOpen} onToggle={setIsFAQOpen} />

      {/* --- BANKRUPTCY DAILY BULLETIN MODAL --- */}
      {isModalOpen && (
        <div className="bankruptform-overlay" onClick={closeModal}>
          <div className="bankruptform-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bankruptform-close-btn" onClick={closeModal}>&times;</button>
            
            <div className="bankruptform-header">
              <h2>Bankruptcy Daily Bulletin</h2>
              <p>For Investors & Dealmakers — Spot Opportunities First</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bankruptform-success">
                <FaCheckCircle className="bankruptform-success-icon" />
                <h3>Request Sent Successfully!</h3>
                <p>Check your inbox for your free sample.</p>
                <button className="bankruptform-submit-btn" onClick={closeModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bankruptform-form">
                <div className="bankruptform-group">
                  <label>Full Name <span className="bankruptform-required">*</span></label>
                  <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Full Name" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="bankruptform-group">
                  <label>Email <span className="bankruptform-required">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="bankruptform-group">
                  <label>Job Title <span className="bankruptform-required">*</span></label>
                  <input 
                    type="text" 
                    name="jobTitle" 
                    placeholder="Please Specify Job Title" 
                    value={formData.jobTitle} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="bankruptform-group">
                  <label>Company Name <span className="bankruptform-required">*</span></label>
                  <input 
                    type="text" 
                    name="companyName" 
                    placeholder="Organization" 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="bankruptform-group">
                  <label>Your Website <span className="bankruptform-required">*</span></label>
                  <input 
                    type="url" 
                    name="website" 
                    placeholder="https://www.example.com" 
                    value={formData.website} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <button type="submit" className="bankruptform-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Get Free Sample'}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="bankruptform-error">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;