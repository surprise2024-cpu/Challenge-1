import { useState } from 'react'
import './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Section1 } from './components/Section1/Section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        
        <div>
          <Section1 />
        </div>

      </div>
      
      <Footer />

    </div>
  )
}

export default App
