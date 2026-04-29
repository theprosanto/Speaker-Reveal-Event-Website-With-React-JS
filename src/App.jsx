import { useState } from 'react'
import './App.css'
import NavBar from './Components/ComponentSection/NavBar'
import Banner from './Components/ComponentSection/Banner'

function App() {


  return (
    <>
    <div className='bg-[url(/src/assets/Banner.png)] bg-cover bg-no-repeat'>
      <NavBar/>
      <Banner/>
    </div>
    </>
  )
}

export default App
