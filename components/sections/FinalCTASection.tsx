'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Rocket, Shield } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-accent1 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary border-4 border-black rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-secondary border-4 border-black"
          animate={{
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready To Grow Your Brand?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8">
            Book your free strategy call. We'll analyze your current marketing 
            and show you exactly how to unlock growth.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="https://calendar.app.google/GnvC7UCPUu48G6RcA" target="_blank" rel="noopener noreferrer">
                <Rocket className="w-5 h-5 mr-2 inline" />
                Claim Free Audit
              </Link>
            </Button>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-lg">
            <Shield className="w-6 h-6" />
            <span className="font-bold">No pitch. Just insights.</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <div>✓ 30-minute strategy call</div>
            <div>✓ Growth opportunity analysis</div>
            <div>✓ Actionable recommendations</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
