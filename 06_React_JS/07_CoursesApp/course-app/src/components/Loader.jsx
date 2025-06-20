import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='loader'></div>
      <p className='text-blue-950 text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Loader
