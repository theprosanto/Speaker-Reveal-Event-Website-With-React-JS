import { useState } from 'react'
import './App.css'
import NavBar from './Components/ComponentSection/NavBar'
import Banner from './Components/ComponentSection/Banner'
import LatestNews from './Components/ComponentSection/LatestNews'
import AboutUs from './Components/ComponentSection/AboutUs'
import CoreFeature from './Components/ComponentSection/CoreFeature'
import KeyBenefits from './Components/ComponentSection/KeyBenefits'
import OurEventSchedule from './Components/ComponentSection/OurEventSchedule'


function App() {


  return (
    <>
    <div>
      <NavBar/>
      <Banner/>
      <LatestNews/>
      <AboutUs/>
      <CoreFeature/>
      <KeyBenefits/>
      <OurEventSchedule/>
    </div>
    </>
  )
}

export default App
