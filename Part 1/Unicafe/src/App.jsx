import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [bueno, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [malo, setBad] = useState(0)

  const getAll = () => bueno + neutral + malo
  const getProm = () => (bueno - malo) / getAll() 
  const getDisparo = () => bueno*100/getAll()
  return (
    <div>
      <h1>Dar Retroalimentacion</h1>
      <button onClick={() => setGood(bueno + 1)}>Bueno</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(malo + 1)}>Malo</button>
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

export default App