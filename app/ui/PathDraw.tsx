'use client'

import { motion, Variants } from 'motion/react'

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.3
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export default function SmileyWithShapes() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 400 400"
      initial="hidden"
      animate="visible"
      style={svgStyle}
    >
      {/* Smiley Face */}
      <motion.circle
        cx="200"
        cy="200"
        r="100"
        stroke="#facc15"
        custom={1}
        variants={draw}
        style={shapeStyle}
      />
      <motion.circle
        cx="170"
        cy="170"
        r="10"
        stroke="#0d63f8"
        custom={2}
        variants={draw}
        style={shapeStyle}
      />
      <motion.circle
        cx="230"
        cy="170"
        r="10"
        stroke="#0d63f8"
        custom={2.5}
        variants={draw}
        style={shapeStyle}
      />
      <motion.path
        d="M160 230 Q 200 270 240 230"
        stroke="#ff0088"
        custom={3}
        variants={draw}
        style={shapeStyle}
      />

      {/* Random surrounding shapes */}
      <motion.line
        x1="50"
        y1="50"
        x2="80"
        y2="80"
        stroke="#8df0cc"
        custom={3.5}
        variants={draw}
        style={shapeStyle}
      />
      <motion.rect
        x="300"
        y="50"
        width="30"
        height="30"
        rx="6"
        stroke="#ff0088"
        custom={4}
        variants={draw}
        style={shapeStyle}
      />
      <motion.path
        d="M60 300 L70 280 L80 300 L90 280 L100 300"
        stroke="#0ea5e9"
        custom={4.5}
        variants={draw}
        style={shapeStyle}
      />
      <motion.circle
        cx="330"
        cy="330"
        r="12"
        stroke="#0f172a"
        custom={5}
        variants={draw}
        style={shapeStyle}
      />
      <motion.path
        d="M120 60 Q 200 30 280 60"
        stroke="#9333ea"
        custom={5.5}
        variants={draw}
        style={shapeStyle}
      />
    </motion.svg>
  )
}

const svgStyle: React.CSSProperties = {
  maxWidth: '100%',
  margin: '0 auto',
}

const shapeStyle: React.CSSProperties = {
  strokeWidth: 6,
  strokeLinecap: 'round',
  fill: 'transparent',
}
