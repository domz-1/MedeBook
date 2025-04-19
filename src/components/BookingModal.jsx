import React, { useState } from 'react'

function BookingModal({ doctor, timeSlots, onClose, onConfirm }) {
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [patientName, setPatientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const getAvailableDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push(date.toISOString().split('T')[0])
    }
    return dates
  }

  const handleConfirm = () => {
    if (!selectedTime || !selectedDate || !patientName || !phoneNumber) {
      setError('Please fill in all fields')
      return
    }

    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorImage: doctor.image,
      doctorSpecialty: doctor.specialty,
      doctorLocation: doctor.location,
      date: selectedDate,
      time: selectedTime,
      patientName,
      phoneNumber,
      status: 'upcoming'
    }

    // Save to localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, appointment]))

    onConfirm(appointment)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="modal-header">
          <div className="doctor-profile">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="modal-doctor-image"
            />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialty}</p>
              <p>{doctor.location}</p>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="patientName">Your Name</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={e => setPatientName(e.target.value)}
              className="form-input search-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="form-input"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <select
              id="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="date-select"
              required
            >
              <option value="">Choose a date</option>
              {getAvailableDates().map(date => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Time</label>
            <div className="time-grid">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(slot)}
                  type="button"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="modal-actions">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button 
              className="confirm-button"
              onClick={handleConfirm}
              disabled={!selectedTime || !selectedDate || !patientName || !phoneNumber}
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