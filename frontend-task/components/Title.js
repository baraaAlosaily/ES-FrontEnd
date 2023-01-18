import React from 'react'
import Arrow from './Arrow'

export default function Title() {
  return (
    <div className='flex justify-start gap-1 items-center mb-10'>
        <h3 className='Poppins text-blue-600'>Home</h3>
        <div className='flex justify-center items-center mb-1'>
          <Arrow/>
        </div>
        <h3 className='Poppins text-blue-600'>Adminstrator</h3>
        <div className='flex justify-center items-center mb-1'>
          <Arrow/>
        </div>
        <h3 className='Poppins'>Logger Search</h3>
    </div>
  )
}
