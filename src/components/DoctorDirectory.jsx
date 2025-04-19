import React, { useState } from 'react'
import DoctorCard from './DoctorCard'
import BookingModal from './BookingModal'
import { doctors, specialties, timeSlots } from '../database/data'
import { useDoctorFilters } from '../hooks/useDoctorFilters'

const DoctorDirectory = ({ onBookAppointment }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { 
    selectedSpecialty, 
    setSelectedSpecialty, 
    searchQuery, 
    setSearchQuery, 
    filteredDoctors 
  } = useDoctorFilters(doctors)

  const handleBook = (doctor) => {
    setSelectedDoctor(doctor)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedDoctor(null)
  }

  const handleConfirmBooking = (timeSlot) => {
    onBookAppointment({
      ...selectedDoctor,
      appointmentTime: timeSlot,
      appointmentDate: new Date().toLocaleDateString()
    })
    setShowModal(false)
    setSelectedDoctor(null)
  }

  return (
    <div className="doctor-directory">
      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search doctors by name, specialty, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search doctors"
          />
        </div>
        <div className="filter-container">
          <label htmlFor="specialty-filter">Filter by Specialty:</label>
          <select
            id="specialty-filter"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="specialty-select"
            aria-label="Filter by specialty"
          >
            <option value="All Specialties">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-summary">
        <p>Showing {filteredDoctors.length} of {doctors.length} doctors</p>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="no-results">
          <p>No doctors found matching your criteria. Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-grid-item">
              <DoctorCard doctor={doctor} onBook={handleBook} />
            </div>
          ))}
        </div>
      )}

      {showModal && selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
          timeSlots={timeSlots}
        />
      )}
    </div>
  )
}

export default DoctorDirectory 