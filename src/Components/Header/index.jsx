import React from 'react';
import './Header.css'

export function Header({ theme, setTheme }) {
    console.log(setTheme)


  return (
    <header>
        <h2>Where in the world?</h2>
        <div className='theme-switcher'>
          <button onClick={setTheme}><i class="fa-solid fa-moon"></i> Dark Mode</button>
        </div>
      </header>
  )
}
