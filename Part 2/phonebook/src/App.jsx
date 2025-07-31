import Filter from './component/Filter';
import AddPersons from './component/AddPersons';
import PersonsList from './component/PersonsList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './service/PersonService';
import Notification from './component/Notification';
import './Notification.css'


function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [mensaje, setMensaje]= useState(null)
  const [tipo, setTipo]= useState('success')

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

  const existingPerson = persons.find(person => person.name === newName);
  const personObject = { name: newName, number: newNumber };

  if (existingPerson) {
    const confirmUpdate = window.confirm(
      `${newName} ya está en la lista. ¿Querés reemplazar el número antiguo con uno nuevo?`
    );

    if (confirmUpdate) {
      personService
        .update(existingPerson.id, personObject)
        .then(updatedPerson => {
          setPersons(persons.map(p => 
            p.id !== existingPerson.id ? p : updatedPerson
          ));
          setMensaje(`Se actualizó el número de ${updatedPerson.name}`);
          setTipo('success');
          setTimeout(() => setMensaje(null), 5000);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          setMensaje(`Error: La persona '${newName}' ya no existe en el servidor.`);
          setTipo('error');
          setTimeout(()=> setMensaje(null), 5000);
          setPersons(persons.filter(p => p.id !== existingPerson.id));
        });

      return; 
    } else {
      return;
    }
  }

  personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setMensaje(`Se agregó a ${returnedPerson.name}`);
      setTipo('success');
      setTimeout(() => setMensaje(null), 5000);
      setNewName('');
      setNewNumber('');
    })
    .catch(error => {
      setMensaje('Ocurrió un error al agregar la persona.');
      setTipo('error');
      setTimeout(() => setMensaje(null), 5000);
    });
};



  return (
    <div>  
      <h2>Phonebook</h2>
      <Notification mensaje={mensaje} tipo={tipo}/>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>Add a New</h2>
      <AddPersons onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonsList persons={PersonToShow} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
