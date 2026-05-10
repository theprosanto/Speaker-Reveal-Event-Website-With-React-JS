import React from 'react'
import ScheduleImg1 from '../ComponentSection/assets/ScheduleImg1.png'
import ScheduleImg2 from '../ComponentSection/assets/ScheduleImg2.png'
import ScheduleImg3 from '../ComponentSection/assets/ScheduleImg3.png'
import ScheduleImg4 from '../ComponentSection/assets/ScheduleImg4.png'

import LocationImg from '../ComponentSection/assets/icon-location.png'

const OurEventScheduleTimes = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-17.5 border-b pb-13 mb-10 border-white/10'>
                <div className='flex gap-7.5 items-center'>
                    <img src={ScheduleImg1} alt="" />
                    <div>
                        <h1 className='text[20px] font-bold pb-3'>9:00 AM - 5:30 PM</h1>
                        <p>22 March 2025</p>
                    </div>
                </div>
                <div>
                    <h1 className='text[20px] font-bold pb-3'>Professional Skills Development Workshop</h1>
                    <p>Unlock your potential and elevate your career with our Professional <br /> Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex items-center gap-3.75'>
                    <img src={LocationImg} alt="" className='border rounded-full p-3.75 text-white/10' />
                    <p>Street, Block 12 <br />Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-17.5 border-b pb-13 mb-10 border-white/10'>
                <div className='flex gap-7.5 items-center'>
                    <img src={ScheduleImg2} alt="" />
                    <div>
                        <h1 className='text[20px] font-bold pb-3'>10:00 AM - 4:00 PM</h1>
                        <p>22 March 2025</p>
                    </div>
                </div>
                <div>
                    <h1 className='text[20px] font-bold pb-3'>Leadership & Growth Conference</h1>
                    <p>Unlock your potential and elevate your career with our Professional <br /> Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex items-center gap-3.75'>
                    <img src={LocationImg} alt="" className='border rounded-full p-3.75 text-white/10' />
                    <p>Street, Block 12 <br />Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-17.5 border-b pb-13 mb-10 border-white/10'>
                <div className='flex gap-7.5 items-center'>
                    <img src={ScheduleImg3} alt="" />
                    <div>
                        <h1 className='text[20px] font-bold pb-3'>8:30 AM - 6:00 PM</h1>
                        <p>22 March 2025</p>
                    </div>
                </div>
                <div>
                    <h1 className='text[20px] font-bold pb-3'>Digital Marketing Masterclass</h1>
                    <p>Unlock your potential and elevate your career with our Professional <br /> Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex items-center gap-3.75'>
                    <img src={LocationImg} alt="" className='border rounded-full p-3.75 text-white/10' />
                    <p>Street, Block 12 <br />Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-17.5 border-b pb-13 mb-10 border-white/10'>
                <div className='flex gap-7.5 items-center'>
                    <img src={ScheduleImg4} alt="" />
                    <div>
                        <h1 className='text[20px] font-bold pb-3'>11:00 AM - 3:00 PM</h1>
                        <p>22 March 2025</p>
                    </div>
                </div>
                <div>
                    <h1 className='text[20px] font-bold pb-3'>Annual Innovation Summit 2025</h1>
                    <p>Unlock your potential and elevate your career with our Professional <br /> Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex items-center gap-3.75'>
                    <img src={LocationImg} alt="" className='border rounded-full p-3.75 text-white/10' />
                    <p>Street, Block 12 <br />Sector 4, Ipsum City</p>
                </div>
            </div>
        </div>
    )
}

export default OurEventScheduleTimes
