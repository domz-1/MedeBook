import React, { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone } from 'react-icons/fa'

const BookingModal = ({ doctor, onClose, onConfirm, timeSlots, initialData = null }) => {
  const [selectedDate, setSelectedDate] = useState(initialData?.date || '')
  const [selectedTime, setSelectedTime] = useState(initialData?.time || '')
  const [patientName, setPatientName] = useState(initialData?.patientName || '')
  const [phoneNumber, setPhoneNumber] = useState(initialData?.phoneNumber || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !patientName || !phoneNumber) {
      return // Add proper validation feedback if needed
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="doctor-profile">
          <img src={doctor.image} alt={doctor.name} className="modal-doctor-image" />
          <div className="doctor-info">
            <h2>{doctor.name}</h2>
            <p className="specialty">{doctor.specialty}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="patientName">
              <FaUser className="form-icon" /> Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">
              <FaPhone className="form-icon" /> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">
              <FaCalendarAlt className="form-icon" /> Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label>
              <FaClock className="form-icon" /> Select Time
            </label>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="confirm-button"
              disabled={!selectedDate || !selectedTime || !patientName || !phoneNumber}
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