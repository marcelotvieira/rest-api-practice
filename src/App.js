import React, { useState } from 'react'
import { Content } from './Components/Content'
import { CountryCard } from './Components/CountryCard';
import { Header } from './Components/Header';
import './global.css'



export default function App() {

  const toggleTheme = e => {
    document.body.classList.toggle('dark');
    e.target.parentElement.parentElement.classList.toggle('dark');
  }
  const countryInfo = e => setAppState(['teste']);
  const [appState, setAppState] = useState([]);

  const backToHome = () => {
    setAppState([])
  }
  return (
    appState.length !== 0?
    <div>
        <Header theme='' setTheme={toggleTheme} />

      <div className='country-page'>
        <button className='back-button' onClick={backToHome}><i class="fa-solid fa-arrow-left-long"></i> Back</button>
        <div className='country-container'>
          <img src={appState[0].flags.svg} alt="" />
          <div className='country-data' >
            <h2>{appState[0].name}</h2>
            <div class="infos">
              <p>Native Name: <span>{appState[0].nativeName}</span></p>
              <p>Population: <span>{(appState[0].population).toLocaleString()}</span></p>
              <p>Region: <span>{appState[0].region}</span></p>
              <p>Sub Region: <span>{appState[0].subregion}</span></p>
              <p>Capital: <span>{appState[0].capital}</span></p>
              <p>Top Level Domain: <span>{appState[0].topLevelDomain.join(', ')}</span></p>
              <p>Currencies: <span>
                {appState[0].currencies.reduce((acc, curr) => {
                  acc.push(curr.name);
                  return acc;
                }, []).join(', ')}
              </span></p>
              <p>Languages: <span>
                {appState[0].languages.reduce((acc, curr) => {
                  acc.push(curr.name);
                  return acc;
                }, []).join(', ')}
              </span></p>
            </div>
            <div className='border-countries'>
            <p>Border Countries:
              {
                appState[0].borders ?
                appState[0].borders.map( borderCountry => <span className='border-country'>{borderCountry}</span>) :
                null
                }
              </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
     : appState.length === 0 ? 
    <div>
        <Header theme='' setTheme={toggleTheme} />
      <Content setCountryPage={setAppState} />
    </div>
    :
    null
  )

}


