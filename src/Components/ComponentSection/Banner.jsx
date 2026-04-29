import React from 'react'
import Container from '../Container'
import Btn from '../Btn'
import { FaPlay } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='pt-37.5 pb-20'>
            <Container className="text-center place-items-center">

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
            </Container>
        </div>
    )
}

export default Banner
