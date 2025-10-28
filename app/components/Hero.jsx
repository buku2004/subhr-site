'use client'
import React from 'react'
import { motion } from 'motion/react'
import PathDraw from '../ui/PathDraw'
import TypeEffect from '../ui/TypeEffect'

const Hero = () => {
  return (
    <div id='home' className='flex justify-around items-center min-h-screen'>
      <div className='w-[40%] m-4'>
        {/* <h1 className='gradient-blue font-bold text-[3.5rem]'>Hi, I'm Subhransu!</h1> */}
        <TypeEffect/>
        <p className='text-[1.2rem] text-slate-300'>
          A Developer with a passion for solving real-world problems through 
          Web Technologies and Machine Learning.
        </p>
        <p className='text-[1.2rem] text-slate-300'>I like building clean, impactful, and user-centered solutions.</p>      
 
        <div className="mt-6 flex gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="px-6 py-2 border-y-1 border-white/50 text-slate-100 hover:bg-gray-900 cursor-none"
          >
            Contact
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="px-6 py-2 border-y-1 border-white/50 text-slate-100 hover:bg-gray-900 cursor-none"
          >
            About
          </motion.a>
        </div>
      </div>

      <div>
        <PathDraw />
      </div>
    </div>
  )
}

export default Hero
