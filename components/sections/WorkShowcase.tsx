"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Video, Sparkles } from "lucide-react";
import Image from "next/image";

type Category = "creatives" | "reels" | "ai-generated";

const showcaseItems = {
  creatives: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      title: "Fashion Campaign",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop",
      title: "Tech Product Launch",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      title: "Food & Beverage",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=600&h=400&fit=crop",
      title: "Real Estate",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
      title: "Beauty Brand",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
      title: "Fitness Studio",
    },
  ],
  reels: [
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop",
      title: "Viral Reel #1",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop",
      title: "Product Showcase",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=600&fit=crop",
      title: "Behind The Scenes",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop",
      title: "Customer Stories",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop",
      title: "Trend Capture",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&h=600&fit=crop",
      title: "Brand Story",
    },
  ],
  "ai-generated": [
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      title: "AI Product Shot",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1686191128892-4cbb6a08e641?w=600&h=400&fit=crop",
      title: "AI Brand Visual",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=600&h=400&fit=crop",
      title: "AI Creative Concept",
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?w=600&h=400&fit=crop",
      title: "AI Advertisement",
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1707343846610-e15d15398016?w=600&h=400&fit=crop",
      title: "AI Social Media",
    },
    {
      id: 18,
      image:
        "https://images.unsplash.com/photo-1706885093476-b1e54f26d3d5?w=600&h=400&fit=crop",
      title: "AI Campaign Art",
    },
  ],
};

const categories = [
  { id: "creatives" as Category, label: "Static Creatives", icon: ImageIcon },
  { id: "reels" as Category, label: "Top Reels", icon: Video },
  { id: "ai-generated" as Category, label: "AI Generated", icon: Sparkles },
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("creatives");

  return (
    <section className="py-16 px-6 lg:px-8 bg-cream border-b-4 border-walnut">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Our Work Speaks
          </h2>
          <p className="text-xl text-mocha">
            Scroll through our creative portfolio
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 font-bold border-4 border-walnut shadow-brutal transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white scale-105"
                    : "bg-white text-walnut hover:scale-105"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {showcaseItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex-shrink-0 ${
                    activeCategory === "reels" ? "w-64" : "w-96"
                  }`}
                >
                  <div className="group relative border-4 border-walnut shadow-brutal hover:shadow-brutal-lg transition-all overflow-hidden bg-white">
                    <div
                      className={`relative ${
                        activeCategory === "reels"
                          ? "aspect-[9/16]"
                          : "aspect-[3/2]"
                      } overflow-hidden`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 bg-white border-t-4 border-walnut">
                      <h3 className="font-heading font-bold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-mocha">
                        {activeCategory === "reels"
                          ? "Video Content"
                          : activeCategory === "ai-generated"
                          ? "AI Created"
                          : "Static Design"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-mocha font-semibold">
              ← Scroll horizontally to see more →
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-accent2 border-4 border-walnut shadow-brutal px-6 py-3 -rotate-1">
            <p className="font-bold text-walnut">
              Want to see your brand here? Let's create magic together! ✨
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
