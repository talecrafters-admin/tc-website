'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const comparisons = [
  {
    feature: 'Strategy Approach',
    others: 'Cookie-cutter templates',
    us: 'Custom growth plans',
  },
  {
    feature: 'Reporting',
    others: 'Monthly reports',
    us: 'Real-time dashboard access',
  },
  {
    feature: 'Creative Testing',
    others: 'Set it and forget it',
    us: 'Weekly A/B tests',
  },
  {
    feature: 'Algorithm Updates',
    others: 'React after problems',
    us: 'Proactive adaptation',
  },
  {
    feature: 'Communication',
    others: 'Account manager roulette',
    us: 'Dedicated team',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Why TaleCrafters?
          </h2>
          <p className="text-xl text-black/70">
            We're not your typical agency
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-4 border-black shadow-brutal rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-black text-white p-4 font-heading font-bold">
            <div></div>
            <div className="text-center">Other Agencies</div>
            <div className="text-center text-secondary">TaleCrafters</div>
          </div>

          {comparisons.map((comparison, index) => (
            <div
              key={comparison.feature}
              className={`grid grid-cols-3 p-4 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="font-bold pr-4">{comparison.feature}</div>
              <div className="flex items-center gap-2 text-sm">
                <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{comparison.others}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{comparison.us}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
