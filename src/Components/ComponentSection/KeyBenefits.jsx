import React from 'react'
import Container from '../Container'
import BlueDotSectionTitle from '../BlueDotSectionTitle'
import TitleDetails from '../TitleDetails'
import Btn from '../Btn'

import Background6 from '../ComponentSection/assets/Background6.png'
import Background7 from '../ComponentSection/assets/Background7.png'
import Background2 from '../ComponentSection/assets/Background2.png'
import Figureourbenefitsimage1 from '../ComponentSection/assets/Figureourbenefitsimage1.png'
import Figureourbenefitsimage2 from '../ComponentSection/assets/Figureourbenefitsimage2.png'
import FigureourbenefitsimageDown from '../ComponentSection/assets/FigureourbenefitsimageDown.png'
import FigureourbenefitsimageTopRight from '../ComponentSection/assets/FigureourbenefitsimageTopRight.png'

const KeyBenefits = () => {
    return (
        <div>

            <Container className=' flex gap-16 py-25'>
                <div className='w-170'>
                    <BlueDotSectionTitle>Key Benefits</BlueDotSectionTitle>
                <TitleDetails className='pb-8.75'>Key advantages that ensure
                    your events stand out</TitleDetails>
                <div className='flex items-center gap-5 py-10.25 border-t-2 border-[#eaeaea]'>
                    <img src={Background6} alt="" />
                    <div>
                        <h1 className='font-bold text-[20px]'>Expert-Led Keynote Sessions</h1>
                        <p className='text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable
                            insights, trends, and strategies to help you grow personally and professionally.</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 pb-10'>
                    <img src={Background7} alt="" />
                    <div>
                        <h1 className='font-bold text-[20px]'>Advanced Event Technology</h1>
                        <p className='text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable
                            insights, trends, and strategies to help you grow personally and professionally.</p>
                    </div>
                </div>
                    <div className='flex gap-7.5 border-t-2 pt-10.5 border-[#eaeaea]'>
                        <Btn>View Our Schedule</Btn>
                        <div className='flex items-center gap-3.75'>
                            <img src={Background2} alt="" />
                            <div>
                                <h1 className='text-[20px] font-bold'>Call Now!</h1>
                                <p className='text-[16px] text-[#737681] w-47.5' >+00 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    <div className='flex gap-10 relative'>
                        <img src={Figureourbenefitsimage1} alt="" className=' ' />
                        <img src={FigureourbenefitsimageTopRight} alt="" className='absolute top-0 left-130' />
                        <img src={Figureourbenefitsimage2} alt="" className='absolute top-50 left-50' />
                    </div>
                    <img src={FigureourbenefitsimageDown} alt="" className='pt-26' />

                </div>
                
            </Container>

        </div>
    )
}

export default KeyBenefits
