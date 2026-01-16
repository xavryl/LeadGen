import React, { useState } from 'react';

// Component Imports
import Header from './components/Layout/Header';
import Hero from './components/Hero';
import Services from './components/Services'; 
import About from './components/About';       
import Process from './components/Process';   
import WhyChooseUs from './components/WhyChooseUs'; 
import Testimonials from './components/Testimonials'; 
import Careers from './components/Careers'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';     
import FAQWidget from './components/FAQWidget'; // <--- 1. Import the FAQ Widget

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Header />
      
      <main>
        {/* 1. HERO */}
        <Hero onOpenModal={openModal} />

        {/* 2. SERVICES */}
        <Services />

        {/* 3. ABOUT */}
        <About />

        {/* 4. PROCESS */}
        <Process />
        
        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. TESTIMONIALS */}
        <Testimonials />

        {/* 7. CAREERS */}
        <Careers />

        {/* 8. CONTACT */}
        <Contact />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* 10. FLOATING FAQ WIDGET (New) */}
      <FAQWidget />

      {/* --- HERO MODAL LOGIC (Kept Separate for Hero Button) --- */}
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
                <input type="text" placeholder="Full Name" className="modal-input" />
                <input type="email" placeholder="Enter your email" className="modal-input" />
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