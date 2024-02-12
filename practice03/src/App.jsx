import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Practice React 03 Question </h1>
      <Header title="We can use React for the understding React like the Relationship ?😊" />
    </>
  )
}

export default App
