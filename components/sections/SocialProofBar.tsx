'use client'

import { motion } from 'framer-motion'

const clients = [
  'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5',
  'Brand 6', 'Brand 7', 'Brand 8', 'Brand 9', 'Brand 10',
]

export default function SocialProofBar() {
  return (
    <section className="bg-black text-white py-4 border-y-4 border-black overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-secondary">★</span>
              <span className="font-bold">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm font-semibold">
          Trusted by <span className="text-secondary">40+</span> D2C brands across India
        </p>
      </div>
    </section>
  )
}
