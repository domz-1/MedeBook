import React from 'react'

import { FaX } from 'react-icons/fa6';

import { FaStar } from 'react-icons/fa';


const DoctorDetailsModal = ({ doctor, onClose }) => {
  return (
      <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                  className="close-button"
                  onClick={onClose}
                  aria-label="Close modal"
              >
                  <FaX />
              </button>

              <div className="doctor-profile">
                  <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="modal-doctor-image"
                  />
                  <div className="doctor-info">
                      <h2>{doctor.name}</h2>
                      <p className="specialty">{doctor.specialty}</p>
                      <div className="rating">
                          <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                  <FaStar
                                      key={i}
                                      className={`star ${
                                          i < doctor.rating ? 'filled' : ''
                                      }`}
                                  />
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              <div className="doctor-details-content">
                  <div className="detail-section">
                      <h3>Professional Information</h3>
                      <div className="detail-grid">
                          <div className="detail-item-modal">
                              <span className="detail-label">Experience</span>
                              <span className="detail-value">
                                  {doctor.experience}
                              </span>
                          </div>
                          <div className="detail-item-modal">
                              <span className="detail-label">Education</span>
                              <span className="detail-value">
                                  {doctor.education}
                              </span>
                          </div>
                          <div className="detail-item-modal">
                              <span className="detail-label">Location</span>
                              <span className="detail-value">
                                  {doctor.location}
                              </span>
                          </div>
                          <div className="detail-item-modal">
                              <span className="detail-label">Availability</span>
                              <span className="detail-value">
                                  {doctor.availability}
                              </span>
                          </div>
                      </div>
                  </div>

                  <div className="detail-section">
                      <h3>Languages</h3>
                      <div className="language-tags">
                          {doctor.languages.map((lang, index) => (
                              <span key={index} className="language-tag">
                                  {lang}
                              </span>
                          ))}
                      </div>
                  </div>

                  <div className="detail-section">
                      <h3>About</h3>
                      <p className="doctor-bio">{doctor.bio}</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default DoctorDetailsModal