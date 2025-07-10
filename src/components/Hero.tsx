import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='flex flex-col w-full items-center p-6 max-w-[1536px] gap-3 bg-gray-50 md:flex-row'>
        <div className='text-center flex flex-col'> 
            <h1 className='text-4xl font-bold text-gray-700'>Mehak Khan</h1>
        <h1 className='text-yellow-500 text-2xl font-medium'>Frontend Web Developer</h1>
        <p className='text-gray-500'>Crafting engaging and responsive user experiences with modern web technologies.</p>
        <button className='bg-yellow-500 p-2 rounded-sm text-white font-medium border-2 border-transparent hover:border-2 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer transition-all'>View My Work</button>
        </div>
        <Image src={"/images/hero.avif"} alt='hero-image' width={300} height={300}/>

    </div>
  )
}
