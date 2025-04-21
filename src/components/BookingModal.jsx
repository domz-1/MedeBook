import React, { useState, useEffect, useRef } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone } from 'react-icons/fa'

const BookingModal = ({ doctor, onClose, onConfirm, timeSlots, initialData = null }) => {
  const [selectedDate, setSelectedDate] = useState(initialData?.date || '')
  const [selectedTime, setSelectedTime] = useState(initialData?.time || '')
  const [patientName, setPatientName] = useState(initialData?.patientName || '')
  const [phoneNumber, setPhoneNumber] = useState(initialData?.phoneNumber || '')
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !patientName || !phoneNumber) {
      return
    }
    
    onConfirm({
      date: selectedDate,
      time: selectedTime,
      patientName,
      phoneNumber,
      status: 'upcoming'
    })
  }

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        role="document"
      >
        <button 
          className="close-button" 
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="Close booking modal"
        >
          ×
        </button>
        
        <div className="doctor-profile">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="modal-doctor-image" 
          />
          <div className="doctor-info">
            <h2 id="modal-title">{doctor.name}</h2>
            <p className="specialty">{doctor.specialty}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="patientName">
              <FaUser className="form-icon" aria-hidden="true" /> Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              className="form-input"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">
              <FaPhone className="form-icon" aria-hidden="true" /> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="form-input"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">
              <FaCalendarAlt className="form-icon" aria-hidden="true" /> Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label id="time-slots-label">
              <FaClock className="form-icon" aria-hidden="true" /> Select Time
            </label>
            <div 
              className="time-slots"
              role="radiogroup"
              aria-labelledby="time-slots-label"
            >
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                  role="radio"
                  aria-checked={selectedTime === time}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="confirm-button"
              disabled={!selectedDate || !selectedTime || !patientName || !phoneNumber}
              aria-disabled={!selectedDate || !selectedTime || !patientName || !phoneNumber}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal