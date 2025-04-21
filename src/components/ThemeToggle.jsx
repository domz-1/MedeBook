import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import useThemeStore from '../store/themeStore';

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button 
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <BiMoon size={24} /> : <BiSun size={24} color='white' />}
    </button>
  );
}

export default ThemeToggle;