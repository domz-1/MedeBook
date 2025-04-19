import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import DoctorDetailsModal from './DoctorDetailsModal'

const DoctorCard = ({ doctor, onBook }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div className="doctor-card">
        <div className="doctor-image">
          <img src={doctor.image} alt={`${doctor.name}'s profile`} />
          <div className="availability-badge">{doctor.availability}</div>
        </div>
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <p className="specialty">{doctor.specialty}</p>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`star ${i < doctor.rating ? 'filled' : ''}`}
              />
            ))}
          </div>
          <p className="location">
            <MdLocationOn className="location-icon" /> {doctor.location}
          </p>
          
          <div className="card-actions">
            <button 
              className="details-button"
              onClick={() => setShowDetailsModal(true)}
              aria-label={`View details for ${doctor.name}`}
            >
              View Details
            </button>
            <button 
              className="book-button"
              onClick={() => onBook(doctor)}
              aria-label={`Book appointment with ${doctor.name}`}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <DoctorDetailsModal 
          doctor={doctor} 
          onClose={() => setShowDetailsModal(false)} 
        />
      )}
    </>
  )
}

export default DoctorCard