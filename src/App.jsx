import { useState, useEffect } from 'react'
import './App.css'
import DoctorDirectory from './components/DoctorDirectory'
import AppointmentsSummary from './components/AppointmentsSummary'
import LandingPage from './components/LandingPage'
import NavHeader from './components/NavHeader'

function App() {
  const [theme, setTheme] = useState('light')
  const [appointments, setAppointments] = useState(() => {
    // Initialize appointments from localStorage
    const saved = localStorage.getItem('appointments')
    return saved ? JSON.parse(saved) : []
  })
  const [activeTab, setActiveTab] = useState('home')

  // Add useEffect to save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(), // Add unique ID
      status: 'upcoming'
    }
    setAppointments(prev => [...prev, newAppointment])
    setActiveTab('appointments') // Switch to appointments tab after booking
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }



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
