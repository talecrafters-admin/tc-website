'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Zap, Target, BarChart } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Zap,
    title: 'AI-Powered Optimization',
    description: 'Google\'s machine learning finds your best customers',
  },
  {
    icon: Target,
    title: 'Cross-Channel Reach',
    description: 'Search, Display, YouTube, Gmail - all in one campaign',
  },
  {
    icon: BarChart,
    title: 'Conversion-Focused',
    description: 'Optimizes for actual sales, not just clicks',
  },
]

export default function PMAXSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-accent2 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Google's PMAX Is Powerful.
            <br />
            In The Right Hands.
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            We've managed <span className="font-bold font-mono">50+ PMAX campaigns</span>
          </p>
          <p className="text-lg">
            Optimizing for actual conversions, not vanity metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white text-black border-4 border-black shadow-brutal rounded-2xl p-6 h-full">
                <benefit.icon className="w-10 h-10 mb-4 text-accent2" />
                <h3 className="font-heading text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link href="/services#pmax">Learn About PMAX</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
