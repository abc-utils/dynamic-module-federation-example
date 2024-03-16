import React from 'react'

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked from first remote app')
  }
  return <button onClick={handleClick}>Button from first remote app</button>
}

export default Button
