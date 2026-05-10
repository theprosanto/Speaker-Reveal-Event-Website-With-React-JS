import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import Container from '../Container'
import TitleDetails from '../TitleDetails';
import WhiteDotSectionTitle from '../WhiteDotSectionTitle';


import EventIcon from '../ComponentSection/assets/EventIcon.svg'
import ConferenceInon from '../ComponentSection/assets/ConferenceInon.svg'
import VenueIcon from '../ComponentSection/assets/VenueIcon.svg'
import PostIcon from '../ComponentSection/assets/PostIcon.svg'


const CoreFeature = () => {
    return (

        <div className='bg-[url(src/Components/ComponentSection/assets/CoreBackground.png)] bg-cover text-white'>

            <Container className="py-25">
                <div className='pb-20 mx-auto'>
                    <WhiteDotSectionTitle className='pb-2.5'>Core Feature</WhiteDotSectionTitle>
                    <TitleDetails className="text-center">Core features that power our <br />
                        exceptional services</TitleDetails>
                </div>
                <div className='flex gap-7.5 place-content-center'>
                    <div className='place-content-center bg-white/10 backdrop-blur-[20px] w-86.25 rounded-[20px]'>
                        <div className='p-10'>
                            <img src={EventIcon} alt="" />
                            <h1 className='text-[20px] font-bold pt-24.75'>Event Planning Manage</h1>
                            <p className='text-[16px] leading-6.25 pb-8'>Deliver seamless virtual experience
                                with high-quality streaming and
                                interactive tools.</p>
                            <div className='flex items-center gap-2.5 pt-7.75 border-t-2 border-[#565656]'>
                                <button>Read More</button>
                                <FaArrowRight className='text-[#8CB420]' />
                            </div>
                        </div>
                    </div>
                    <div className='place-content-center bg-white/10 backdrop-blur-[20px] w-86.25 rounded-[20px]'>
                        <div className='p-10'>
                            <img src={ConferenceInon} alt="" />
                            <h1 className='text-[20px] font-bold pt-24.75'>Conference Coordination</h1>
                            <p className='text-[16px] leading-6.25 pb-8'>Deliver seamless virtual experience
                                with high-quality streaming and
                                interactive tools.</p>
                            <div className='flex items-center gap-2.5 pt-7.75 border-t-2 border-[#565656]'>
                                <button>Read More</button>
                                <FaArrowRight className='text-[#8CB420]' />
                            </div>
                        </div>
                    </div>
                    <div className='place-content-center bg-white/10 backdrop-blur-[20px] w-86.25 rounded-[20px]'>
                        <div className='p-10'>
                            <img src={VenueIcon} alt="" />
                            <h1 className='text-[20px] font-bold pt-24.75'>Venue Booking & Setup</h1>
                            <p className='text-[16px] leading-6.25 pb-8'>Deliver seamless virtual experience
                                with high-quality streaming and
                                interactive tools.</p>
                            <div className='flex items-center gap-2.5 pt-7.75 border-t-2 border-[#565656]'>
                                <button>Read More</button>
                                <FaArrowRight className='text-[#8CB420]' />
                            </div>
                        </div>
                    </div>
                    <div className='place-content-center bg-white/10 backdrop-blur-[20px] w-86.25 rounded-[20px]'>
                        <div className='p-10'>
                            <img src={PostIcon} alt="" />
                            <h1 className='text-[20px] font-bold pt-24.75'>Post-Event Analytics</h1>
                            <p className='text-[16px] leading-6.25 pb-8'>Deliver seamless virtual experience
                                with high-quality streaming and
                                interactive tools.</p>
                            <div className='flex items-center gap-2.5 pt-7.75 border-t-2 border-[#565656]'>
                                <button>Read More</button>
                                <FaArrowRight className='text-[#8CB420]' />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='pt-15.5 pb-5.5 text-center'>Join our team and help weave innovation, quality, and success together worldwide.</p>
                <div className='flex gap-3.75 items-center place-content-center pb-25'>
                    <h1 className='text-[20px] font-bold'>4.9/5</h1>
                    <ul className='flex gap-1 text-[20px]'>
                        <li><FaStar className='text-purple' /></li>
                        <li><FaStar className='text-purple' /></li>
                        <li><FaStar className='text-purple' /></li>
                        <li><FaStar className='text-purple' /></li>
                        <li><FaStar className='text-purple' /></li>
                    </ul>
                    <h1 className='text-[20px] font-bold'>Our 4200 Review</h1>
                </div>
            </Container>

        </div>

    )
}

export default CoreFeature
