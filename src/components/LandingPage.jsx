import React from 'react';
import { features, testimonials } from '../database/data';

function LandingPage() {
  return (
      <div className="landing-page">
          <section className="hero-section">
              <div className="hero-content">
                  <h1>Find and Book Your Doctor Online</h1>
                  <p>
                      Doctors are one of the most important people in society.
                      They are the sole reason our society is taking healthy and
                      positive steps towards progress because the health of the
                      body and mind is the reason behind the good work people
                      put up towards development.
                  </p>
              </div>
              <div className="hero-image">
                  <img src="../../public/docs.png" alt="Doctor with patient" />
              </div>
          </section>
      </div>
  );
}

export default LandingPage;