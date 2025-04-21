import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateUser: (userData) => set((state) => ({
    user: { ...state.user, ...userData }
  }))
}))

export default useUserStore 