import React, { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaUser, FaPhoneAlt } from 'react-icons/fa'
import { MdEdit, MdDelete } from 'react-icons/md'
import { BsCalendarX } from 'react-icons/bs'
import BookingModal from './BookingModal'
import { doctors, timeSlots } from '../database/data'

function AppointmentsSummary({ appointments: propAppointments }) {
  const [appointments, setAppointments] = useState([])
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)

  useEffect(() => {
    // Load appointments from localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    setAppointments(savedAppointments)
  }, [])

  const handleReschedule = (appointment) => {
    setSelectedAppointment(appointment)
    setShowRescheduleModal(true)
  }

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(app => app.doctorId !== appointmentId)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    setAppointments(updatedAppointments)
  }

  const handleRescheduleConfirm = (updatedAppointment) => {
    const updatedAppointments = appointments.map(app => 
      app.doctorId === updatedAppointment.doctorId ? updatedAppointment : app
    )
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    setAppointments(updatedAppointments)
    setShowRescheduleModal(false)
  }

  if (appointments.length === 0) {
    return (
      <div className="appointments-empty">
        <h2>No Appointments</h2>
        <p>You haven't booked any appointments yet.</p>
        <div className="empty-state-image">
          <BsCalendarX className="empty-calendar-icon" />
        </div>
      </div>
    )
  }

  return (
    <div className="appointments-summary">
      <h2>Your Appointments</h2>
      <div className="appointments-list">
        {appointments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map(appointment => (
            <div key={`${appointment.doctorId}-${appointment.date}-${appointment.time}`} className="appointment-card">
              <div className="appointment-header">
                <img 
                  src={appointment.doctorImage} 
                  alt={appointment.doctorName} 
                  className="appointment-doctor-image"
                />
                <div className="appointment-doctor-info">
                  <h3>{appointment.doctorName}</h3>
                  <p>{appointment.doctorSpecialty}</p>
                </div>
                <div className="appointment-status">
                  <span className={`status-badge ${appointment.status}`}>
                    {appointment.status}
                  </span>
                </div>
              </div>

              <div className="appointment-details">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Date</span>
                    <span className="detail-value">
                      {new Date(appointment.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaClock className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">{appointment.time}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{appointment.doctorLocation}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaUser className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Patient Name</span>
                    <span className="detail-value">{appointment.patientName}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaPhoneAlt className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Phone</span>
                    <span className="detail-value">{appointment.phoneNumber}</span>
                  </div>
                </div>
              </div>

              <div className="appointment-actions">
                <button
                  className="reschedule-button"
                  onClick={() => handleReschedule(appointment)}
                >
                  <MdEdit className="action-icon" /> Reschedule
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(appointment.doctorId)}
                >
                  <MdDelete className="action-icon" /> Cancel
                </button>
              </div>
            </div>
          ))}
      </div>

      {showRescheduleModal && selectedAppointment && (
        <BookingModal
          doctor={{
            id: selectedAppointment.doctorId,
            name: selectedAppointment.doctorName,
            image: selectedAppointment.doctorImage,
            specialty: selectedAppointment.doctorSpecialty,
            location: selectedAppointment.doctorLocation
          }}
          timeSlots={timeSlots}
          onClose={() => setShowRescheduleModal(false)}
          onConfirm={handleRescheduleConfirm}
        />
      )}
    </div>
  )
}

export default AppointmentsSummary