import { useState, useEffect } from 'react'
import './App.css'
import DoctorDirectory from './components/DoctorDirectory'
import AppointmentsSummary from './components/AppointmentsSummary'
import LandingPage from './components/LandingPage'
import NavHeader from './components/NavHeader'

function App() {
  const [theme, setTheme] = useState('light')
  const [appointments, setAppointments] = useState([])
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const addAppointment = (appointment) => {
    setAppointments(prev => [...prev, appointment])
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
