import React, { useState } from 'react';
import { CountryCard } from '../CountryCard'
import './Content.css';

const baseUrl = 'https://restcountries.com/v2/all';


export function Content({ setCountryPage }) {


const defaultContent = ['DEU','USA','BRA','ISL','AFG','ALA','ALB','DZA',];


  const filter = async e => {
    const baseUrl = 'https://restcountries.com/v2/region/'
    const filter = e.target.options[e.target.selectedIndex].value;
    try {
      const response = await fetch(baseUrl+filter);
      setcountries(await response.json());
    } catch (error) {
      console.log('Ops! Algo de errado aconteceu!')
    }
  }

  const search = async e => {
    e.preventDefault();
    const baseUrl = 'https://restcountries.com/v2/name/';
    const search = (e.target.search.value).toLowerCase();
    try {
      const response = await fetch(baseUrl+search);
      const parsed = await response.json();
      if (parsed.status === 404) {
        throw new Error('Not found');
      }
      setcountries(parsed);
    } catch (error) {
      e.target.search.value = '';
      e.target.search.placeholder = 'Not found!';
      return(error.mesage)
    }
  }

  const [countries, setcountries] = useState(
    []
  );

  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      const parsed = await response.json();
      if (parsed.length === 1) {
        setcountries(await parsed);
        return;
      }
      const defaultObj = parsed.filter( country => {
        if (defaultContent.includes(country.alpha3Code)) {
          return country;
        }
      });
      setcountries(defaultObj);
    } catch (error) {
      console.log(`Ops! Algo deu errado. : (`)
    }
  }

  window.onload = () => fetchCountries(baseUrl);


  return (
    <div className='content'>
      <div className="panel">
        <form onSubmit={search}>
          <div className='search-box'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input name='search' type="text" placeholder='Search for a country...' />
            </div>
        </form>
        <div className="filter-box">
          <select onChange={filter} className='filter' name="filter" id="filter">
            <option value="" selected disabled>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <main>
          {
          countries.map(country => <CountryCard setCountryFunction={setCountryPage} country={country} />
             )}
      </main>
    </div>
  )
}


