import React from 'react'

const Notification = ({mensaje}) => {
  if (mensaje===null) return null;
    return (
    <div className='notification'>{mensaje}</div>
  )
}

export default Notification