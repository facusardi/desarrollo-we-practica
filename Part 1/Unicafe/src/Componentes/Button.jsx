import React from 'react'


const Button = ({ onVote }) => (
  <div>
    <button onClick={() => onVote('bueno')}>Bueno</button>
    <button onClick={() => onVote('neutral')}>Neutral</button>
    <button onClick={() => onVote('malo')}>Malo</button>
  </div>
)

export default Button