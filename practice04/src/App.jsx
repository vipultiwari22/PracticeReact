import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './component/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Course</h1>
      <List list="CSE" />
      <List list="CSS" />
      <List list="HTML" />
      <List list="React" />
      <List list="English" />
      <List list="JavaScript" />
    </>
  )
}

export default App
