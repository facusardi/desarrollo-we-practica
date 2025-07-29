import Filter from './component/Filter';
import AddPersons from './component/AddPersons';
import PersonsList from './component/PersonsList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './service/PersonService';



function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
      setFilter(event.target.value);
  };
  const handleDelete = (id, name) => {
    if(window.confirm('Seguro desa elininar a'+ name +'?'))
    {
      personService.deletePerson(id).then(()=>{ setPersons(persons.filter(p => p.id !== id));})
      .catch(error => { alert('La persona ya no existe en la base de datos')})
    }
  }

  const PersonToShow = persons.filter((p)=> p.name.toLowerCase().includes(filter.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();
    
   if (persons.some(person => person.name === newName)) 
    {
    alert(`${newName} ya está en la lista`);
    return; 
    }
    const personObject = { name: newName, number: newNumber };
    personService.create(personObject).then(returnedPerson =>{
      setPersons(persons.concat(returnedPerson))
      setNewName('');
      setNewNumber('');
    })
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>Add a New</h2>
      <AddPersons onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonsList persons={PersonToShow} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
