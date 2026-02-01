import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: "John G.",
    role: "Co-Founder, Ready Set",
    quote: "Tina and her team were great to work with for lead generation. She was communicative and adaptable and provided clear weekly reports on her progress, making it easy to follow her work. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: "Raleigh D.",
    role: "Founder and Owner, PMHOA PRO",
    quote: "They helped me find leads for a particular industry. She was fast and responsive, and I look forward to working with the team again! Thank you!",
    rating: 5
  },
  {
    id: 3,
    name: "Shaun K.",
    role: "Partner, Harrison Co.",
    quote: "Tina is great! We're closing this contract so we can hire her and her team on another one. Highly recommend.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    // CRITICAL: id="testimonials" allows the navbar to scroll here
    <section id="testimonials" className="testimony-section">
      
      {/* FLOATING BACKGROUND SHAPES */}
      <div className="testimony-floating-shapes">
        <div className="testimony-shape shape-1"></div>
        <div className="testimony-shape shape-2"></div>
        <div className="testimony-shape shape-3"></div>
        <div className="testimony-shape shape-4"></div>
        <div className="testimony-shape shape-5"></div>
      </div>

      <div className="testi-container">
        
        <h2 className="testimony-title">What Our Clients Say About Us</h2>

        <div className="testi-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimony-card">
              
              {/* Decorative Quote Icon */}
              <div className="card-quote-icon">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="testimony-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="testimony-star" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="testimony-text">"{review.quote}"</p>

              {/* Client Info */}
              <div className="testimony-client-info">
                <div className="client-avatar">
                  {/* Initials Avatar */}
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="testimony-client-name">{review.name}</div>
                  <div className="testimony-client-title">{review.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;