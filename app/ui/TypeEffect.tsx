'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const TypingEffect = ({
  text = "Hi,I'm Subhransu!",
  typeSpeed = 75,
  deleteSpeed = 60,
  pauseBeforeDelete = 1000,
  pauseBeforeRetype = 500,
}: {
  text?: string
  typeSpeed?: number
  deleteSpeed?: number
  pauseBeforeDelete?: number
  pauseBeforeRetype?: number
}) => {
  const [displayed, setDisplayed] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [charIndex, setCharIndex] = useState<number>(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[charIndex])
        setCharIndex((prev) => prev + 1)
      }, typeSpeed)
    } else if (!isDeleting && charIndex === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseBeforeDelete)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1))
        setCharIndex((prev) => prev - 1)
      }, deleteSpeed)
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, pauseBeforeRetype)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, text, typeSpeed, deleteSpeed, pauseBeforeDelete, pauseBeforeRetype])

  return (
    <h1 className="gradient-blue font-bold text-[3.5rem] tracking-wide">
      {displayed.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}-${isDeleting ? 'del' : 'type'}`}
          initial={{ opacity: 0, y: isDeleting ? 0 : -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[2.5rem] bg-white ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </h1>
  )
}

export default TypingEffect
