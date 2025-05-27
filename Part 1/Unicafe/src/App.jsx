import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [bueno, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [malo, setBad] = useState(0)

  return (
    <div>
      <h1>Dar Retroalimentacion</h1>
      <button onClick={() => setGood(bueno + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(malo + 1)}>bad</button>
      <h1>Estadistica</h1>
      <p>Bueno {bueno}</p>
      <p>Neutral {neutral}</p>
      <p>Malo {malo}</p>
    </div>
  )
}

export default App