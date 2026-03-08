'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Web Scraping', href: '/services/web-scraping' },
    { name: 'Price Monitoring', href: '/services/price-monitoring' },
    { name: 'Mobile App Scraping', href: '/services/mobile-scraping' },
    { name: 'Web Scraping API', href: '/services/api' },
    { name: 'Enterprise Crawling', href: '/services/enterprise' },
  ],
  solutions: [
    { name: 'Ticketing & Events', href: '/solutions/ticketing' },
    { name: 'Real Estate Data', href: '/solutions/real-estate' },
    { name: 'Job Market Intelligence', href: '/solutions/jobs' },
    { name: 'Restaurant & Pricing', href: '/solutions/restaurant' },
    { name: 'LinkedIn Intelligence', href: '/solutions/linkedin' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Status', href: '/status' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/md-khalid-mahmud-shawon' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-sage to-mint" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-grid" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold font-display">
                  <span className="text-white">Fast</span>
                  <span className="text-sage">scraping</span>
                </span>
              </Link>
              <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
                Your web scraping team on demand. We deliver structured data at scale — no Cloudflare, no Captchas, no hassles.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a 
                  href="mailto:hello@fastscraping.com" 
                  className="flex items-center gap-2 text-white/70 hover:text-mint transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@fastscraping.com</span>
                </a>
              </div>
              
              {/* Social links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-mint transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-mint transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-mint transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-mint transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Scrayz Brand */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">Also check out:</span>
              <a 
                href="https://scrayz.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <span className="font-semibold">Scrayz</span>
                <span className="text-white/70 text-sm">LinkedIn API</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Fastscraping. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-mint transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-mint transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-mint transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
