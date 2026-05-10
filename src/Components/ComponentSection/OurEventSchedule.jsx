import React from 'react'
import Container from '../Container'
import WhiteDotSectionTitle from '../WhiteDotSectionTitle'
import TitleDetails from '../TitleDetails'
import OurEventScheduleTimes from './OurEventScheduleTimes'

const OurEventSchedule = () => {
  return (
    <div className='bg-[url(src/Components/ComponentSection/assets/EventSchedule.png)] bg-cover bg-no-repeat h-305'>
      <Container className='py-25 text-white'>
        <div className=''>
            <WhiteDotSectionTitle>Our Event Schedule</WhiteDotSectionTitle>
        <TitleDetails className='text-center'>Explore the complete schedule for <br /> our event</TitleDetails>
        </div>
          <ul className='flex mx-auto my-20 w-126 gap-25.75 text-[20px] font-bold py-6.75 px-11.75  rounded-full text-white bg-white/10 backdrop-blur-[20px] '>
            <li>Day 01</li>
            <li>Day 02</li>
            <li>Day 03</li>
          </ul>
          <div>
            <OurEventScheduleTimes/>
          </div>
      </Container>
    </div>
  )
}

export default OurEventSchedule
