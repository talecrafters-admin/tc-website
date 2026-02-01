import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/cursor/CustomCursor'
import Button from '@/components/ui/Button'
import { Search, Lightbulb, Sparkles, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process - How We Turn ₹1 Into ₹8',
  description: 'Our proven 4-step process for performance marketing: Audit, Strategy, Creative, and Optimize. Learn how we deliver consistent ROAS.',
}

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    subtitle: 'We find what\'s broken',
    description: 'Before we touch anything, we dig deep into your current campaigns. We analyze every metric, every audience, every creative to identify exactly where you\'re losing money.',
    details: [
      'Campaign structure analysis',
      'Audience targeting review',
      'Creative performance audit',
      'Funnel conversion analysis',
      'Attribution mapping',
      'Competitor research',
    ],
    duration: '1 week',
    color: 'primary',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    subtitle: 'Custom plan, no templates',
    description: 'We don\'t believe in one-size-fits-all. Based on our audit findings, we create a data-driven strategy tailored specifically to your business goals and target audience.',
    details: [
      'Custom growth roadmap',
      'Channel prioritization',
      'Budget allocation plan',
      'Audience segmentation',
      'Creative direction',
      'KPI targets & timelines',
    ],
    duration: '1 week',
    color: 'secondary',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Creative',
    subtitle: 'Ads that stop scrolls',
    description: 'Your ads compete with cat videos. We create scroll-stopping content that makes your audience stop, engage, and convert. Every creative is designed with performance in mind.',
    details: [
      'Ad concept development',
      'Static & video production',
      'Copy that converts',
      'A/B test variations',
      'Platform optimization',
      'Brand consistency',
    ],
    duration: 'Ongoing',
    color: 'accent1',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimize',
    subtitle: 'Daily monitoring, weekly reports',
    description: 'Launch is just the beginning. We monitor performance daily, run continuous A/B tests, and optimize every element to maximize ROAS and scale what works.',
    details: [
      'Daily performance monitoring',
      'Weekly optimization sprints',
      'Continuous A/B testing',
      'Budget reallocation',
      'Creative refresh',
      'Detailed reporting',
    ],
    duration: 'Ongoing',
    color: 'accent3',
  },
]

export default function ProcessPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              How We Turn
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">₹1 Into ₹8</span>
                <span className="absolute -inset-2 bg-accent1 -z-10 rotate-1 border-4 border-black shadow-brutal" />
              </span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Our proven 4-step process for delivering consistent, scalable results
            </p>
          </div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full h-20 w-1 bg-black -translate-x-1/2 z-0" />
                )}
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`bg-${step.color} border-4 border-black shadow-brutal rounded-2xl p-8 lg:p-12`}>
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-20 h-20 bg-secondary border-4 border-black rounded-full flex items-center justify-center font-heading text-3xl font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="pt-4">
                          <step.icon className="w-12 h-12 mb-4" />
                        </div>
                      </div>
                      
                      <h2 className="font-heading text-4xl font-bold mb-2">
                        {step.title}
                      </h2>
                      <p className="text-xl font-semibold mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-heading text-2xl font-bold">
                          What We Do
                        </h3>
                        <div className="neo-badge bg-accent2 text-white">
                          {step.duration}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-accent1 flex-shrink-0 mt-1" />
                            <span className="text-lg">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-6 text-center">
              <div className="font-mono text-5xl font-bold mb-2">2-4</div>
              <p className="font-semibold">Weeks to see initial results</p>
            </div>
            <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-6 text-center">
              <div className="font-mono text-5xl font-bold mb-2">3-5x</div>
              <p className="font-semibold">Average ROAS achieved</p>
            </div>
            <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-6 text-center">
              <div className="font-mono text-5xl font-bold mb-2">24/7</div>
              <p className="font-semibold">Campaign monitoring</p>
            </div>
          </div>

          <div className="mt-20 bg-primary border-4 border-black shadow-brutal rounded-2xl p-12 text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Ready To Get Started?
            </h2>
            <p className="text-xl mb-8">
              Let's audit your campaigns and create a custom growth plan.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Book Free Audit</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
