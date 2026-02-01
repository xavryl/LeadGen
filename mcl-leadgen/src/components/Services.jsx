import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaChartLine, FaFilter, FaEnvelopeOpenText, FaHeadset, FaRobot, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import './Services.css';

const servicesData = [
  {
    id: 0,
    title: "Lead Research",
    icon: <FaChartLine />,
    desc: "We verify every data point to give you direct access to decision-makers. Our lists are hand-curated to ensure 99% deliverability.",
    stat: "Lead Research",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    hasModal: false
  },
  {
    id: 1,
    title: "Sales Funnels",
    icon: <FaFilter />,
    desc: "We architect the entire journey so you stop losing customers. From the first ad click to the final checkout, we optimize every step.",
    stat: "Sales Funnels",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
    hasModal: false
  },
  {
    id: 2,
    title: "Email Marketing",
    icon: <FaEnvelopeOpenText />,
    desc: "Stop landing in spam. We build high-deliverability campaigns that actually get opened, read, and replied to by your prospects.",
    stat: "Email Marketing",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    hasModal: true,
    modalLabel: "Tell us about your email marketing needs",
    modalPlaceholder: "Please describe your email marketing goals, the type of campaigns you want (newsletters, promotions, lead nurturing, etc.), frequency, tools or platforms you prefer (Mailchimp, HubSpot, etc.), and any specific deadlines or instructions. We’ll get in touch via email if we can help."
  },
  {
    id: 3,
    title: "Cold Calling",
    icon: <FaHeadset />,
    desc: "Native-level pros handling rejection so you handle the closing. We set the appointments; you sign the deals.",
    stat: "Cold Calling",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    hasModal: true,
    modalLabel: "Tell us about your cold calling needs",
    modalPlaceholder: "Please describe your cold calling goals, target audience, preferred script or approach, expected call volume, schedule, and any special instructions or requirements. We’ll get in touch via email if we can help."
  },
  {
    id: 4,
    title: "Virtual Assistants",
    icon: <FaRobot />,
    desc: "Scale faster. Hand off repetitive tasks to dedicated experts who learn your specific business workflow inside out.",
    stat: "Virtual Assistants",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    hasModal: true,
    modalLabel: "Tell us about your VA Needs/Requirements",
    modalPlaceholder: "Please describe the tasks you need help with, your preferred hours or schedule, any specific skills or tools required, and any deadlines or special instructions. We’ll get in touch via email if we can help."
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // --- HANDLERS ---
  const handleCtaClick = (e, service) => {
    e.preventDefault();
    if (service.hasModal) {
      setSelectedService(service);
      setIsModalOpen(true);
    } else {
      window.open("https://exclusive.mclleads.com", "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({ name: '', company: '', title: '', email: '', message: '' });
    }, 300);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_uw5pm1i";
    const templateID = "template_ycdxkvn";
    const publicKey = "4eOYvGWUp8dwO6p4J";

    const templateParams = {
      service_name: selectedService?.title,
      from_name: formData.name,
      company_name: formData.company,
      job_title: formData.title,
      reply_to: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, (err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <>
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
            
            {/* MENU */}
            <div className="deck-menu">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id}
                  className={`menu-item ${activeTab === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
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
                  <div 
                    className="card-bg-image" 
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>
                  
                  <div className="preview-content">
                    <div className="preview-badge">{service.stat}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    
                    <button 
                      onClick={(e) => handleCtaClick(e, service)}
                      className="btn-deck"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* --- SERVICE MODAL --- */}
      {isModalOpen && selectedService && (
        <div className="servicemodal-overlay" onClick={closeModal}>
          <div className="servicemodal-content" onClick={(e) => e.stopPropagation()}>
            <button className="servicemodal-close" onClick={closeModal}>&times;</button>
            
            <div className="servicemodal-header">
              <h2>{selectedService.title}</h2>
              <p className="servicemodal-subtitle">Get a Quote / Consultation</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="servicemodal-success">
                <FaCheckCircle className="servicemodal-success-icon" />
                <h3>Request Sent Successfully!</h3>
                <p>We'll review your requirements and get back to you shortly.</p>
                <button className="servicemodal-btn" onClick={closeModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="servicemodal-form">
                <div className="servicemodal-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="servicemodal-group">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="servicemodal-group">
                  <label>Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    required 
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="servicemodal-group">
                  <label>Work Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="servicemodal-group full-width">
                  <label>{selectedService.modalLabel}</label>
                  <textarea 
                    name="message" 
                    rows="5"
                    required
                    placeholder={selectedService.modalPlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="servicemodal-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="servicemodal-error">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;