'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Database, CheckCircle2 } from 'lucide-react'

const features = [
  { icon: Shield, text: 'Bypass Cloudflare & Captchas' },
  { icon: Zap, text: 'Large-Scale On Demand' },
  { icon: Database, text: 'No Proxy Hassles' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-mint/20 to-sage/20 rounded-full blur-3xl" />
      
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 right-[25%] w-12 h-12 bg-gradient-to-br from-sage/40 to-mint/40 rounded-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-48 left-[10%] w-8 h-8 bg-mint/50 rounded-full"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Built to Scale
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-[1.1] tracking-tight"
            >
              Your Web Scraping Team{' '}
              <span className="relative">
                <span className="text-gradient">on Demand</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M 0 4 Q 50 0, 100 4 Q 150 8, 200 4"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#043f34" />
                      <stop offset="100%" stopColor="#71967d" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              We deliver structured data at large scale — no Cloudflare, no Captchas, no hassles. Just tell us what you need, we&apos;ll handle everything.
            </motion.p>
            
            {/* Features */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft border border-sage/20"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full text-lg border-2 border-primary/20 hover:border-primary hover:bg-sage/10 transition-all duration-300"
              >
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sage/40 via-mint/40 to-sage/40 rounded-3xl blur-2xl opacity-60" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-soft-lg border border-sage/20 p-8 overflow-hidden">
                {/* Decorative header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-secondary/30" />
                  <div className="w-3 h-3 rounded-full bg-sage" />
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-sage/20 to-mint/20 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-3xl font-bold text-primary font-display">100M+</p>
                    <p className="text-sm text-gray-600 mt-1">Profiles/Month</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-mint/20 to-sage/20 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-3xl font-bold text-primary font-display">60M</p>
                    <p className="text-sm text-gray-600 mt-1">Records/Daily</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-3xl font-bold text-primary font-display">99.7%</p>
                    <p className="text-sm text-gray-600 mt-1">Bypass Rate</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-3xl font-bold text-primary font-display">15+</p>
                    <p className="text-sm text-gray-600 mt-1">Months Stable</p>
                  </motion.div>
                </div>
                
                {/* Live indicator */}
                <div className="mt-6 flex items-center gap-3 p-3 bg-sage/20 rounded-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium text-gray-700">Live data pipelines running</span>
                </div>
              </div>
              
              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-soft p-4 border border-sage/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage to-mint flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Anti-Bot Bypass</p>
                    <p className="text-xs text-gray-500">Cloudflare • DataDome</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-4 border border-sage/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Data Delivery</p>
                    <p className="text-xs text-gray-500">API • SFTP • S3</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 60L48 55C96 50 192 40 288 43.3C384 47 480 63 576 68.3C672 73 768 67 864 58.3C960 50 1056 40 1152 41.7C1248 43 1344 57 1392 63.3L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
