import React from 'react'

const Notification = ({mensaje, tipo}) => {
  if (mensaje===null) return null;
    return (
    <div className={`notification ${tipo}`}>{mensaje}</div>
  )
}

export default Notification