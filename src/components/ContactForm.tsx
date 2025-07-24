'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

// Define the type for your form data state
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(''); // Clear previous status

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        // Clear the form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center w-full p-6 max-w-[1536px] bg-gray-50'>
        <h1 className='text-3xl pb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>Contact</h1>
        <hr className='w-[96%] h-1 border-t-yellow-400 bg-yellow-400'/>
        <p className='text-gray-500 text-center text-md md:text-lg lg:text-3xl p-7'>Ready to get started? Feel free to reach out through the contact form, and let&apos;s embark on a journey of innovation and success.</p>

        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-3 shadow-lg w-full max-w-[900px] p-8'>
          <div className='flex flex-col sm:flex-row gap-3 w-full'>
            <div className='flex flex-col w-full'> {/* name input */}
              <label htmlFor="name">Your Name</label>
              {/* Ensure name attributes match your formData state keys */}
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className='border border-gray-300 p-2' />
            </div>

            <div className='flex flex-col w-full'> {/* email input */}
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className='border border-gray-300 p-2' />
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className='border border-gray-300 p-2' />
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className='border border-gray-300 min-h-[200px] p-1'></textarea>
          </div>
          <button type="submit" disabled={loading} className='bg-yellow-500 py-2 px-3 rounded-3xl text-white font-medium border-2 border-transparent hover:border-2 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className={`mt-4 ${status.includes('Failed') || status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
        </form>
      </div>
    </div>
  );
  
}