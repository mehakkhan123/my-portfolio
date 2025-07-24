import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className='flex flex-col w-full items-center p-6 max-w-[1536px] gap-4 bg-gray-50 md:flex-row md:gap-3 md:justify-between'>
        <div className='text-center md:text-left flex flex-col items-center gap-1 md:items-start md:gap-2 lg:gap-4'> 
            <h1 className='text-4xl lg:text-6xl font-bold text-gray-700'>Mehak Khan</h1>
        <h1 className='text-yellow-500 text-2xl lg:text-4xl font-medium'>Frontend Web Developer</h1>
        <p className='text-gray-500 text-md md:text-lg lg:text-3xl px-7 sm:px-24 md:px-0'>Crafting engaging and responsive user experiences with modern web technologies.</p>
        <Link href={"/projects"}>
        <button className='bg-yellow-500 p-2 rounded-sm text-white font-medium border-2 border-transparent hover:border-2 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out lg:text-2xl'>View My Work</button>
        </Link>
        </div>
        <Image src={"/images/hero.avif"} alt='hero-image' width={300} height={300} className='sm:w-[500px] sm:h-[300px] md:w-[450px] lg:w-[600px] lg:h-[400px] flex-shrink-0'/>

    </div>
  )
}
