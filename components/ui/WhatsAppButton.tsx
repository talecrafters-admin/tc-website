'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = 'Hi! I\'d like to learn more about your services.' 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg border-2 border-white text-sm font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Chat with us!
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
      />
    </motion.button>
  )
}
