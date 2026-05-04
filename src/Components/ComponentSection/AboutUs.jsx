import React from 'react'
import Container from '../Container'
import Btn from '../Btn'
import BlueDotSectionTitle from '../BlueDotSectionTitle'


const AboutUs = () => {
    return (
        <div className='pt-25 pb-25'>
            <Container className="flex items-center gap-45.5">


                <div>
                    <div className='relative'>
                    <img src="src/assets/AboutUsAwards.png" alt="" />   
                        <img src="src/assets/Awards.png" alt=""className='absolute top-17 left-55' />

                    <div className='relative pt-10'>
                            <img src="src/assets/experience-circle.png" alt="" />
                            <img className='absolute top-23 left-13' src="src/assets/experience-circle25.png" alt="" />
                        </div>
                        </div>
                </div>


                <div className='w-190.25 h-167.5'>
                    <BlueDotSectionTitle>About Us</BlueDotSectionTitle>

                    <h1 className='text-[48px] font-semibold pt-3.5 pb-5.5 leading-13'>Uncover our mission & purpose behind this event</h1>
                    <p className='text-[18px] text-[#737681] leading-6.25'>Discover the vision that drives this event—a commitment to bringing together innovators,
                        leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                        connections.</p>
                    <ul className='flex gap-42.5 place-content-center bg-[#F6F6F7] my-10.5 py-7.25 rounded-[20px] text-[16px] font-bold'>
                        <li>Our Mission</li>
                        <li>Our Vision</li>
                        <li>Our Goal</li>
                    </ul>
                    <p className='text-[17px] text-[#737681]'>
                        Our vision is to build a global community where collaboration fuels innovation we aim encourage
                        fresh thinking, spark inspiring dialogues, and create a space.
                    </p>

                    <div className='flex py-10.5'>
                        <div className='flex items-center gap-3.75'>
                            <img src="src/assets/Background (7).png" alt="" />
                            <h1 className='text-[20px] font-bold'>Receive real-time event
                                updates.</h1>
                        </div>
                        <div className='flex items-center gap-3.75'>
                            <img src="src/assets/Background (1).png" alt="" className='w-14.5 h-14.5' />
                            <h1 className='text-[20px] font-bold'>Receive real-time event
                                updates.</h1>
                        </div>
                    </div>

                    <div className='flex gap-7.5 border-t-2 pt-10.5 border-[#dedede]'>
                        <Btn>Learn More About</Btn>
                        <div className='flex gap-3.75'>
                            <img src="src/assets/Background (2).png" alt="" />
                            <div>
                                <h1 className='text-[20px] font-bold'>Call Now!</h1>
                                <p className='text-[16px] text-[#737681] w-47.5' >+00 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    )
}

export default AboutUs
