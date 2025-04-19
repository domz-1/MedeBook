import React from 'react';
import { FaHome, FaUserMd, FaCalendarCheck } from 'react-icons/fa';
import { BiSun, BiMoon } from 'react-icons/bi';
import ThemeToggle from './ThemeToggle';

function NavHeader({ theme, onToggleTheme, activeTab, onTabChange, onHomeClick }) {
  return (
    <header className="nav-header">
      <div className="nav-content">
        <div className="logo">
          <FaUserMd className="logo-icon" />
          <h1>MedBook</h1>
        </div>
        
        <nav className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'directory' ? 'active' : ''}`}
            onClick={() => onTabChange('directory')}
          >
            <FaUserMd className="nav-icon" />
            <span>Find Doctor</span>
          </button>
          <button 
            className={`nav-link ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => onTabChange('appointments')}
          >
            <FaCalendarCheck className="nav-icon" />
            <span>My Appointments</span>
          </button>
          <button 
            className="nav-link home-button"
            onClick={onHomeClick}
          >
            <FaHome className="nav-icon" />
            <span>Home</span>
          </button>
        </nav>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}

export default NavHeader;