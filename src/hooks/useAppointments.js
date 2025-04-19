import { useState, useEffect } from 'react';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  const cancelAppointment = (appointmentId) => {
    setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
  };

  const rescheduleAppointment = (appointmentId, newDate, newTime) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === appointmentId 
        ? { ...apt, date: newDate, time: newTime }
        : apt
    ));
  };

  return {
    appointments,
    addAppointment,
    cancelAppointment,
    rescheduleAppointment
  };
}; 