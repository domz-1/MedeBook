import React, { useState } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaMapMarkerAlt, FaPhoneAlt, FaEdit, FaTrash } from 'react-icons/fa'
import { BsCalendarX } from 'react-icons/bs'  // Import calendar icon instead of using image
import BookingModal from './BookingModal'
import { doctors, timeSlots } from '../database/data'
import useBookingStore from '../store/bookingStore'

function AppointmentsSummary() {
  const { appointments, cancelAppointment, updateAppointment } = useBookingStore()
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const handleCancel = (appointmentId) => {
    cancelAppointment(appointmentId)
  }

  const handleReschedule = (appointment) => {
    setSelectedAppointment(appointment)
    setShowRescheduleModal(true)
  }

  const handleRescheduleConfirm = (updatedAppointment) => {
    updateAppointment(updatedAppointment.id, updatedAppointment)
    setShowRescheduleModal(false)
  }

  if (appointments.length === 0) {
    return (
      <div className="appointments-empty" role="status" aria-live="polite">
        <h2>No Appointments</h2>
        <p>You haven't booked any appointments yet.</p>
        <div className="empty-state-icon">
          <BsCalendarX size={64} aria-hidden="true" />  {/* Use icon instead of image */}
        </div>
      </div>
    )
  }

  return (
    <div className="appointments-summary" role="main">
      <h2>Your Appointments</h2>
      <div className="appointments-list" role="list">
        {appointments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map(appointment => (
            <div 
              key={`${appointment.doctorId}-${appointment.date}-${appointment.time}`} 
              className="appointment-card"
              role="listitem"
            >
              <div className="appointment-header">
                <img 
                  src={appointment.doctorImage} 
                  alt={`${appointment.doctorName}'s profile picture`} 
                  className="appointment-doctor-image"
                />
                <div className="appointment-doctor-info">
                  <h3>{appointment.doctorName}</h3>
                  <p>{appointment.doctorSpecialty}</p>
                </div>
                <div className="appointment-status">
                  <span 
                    className={`status-badge ${appointment.status}`}
                    role="status"
                    aria-label={`Appointment status: ${appointment.status}`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>

              <div className="appointment-details" role="list">
                <div className="detail-item" role="listitem">
                  <FaCalendarAlt className="detail-icon" aria-hidden="true" />
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

                <div className="detail-item" role="listitem">
                  <FaClock className="detail-icon" aria-hidden="true" />
                  <div className="detail-content">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">{appointment.time}</span>
                  </div>
                </div>

                <div className="detail-item" role="listitem">
                  <FaMapMarkerAlt className="detail-icon" aria-hidden="true" />
                  <div className="detail-content">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{appointment.doctorLocation}</span>
                  </div>
                </div>

                <div className="detail-item" role="listitem">
                  <FaUser className="detail-icon" aria-hidden="true" />
                  <div className="detail-content">
                    <span className="detail-label">Patient Name</span>
                    <span className="detail-value">{appointment.patientName}</span>
                  </div>
                </div>

                <div className="detail-item" role="listitem">
                  <FaPhoneAlt className="detail-icon" aria-hidden="true" />
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
                  aria-label={`Reschedule appointment with ${appointment.doctorName}`}
                >
                  <FaEdit className="action-icon" aria-hidden="true" /> Reschedule
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(appointment.doctorId)}
                  aria-label={`Cancel appointment with ${appointment.doctorName}`}
                >
                  <FaTrash className="action-icon" aria-hidden="true" /> Cancel
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
          initialData={{
            date: selectedAppointment.date,
            time: selectedAppointment.time,
            patientName: selectedAppointment.patientName,
            phoneNumber: selectedAppointment.phoneNumber
          }}
        />
      )}
    </div>
  )
}

export default AppointmentsSummary