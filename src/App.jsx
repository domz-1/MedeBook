import { useEffect, useState } from 'react'
import './App.css'
import DoctorDirectory from './components/DoctorDirectory'
import AppointmentsSummary from './components/AppointmentsSummary'
import LandingPage from './components/LandingPage'
import NavHeader from './components/NavHeader'
import useThemeStore from './store/themeStore'
import useBookingStore from './store/bookingStore'
import useUserStore from './store/userStore'

function App() {
  const { theme, toggleTheme } = useThemeStore()
  const { appointments, addAppointment } = useBookingStore()
  const { isAuthenticated } = useUserStore()
  const [activeTab, setActiveTab] = useState('home')

  // Add useEffect to save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="app">
      <NavHeader 
        theme={theme}
        onToggleTheme={toggleTheme}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      <main className="main-content">
        {activeTab === 'home' ? (
          <>
            <LandingPage />
            <DoctorDirectory onBookAppointment={addAppointment} />
          </>
        ) : (
          <AppointmentsSummary appointments={appointments} />
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MedBook. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
