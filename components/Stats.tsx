'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    value: 100,
    suffix: 'M+',
    label: 'LinkedIn Profiles',
    sublabel: 'Extracted Monthly',
    color: 'primary',
  },
  {
    value: 60,
    suffix: 'M',
    label: 'Records Daily',
    sublabel: 'Ticketing Data',
    color: 'secondary',
  },
  {
    value: 55,
    suffix: 'M',
    label: 'Weekly Records',
    sublabel: 'Restaurant & Pricing',
    color: 'sage',
  },
  {
    value: 99.7,
    suffix: '%',
    label: 'Bypass Success',
    sublabel: 'Anti-Bot Systems',
    color: 'mint',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 50, 
    stiffness: 100,
    duration: 2000 
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = value % 1 !== 0 
          ? latest.toFixed(1) 
          : Math.round(latest).toString()
        ref.current.textContent = formatted + suffix
      }
    })
    return unsubscribe
  }, [springValue, suffix, value])

  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
            Our Scale
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We operate production data pipelines delivering millions of records daily. These are real numbers from active client engagements.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 border border-sage/20 shadow-soft group-hover:shadow-soft-lg transition-all duration-500 text-center overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-sage/20 to-mint/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative">
                  <motion.div
                    className="text-5xl lg:text-6xl font-bold font-display text-primary mb-2"
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {stat.sublabel}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Active pipelines in 5+ countries</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>12+ months client relationships</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span>Zero account bans</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
