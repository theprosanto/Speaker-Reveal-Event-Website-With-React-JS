import React from 'react'
import { FiPlusCircle } from "react-icons/fi";


import FaqsImage from '../ComponentSection/assets/FaqsImage.png'
import FaqsImageCalling from '../ComponentSection/assets/FaqsImageCalling.png'
import Container from '../Container'
import BlueDotSectionTitle from '../BlueDotSectionTitle'
import TitleDetails from '../TitleDetails'

const FaqSection = () => {
  return (
    <div>

      <Container className='flex gap-11.25 py-25'>
        <div>
          <img src={FaqsImage} alt="" />
          <img src={FaqsImageCalling} alt="" />
        </div>
        <div>
          <BlueDotSectionTitle>FAQ's</BlueDotSectionTitle>
          <TitleDetails className='pt-2.5 pb-8.75'>What our customers say about their <br />experience</TitleDetails>
          <div className='flex items-center justify-between py-5.75 px-6.25 bg-[#F6F6F7] rounded-[20px] font-semibold text-[18px]'>
            <h1>1. How does the complete event register process actually work?</h1>
            <FiPlusCircle className='text-3xl text-purple' />
          </div>
        </div>
      </Container>


      <div>
        <h2 id="accordion-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>What is Flowbite?</span>
            <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 15 7-7 7 7" /></svg>
          </button>
        </h2>
      </div>


    </div>
  )
}

export default FaqSection
