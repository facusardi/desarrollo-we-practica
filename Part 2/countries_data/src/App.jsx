import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    const result = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(result);
  }, [filter, countries]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const renderResults = () => {
    if (filter === '') {
      return <div>Escribe para buscar un país</div>;
    }

    if (filteredCountries.length > 10) {
      return <div>Demasiados resultados, especificá mejor la búsqueda</div>;
    }

    if (filteredCountries.length > 1) {
      return <CountryList countries={filteredCountries} />;
    }

    if (filteredCountries.length === 1) {
      return <CountryDetails country={filteredCountries[0]} />;
    }

    return <div>No se encontraron resultados</div>;
  };

  return (
    <div>
      <h1>Country Finder</h1>
      <div>
        Find countries: <input value={filter} onChange={handleFilterChange} />
      </div>
      {renderResults()}
    </div>
  );
}

export default App;
