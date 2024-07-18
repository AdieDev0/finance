import React from 'react'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Navbars from './Components/navbars'




const App = () => {
  return (
    <div>

      <Navbars/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App