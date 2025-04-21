import { create } from 'zustand'

const useDoctorsStore = create((set) => ({
  doctors: [],
  loading: false,
  error: null,
  setDoctors: (doctors) => set({ doctors }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  addDoctor: (doctor) => set((state) => ({
    doctors: [...state.doctors, doctor]
  })),
  updateDoctor: (id, updatedDoctor) => set((state) => ({
    doctors: state.doctors.map(doctor => 
      doctor.id === id ? { ...doctor, ...updatedDoctor } : doctor
    )
  })),
  removeDoctor: (id) => set((state) => ({
    doctors: state.doctors.filter(doctor => doctor.id !== id)
  }))
}))

export default useDoctorsStore 