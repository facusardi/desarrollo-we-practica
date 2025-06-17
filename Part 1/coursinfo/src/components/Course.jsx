import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {

  const total = props.parts.reduce((sum, part)=> sum + part.exercises, 0)
  console.log(props)
  return (
    <p>Numero de Ejercicio {total}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
   {/*<Part part= {props.parts[0]}/>
    <Part part= {props.parts[1]}/>
    <Part part= {props.parts[2]}/> */}
    {parts.map((part)=><Part key={part.id} name={part.name} exercises={part.exercises}></Part>)}
    
    </div>
  )
}
const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}


const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/> 
      <Total parts={course.parts} /> 
    </div>
  )
}

export default Course