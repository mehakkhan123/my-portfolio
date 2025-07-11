import React from 'react'
import { skills } from './details';




export default function Skills() {
    
  return (
    <div className='flex flex-col w-full items-center p-6 max-w-[1536px] gap-4 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700'>Skills</h1>
        <p className='text-gray-500 text-md md:text-lg lg:text-3xl px-7 sm:px-24 md:px-0'>I specialize in building modern, responsive, and high-performance web applications using a robust set of front-end technologies. My core competencies include:</p>
        <div className='flex flex-col items-center justify-center sm:flex-row gap-5 flex-wrap'>
            {
                skills.map((item)=>{
                    const IconComponent = item.icon
                    return(
                        <div key={item.id} className='flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-md max-w-[300px] h-56 hover:translate-y-[-2px] transition-all duration-300 ease-in-out'>
                            {IconComponent && <IconComponent size={50} className='text-gray-600'/>}
                            <h1 className='text-yellow-500 text-xl font-bold tracking-wider'>{item.name}</h1>
                            <p className='text-gray-700'>{item.detail}</p>
                        </div>
                    )
                }) 
            }

        </div>
    </div>
  )
}
