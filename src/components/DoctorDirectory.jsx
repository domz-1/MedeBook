import React, { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard'
import BookingModal from './BookingModal'
import { doctors as initialDoctors, specialties, timeSlots } from '../database/data'
import { useDoctorFilters } from '../hooks/useDoctorFilters'
import useDoctorsStore from '../store/doctorsStore'

const DoctorDirectory = ({ onBookAppointment }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { doctors, loading, error, setDoctors } = useDoctorsStore()
  const { 
    selectedSpecialty, 
    setSelectedSpecialty, 
    searchQuery, 
    setSearchQuery, 
    filteredDoctors 
  } = useDoctorFilters(doctors)

  useEffect(() => {
    // Load doctors from initial data if store is empty
    if (doctors.length === 0) {
      setDoctors(initialDoctors)
    }
  }, [doctors.length, setDoctors])

  const handleBook = (doctor) => {
    setSelectedDoctor(doctor)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedDoctor(null)
  }

  const handleConfirmBooking = (bookingData) => {
    onBookAppointment({
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      doctorImage: selectedDoctor.image,
      doctorSpecialty: selectedDoctor.specialty,
      doctorLocation: selectedDoctor.location,
      ...bookingData
    })
    setShowModal(false)
    setSelectedDoctor(null)
  }

  if (loading) {
    return <div>Loading doctors...</div>
  }

  if (error) {
    return <div>Error loading doctors: {error}</div>
  }

  return (
    <div className="doctor-directory" role="region" aria-label="Doctor directory">
      <div className="filters" role="search">
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
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div 
          className="no-results" 
          role="status" 
          aria-live="polite"
        >
          <p>
            No doctors found matching your criteria. Try adjusting
            your search or filters.
          </p>
        </div>
      ) : (
        <div>
          <div 
            className="results-summary" 
            role="status" 
            aria-live="polite"
          >
            <p>
              Showing {filteredDoctors.length} of {doctors.length}{' '}
              doctors
            </p>
          </div>
          <div 
            className="doctor-grid" 
            role="list"
            aria-label="List of doctors"
          >
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="doctor-grid-item"
                role="listitem"
              >
                <DoctorCard doctor={doctor} onBook={handleBook} />
              </div>
            ))}
          </div>
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