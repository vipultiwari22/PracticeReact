import { useState } from 'react'
import './App.css'
import Button from './compoent/Button'

function App() {
  const handle = () => {
    console.log("Button Clicked");
  }

  return (
    <>
      <Button text="Click Me!" onClick={handle} />
    </>
  )
}

export default App
