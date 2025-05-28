import React from 'react'

const Stadistic = ({votes}) => {

  const getAll = () => votes.bueno + votes.neutral + votes.malo
  const getProm = () =>getAll()===0 ? 0 : (votes.bueno - votes.malo) / getAll() 
  const getDisparo = () =>getAll()===0 ? 0 : votes.bueno*100 / getAll()

  return (
    <div>
        <h1>Estadistica</h1>
      <p>Comentarios Buenos: {votes.bueno}</p>
      <p>Comentarios Neutrales: {votes.neutral}</p>
      <p>Comentarios Malos: {votes.malo}</p>
      <p>Todos los Comentarios: {getAll()}</p>
      <p>Promedio de Comentarios: {getProm()}%</p>
      <p>Porcentaje de Comentarios Buenos: {getDisparo()}%</p>
    </div>
  )
}

export default Stadistic
