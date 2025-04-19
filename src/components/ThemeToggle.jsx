import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

function ThemeToggle({ theme, onToggle }) {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <BiMoon size={24} /> : <BiSun size={24} />}
    </button>
  );
}

export default ThemeToggle;