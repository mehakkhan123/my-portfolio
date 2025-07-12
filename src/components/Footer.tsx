import React from 'react'
import Link from 'next/link'
import { socialIcons } from './details'

export default function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='flex flex-col w-full items-center md:items-start p-6 max-w-[1536px] gap-5 bg-gray-100 md:flex-row md:gap-0 md:justify-between text-center'>
      <div className='text-gray-700 md:text-left flex flex-col gap-2'>
        <h3 className='text-sm'>&copy; 2025 Mehak Khan. All rights reserved.</h3>
        <h4 className='text-xs'>Designed and Developed with <span className='text-red-600'>❤</span></h4>
      </div>

      <div className='text-gray-600 flex flex-col gap-2'>
        <h2 className='font-semibold'>Connect with me</h2>
        <div className='flex justify-center gap-3'> {/* icons div */}
          {
            socialIcons.map((icon)=>{
              const Icons = icon.icon
              return (
                <div key={icon.id}>
                  <Link href={icon.link} target='_blank'>{Icons && <Icons size={22}/>}</Link>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className='flex flex-col gap-2 items-center md:items-start'>
        <h2 className='font-semibold text-gray-600'>Let&apos;s build something great</h2>
        <Link href={"/projects"}>
                <button className='bg-yellow-500 py-2 px-3 rounded-3xl text-white font-medium border-2 border-transparent hover:border-2 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'>Get in Touch</button>
                </Link>
      </div>

    </div>

    </footer>  
  )
}
