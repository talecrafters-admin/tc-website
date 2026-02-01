"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import {
  GraduationCap,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  Package,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    description: "EdTech platforms, coaching institutes, universities",
    metrics: ["2.5x enrollment growth", "45% cost per lead reduction"],
    color: "primary" as const,
  },
  {
    icon: ShoppingBag,
    name: "FMCG",
    description: "Consumer goods, packaged foods, retail brands",
    metrics: ["3x distribution reach", "25% market share growth"],
    color: "secondary" as const,
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Builders, developers, property brokers",
    metrics: ["400+ qualified leads", "₹12Cr+ property sales"],
    color: "accent1" as const,
  },
  {
    icon: UtensilsCrossed,
    name: "F&B",
    description: "Restaurants, cloud kitchens, food delivery",
    metrics: ["5x online orders", "60% repeat customer rate"],
    color: "accent2" as const,
  },
  {
    icon: Package,
    name: "D2C",
    description: "E-commerce brands, direct-to-consumer products",
    metrics: ["8x revenue growth", "3.5x average ROAS"],
    color: "accent3" as const,
  },
  {
    icon: Briefcase,
    name: "B2B",
    description: "SaaS platforms, business services, consultants",
    metrics: ["580+ qualified leads", "87% lead quality"],
    color: "primary" as const,
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-cream bg-pattern-grid relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            From startups to enterprises, we've helped brands across diverse
            sectors achieve remarkable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant={industry.color} className="h-full">
                <industry.icon className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {industry.name}
                </h3>
                <p className="text-base mb-4 text-black/70">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-accent1 font-bold">→</span>
                      <span className="font-semibold text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-black/60">
            Don't see your industry?{" "}
            <span className="font-bold text-black">
              We adapt our strategies to any sector.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
