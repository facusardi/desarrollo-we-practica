import { useState } from 'react'
import Stadistic from './Componentes/Stadistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [bueno, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [malo, setBad] = useState(0)

  return (
    <div>
      <h1>Dar Retroalimentacion</h1>
      <button onClick={() => setGood(bueno + 1)}>Bueno</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(malo + 1)}>Malo</button>
      <Stadistic bueno={bueno} neutral={neutral} malo={malo}/>
    </div>
  )
}

export default App