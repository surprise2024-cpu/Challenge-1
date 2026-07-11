import { useState } from 'react'
import './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
