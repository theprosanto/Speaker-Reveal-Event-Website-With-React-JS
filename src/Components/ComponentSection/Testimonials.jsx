import React from 'react'
import Container from '../Container'
import WhiteDotSectionTitle from '../WhiteDotSectionTitle'
import TitleDetails from '../TitleDetails'


import BorderImg1 from '../ComponentSection/assets/Border1.png'
import BorderImg2 from '../ComponentSection/assets/Border2.png'
import BorderImg3 from '../ComponentSection/assets/Border3.png'
import BorderImg4 from '../ComponentSection/assets/Border4.png'
import Btn from '../Btn'

const Testimonials = () => {
  return (
    <div className='bg-[url(src/Components/ComponentSection/assets/CoreBackground.png)] bg-cover bg-no-repeat text-white h-267.5'>
      <Container className='py-25'>

            <WhiteDotSectionTitle>Testimonials</WhiteDotSectionTitle>
            <TitleDetails>What our customers say about their <br /> experience</TitleDetails>

            <div>
                <div>
                    <div className='flex relative items-center'>
                        <img src={BorderImg1} alt="" className='' />
                        <img src={BorderImg2} alt="" className='absolute top-0 left-3' />
                        <img src={BorderImg3} alt="" className=' absolute top-0 left-6' />
                        <img src={BorderImg4} alt="" className=' absolute top-0 left-6' />
                    </div>
                    <p>Over 15,000+ Attendees <br />Connected Worldwide</p>
                    <h1>Client Experience Speak <br />For Themselves</h1>
                    <Btn className='bg-white text-purple!'>View All Reviews</Btn>
                </div>
            </div>

      </Container>
    </div>
  )
}

export default Testimonials
