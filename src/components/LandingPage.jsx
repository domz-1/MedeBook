import React from 'react';
import DocsImage from '../assets/docs.png';

function LandingPage() {
  return (
    <div className="landing-page" role="main">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">Find and Book Your Doctor Online</h1>
          <p>
            Doctors play a vital role in society by maintaining our physical
            and mental wellbeing, enabling progress and development.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src={DocsImage} 
            alt="Doctor consulting with a patient in a modern medical office" 
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;