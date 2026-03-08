'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  BarChart3, 
  Smartphone, 
  Code2, 
  Server, 
  Layers,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Web Scraping Service',
    description: 'Clean, reliable, automated extraction at scale. Any website, any volume. We handle the complexity.',
    color: 'from-primary/10 to-secondary/10',
    iconBg: 'from-primary to-secondary',
  },
  {
    icon: BarChart3,
    title: 'Competitor Price Monitoring',
    description: 'Live pricing feeds. Daily or real-time. Structured and delivery-ready for your analytics pipeline.',
    color: 'from-secondary/10 to-sage/20',
    iconBg: 'from-secondary to-sage',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Scraping',
    description: 'Extract data from mobile app APIs and endpoints. Reverse-engineered with stealth techniques.',
    color: 'from-sage/20 to-mint/20',
    iconBg: 'from-sage to-mint',
  },
  {
    icon: Code2,
    title: 'Web Scraping API',
    description: 'Customized data pipelines delivered via REST API. Real-time access with JSON responses.',
    color: 'from-mint/20 to-primary/10',
    iconBg: 'from-mint to-primary/60',
  },
  {
    icon: Server,
    title: 'Enterprise Web Crawling',
    description: 'Large-scale crawling across entire domains with structured output. Million-record pipelines.',
    color: 'from-primary/10 to-sage/20',
    iconBg: 'from-primary/80 to-sage',
  },
  {
    icon: Layers,
    title: 'Ready-Made Scraping APIs',
    description: 'Pre-built APIs for Indeed, Amazon, Walmart, LinkedIn, and custom platforms. Plug and play.',
    color: 'from-sage/20 to-secondary/10',
    iconBg: 'from-sage to-secondary',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sage/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
            Data Extraction Solutions{' '}
            <span className="text-gradient">Built for Scale</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From simple web scraping to complex enterprise data pipelines. We handle the infrastructure, anti-bot bypass, and ongoing maintenance — you get clean, structured data.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-white rounded-3xl p-8 border border-sage/20 shadow-soft group-hover:shadow-soft-lg transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-primary font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Link */}
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary font-semibold group/link"
                >
                  <span className="border-b-2 border-transparent group-hover/link:border-primary transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We build tailored data pipelines for your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
