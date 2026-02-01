'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-secondary rounded-full border-4 border-black"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-accent1 border-4 border-black"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent3 rounded-full border-4 border-black"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="accent2" className="text-sm">
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              Full-Service Digital Agency • 25+ Happy Clients
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Your Brand Deserves{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Better Growth.</span>
              <span className="absolute -inset-2 bg-primary -z-10 -rotate-1 border-4 border-black shadow-brutal" />
            </span>
            <br />
            We Make It Happen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-black/80 mb-8 max-w-3xl mx-auto"
          >
            Full-service digital agency in Hyderabad. From strategy to execution, social media to web apps—we craft stories that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="https://calendar.app.google/GnvC7UCPUu48G6RcA" target="_blank" rel="noopener noreferrer">
                <Zap className="w-5 h-5 mr-2 inline" />
                Get Free Audit
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/case-studies">View Results</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-black/60"
          >
            No pitch. Just insights. 🎯
          </motion.div>
        </div>
      </div>
    </section>
  )
}
