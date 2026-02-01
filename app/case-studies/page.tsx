import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/cursor/CustomCursor'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { TrendingUp, Users, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Case Studies - Real Results Across Industries',
  description: 'From social media growth to app launches, see how we\'ve helped brands across Education, FMCG, Real Estate, F&B, D2C, and B2B sectors achieve remarkable growth.',
}

const caseStudies = [
  {
    id: 1,
    client: 'Fashion E-Commerce Brand',
    industry: 'D2C',
    location: 'Mumbai',
    challenge: 'Low engagement on social media (1.2%) and high customer acquisition costs (₹2,800 per customer)',
    solution: 'Complete social media revamp with Reels strategy, influencer collaborations, and targeted Meta campaigns',
    growth: '45K→180K followers',
    engagement: '1.2%→8.5%',
    roas: '4.2x',
    duration: '4 months',
    testimonial: 'TaleCrafters transformed our Instagram from a ghost town to a thriving community. Sales followed naturally.',
    author: 'Priya Sharma',
    position: 'Founder',
    results: [
      'Instagram growth: 45K to 180K followers',
      'Engagement rate increased to 8.5%',
      '3 viral Reels with 500K+ views each',
      'CAC reduced from ₹2,800 to ₹950',
    ],
    color: 'primary' as const,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    client: 'B2B SaaS Platform',
    industry: 'Technology',
    location: 'Bangalore',
    challenge: 'Poor LinkedIn presence and struggling to generate qualified B2B leads',
    solution: 'LinkedIn optimization, thought leadership content, and targeted LinkedIn Ads campaigns',
    leads: '580',
    qualified: '87% qualified',
    growth: '2.5K→15K',
    duration: '5 months',
    testimonial: 'Our LinkedIn transformed from a dead profile to our #1 lead source. Quality of leads is incredible.',
    author: 'Rajesh Kumar',
    position: 'CMO',
    results: [
      'LinkedIn followers: 2.5K to 15K',
      '580 qualified leads generated',
      'Lead quality improved to 87%',
      'LinkedIn became #1 lead source',
    ],
    color: 'accent3' as const,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    client: 'Cloud Kitchen Chain',
    industry: 'F&B',
    location: 'Hyderabad',
    challenge: 'New brand launch with zero online presence and limited budget',
    solution: 'Full-service launch: branding, social media, local SEO, food photography, and influencer marketing',
    revenue: '₹65L',
    orders: '12K+',
    gmb: '#1 ranking',
    duration: '6 months',
    testimonial: 'Launched from scratch to market leader in 6 months. They handled everything—from photos to ads.',
    author: 'Ananya Reddy',
    position: 'Co-founder',
    results: [
      '0 to 12K+ monthly orders',
      '₹65L revenue in 6 months',
      '#1 GMB ranking in 3 locations',
      '25K Instagram followers',
    ],
    color: 'secondary' as const,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop',
  },
  {
    id: 4,
    client: 'Real Estate Developer',
    industry: 'Real Estate',
    location: 'Pune',
    challenge: 'Premium project launch requiring qualified leads and brand positioning',
    solution: 'Multi-channel strategy: TV ads, newspaper campaigns, digital marketing, and professional property shoots',
    leads: '450+',
    sales: '₹18Cr',
    traditional: 'TV + Print',
    duration: '3 months',
    testimonial: 'Blend of traditional and digital worked perfectly. Sold 60% inventory before project completion.',
    author: 'Vikram Malhotra',
    position: 'Director',
    results: [
      '450+ qualified site visits',
      '₹18Cr property sales',
      'TV campaign reached 2M+ viewers',
      '60% inventory sold pre-launch',
    ],
    color: 'accent1' as const,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
  },
  {
    id: 5,
    client: 'EdTech Startup',
    industry: 'Education',
    location: 'Delhi',
    challenge: 'Low website traffic and expensive paid acquisition channels',
    solution: 'SEO overhaul, content marketing, blog strategy, and organic social media growth',
    traffic: '5x organic traffic',
    leads: '2,400+',
    cpl: '₹85',
    duration: '8 months',
    testimonial: 'Organic traffic became our primary growth driver. Finally, sustainable growth without burning cash.',
    author: 'Siddharth Jain',
    position: 'Growth Lead',
    results: [
      'Organic traffic increased 5x',
      '2,400+ organic leads',
      'Cost per lead: ₹85 (was ₹450)',
      'Blog traffic: 50K monthly visitors',
    ],
    color: 'accent2' as const,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
  },
  {
    id: 6,
    client: 'FMCG Brand',
    industry: 'FMCG',
    location: 'Chennai',
    challenge: 'Regional brand wanting to expand to national markets with modern online presence',
    solution: 'E-commerce website development, Amazon & Flipkart optimization, influencer campaigns, and regional ads',
    expansion: '5→15 cities',
    revenue: '3.5x growth',
    platforms: 'Web + Marketplaces',
    duration: '12 months',
    testimonial: 'Helped us go from regional player to national brand. Sales tripled and we\'re in 15 cities now.',
    author: 'Meera Subramanian',
    position: 'Marketing Head',
    results: [
      'Expanded from 5 to 15 cities',
      'Revenue grew 3.5x',
      'E-commerce platform built & launched',
      'Amazon & Flipkart sales: ₹2.2Cr',
    ],
    color: 'primary' as const,
    image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?w=800&h=400&fit=crop',
  },
  {
    id: 7,
    client: 'Fitness App Startup',
    industry: 'Health & Wellness',
    location: 'Hyderabad',
    challenge: 'New mobile app launch needing users, engagement, and brand awareness',
    solution: 'Mobile app development support, app store optimization, social media challenges, and influencer partnerships',
    downloads: '50K+',
    viral: '2 viral challenges',
    retention: '45%',
    duration: '6 months',
    testimonial: 'Two viral challenges put us on the map. App downloads exploded and retention is best in category.',
    author: 'Arjun Patel',
    position: 'Founder & CEO',
    results: [
      '50K+ app downloads',
      '2 viral social media challenges',
      '45% retention rate (vs 18% industry avg)',
      'Featured in App Store',
    ],
    color: 'accent1' as const,
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop',
  },
  {
    id: 8,
    client: 'Luxury Home Decor',
    industry: 'E-Commerce',
    location: 'Jaipur',
    challenge: 'Beautiful products but low website traffic and almost no social media presence',
    solution: 'Professional product photoshoots, Instagram aesthetic curation, Pinterest strategy, and SEO optimization',
    followers: '8K→85K',
    revenue: '₹1.8Cr',
    pinterest: '500K impressions',
    duration: '7 months',
    testimonial: 'They made our products look like art. Instagram and Pinterest became our biggest sales drivers.',
    author: 'Kavita Singhania',
    position: 'Owner',
    results: [
      'Instagram: 8K to 85K followers',
      'Revenue: ₹1.8Cr from social',
      'Pinterest: 500K monthly impressions',
      'Professional shoot for 200+ products',
    ],
    color: 'secondary' as const,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=400&fit=crop',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent1" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              Proven Results
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Real Brands.
              <br />
              Real Growth.
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              From viral social campaigns to complete market expansion—see what we've achieved across diverse industries.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <Card key={study.id} variant={study.color} className="p-0 overflow-hidden">
                {/* Hero Image */}
                {study.image && (
                  <div className="relative w-full h-64 md:h-80 border-b-4 border-black">
                    <Image
                      src={study.image}
                      alt={study.client}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                          {study.client}
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm font-semibold">
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span>{study.location}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {study.duration}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-bold text-lg mb-2">Challenge:</h3>
                          <p className="text-base">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Solution:</h3>
                          <p className="text-base">{study.solution}</p>
                        </div>
                      </div>

                      <div className="bg-white/50 border-2 border-black rounded-lg p-6 mb-6">
                        <h3 className="font-bold text-lg mb-4">Key Results:</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-accent1 font-bold">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t-2 border-black pt-6">
                        <p className="italic text-lg mb-3">"{study.testimonial}"</p>
                        <p className="font-bold">
                          — {study.author}, {study.position}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-black text-white border-4 border-black shadow-brutal rounded-2xl p-6 sticky top-24">
                        <div className="space-y-4">
                          {study.roas && (
                            <div className="text-center pb-4 border-b-2 border-white/20">
                              <div className="font-mono text-5xl font-bold mb-2">
                                {study.roas}
                              </div>
                              <div className="text-sm font-bold">ROAS</div>
                            </div>
                          )}
                          
                          {study.growth && (
                            <div className="bg-white text-black rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-bold text-sm">Growth</span>
                              </div>
                              <div className="font-mono text-xl font-bold">
                                {study.growth}
                              </div>
                            </div>
                          )}
                          
                          {study.revenue && (
                            <div className="bg-white text-black rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm">Revenue</span>
                              </div>
                              <div className="font-mono text-xl font-bold">
                                {study.revenue}
                              </div>
                            </div>
                          )}
                          
                          {study.leads && (
                            <div className="bg-white text-black rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="w-5 h-5" />
                                <span className="font-bold text-sm">Leads</span>
                              </div>
                              <div className="font-mono text-xl font-bold">
                                {study.leads}
                              </div>
                            </div>
                          )}
                          
                          {study.engagement && (
                            <div className="bg-white text-black rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm">Engagement</span>
                              </div>
                              <div className="font-mono text-xl font-bold">
                                {study.engagement}
                              </div>
                            </div>
                          )}
                          
                          {study.followers && (
                            <div className="bg-white text-black rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm">Followers</span>
                              </div>
                              <div className="font-mono text-xl font-bold">
                                {study.followers}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-accent2 text-white border-4 border-black shadow-brutal rounded-2xl p-12 text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Ready For Similar Results?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can grow your brand.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://calendar.app.google/GnvC7UCPUu48G6RcA" target="_blank" rel="noopener noreferrer">
                Book Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
