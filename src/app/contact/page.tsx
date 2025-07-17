import React from 'react'

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center w-full p-6 max-w-[1536px] bg-gray-50'>
        <h1 className='text-3xl pb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>Contact</h1>
          <hr className='w-[96%] h-1  border-t-yellow-400 bg-yellow-400'/>
          <p className='text-gray-500 text-center text-md md:text-lg lg:text-3xl p-7'>Ready to get started? Feel free to reach out through the contact form, and let&apos;s  embark on a journey of innovation and success.
          </p>

          <form action="mahekkhan284@gmail.com" className='flex flex-col items-start shadow-lg w-full max-w-[900px] p-8'>
            <div className='flex flex-col sm:flex-row gap-0 w-full sm:gap-3.5'>
              <div className='flex flex-col w-full'>  {/* name input */}
                <label>Your Name</label>
                <input type="text" className='border border-gray-300 p-2' />
              </div>

              <div className='flex flex-col w-full'>  {/* email input */}
              <label>Your Email</label>
                <input type="email" className='border border-gray-300 p-2' />
              </div>
            </div>

            <label>Subject</label>
            <input type="text" className='border border-gray-300 w-full p-2' />

            <label>Message</label>
            <textarea className='border border-gray-300 w-full min-h-[200px] p-1'></textarea>

            <button type="submit" className='bg-yellow-500 py-2 px-3 rounded-3xl text-white font-medium border-2 border-transparent hover:border-2 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'>Send Message</button>

          </form>
          


      </div>

    </div>
  )
}
