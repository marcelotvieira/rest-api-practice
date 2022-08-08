import React from 'react'
import './CountryCard.css'

export function CountryCard( { country, setCountryFunction } ) {
    const { name, flags, population, region, capital } = country;

    const countryPage = e => {
      console.log(setCountryFunction);
      setCountryFunction([country]);
    }
  return (
    <div className='country-card' onClick={countryPage}>
        <div className="country-image">
            <img src={flags.svg} alt="" />
        </div>
        <div className="country-info">
            <h3>{name}</h3>
            <p>Population: <span>{(population).toLocaleString()}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
        </div>
    </div>
  )
}
