import React from 'react'

const Stadistic = ({bueno, neutral, malo}) => {

const getAll = () => bueno + neutral + malo
  const getProm = () =>getAll()===0 ? 0 : (bueno - malo) / getAll() 
  const getDisparo = () =>getAll()===0 ? 0 : bueno*100 / getAll()

  return (
    <div>
        <h1>Estadistica</h1>
      <p>Comentarios Buenos: {bueno}</p>
      <p>Comentarios Neutrales: {neutral}</p>
      <p>Comentarios Malos: {malo}</p>
      <p>Todos los Comentarios: {getAll()}</p>
      <p>Promedio de Comentarios: {getProm()}%</p>
      <p>Porcentaje de Comentarios Buenos: {getDisparo()}%</p>
    </div>
  )
}

export default Stadistic
