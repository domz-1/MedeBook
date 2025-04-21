import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Logo from '../assets/logo.png'  // Updated import path


function NavHeader({ theme, onToggleTheme, activeTab, onTabChange }) {
  return (
    <header className="nav-header" role="banner">
      <div className="nav-content">
        <div className="logo">
          <img src={Logo} alt="MedBook logo" />
        </div>
        <nav className="nav-links" role="navigation" aria-label="Main navigation">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => onTabChange('home')}
            role="tab"
            aria-selected={activeTab === 'home'}
            aria-controls="home-tabpanel"
          >
            <CiHome className="nav-icon" aria-hidden="true" />
            <span>Home</span>
          </button>
          <button
            className={`nav-link ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => onTabChange('appointments')}
            role="tab"
            aria-selected={activeTab === 'appointments'}
            aria-controls="appointments-tabpanel"
          >
            <FaCalendarAlt className="nav-icon" aria-hidden="true" />
            <span>My Appointments</span>
          </button>
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            className="nav-icon"
          />
        </nav>
      </div>
    </header>
  );
}

export default NavHeader;