import React from 'react'
import { projects } from '@/components/projects'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center w-full p-6 max-w-[1536px] bg-gray-50'>
          <h1 className='text-3xl pb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>My Projects</h1>
          <hr className='w-full h-1  border-t-yellow-400 bg-yellow-400'/>

          <div className='flex flex-col items-center pt-8 justify-center sm:flex-row gap-5 flex-wrap'>
                      {
                          projects.map((item)=>{
                            
                              return(
                                  <div key={item.id} className='flex flex-col items-center justify-start bg-gray-50 rounded-lg shadow-md max-w-[300px] min-h-[650px] transition-all duration-700 ease-in-out gap-3 p-5'>
                                    <Image src={item.image} alt={item.name} width={600} height={600}/>
                                      <h1 className='text-yellow-500 text-xl text-center font-bold tracking-wider'>{item.name}</h1>
                                      <p className='text-gray-700 flex-grow'>{item.detail}</p>
                                      <ul className='flex w-full justify-start gap-3 flex-wrap'>
                                        {item.skillsUsed.map((skill,index)=>{
                                            return (
                                                <li key={index} className='bg-yellow-100 px-3 text-yellow-500 rounded-xl'>{skill}</li>
                                            )
                                        })}
                                      </ul>

                                      <div className='w-full flex justify-between gap-3 '>  {/* buttons div */}
                                        <Link href={item.vercelLink} target='_blank' className='bg-yellow-500 p-2 border-transparent rounded-lg text-white hover:bg-yellow-400 transition-all duration-500 ease-in-out flex items-center w-[140px] justify-center gap-5'><button className='cursor-pointer'>Live Demo</button><FaExternalLinkAlt className='text-sm'/></Link>
                                        <Link href={item.githubLink} target='_blank' className='p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-500 ease-in-out flex items-center w-[120px] justify-center gap-5'><button className='cursor-pointer'>GitHub</button><FaGithub/></Link>
                                      </div>

                                  </div> 
                              )
                          }) 
                      }
          
                  </div>
          


        </div>

    </div>
  )
}
