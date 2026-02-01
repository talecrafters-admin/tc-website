import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
  Radio,
  Newspaper,
  Tv,
  Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services - Full-Service Digital Agency",
  description:
    "Complete digital solutions: Social Media, Performance Marketing, SEO, Web & Mobile Development, Creative Services, Traditional Media & more.",
};

const services = [
  {
    id: "social-media",
    icon: Facebook,
    title: "Social Media Marketing",
    subtitle: "Build Your Online Presence",
    description:
      "Comprehensive social media management across Instagram, Facebook, LinkedIn, and Twitter. We create engaging content, grow your community, and drive real business results.",
    features: [
      "Content strategy & calendar planning",
      "Daily posting & community management",
      "Instagram Reels & Stories",
      "LinkedIn B2B marketing",
      "Influencer collaborations",
      "Social media analytics & reporting",
    ],
    color: "primary" as const,
  },
  {
    id: "performance",
    icon: Target,
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth",
    description:
      "ROI-focused campaigns across Meta Ads, Google Ads, and Performance Max. We optimize every rupee spent to drive conversions and revenue.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & PMAX campaigns",
      "Advanced audience targeting",
      "Conversion tracking & optimization",
      "A/B testing & iteration",
      "Real-time performance monitoring",
    ],
    color: "accent2" as const,
  },
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design & Video Production",
    subtitle: "Content That Stands Out",
    description:
      "From static designs to professional videos, we create content that captures attention and drives engagement across all platforms.",
    features: [
      "Social media graphics & carousels",
      "Video production & editing",
      "Animated explainer videos",
      "Brand identity & guidelines",
      "Ad creative design",
      "UGC-style content",
    ],
    color: "secondary" as const,
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Content Marketing",
    subtitle: "Organic Growth That Lasts",
    description:
      "Rank higher, drive organic traffic, and establish authority in your industry with our comprehensive SEO and content strategies.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & strategy",
      "On-page & off-page optimization",
      "Content creation & blogging",
      "Link building campaigns",
      "Local SEO & GMB optimization",
    ],
    color: "accent1" as const,
  },
  {
    id: "strategy",
    icon: Megaphone,
    title: "Strategy & GTM Planning",
    subtitle: "Launch With Confidence",
    description:
      "Strategic planning and go-to-market execution for product launches, brand positioning, and market expansion.",
    features: [
      "Market research & analysis",
      "Competitive positioning",
      "Go-to-market strategy",
      "Launch campaign planning",
      "Brand messaging & voice",
      "Marketing roadmap development",
    ],
    color: "accent3" as const,
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    subtitle: "Fast, Modern Websites",
    description:
      "Custom web applications and websites built with cutting-edge technology. Fast, secure, and optimized for conversions.",
    features: [
      "React & Next.js development",
      "E-commerce platforms",
      "Landing pages & microsites",
      "CMS integration",
      "Web application development",
      "Performance optimization",
    ],
    color: "primary" as const,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Native iOS & Android Apps",
    description:
      "Full-cycle mobile app development from concept to launch. Create engaging mobile experiences your users will love.",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "UI/UX design",
      "App Store optimization",
      "Maintenance & updates",
    ],
    color: "secondary" as const,
  },
  {
    id: "photoshoot",
    icon: Camera,
    title: "Professional Photoshoots",
    subtitle: "Visual Storytelling",
    description:
      "High-quality photography for products, brands, and campaigns. Professional shoots that elevate your visual identity.",
    features: [
      "Product photography",
      "Brand & lifestyle shoots",
      "Team & corporate photography",
      "Social media content",
      "Professional editing",
      "On-location or studio",
    ],
    color: "accent1" as const,
  },
  {
    id: "ai-content",
    icon: Brain,
    title: "AI-Generated Content Creation",
    subtitle: "Powered By AI",
    description:
      "Leverage AI tools for content creation, productivity, and marketing automation. Stay ahead with cutting-edge technology.",
    features: [
      "AI copywriting & content",
      "Automated social media posts",
      "AI image generation",
      "Content personalization",
      "Workflow automation",
      "AI productivity tools",
    ],
    color: "accent2" as const,
  },
  {
    id: "radio",
    icon: Radio,
    title: "Radio Advertising",
    subtitle: "Audio Reach",
    description:
      "Strategic radio campaigns that reach your target audience during peak listening hours across popular stations.",
    features: [
      "Radio spot creation",
      "Station selection & planning",
      "Peak time slot booking",
      "Voice-over production",
      "Campaign scheduling",
      "Performance tracking",
    ],
    color: "secondary" as const,
  },
  {
    id: "newspaper",
    icon: Newspaper,
    title: "Newspaper Advertising",
    subtitle: "Print Media Power",
    description:
      "Print advertising in leading newspapers for credibility and reach. Perfect for established brand messaging.",
    features: [
      "Ad design & copywriting",
      "Newspaper selection",
      "Strategic placement",
      "Classified & display ads",
      "Regional & national coverage",
      "Cost optimization",
    ],
    color: "accent1" as const,
  },
  {
    id: "tv-ott",
    icon: Tv,
    title: "TV & OTT Advertising",
    subtitle: "Screen Domination",
    description:
      "Television and OTT platform advertising for maximum reach and brand recall. Traditional meets digital.",
    features: [
      "TV commercial production",
      "OTT platform advertising",
      "Channel & time slot selection",
      "Regional & national campaigns",
      "Video creative production",
      "Campaign performance analysis",
    ],
    color: "accent2" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Services That Drive
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Real Growth</span>
                <span className="absolute -inset-2 bg-secondary -z-10 -rotate-1 border-4 border-black shadow-brutal" />
              </span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              From digital to traditional, creative to technical—we've got you
              covered.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={index % 2 === 0 ? "" : "lg:flex-row-reverse"}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card variant={service.color} className="lg:col-span-1 p-8">
                    <service.icon className="w-16 h-16 mb-6" />
                    <h2 className="font-heading text-4xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xl font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-lg mb-6">{service.description}</p>
                    <Button
                      variant={
                        service.color === "accent2" ? "secondary" : "accent2"
                      }
                      asChild
                    >
                      <Link
                        href="https://calendar.app.google/GnvC7UCPUu48G6RcA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </Card>

                  <div className="lg:col-span-1">
                    <div className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8">
                      <h3 className="font-heading text-2xl font-bold mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent1 flex-shrink-0 mt-1" />
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-primary border-4 border-black shadow-brutal rounded-2xl p-12 text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-xl mb-8">
              Book a free strategy call and we'll create a custom plan for you.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link
                href="https://calendar.app.google/GnvC7UCPUu48G6RcA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Audit
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
