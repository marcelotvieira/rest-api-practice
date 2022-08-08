import React from 'react';
import './Header.css'

export function Header({ theme, setTheme }) {

  const homeReload = () => {
    window.location.reload();
  }
  return (
    <header>
        <h2 onClick={homeReload}>Where in the world?</h2>
        <div className='theme-switcher'>
          <button onClick={setTheme}><i class="fa-solid fa-moon"></i> Dark Mode</button>
        </div>
      </header>
  )
}
