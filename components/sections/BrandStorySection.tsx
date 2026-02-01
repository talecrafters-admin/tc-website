"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function BrandStorySection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream bg-pattern-diagonal relative overflow-hidden">
      {/* Decorative shapes - matching site style */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent2 border-4 border-walnut rotate-12 opacity-20" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary rounded-full border-4 border-walnut opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main content card with neo-brutalism style */}
          <div className="bg-white border-4 border-walnut shadow-brutal-lg rounded-3xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-6 bg-accent1 border-4 border-walnut rounded-full w-16 h-16 flex items-center justify-center shadow-brutal">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-walnut leading-tight">
                Every brand has a story. Every product solves a problem.
              </p>

              <p className="text-2xl md:text-3xl font-bold text-mocha leading-tight">
                But if no one hears that story,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">it doesn't matter</span>
                  <span className="absolute inset-0 bg-accent2 -z-10 rotate-1" />
                </span>{" "}
                how good your product is.
              </p>

              <div className="pt-6 border-t-4 border-walnut">
                <p className="text-xl md:text-2xl text-walnut leading-relaxed mb-4">
                  We craft the tales that make people{" "}
                  <span className="font-bold text-accent1">stop scrolling</span>
                  , pay attention, and{" "}
                  <span className="font-bold text-primary">take action</span>.
                </p>

                <div className="inline-block bg-primary border-4 border-walnut shadow-brutal px-6 py-3 -rotate-1 mt-4">
                  <p className="text-xl md:text-2xl font-heading font-bold text-white">
                    We turn your brand's story into profitable campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
