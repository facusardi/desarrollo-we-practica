const App = () => {
  const course = 'Desarrollo de aplicaciones Half Stack'
  const part1 = 'Fundamentos de React'
  const exercises1 = 10
  const part2 = 'Uso de props para pasar datos'
  const exercises2 = 7
  const part3 = 'Estado de un componente'
  const exercises3 = 14
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Numero de Ejercicio{exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
  
export default App
