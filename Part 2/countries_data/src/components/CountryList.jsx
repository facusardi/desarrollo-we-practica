import React from 'react';

const CountryList = ({ countries, onSelectCountry }) => {
  if (countries.length > 10) {
    return <div>Demaciadas coincidencias, especifica mas la busqueda</div>;
  }

  if (countries.length === 1) {
    return null; 
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          {country.name.common}{' '}
          <button onClick={() => onSelectCountry(country)}>Ver</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
