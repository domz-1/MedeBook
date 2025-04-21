import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Logo from '../assets/logo.png'  // Updated import path


function NavHeader({ theme, onToggleTheme, activeTab, onTabChange }) {
  return (
      <header className="nav-header">
          <div className="nav-content">
              <div className="logo">
                  <img src={Logo} alt="logo-of-medebok" />
              </div>
              <div className="nav-links">
                  <button
                      className={`nav-link ${
                          activeTab === 'home' ? 'active' : ''
                      }`}
                      onClick={() => onTabChange('home')}
                  >
                      <CiHome className="nav-icon" />
                      <span>Home</span>
                  </button>
                  <button
                      className={`nav-link ${
                          activeTab === 'appointments' ? 'active' : ''
                      }`}
                      onClick={() => onTabChange('appointments')}
                  >
                      <FaCalendarAlt className="nav-icon" />
                      <span>My Appointments</span>
                  </button>
                  <ThemeToggle
                      theme={theme}
                      onToggle={onToggleTheme}
                      className="nav-icon"
                  />
              </div>
          </div>
      </header>
  );
}

export default NavHeader;