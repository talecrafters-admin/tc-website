"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import {
  Facebook,
  Palette,
  Target,
  Search,
  Megaphone,
  Globe,
  Smartphone,
  Camera,
  Brain,
  Linkedin,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Facebook,
    title: "Social Media Marketing",
    description: "Instagram, Facebook, LinkedIn, Twitter",
    color: "primary" as const,
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Meta Ads, Google Ads, PMAX",
    color: "accent2" as const,
  },
  {
    icon: Palette,
    title: "Creative & Video Production",
    description: "Design, video, AI-generated content",
    color: "secondary" as const,
  },
  {
    icon: Search,
    title: "SEO & Content Marketing",
    description: "Organic growth & content strategy",
    color: "accent1" as const,
  },
  {
    icon: Megaphone,
    title: "Strategy & GTM",
    description: "Launch strategy & market positioning",
    color: "accent3" as const,
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites & web applications",
    color: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android development",
    color: "secondary" as const,
  },
  {
    icon: Camera,
    title: "Professional Photoshoots",
    description: "Product & brand photography",
    color: "accent1" as const,
  },
  {
    icon: Brain,
    title: "AI Content Creation",
    description: "AI-powered content & productivity",
    color: "accent2" as const,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white bg-pattern-dots relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Everything Your Brand Needs
          </h2>
          <p className="text-xl text-black/70">
            Full-service digital solutions under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href="/services">
                <Card
                  variant={service.color}
                  className="h-full cursor-pointer group-hover:scale-105 transition-transform"
                >
                  <service.icon className="w-12 h-12 mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg mb-4">{service.description}</p>
                  <span className="font-bold group-hover:underline">
                    Learn More →
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
