import React from 'react'
import blueDot from '../Components/ComponentSection/assets/AboutDot.png' 

const BlueDotSectionTitle = ({children, className}) => {
  return (
    <div className={className}>
            <div className='flex items-center gap-1.5'>
                <img src={blueDot} alt=""/>
                <h1 className='text-[14px] font-semibold'>
                    {children}
                </h1>
            </div>
        </div>
  )
}

export default BlueDotSectionTitle
