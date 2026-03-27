import React from 'react'
import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsSection from './Components/Card'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StatsSection/>
    </div>
  )
}

export default App