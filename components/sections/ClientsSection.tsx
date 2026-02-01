"use client";

import { motion } from "framer-motion";

// Placeholder client names - replace with actual logos when available
const clients = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
  "Client 7",
  "Client 8",
  "Client 9",
  "Client 10",
  "Client 11",
  "Client 12",
  "Client 13",
  "Client 14",
  "Client 15",
  "Client 16",
  "Client 17",
  "Client 18",
  "Client 19",
  "Client 20",
  "Client 21",
  "Client 22",
  "Client 23",
  "Client 24",
  "Client 25",
];

export default function ClientsSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-cream border-t-4 border-black bg-pattern-dots relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Trusted By 25+ Brands
          </h2>
          <p className="text-xl text-black/70">
            From startups to established businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="group"
            >
              <div className="bg-white border-4 border-black rounded-xl p-4 h-20 md:h-24 flex items-center justify-center hover:shadow-brutal transition-all hover:-translate-y-1">
                {/* Placeholder - Replace with actual logo images */}
                <div className="text-xs md:text-sm font-bold text-center text-black/40 group-hover:text-black transition-colors">
                  Logo {index + 1}
                </div>
                {/* 
                  To add actual logos, replace the div above with:
                  <Image
                    src={`/clients/${client-filename}.png`}
                    alt={client name}
                    width={120}
                    height={60}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-black/60">
            Ready to join them?{" "}
            <a
              href="https://calendar.app.google/GnvC7UCPUu48G6RcA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black underline hover:text-accent1"
            >
              Book a call
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
