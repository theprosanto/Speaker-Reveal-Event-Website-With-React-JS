import React from 'react'
import Container from '../Container'
import BlueDotSectionTitle from '../BlueDotSectionTitle'
import TitleDetails from '../TitleDetails'

const OurEventSchedule = () => {
  return (
    <div className='bg-[url(src/Components/ComponentSection/assets/EventSchedule.png)] bg-cover bg-no-repeat h-305'>
      <Container className='py-25'>
        <BlueDotSectionTitle>Our Event Schedule</BlueDotSectionTitle>
        <TitleDetails>Explore the complete schedule for our event</TitleDetails>


      </Container>
    </div>
  )
}

export default OurEventSchedule
