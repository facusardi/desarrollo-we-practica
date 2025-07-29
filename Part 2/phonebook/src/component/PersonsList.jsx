import React from 'react'

const PersonsList = ({persons}) => {
    
  return (
    <div>
        <ul>
        {persons.map((p, i) => (
          <li key={i}>{p.name}:  {p.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default PersonsList;