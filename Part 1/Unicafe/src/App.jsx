import { useState } from 'react'
import Stadistic from './Componentes/Stadistics'
import Button from './Componentes/Button'




const App = () => {
const [votes, setVotes]= useState({
        bueno: 0,
        neutral: 0,
        malo: 0   
    })
     const handleVote = (tipo) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [tipo]: prevVotes[tipo] + 1
    }))
  }
  return (
    <div>
      <h1>Dar Retroalimentacion</h1>
      <Button onVote={handleVote} />
      <h1>Estadisticas</h1>      
        <Stadistic votes={votes}/>    
    </div>
  )
}

export default App