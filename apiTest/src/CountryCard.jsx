import React, { useState, useEffect } from 'react';
import './CountryCard.css';

function CountryCard() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/jordan')
      .then((response) => response.json())
      .then((data) => {
        const [country] = data;
        setCountryData(country);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{countryData.name.common}</h2>
      <p>Region: {countryData.region}</p>
      <p>Language: {countryData.languages.ara}</p>
      <p>Currency: {countryData.currencies.JOD.name}</p>
      <p>Population: {countryData.population}</p>
      <p>
        Maps: <a href={countryData.maps.googleMaps}>Google Maps</a>
      </p>
    </div>
  );
}

export default CountryCard;
