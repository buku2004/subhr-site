'use client'
import React from 'react'
import { motion } from 'motion/react'
import PathDraw from '../ui/PathDraw'

const Hero = () => {
  return (
    <div className='navy-background flex justify-around items-center'>
      <div className='w-[40%] m-4'>
        <h1 className='gradient-blue font-bold text-[3.5rem]'>Hi, I'm Subhransu!</h1>
        <p className='text-[1.5rem] text-slate-300'>
          A Developer with a passion for solving real-world problems through Web Technologies and Machine Learning.
        </p>
        <p className='text-[1.5rem] text-slate-300'>I like building clean, impactful, and user-centered solutions.</p>      
 
        <div className="mt-6 flex gap-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="px-6 py-2 gradient-blue-bg text-slate-100 font-semibold rounded hover:bg-blue-700 "
          >
            Projects
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="px-6 py-2 bg-[#9333ea] text-slate-100 font-semibold rounded hover:bg-gray-900"
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
