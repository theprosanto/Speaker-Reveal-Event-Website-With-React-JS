import { useState } from 'react'
import './App.css'
import NavBar from './Components/ComponentSection/NavBar'
import Banner from './Components/ComponentSection/Banner'
import LatestNews from './Components/ComponentSection/LatestNews'
import AboutUs from './Components/ComponentSection/AboutUs'
import CoreFeature from './Components/ComponentSection/CoreFeature'
import KeyBenefits from './Components/ComponentSection/KeyBenefits'
import OurEventSchedule from './Components/ComponentSection/OurEventSchedule'
import FaqSection from './Components/ComponentSection/FaqSection'
import Testimonials from './Components/ComponentSection/Testimonials'


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
      <FaqSection/>
      <Testimonials/>
    </div>
    </>
  )
}

export default App
