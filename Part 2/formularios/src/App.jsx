import { useState } from 'react';
import Filter from './component/Filter';
import AddPersons from './component/AddPersons';
import PersonsList from './component/PersonsList';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
      setFilter(event.target.value);
  };

  const PersonToShow = persons.filter((p)=> p.name.toLowerCase().includes(filter.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();
    
   if (persons.some(person => person.name === newName)) 
    {
    alert(`${newName} ya está en la lista`);
    return; 
    }
    const personObject = { name: newName, number: newNumber };
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>Add a New</h2>
      <AddPersons onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      {/*<ul>
        {PersonToShow.map((p, i) => (
          <li key={i}>{p.name} {p.number}</li>
        ))}
      </ul>*/}
      <PersonsList persons={PersonToShow}/>
    </div>
  );
}

export default App;
