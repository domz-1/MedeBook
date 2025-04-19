import { useState, useEffect } from 'react'
import './App.css'
import DoctorDirectory from './components/DoctorDirectory'
import AppointmentsSummary from './components/AppointmentsSummary'
import LandingPage from './components/LandingPage'
import NavHeader from './components/NavHeader'

function App() {
  const [theme, setTheme] = useState('light')
  const [appointments, setAppointments] = useState([])
  const [activeTab, setActiveTab] = useState('landing')
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const addAppointment = (appointment) => {
    setAppointments(prev => [...prev, appointment])
  }

  const handleGetStarted = () => {
    setShowLanding(false)
    setActiveTab('directory')
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setShowLanding(false)
  }

  const handleHomeClick = () => {
    setShowLanding(true)
    setActiveTab('landing')
  }

  return (
    <div className="app">
      <NavHeader 
        theme={theme}
        onToggleTheme={toggleTheme}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onHomeClick={handleHomeClick}
      />
      
      <main className="main-content">
        {showLanding ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : (
          <>
            {activeTab === 'directory' ? (
              <DoctorDirectory onBookAppointment={addAppointment} />
            ) : (
              <AppointmentsSummary appointments={appointments} />
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MedBook. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
