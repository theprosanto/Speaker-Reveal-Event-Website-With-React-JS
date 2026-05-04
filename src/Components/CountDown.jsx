import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time'

const CountDown = () => {
    const conduct_date = '2028-1-1 23:59:59'

    const [time, setTime] = useState(
        countDownDateAndTime(conduct_date)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(countDownDateAndTime(conduct_date))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <ul className='flex gap-7.5'>
            <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                <h1 className='font-bold text-[40px]'>{time.days}</h1>
                <p className='text-[16px]'>Days</p>
            </li>
            <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                <h1 className='font-bold text-[40px]'>{time.hours}</h1>
                <p className='text-[16px]'>Hours</p>
            </li>
            <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                <h1 className='font-bold text-[40px]'>{time.minutes}</h1>
                <p className='text-[16px]'>Minutes</p>
            </li>
            <li className='place-content-center bg-white/10 backdrop-blur-[20px] w-31.25 h-30 rounded-[20px]'>
                <h1 className='font-bold text-[40px]'>{time.seconds}</h1>
                <p className='text-[16px]'>Seconds</p>
            </li>
        </ul>
    )
}

export default CountDown