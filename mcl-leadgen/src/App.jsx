import React, { useState } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- DELETE THE USEEFFECT BLOCK THAT WAS HERE ---
  // The PayPal script is now safely loaded in public/index.html
  // This prevents the "Bootstrap Error" and "Request Listener" crash.

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Header />
      
      <main>
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
      <FAQWidget />

      {/* Hero Modal Logic */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Get Your Free Sample</h2>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>Enter your details below to receive a free Bankruptcy Bulletin sample.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="modal-input" required />
                <input type="email" placeholder="Enter your email" className="modal-input" required />
                <button type="submit" className="btn-modal-submit">Send Sample</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;