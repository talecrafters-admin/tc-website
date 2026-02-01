"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Sparkles, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description: "We find what's broken",
    detail:
      "Deep dive into your current campaigns, targeting, and creatives to identify what's burning money.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Custom plan, no templates",
    detail:
      "Build a data-driven strategy tailored to your business goals and target audience.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Creative",
    description: "Ads that stop scrolls",
    detail:
      "Design and test high-converting ad creatives that make your audience stop and click.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize",
    description: "Daily monitoring, weekly reports",
    detail:
      "Continuous testing and optimization to maximize performance and scale what works.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream bg-pattern-triangles relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Our Process: Simple & Effective
          </h2>
          <p className="text-xl text-black/70">
            From strategy to results in 4 proven steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-black"
            style={{ top: "120px" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-6 relative z-10">
                  <div className="w-16 h-16 bg-secondary border-4 border-black rounded-full flex items-center justify-center font-heading text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-center font-semibold mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-black/70 text-center">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
