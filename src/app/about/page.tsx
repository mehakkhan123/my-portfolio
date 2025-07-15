import React from 'react'
import Skills from '@/components/Skills'

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center w-full p-6 max-w-[1536px] bg-gray-50'>
          <h1 className='text-3xl pb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>About Me</h1>
          <hr className='w-[96%] h-1  border-t-yellow-400 bg-yellow-400'/>
          <p className='text-gray-500 text-md md:text-lg lg:text-3xl p-7'>I&apos;m Mehak Khan, a passionate frontend developer with a keen eye for detail and a love for bringing designs to life. While I&apos;m just starting my professional journey in the development world, I&apos;ve spent countless hours honing my skills in HTML, CSS, Tailwind CSS, JavaScript, and TypeScript. I&apos;m also building a solid foundation in React and Next.js, and I love working with Shadcn UI to create beautiful, functional interfaces. My proficiency in Figma ensures that every project I touch is pixel-perfect and true to its design.
            
          </p>
          
          
          <p className='text-gray-500 text-md md:text-lg lg:text-3xl p-7'>
            Beyond the code, I hold a B.Com degree from Karachi University, which has equipped me with a strong understanding of problem-solving and critical thinking – skills I readily apply to my development work. I&apos;m excited to collaborate on innovative projects and contribute to a team where I can grow and make a tangible impact.
          </p>
          
        </div>
        <Skills/>
  </div>
  )
}
