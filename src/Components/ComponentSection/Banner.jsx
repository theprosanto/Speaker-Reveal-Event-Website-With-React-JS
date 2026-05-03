import React from 'react'
import Container from '../Container'
import Btn from '../Btn'
import { FaPlay } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='bg-[url(src/assets/Banner.png)] pt-37.5 pb-20'>
            <Container className="text-center place-items-center">
                <img src="BannerImage" alt="" />
                <div className='flex gap-8'>
                    <div className='flex'>
                        <img src="src/assets/Border1.png" alt="" />
                        <img src="src/assets/Border2.png" alt="" />
                        <img src="src/assets/Border3.png" alt="" />
                    </div>
                    <p className='text-white'>Ideas that spark change.</p>
                </div>

                <h1 className='text-[76px] text-white font-extrabold h-45 w-340'>Connecting Minds to Shape Tomorrow's Big Ideas</h1>
                <p className='text-[16px] text-white w-193.25 pt-12.75 pb-13'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—exchanging ideas that spark growth, innovation, and meaningful change.</p>
                <div className='flex items-center gap-10'>
                    <Btn>Explore Schedule</Btn>
                    <div className='flex items-center font-semibold gap-5'>
                        <button className='bg-purple border-2 border-gray-400 rounded-full font-bold text-white p-4' ><FaPlay /></button>
                        <p className='text-white'>Watch Video</p>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='font-bold text-[20px} mt-[60px] mb-[40px]'>Upcoming Speaker Reveal - Don't Miss Out</h1>


                    <ul className='flex gap-7.5'>
                        <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                            <h1 className='font-bold text-[40px]'>202</h1>
                            <p className='text-[16px]'>Days</p>
                        </li>
                        <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                            <h1 className='font-bold text-[40px]'>08</h1>
                            <p className='text-[16px]'>Hours</p>
                        </li>
                        <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                            <h1 className='font-bold text-[40px]'>13</h1>
                            <p className='text-[16px]'>Minutes</p>
                        </li>
                        <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                            <h1 className='font-bold text-[40px]'>14</h1>
                            <p className='text-[16px]'>Seconds</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Banner
