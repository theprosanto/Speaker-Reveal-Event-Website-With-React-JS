import React from 'react'
import Marquee from "react-fast-marquee";
import Container from '../Container';


const LatestNews = () => {
  return (
      <div className='bg-purple-600'>
    <Container>
        
        <ul className='flex gap-7.5 text-white h-20.25 items-center px-10'>
          
          <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[26px] font-bold'>Latest Updates</h1>
          </li>

          <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[26px] font-bold'>New Announcements</h1>
          </li>

          <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[26px] font-bold'>Workshop Alerts</h1>
          </li>

          <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[26px] font-bold'>Live Notices</h1>
          </li>

          <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[26px] font-bold'>Event Countdown</h1>
          </li>

        </ul>
    </Container>
    </div>
  )
}

export default LatestNews