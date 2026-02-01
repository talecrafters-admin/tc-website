"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    client: "D2C Fashion Brand",
    industry: "E-commerce",
    challenge: "High CAC, low repeat purchase rate",
    roas: "4.2x",
    revenue: "₹45L",
    metric: "in 3 months",
    testimonial:
      "TaleCrafters transformed our ad performance. The results speak for themselves.",
    author: "Founder, Fashion Brand",
    color: "primary" as const,
  },
  {
    client: "SaaS Startup",
    industry: "B2B Technology",
    challenge: "Inefficient lead generation",
    roas: "5.4x",
    leads: "580",
    metric: "qualified leads",
    testimonial:
      "Best decision we made. Our pipeline has never been this strong.",
    author: "CMO, SaaS Company",
    color: "accent1" as const,
  },
  {
    client: "Health & Wellness",
    industry: "D2C",
    challenge: "Scaling beyond initial success",
    roas: "3.8x",
    revenue: "₹1.2Cr",
    metric: "annual revenue",
    testimonial: "They helped us scale profitably. No BS, just results.",
    author: "Co-founder, Wellness Brand",
    color: "secondary" as const,
  },
];

export default function ProofSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white bg-pattern-cross relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Real Results. Real Brands.
          </h2>
          <p className="text-xl text-black/70">
            Numbers don't lie. Here's what we've achieved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant={study.color} className="h-full">
                <div className="mb-4">
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {study.client}
                  </h3>
                  <p className="text-sm font-semibold opacity-80">
                    {study.industry}
                  </p>
                </div>

                <div className="mb-4 p-4 bg-white/50 rounded-lg border-2 border-black">
                  <p className="text-sm font-semibold mb-2">Challenge:</p>
                  <p className="text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <div className="font-mono text-6xl font-bold mb-2">
                    {study.roas}
                  </div>
                  <p className="text-lg font-bold">ROAS</p>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {study.revenue ? (
                    <>
                      <DollarSign className="w-5 h-5" />
                      <span className="font-bold">{study.revenue}</span>
                    </>
                  ) : (
                    <>
                      <Users className="w-5 h-5" />
                      <span className="font-bold">{study.leads}</span>
                    </>
                  )}
                  <span className="text-sm">{study.metric}</span>
                </div>

                <div className="border-t-2 border-black pt-4">
                  <p className="text-sm italic mb-2">"{study.testimonial}"</p>
                  <p className="text-sm font-bold">— {study.author}</p>
                </div>
              </Card>
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
          <Button variant="accent2" size="lg" asChild>
            <Link href="/case-studies">
              <TrendingUp className="w-5 h-5 mr-2 inline" />
              View All Case Studies
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
