
import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Section1 } from './components/Section1/Section1';
import { Band } from './components/Band/Band';
import { PopularThisWeek } from './components/PopularThisWeek/PopularThisWeek';
import { ExploreArtWorks } from './components/ExploreArtWorks/ExploreArtWorks';
import { Community } from './components/Community/Community';
import { TopSellers } from './components/Topsellers/TopSellers';

// Main app layout that puts all page sections together.
function App() {

  return (
    <div id='app-container'>

      {/* Fixed navigation shown at the top of the page. */}
      <Navbar />

      {/* Main scrollable content of the landing page. */}
      <main id='scrollable'>
        
        <Section1 />

        <Band />

        <PopularThisWeek />
        
        <TopSellers />

        <ExploreArtWorks />

        <Community />

      </main>
      
      {/* Footer shown at the bottom of the page. */}
      <Footer />

    </div>
  )
}

export default App