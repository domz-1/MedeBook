import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

function ThemeToggle({ theme, onToggle , className}) {
  return (
    <button 
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <BiMoon size={24} /> : <BiSun size={24} color='white' />}
    </button>
  );
}

export default ThemeToggle;