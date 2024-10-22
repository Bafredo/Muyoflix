import React from 'react'

const Newsletter = () => {
  return (
    <div className='shadow-xl w-fit flex h-fit p-5 bg-green-100 rounded-lg'>
        <input type='text' placeholder='Email Address' className='flex-grow p-2 border-solid border-black border'/>
        <input className='bg-[#047c7f] text-white ps-5 pe-5 font-semibold'  type='submit' value='subscribe'/>
    </div>
  )
}

export default Newsletter