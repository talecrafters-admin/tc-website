"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function AndromedaSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary relative overflow-hidden bg-pattern-waves">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border-4 border-black rotate-12" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black -rotate-12 rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Meta's Andromeda Update Changed Everything
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            Most agencies are still running campaigns like it's 2023.
          </p>
          <p className="text-lg md:text-xl font-bold mb-8">
            We've mastered the new algorithm.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            The Andromeda update revolutionized how Meta's AI optimizes
            campaigns. We've adapted our strategies to leverage these changes,
            resulting in 2-3x better performance for our clients.
          </p>
          <Button variant="accent2" size="lg" asChild>
            <Link href="/blog/andromeda-update">See How We Adapt</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
