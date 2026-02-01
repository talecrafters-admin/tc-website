'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Meta Business Partners',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png',
    alt: 'Meta Partners',
  },
  {
    name: 'Google Partners',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png',
    alt: 'Google Partners',
  },
  {
    name: 'Interakt Partners',
    logo: '/partners/interakt.png',
    alt: 'Interakt Partners',
  },
  {
    name: 'AI Sensy Partners',
    logo: '/partners/aisensy.png',
    alt: 'AI Sensy Partners',
  },
  {
    name: 'Zoho Partners',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Zoho_Logo.svg/200px-Zoho_Logo.svg.png',
    alt: 'Zoho Partners',
  },
  {
    name: 'LinkedIn Partners',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/200px-LinkedIn_logo_initials.png',
    alt: 'LinkedIn Partners',
  },
]

export default function PartnerBadges() {
  return (
    <div className="py-12 px-6 lg:px-8 bg-white border-t-4 border-black">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            Trusted Partners
          </h3>
          <p className="text-black/60">
            Certified by industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-4 border-black rounded-xl p-4 h-24 flex items-center justify-center hover:shadow-brutal transition-all hover:-translate-y-1 relative overflow-hidden">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={120}
                  height={40}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="text-xs font-bold text-center">${partner.name}</div>`
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
