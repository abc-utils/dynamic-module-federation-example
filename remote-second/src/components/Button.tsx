import React from 'react'

const Button = (): JSX.Element => {
  const handleClick = () => {
    console.log('Button clicked from the second application')
  }
  return <button onClick={handleClick}>Button from second remote app</button>
}

export default Button
