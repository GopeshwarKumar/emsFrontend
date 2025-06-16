import React from 'react'

function Loader() {
  return (
    <>
    <div className='flex items-center gap-1'>
        <div className='w-3 h-3 rounded-full bg-white animate-pulse'></div>
        <div className='w-3 h-3 rounded-full bg-green-500 animate-bounce'></div>
        <div className='w-3 h-3 rounded-full bg-blue-600 animate-pulse'></div>
    </div>
    </>
  )
}

export default Loader