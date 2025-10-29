import React from 'react'
// Import the icons you need
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6' // For the new X logo
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  return (
    <div id='contact' className='p-4'> 
      <div className='w-[90%] mx-auto'>
        <h1 className='text-4xl font-bold gradient-blue'>Contact Me</h1>
        <h2 className='text-xl'>Have an idea or a project in mind? Let&apos;s connect!</h2>
        <p className='text-xl'>Always open to opportunities.</p>
        <a href='mailto:subhransudalei55@gmail.com' className='underline hover:opacity-70 hover:scale-110 transition-all'>subhransudalei55@gmail.com</a>

        <div className='mt-8 flex gap-x-10'>
          
          <div className='flex flex-wrap gap-x-8'>
            <a 
              href="YOUR_GITHUB_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className='text-4xl hover:text-blue-500 transition-colors'
            >
              <FaGithub />
            </a>
            <a 
              href="YOUR_LINKEDIN_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className='text-4xl hover:text-blue-500 transition-colors'
            >
              <FaLinkedin />
            </a>
            <a 
              href="YOUR_X_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X (Twitter)"
              className='text-4xl hover:text-blue-500 transition-colors'
            >
              <FaXTwitter />
            </a>
            <a 
              href="YOUR_LEETCODE_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LeetCode"
              className='text-4xl hover:text-blue-500 transition-colors'
            >
              <SiLeetcode />
            </a>
            <a 
              href="YOUR_INSTAGRAM_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className='text-4xl hover:text-blue-500 transition-colors'
            >
              <FaInstagram />
            </a>
          </div>

          <div>
            <a 
              href="/path-to-your-cv.pdf"
              download="YourName-CV.pdf"
              className='inline-block px-6 py-3 gradient-blue-bg text-white font-semibold 
              rounded-lg shadow-md hover:animate-pulse transition-colors'
            >
              Download My CV
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact