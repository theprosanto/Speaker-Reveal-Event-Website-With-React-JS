import { useState } from 'react'
import './App.css'
import NavBar from './Components/ComponentSection/NavBar'
import Banner from './Components/ComponentSection/Banner'
import LatestNews from './Components/ComponentSection/LatestNews'
import AboutUs from './Components/ComponentSection/AboutUs'
import CoreFeature from './Components/ComponentSection/CoreFeature'

function App() {


  return (
    <>
    <div>
      <NavBar/>
      <Banner/>
      <LatestNews/>
      <AboutUs/>
      <CoreFeature/>
    </div>
    </>
  )
}

export default App
