import React from 'react'
import { StadisticLine } from './StadisticLine'

const Stadistic = ({votes}) => {
  const getAll = () => votes.bueno + votes.neutral + votes.malo
  const getProm = () => (votes.bueno - votes.malo) / getAll()+'%'
  const getDisparo = () => (votes.bueno * 100) / getAll()+'%'
  return (
    getAll()=== 0 ? <p>No hay retroalimentacion</p> :
    <div>
      <StadisticLine text='Comentarios buenos:' value={votes.bueno} />
      <StadisticLine text='Comentarios neutrales:' value={votes.neutral} />
      <StadisticLine text='Comentarios malos:' value={votes.malo} />
      <StadisticLine text='Total de comentarios:' value={getAll()} />
      <StadisticLine text='Promedio de comentarios:' value={getProm()}/>
      <StadisticLine text='Porcentaje de comentarios buenos:' value={getDisparo()}/>
    </div>
  )
}

export default Stadistic
