"use client";

import { motion } from "framer-motion";
import { X, Check, Zap } from "lucide-react";

const comparisons = [
  {
    feature: "Strategy Approach",
    others: "Cookie-cutter templates",
    us: "Custom growth plans",
  },
  {
    feature: "Reporting",
    others: "Monthly reports",
    us: "Real-time dashboard access",
  },
  {
    feature: "Creative Testing",
    others: "Set it and forget it",
    us: "Weekly A/B tests",
  },
  {
    feature: "Algorithm Updates",
    others: "React after problems",
    us: "Proactive adaptation",
  },
  {
    feature: "Communication",
    others: "Account manager roulette",
    us: "Dedicated team",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream bg-pattern-zigzag relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent2 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary opacity-20 blur-3xl" />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <Zap className="w-16 h-16 text-accent2 mx-auto mb-4" />
          </motion.div>
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 text-walnut leading-tight">
            Why{" "}
            <span className="inline-block relative">
              <span className="relative z-10">TaleCrafters</span>
              <span className="absolute -inset-2 bg-primary -z-10 -rotate-2 border-4 border-walnut shadow-brutal" />
            </span>
            ?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-mocha">
            We're not your typical agency
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Mobile-friendly stacked cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:hidden">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-4 border-walnut shadow-brutal-lg rounded-2xl p-6"
              >
                <h3 className="font-heading font-bold text-xl mb-4 text-walnut">
                  {comparison.feature}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-2 border-red-200">
                    <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-red-800 mb-1">
                        Others:
                      </p>
                      <p className="text-sm font-medium text-red-900">
                        {comparison.others}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/20 rounded-lg border-2 border-primary">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-walnut mb-1">
                        We Do:
                      </p>
                      <p className="text-sm font-bold text-walnut">
                        {comparison.us}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop comparison table */}
          <div className="hidden md:block bg-white border-4 border-walnut shadow-brutal-lg rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-walnut to-mocha text-white p-6 font-heading font-bold text-lg">
              <div className="text-center">Feature</div>
              <div className="text-center flex items-center justify-center gap-2">
                <X className="w-5 h-5" />
                Other Agencies
              </div>
              <div className="text-center flex items-center justify-center gap-2 text-primary bg-walnut/30 rounded-lg py-2">
                <Check className="w-5 h-5" />
                TaleCrafters
              </div>
            </div>

            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-3 p-6 items-center ${
                  index % 2 === 0 ? "bg-cream" : "bg-white"
                } border-b-2 border-walnut/10 last:border-b-0`}
              >
                <div className="font-bold text-lg text-walnut pr-4">
                  {comparison.feature}
                </div>
                <div className="flex items-center justify-center gap-3 text-center">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 w-full">
                    <X className="w-5 h-5 text-red-600 mx-auto mb-2" />
                    <p className="text-sm text-red-900">{comparison.others}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-center">
                  <div className="bg-primary/20 border-2 border-primary rounded-lg p-3 w-full">
                    <Check className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-bold text-walnut">
                      {comparison.us}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-accent1 text-white font-heading font-bold text-lg px-8 py-4 border-4 border-walnut shadow-brutal-lg rounded-2xl rotate-1">
            <p>Ready to work with a team that actually cares? 🚀</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
