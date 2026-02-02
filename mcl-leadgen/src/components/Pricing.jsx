import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Pricing.css';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [step, setStep] = useState(1);
  const [hours, setHours] = useState(5);
  
  const [formData, setFormData] = useState({
    fullName: '', userEmail: '', jobTitle: '', companyName: '', website: '', sheetLink: ''
  });

  const HOURLY_RATE = 8;
  const FIXED_PRICE = 79;
  const totalAmount = activePlan === 'hourly' ? hours * HOURLY_RATE : FIXED_PRICE;
  const isFormValid = Object.values(formData).every(val => val.trim().length > 1);

  // --- FIX: Define closeModal HERE, before useEffect uses it ---
  const closeModal = () => { setActivePlan(null); setStep(1); setHours(5); };

  useEffect(() => { emailjs.init("83x_AdtLDpl8JUSaA"); }, []);

  // --- RENDER PAYPAL BUTTONS (Step 2) ---
  useEffect(() => {
    if (step === 2 && activePlan && window.paypal) {
      const buttonId = activePlan === 'fixed' ? "PA46WX5TKC5HW" : "NMQEL8ZJB6QZN";
      const containerId = activePlan === 'fixed' ? "paypal-container-PA46WX5TKC5HW" : "paypal-container-NMQEL8ZJB6QZN";
      
      setTimeout(() => {
        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = "";
          try {
            window.paypal.HostedButtons({
              hostedButtonId: buttonId,
              onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                  const params = {
                    ...formData,
                    service_name: activePlan === 'fixed' ? 'Fixed Lead List' : 'Hourly Research',
                    total_amount: `$${totalAmount}`,
                    hours_requested: activePlan === 'hourly' ? hours : 'N/A',
                    payer_name: details.payer.name.given_name,
                    transaction_id: details.id
                  };

                  emailjs.send('service_dofosjg', 'template_yxz3mh9', params)
                    .then(() => {
                      alert("Payment Successful! We have received your order.");
                      closeModal(); // Now this works because closeModal is defined above
                    })
                    .catch((err) => {
                      console.error("Email Error:", err);
                      alert("Payment received! Please email us directly.");
                      closeModal();
                    });
                });
              }
            }).render(`#${containerId}`);
          } catch (err) {
            console.error("PayPal Render Error:", err);
          }
        }
      }, 100);
    }
    // Added closeModal to dependency array to satisfy linter fully
  }, [step, activePlan, formData, totalAmount, hours]); 

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleProceed = (e) => {
    e.preventDefault();
    setStep(2); 
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <span className="section-tag">INVESTMENT</span>
        <h2 className="section-title">Transparent Plans</h2>

        <div className="pricing-grid">
          {/* Plan 1 - Newsletter */}
          <div className="pricing-card">
            <div className="card-content">
              {/* <span className="plan-num">01</span> */}
              <h3>Bankruptcy Newsletter</h3>
              <p className="price">$99<span>/mo</span></p>
              <ul className="card-features-list">
                <li>Daily US Chapter 11 Updates sent to your email on weekdays</li>
                <li>Company Case Highlights (Court, Filing Date, Case #)</li>
                <li>Key Financials (Assets vs Liabilities)</li>
                <li>Bankruptcy Law Firm and Company Contact info</li>
              </ul>
            </div>
            
            <a 
              href="https://newsletter.mclleads.com/form-details" 
              className="btn-base btn-newsletter" 
              id="btn-card-1"
              target="_blank" 
              rel="noreferrer"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2 - Fixed Lead List */}
          <div className="pricing-card highlighted">
            <div className="card-content">
              {/* <span className="plan-num">02</span> */}
              <h3>Fixed Price Lead List</h3>
              <p className="price">$79<span>/flat</span></p>
              <ul className="card-features-list">
                <li>100 Contacts, one per company</li>
                <li>Share a Google sheet with 100 company names and labeled columns</li>
                <li>Contact Details: Name, Co. Address, Title, Email, Phone, Linkedin (max 6 columns)</li>
                <li>Company Details- Name, Address, Phone, # of employees, Linkedin, Revenue (max 6 columns)</li>
                <li>Valid Business Emails</li>
                <li>Guaranteed 1-2% email bounce rates</li>
                <li>Turnaround time within 24 hours</li>
              </ul>
            </div>

            <button 
              className="btn-base btn-fixed" 
              id="btn-card-2" 
              onClick={() => setActivePlan('fixed')}
            >
              Get Started
            </button>
          </div>

          {/* Plan 3 - Hourly Research */}
          <div className="pricing-card">
            <div className="card-content">
              {/* <span className="plan-num">03</span> */}
              <h3>Hourly Lead Research</h3>
              <p className="price">$8<span>/hr</span></p>
              <ul className="card-features-list">
                <li>10+ verified contacts/hr (min. 5 hrs, criteria-dependent)</li>
                <li>Ideal for targeted lead research projects</li>
                <li>Share your Google Sheet with a criteria/instruction tab and labeled columns</li>
                <li>Contact details: Name, Co. Address, Title, Email, Phone, Linkedin (max 6 columns)</li>
                <li>Company details: Name, Address, Phone, # of employees, Linkedin, Revenue (max 6 columns)</li>
                <li>Valid Business Emails</li>
                <li>Guaranteed 1-2% email bounce rates</li>
                <li>Tracked via WebWork – Turnaround time varies</li>
              </ul>
            </div>

            <button 
              className="btn-base btn-hourly" 
              id="btn-card-3" 
              onClick={() => setActivePlan('hourly')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {activePlan && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={closeModal}>&times;</button>
            
            {step === 1 && (
              <div className="modal-step">
                <span className="modal-tag">STEP 1: DETAILS</span>
                <h3>{activePlan === 'fixed' ? 'Fixed Lead List' : 'Hourly Research'}</h3>
                
                <form className="simple-form" onSubmit={handleProceed}>
                  {activePlan === 'hourly' && (
                    <div className="hours-config">
                      <label>Select Hours (Min 5):</label>
                      <div className="stepper">
                        <button type="button" onClick={() => setHours(Math.max(5, hours - 1))}>-</button>
                        <span>{hours}</span>
                        <button type="button" onClick={() => setHours(hours + 1)}>+</button>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <input name="fullName" placeholder="Full Name" onChange={handleInput} required />
                    <input name="userEmail" type="email" placeholder="Business Email" onChange={handleInput} required />
                  </div>
                  <div className="row">
                    <input name="jobTitle" placeholder="Job Title" onChange={handleInput} required />
                    <input name="companyName" placeholder="Company Name" onChange={handleInput} required />
                  </div>
                  <input name="website" placeholder="Company Website" onChange={handleInput} required />
                  <input name="sheetLink" placeholder="Google Sheet Link (Edit Access)" onChange={handleInput} required />
                  
                  <button type="submit" className="btn-next" disabled={!isFormValid}>
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="modal-step payment-step">
                <span className="modal-tag">STEP 2: CHECKOUT</span>
                <div className="paypal-wrapper">
                  <h3>
                    {activePlan === 'fixed' ? 'Fixed Price Lead List' : `Hourly Lead Research`}
                  </h3>
                  <div 
                    id={activePlan === 'fixed' ? "paypal-container-PA46WX5TKC5HW" : "paypal-container-NMQEL8ZJB6QZN"} 
                    className="paypal-mount"
                  ></div>
                </div>
                <button className="btn-back" onClick={() => setStep(1)}>← Edit Details</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;