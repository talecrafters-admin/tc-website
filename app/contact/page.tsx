import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/cursor/CustomCursor'
import MultiStepForm from '@/components/forms/MultiStepForm'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Ad Audit',
  description: 'Book a free strategy call with TaleCrafters. We\'ll audit your campaigns and show you where you\'re losing money. No pitch, just insights.',
}

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor min-h-screen bg-cream pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
              Let's Talk Growth
            </h1>
            <p className="text-xl text-black/70">
              Answer a few questions to get your free audit
            </p>
          </div>
          <MultiStepForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
