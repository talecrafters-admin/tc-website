"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Target, TrendingDown, ImageOff } from "lucide-react";

const problems = [
  {
    icon: Target,
    title: "Inconsistent brand presence",
    stat: "Across 5+ platforms",
    color: "primary" as const,
  },
  {
    icon: TrendingDown,
    title: "Slow growth & poor engagement",
    stat: "< 2% engagement rate",
    color: "secondary" as const,
  },
  {
    icon: ImageOff,
    title: "Generic content that blends in",
    stat: "No brand differentiation",
    color: "accent1" as const,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream bg-pattern-diagonal relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Growing Pains?
          </h2>
          <p className="text-xl text-black/70">
            We help brands overcome these everyday challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant={problem.color} className="h-full">
                <problem.icon className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {problem.title}
                </h3>
                <p className="font-mono text-lg font-bold">{problem.stat}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
