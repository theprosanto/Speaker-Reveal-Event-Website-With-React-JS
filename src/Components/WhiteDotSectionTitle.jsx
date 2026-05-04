import React from 'react'
import whiteDot from '../assets/whitedot.png'

const WhiteDotSectionTitle = ({ children, className }) => {
  return (
    <div className={className}>
      <div className='flex items-center gap-1.5'>
        <img src={whiteDot} alt="white dot"/>
        <h1 className='text-[14px] font-semibold'>
          {children}
        </h1>
      </div>
    </div>
  )
}

export default WhiteDotSectionTitle