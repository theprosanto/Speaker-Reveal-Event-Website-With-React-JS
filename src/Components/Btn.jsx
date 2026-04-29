import React from 'react'

const Btn = ({children, className}) => {
  return (
    <div className={`bg-purple rounded-full font-bold text-white px-6 py-3.5 ${className}`}>
        {children}
    </div>
  )
}

export default Btn
