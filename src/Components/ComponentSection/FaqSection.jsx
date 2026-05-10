import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";




import FaqsImage from '../ComponentSection/assets/FaqsImage.png'
import FaqsImageCalling from '../ComponentSection/assets/FaqsImageCalling.png'
import Container from '../Container'
import BlueDotSectionTitle from '../BlueDotSectionTitle'
import TitleDetails from '../TitleDetails'

const FaqSection = () => {
  return (
    <div>

      <Container className='flex gap-11.25 py-25'>
        <div className='relative'>
          <img src={FaqsImage} alt="" className='w-245 h-208.25' />
          <img src={FaqsImageCalling} alt="" className='absolute bottom-0 right-0 p-3.75 rounded-tl-lg bg-white' />
        </div>
        <div>
          <BlueDotSectionTitle>FAQ's</BlueDotSectionTitle>
          <TitleDetails className='pt-2.5 pb-8.75'>What our customers say about their <br />experience</TitleDetails>

          <div className='flex items-center justify-between py-5.75 px-6.25 bg-[#F6F6F7] rounded-[20px] mb-7.5 font-semibold text-[18px]'>
            <h1>1. How does the complete event register process actually work?</h1>
            <FiPlusCircle className='text-3xl text-purple' />
          </div>
          <div className='flex items-center justify-between py-5.75 px-6.25 bg-[#F6F6F7] rounded-[20px] mb-7.5 font-semibold text-[18px]'>
            <h1>2. Where is the main event venue located precisely?</h1>
            <FiPlusCircle className='text-3xl text-purple' />
          </div>
          <div className='bg-[#F6F6F7] rounded-[20px] mb-7.5'>
            <div className='flex items-center justify-between py-5.75 px-6.25 font-semibold text-[18px]'>
              <h1>3. Can attendees freely switch between sessions and tracks?</h1>
              <FiMinusCircle className='text-3xl text-purple' />
            </div>
            <p className='text-[#737681] py-5.75 px-6.25'>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.</p>
          </div>
          <div className='flex items-center justify-between py-5.75 px-6.25 bg-[#F6F6F7] rounded-[20px] mb-7.5 font-semibold text-[18px]'>
            <h1>4. Does the event provide virtual participation options online?</h1>
            <FiPlusCircle className='text-3xl text-purple' />
          </div>
          <div className='flex items-center justify-between py-5.75 px-6.25 bg-[#F6F6F7] rounded-[20px] mb-7.5 font-semibold text-[18px]'>
            <h1>5. What is the event refund and cancellation policy?</h1>
            <FiPlusCircle className='text-3xl text-purple' />
          </div>
        </div>
      </Container>

    </div>
  )
}

export default FaqSection
