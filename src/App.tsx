import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Section1 } from './components/Section1/Section1'
import { Band } from './components/Band/Band'
import { PopularThisWeek } from './components/PopularThisWeek/PopularThisWeek'
import { TopSellers } from './components/TopSellers/TopSellers'
import { ExploreArtWorks } from './components/ExploreArtWorks/ExploreArtWorks'
import { Community } from './components/Community/Community'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        
        <Section1 />

        <Band />

        <PopularThisWeek />
        
        <TopSellers />

        <ExploreArtWorks />

        <Community />

      </div>
      
      <Footer />

    </div>
  )
}

export default App
