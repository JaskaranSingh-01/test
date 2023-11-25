import { useState, useEffect } from 'react';


const useDarkModeToggle = () => {
  // Load initial dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(true);
  const storedDarkMode = localStorage.getItem('darkMode');

  useEffect(() => {
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, [storedDarkMode, setDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Save dark mode state to localStorage
      localStorage.setItem('darkMode', String(newDarkMode));
      return newDarkMode;
    });
  };

  // Effect to update body class based on dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Return state and function to toggle dark mode
  return { darkMode, toggleDarkMode };
};

export default useDarkModeToggle;
