import React from 'react'

const TitleDetails = ({children, className}) => {
  return (
    <div className={className}>
        <h1 className='text-[48px] font-semibold'>{children}</h1>
    </div>
  )
}

export default TitleDetails
