import React, { useRef, useEffect } from 'react'

import { FaX } from 'react-icons/fa6';

import { FaStar } from 'react-icons/fa';


const DoctorDetailsModal = ({ doctor, onClose }) => {
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    // Focus the close button when modal opens
    closeButtonRef.current?.focus()
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
      <div 
          className="modal-overlay" 
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="doctor-name"
      >
          <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              role="document"
          >
              <button
                  className="close-button"
                  onClick={onClose}
                  ref={closeButtonRef}
                  aria-label="Close doctor details"
              >
                  <FaX aria-hidden="true" />
              </button>

              <div className="doctor-profile">
                  <img
                      src={doctor.image}
                      alt={`${doctor.name}'s profile picture`}
                      className="modal-doctor-image"
                  />
                  <div className="doctor-info">
                      <h2 id="doctor-name">{doctor.name}</h2>
                      <p className="specialty">{doctor.specialty}</p>
                      <div className="rating" role="img" aria-label={`${doctor.rating} out of 5 stars`}>
                          <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                  <FaStar
                                      key={i}
                                      className={`star ${
                                          i < doctor.rating ? 'filled' : ''
                                      }`}
                                      aria-hidden="true"
                                  />
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              <div className="doctor-details-content">
                  <div className="detail-section">
                      <h3>Professional Information</h3>
                      <div className="detail-grid" role="list">
                          <div className="detail-item-modal" role="listitem">
                              <span className="detail-label">Experience</span>
                              <span className="detail-value">
                                  {doctor.experience}
                              </span>
                          </div>
                          <div className="detail-item-modal" role="listitem">
                              <span className="detail-label">Education</span>
                              <span className="detail-value">
                                  {doctor.education}
                              </span>
                          </div>
                          <div className="detail-item-modal" role="listitem">
                              <span className="detail-label">Location</span>
                              <span className="detail-value">
                                  {doctor.location}
                              </span>
                          </div>
                          <div className="detail-item-modal" role="listitem">
                              <span className="detail-label">Availability</span>
                              <span className="detail-value">
                                  {doctor.availability}
                              </span>
                          </div>
                      </div>
                  </div>

                  <div className="detail-section">
                      <h3>Languages</h3>
                      <div className="language-tags" role="list">
                          {doctor.languages.map((lang, index) => (
                              <span key={index} className="language-tag" role="listitem">
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