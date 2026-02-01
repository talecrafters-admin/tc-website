import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/cursor/CustomCursor'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { Target, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Full-Service Digital Agency in Hyderabad',
  description: 'Meet the TaleCrafters team. We\'re a full-service digital agency helping brands grow through creative storytelling and data-driven execution.',
}

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every campaign is built to drive measurable ROI and real business growth.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We understand business challenges. Simple reporting, clear communication, zero BS.',
  },
  {
    icon: Award,
    title: 'Data-Obsessed',
    description: 'Every decision backed by data. We test, measure, optimize, and scale what works.',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'We move quickly without sacrificing quality. Launch in days, not weeks.',
  },
]

// Placeholder team data - replace with actual information
const founders = [
  {
    name: 'Founder Name 1',
    role: 'Co-Founder & CEO',
    bio: 'Brief bio about the founder\'s background, experience, and vision for TaleCrafters.',
    image: '/images/team/founder-1.jpg',
  },
  {
    name: 'Founder Name 2',
    role: 'Co-Founder & COO',
    bio: 'Brief bio about the founder\'s background, experience, and role at TaleCrafters.',
    image: '/images/team/founder-2.jpg',
  },
]

const team = [
  {
    name: 'Team Member 1',
    role: 'Creative Director',
    image: '/images/team/member-1.jpg',
  },
  {
    name: 'Team Member 2',
    role: 'Performance Marketing Lead',
    image: '/images/team/member-2.jpg',
  },
  {
    name: 'Team Member 3',
    role: 'Tech Lead',
    image: '/images/team/member-3.jpg',
  },
  {
    name: 'Team Member 4',
    role: 'Content Strategist',
    image: '/images/team/member-4.jpg',
  },
  {
    name: 'Team Member 5',
    role: 'Social Media Manager',
    image: '/images/team/member-5.jpg',
  },
  {
    name: 'Team Member 6',
    role: 'SEO Specialist',
    image: '/images/team/member-6.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              We're Your
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Growth Partners</span>
                <span className="absolute -inset-2 bg-secondary -z-10 -rotate-1 border-4 border-black shadow-brutal" />
              </span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Based in Hyderabad, serving brands across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  TaleCrafters was born from a simple belief: great brands deserve great marketing. We saw too many businesses struggling with scattered agencies, inconsistent results, and creative that didn't convert.
                </p>
                <p>
                  So we built something different. A full-service agency that combines creative excellence with technical expertise. Where strategy meets execution. Where data drives decisions, but storytelling drives results.
                </p>
                <p>
                  We're a team of marketers, creatives, developers, and strategists who've worked across industries. We've seen what works, what doesn't, and how to grow sustainably.
                </p>
                <p className="font-bold">
                  We're based in Hyderabad, but we partner with brands across India who want to grow without guesswork.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card variant="primary" className="p-6">
                <div className="font-mono text-5xl font-bold mb-2">25+</div>
                <p className="font-semibold">Happy Clients</p>
              </Card>
              <Card variant="accent1" className="p-6">
                <div className="font-mono text-5xl font-bold mb-2">15+</div>
                <p className="font-semibold">Services Offered</p>
              </Card>
              <Card variant="secondary" className="p-6">
                <div className="font-mono text-5xl font-bold mb-2">4.5x</div>
                <p className="font-semibold">Average ROAS</p>
              </Card>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">
              Meet the Founders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founders.map((founder) => (
                <Card key={founder.name} variant="primary" className="p-8 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl border-4 border-black shadow-brutal overflow-hidden bg-gray-200">
                    {/* Placeholder for founder image */}
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black/40">
                      Add Photo
                    </div>
                    {/* 
                      Replace with actual image:
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    */}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-lg font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-base text-black/70">
                    {founder.bio}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={member.name} className="group">
                  <div className="relative w-full aspect-square rounded-xl border-4 border-black shadow-brutal overflow-hidden bg-gray-200 group-hover:shadow-brutal-lg transition-all">
                    {/* Placeholder for team member image */}
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black/40">
                      Photo
                    </div>
                    {/*
                      Replace with actual image:
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    */}
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-black/70">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">
              What We Believe
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} variant={index % 2 === 0 ? 'default' : 'default'} className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-accent2 text-white border-4 border-black shadow-brutal rounded-2xl p-12 mb-20">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Why "TaleCrafters"?
            </h2>
            <p className="text-xl mb-4">
              Every brand has a story. Every product solves a problem. But if no one hears that story, it doesn't matter how good your product is.
            </p>
            <p className="text-xl">
              We craft the tales that make people stop scrolling, pay attention, and take action. We turn your brand's story into profitable campaigns.
            </p>
          </div>

          <div className="bg-primary border-4 border-black shadow-brutal rounded-2xl p-12 text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Let's Write Your Success Story
            </h2>
            <p className="text-xl mb-8">
              Ready to grow your brand? Let's talk.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://calendar.app.google/GnvC7UCPUu48G6RcA" target="_blank" rel="noopener noreferrer">
                Start Conversation
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
