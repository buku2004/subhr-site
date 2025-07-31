'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import projects from '@/app/components/projects.json'

export default function ProjectGrid() {
  return (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-6 
        min-h-screen">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative group overflow-hidden rounded-md border border-white/50 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-white text-lg font-mono"
            >
              {project.title}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
