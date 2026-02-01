import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import PartnerBadges from '@/components/ui/PartnerBadges'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Social Media Marketing', href: '/services#social-media' },
    { name: 'Performance Marketing', href: '/services#performance' },
    { name: 'SEO & Content', href: '/services#seo' },
    { name: 'Web Development', href: '/services#web-dev' },
    { name: 'Mobile Apps', href: '/services#mobile' },
    { name: 'LinkedIn Marketing', href: '/services#linkedin' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <PartnerBadges />
      <div className="bg-black border-t-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h3 className="font-heading text-2xl font-bold text-white mb-4">TaleCrafters</h3>
              <p className="text-gray-300 text-sm mb-4">
                Full-service digital agency in Hyderabad. From strategy to execution, we craft stories that convert.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} TaleCrafters. All rights reserved. | Based in Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
