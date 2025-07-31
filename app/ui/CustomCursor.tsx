'use client'

import { motion, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(isTouchDevice)
    if (isTouchDevice) return

    const cursor = cursorRef.current
    if (!cursor) return

    let idleTimeout: NodeJS.Timeout

const move = (e: MouseEvent) => {
  x.set(e.clientX)
  y.set(e.clientY)
  cursor.style.opacity = '1'
  clearTimeout(idleTimeout)
  idleTimeout = setTimeout(() => {
    cursor.style.opacity = '0'
  }, 3000)
}

    const grow = () => cursor.classList.add('scale-150', 'bg-blue-500')
    const shrink = () => cursor.classList.remove('scale-150', 'bg-blue-500')

    const hoverElements = document.querySelectorAll('button, a, .cursor-hover')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
      clearTimeout(idleTimeout)
    }
  }, [x, y])

  if (isTouch) return null

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <motion.div
        ref={cursorRef}
        className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm transition-all duration-200 ease-out"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          x,
          y,
        }}
      />
    </div>
  )
}
