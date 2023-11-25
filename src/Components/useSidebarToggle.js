import { useState } from 'react';

const useSidebarToggle = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Open sidebar
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  // Return state and functions to toggle, close, and open the sidebar
  return { isSidebarOpen, toggleSidebar, closeSidebar, openSidebar };
};

export default useSidebarToggle;
