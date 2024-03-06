import React from 'react'

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return <button onClick={handleClick}>Button from remote</button>
}

export default Button
