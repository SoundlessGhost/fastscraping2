'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "I'm satisfied with the results for today, so you can add $400 setup fee to next invoice. Thank you for your hard work.",
    author: 'Scott Vahey',
    role: 'Owner',
    company: 'Ficstar',
    platform: 'StubHub Pipeline',
    avatar: 'SV',
  },
  {
    quote: "Most likely no one is able to do it except you. We will see :-)",
    author: 'Adrian Mayer',
    role: 'Founder',
    company: 'TheDataHive',
    platform: 'Swiss Real Estate APIs',
    avatar: 'AM',
  },
  {
    quote: "Your doing a great job with the Indeed US numbers over last couple months. Thank you for your efforts. Much appreciated!",
    author: 'Scott Vahey',
    role: 'Owner',
    company: 'Ficstar',
    platform: 'Indeed Pipeline',
    avatar: 'SV',
  },
]

const platforms = [
  { name: 'StubHub', category: 'Ticketing' },
  { name: 'SeatGeek', category: 'Ticketing' },
  { name: 'Indeed', category: 'Job Data' },
  { name: 'LinkedIn', category: 'B2B Data' },
  { name: 'ImmoScout24', category: 'Real Estate' },
  { name: 'Starbucks', category: 'Restaurant' },
  { name: 'McDonald\'s', category: 'Restaurant' },
  { name: 'DoorDash', category: 'Restaurant' },
]

export default function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-white" />
      
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
            Trusted By
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Real feedback from our production partnerships. These are actual quotes from client conversations.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-cream to-white rounded-3xl p-8 border border-sage/20 shadow-soft group-hover:shadow-soft-lg transition-all duration-300">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                {/* Platform tag */}
                <div className="mt-4 pt-4 border-t border-sage/20">
                  <span className="text-xs text-gray-500">Project: </span>
                  <span className="text-xs font-medium text-primary">{testimonial.platform}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms We Scrape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold font-display text-primary mb-8">
            Platforms We Successfully Scrape
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className="px-6 py-3 bg-white rounded-full border border-sage/30 shadow-soft group-hover:shadow-soft-lg group-hover:border-primary/30 transition-all duration-300">
                  <p className="font-semibold text-gray-800">{platform.name}</p>
                  <p className="text-xs text-gray-500">{platform.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            And 50+ more platforms including Amazon, Walmart, Glassdoor, and custom websites
          </p>
        </motion.div>
      </div>
    </section>
  )
}
