import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
  };


  const addPerson = (event) => {
    event.preventDefault();
    
   if (persons.some(person => person.name === newName)) 
    {
    alert(`${newName} is already added to phonebook`);
    return; 
    }
    const personObject = { name: newName, number: newNumber };
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div> 
      <h2>Numbers</h2>
      <ul>
        {persons.map((p, i) => (
          <li key={i}>{p.name} {p.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
