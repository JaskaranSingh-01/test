import React, { useEffect, useState } from 'react'
import '../index.css';
import useDarkModeToggle from './useDarkModeToggle';
import useSidebarToggle from './useSidebarToggle'


const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkModeToggle();
  const { isSidebarOpen, toggleSidebar, closeSidebar, openSidebar } = useSidebarToggle();
  return (
    <section>

      <nav className={isSidebarOpen ? 'sidebar' : 'sidebar close'}>
        <header onClick={toggleSidebar} >
          <div class="image-text">
            <span class="image">
              <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="" />
            </span>
            <div class="text logo-text">
              <div>

              </div>
              <div class="name">Jaskaran </div>
              <span class="profession">Web developer</span>
            </div>
          </div>
          <i class='bx bx-chevron-right toggle'></i>
        </header>
        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-links">
              <li class="nav-link">
                <a href="dashboard">
                  <i class='bx bx-home-alt icon' ></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="revenue">
                  <i class='bx bx-bar-chart-alt-2 icon' ></i>
                  <span class="text nav-text">My Classes</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="Notifications">
                  <i class='bx bx-bell icon'></i>
                  <span class="text nav-text">Notifications</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="group-chats">
                  <i class='bx bx-pie-chart-alt icon' ></i>
                  <span class="text nav-text">Group Chats</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="Instructors">
                  <i class='bx bx-support icon' ></i>
                  <span class="text nav-text">Instructors</span>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bottom-content">
            <li class="">
              <a href="logout">
                <i class='bx bx-log-out icon' ></i>
                <span class="text nav-text">Logout</span>
              </a>
            </li>
            <li class="mode" onClick={toggleDarkMode}>
              <div class="sun-moon">
                <i class='bx bx-moon icon moon'></i>
                <i class='bx bx-sun icon sun'></i>
              </div>
              <span class="mode-text text">Dark mode</span>
              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>

          </div>
        </div>
      </nav>  
    </section>
  )
}

export default Navbar   