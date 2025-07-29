import React from 'react'

const PersonsList = ({persons, handleDelete}) => {
    
  return (
    <div>
        <ul>
        {persons.map((p, i) => (
          <li key={i}>{p.name}:  {p.number}
            <button onClick = {() => handleDelete(p.id, p.name)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonsList;