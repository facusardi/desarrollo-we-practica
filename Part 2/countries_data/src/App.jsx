import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data));
  }, []);

  useEffect(() => {
    const result = countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(result);
    setSelectedCountry(null); 
  }, [filter, countries]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Find Countries</h1>
      <input value={filter} onChange={handleFilterChange} />
      <CountryList countries={filteredCountries} onSelectCountry={setSelectedCountry} />
      {selectedCountry
        ? <CountryDetails country={selectedCountry} />
        : filteredCountries.length === 1 && <CountryDetails country={filteredCountries[0]} />
      }
    </div>
  );
}

export default App;
