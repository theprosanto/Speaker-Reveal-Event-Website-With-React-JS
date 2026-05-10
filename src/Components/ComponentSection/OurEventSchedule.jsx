import React from 'react'
import Container from '../Container'
import WhiteDotSectionTitle from '../WhiteDotSectionTitle'
import TitleDetails from '../TitleDetails'

const OurEventSchedule = () => {
  return (
    <div className='bg-[url(src/Components/ComponentSection/assets/EventSchedule.png)] bg-cover bg-no-repeat h-305'>
      <Container className='py-25'>
        <div className='text-white'>
            <WhiteDotSectionTitle>Our Event Schedule</WhiteDotSectionTitle>
        <TitleDetails>Explore the complete schedule for our event</TitleDetails>
        </div>
      </Container>
    </div>
  )
}

export default OurEventSchedule
