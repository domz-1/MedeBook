import React from 'react';
import { features, testimonials } from '../database/data';
import DocsImage from '../assets/docs.png';  // Added import

function LandingPage() {
  return (
      <div className="landing-page">
          <section className="hero-section">
              <div className="hero-content">
                  <h1>Find and Book Your Doctor Online</h1>
                  <p>
                      Doctors play a vital role in society by maintaining our physical
                      and mental wellbeing, enabling progress and development.
                  </p>
              </div>
              <div className="hero-image">
                  <img src={DocsImage} alt="Doctor with patient" />  {/* Updated image reference */}
              </div>
          </section>
      </div>
  );
}

export default LandingPage;