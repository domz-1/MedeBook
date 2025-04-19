import React from 'react';
import { features, testimonials } from '../database/data';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find and Book Your Doctor Online</h1>
          <p>Connect with top specialists in your area and schedule appointments with ease</p>
          <button 
            className="cta-button"
            onClick={onGetStarted}
            aria-label="Get started with doctor booking"
          >
            Find a Doctor
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Doctor with patient" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Platform</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search for a Doctor</h3>
            <p>Browse our directory of specialists by specialty or location</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>View Availability</h3>
            <p>Check real-time availability and select a convenient time slot</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Book Your Appointment</h3>
            <p>Confirm your appointment with just a few clicks</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Book Your Appointment?</h2>
        <p>Join thousands of satisfied patients who have found their perfect doctor</p>
        <button 
          className="cta-button"
          onClick={onGetStarted}
          aria-label="Get started with doctor booking"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
}

export default LandingPage; 