import React from 'react'


const LatestNews = () => {
  return (
    <div>
      <ul className='bg-purple flex gap-7.5 text-white h-20.25 place-content-center'>
        <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[30px] font-bold'>Latest Updates</h1>
        </li>
        <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[30px] font-bold'>New Announcements</h1>
        </li>
        <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[30px] font-bold'>Workshop Alerts</h1>
        </li>
        <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[30px] font-bold'>Live Notices</h1>
        </li>
        <li className='flex gap-7.5 items-center'>
            <img src="src/assets/icon-asterisk.png" alt=""/>
            <h1 className='text-[30px] font-bold'>Event Countdown</h1>
        </li>
      </ul>
    </div>
  )
}

export default LatestNews
