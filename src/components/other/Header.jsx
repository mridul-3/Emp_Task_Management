import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Mridul 👋🏻 </span></h1>
        <button className='bg-red-600 p-2 rounded-full text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header 