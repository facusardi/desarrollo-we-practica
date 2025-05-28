import { useState } from 'react'
import Stadistic from './Componentes/Stadistics'



const App = () => {
  const [votes, setVotes]= useState({
    bueno: 0,
    neutral: 0,
    malo: 0   
})

  return (
    <div>
      <h1>Dar Retroalimentacion</h1>
      <button onClick={() => setVotes({... votes, bueno: votes.bueno + 1})}>Bueno</button>
      <button onClick={() => setVotes({... votes, neutral: votes.neutral + 1})}>Neutral</button>
      <button onClick={() => setVotes({... votes, malo: votes.malo + 1})}>Malo</button>
      <Stadistic votes={votes}/>
    </div>
  )
}

export default App