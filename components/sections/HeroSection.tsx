"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream to-primary/10 pt-20">
      {/* Background Pattern Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Top Left Pattern */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-pattern-dots" />
        {/* Bottom Right Pattern */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pattern-grid" />
        {/* Center Diagonal Pattern */}
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-pattern-zigzag opacity-70" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-accent2 rounded-full border-4 border-walnut"
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
          className="absolute bottom-20 right-20 w-20 h-20 bg-accent1 border-4 border-walnut"
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
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary rounded-full border-4 border-walnut"
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
            <Badge variant="accent2" className="text-sm font-bold">
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              Full-Service Digital Agency • 25+ Happy Clients
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] uppercase tracking-tight"
          >
            <span>Your Brand </span>
            <span className="relative inline-block">
              <span className="relative z-10">Deserves</span>
              <span className="absolute -inset-3 bg-primary -z-10 -rotate-2 border-4 border-walnut shadow-brutal-lg" />
            </span>
            <br />
            <span className="text-accent1">Better Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-mocha font-semibold mb-10 max-w-3xl mx-auto"
          >
            From strategy to execution, social media to web apps—we craft
            stories that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="accent1" size="lg" asChild>
              <Link
                href="https://calendar.app.google/GnvC7UCPUu48G6RcA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Get Free Audit
              </Link>
            </Button>
            <Button variant="primary" size="lg" asChild>
              <Link href="/case-studies">View Results</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm font-bold text-mocha"
          >
            No pitch. Just insights. 🎯
          </motion.div>
        </div>
      </div>
    </section>
  );
}
