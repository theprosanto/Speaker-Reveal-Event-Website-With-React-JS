import React from 'react'
import Container from '../Container'
import BlueDotSectionTitle from '../BlueDotSectionTitle'
import TitleDetails from '../TitleDetails'
import Btn from '../Btn'

const KeyBenefits = () => {
    return (
        <div>

            <Container className='py-25'>
                <BlueDotSectionTitle>Key Benefits</BlueDotSectionTitle>
                <TitleDetails className='pb-8.75'>Key advantages that ensure
                    your events stand out</TitleDetails>
                <div className='flex gap-5 py-10.25 border-t-2 border-[#eaeaea]'>
                    <img src="src/assets/Background (6).png" alt="" />
                    <div>
                        <h1 className='font-bold text-[20px]'>Expert-Led Keynote Sessions</h1>
                        <p className='text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable
                            insights, trends, and strategies to help you grow personally and professionally.</p>
                    </div>
                </div>
                <div className='flex gap-5 pb-10'>
                    <img src="src/assets/Background (7).png" alt="" />
                    <div>
                        <h1 className='font-bold text-[20px]'>Advanced Event Technology</h1>
                        <p className='text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable
                            insights, trends, and strategies to help you grow personally and professionally.</p>
                    </div>
                </div>
                    <div className='flex gap-7.5 border-t-2 pt-10.5 border-[#eaeaea]'>
                        <Btn>View Our Schedule</Btn>
                        <div className='flex gap-3.75'>
                            <img src="src/assets/Background (2).png" alt="" />
                            <div>
                                <h1 className='text-[20px] font-bold'>Call Now!</h1>
                                <p className='text-[16px] text-[#737681] w-47.5' >+00 123 456 789</p>
                            </div>
                        </div>
                    </div>
                
            </Container>

        </div>
    )
}

export default KeyBenefits
