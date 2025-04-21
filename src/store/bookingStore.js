import { create } from 'zustand'

const useBookingStore = create((set) => ({
  appointments: [],
  selectedDoctor: null,
  selectedDate: null,
  selectedTime: null,
  setAppointments: (appointments) => set({ appointments }),
  addAppointment: (appointment) => set((state) => ({
    appointments: [...state.appointments, appointment]
  })),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  clearSelection: () => set({
    selectedDoctor: null,
    selectedDate: null,
    selectedTime: null
  })
}))

export default useBookingStore 