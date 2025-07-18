import React from 'react'

export default function Loading() {
    
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-8 h-8 border-2 border-x-gray-400 border-t-transparent border-b-gray-400 animate-spin rounded-full'></div>
    </div>
  )
}
