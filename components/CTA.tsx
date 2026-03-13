"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-cream">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-32 h-32 bg-sage/20 rounded-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-[15%] w-20 h-20 bg-mint/30 rounded-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[30%] w-4 h-4 bg-primary/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight leading-tight">
              Ready to Scale Your{" "}
              <span className="text-gradient">Data Pipeline?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing while delivering better quality and
              coverage.
            </p>

            {/* Quick benefits */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-sage/30 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">48-72h Sample</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-sage/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-sage/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">No Commitment</span>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft-lg border border-sage/20">
              <h3 className="text-2xl font-bold font-display text-primary mb-2">
                Let's Talk Data
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us your target platforms and volume needs. We'll show you
                what's possible.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center w-full px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
                >
                  Book a Demo Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="mailto:khalidsocialhandles@gmail.com"
                  className="group flex items-center justify-center w-full px-8 py-4 bg-sage/20 text-primary font-semibold rounded-full text-lg border-2 border-primary/10 hover:border-primary hover:bg-sage/30 transition-all duration-300"
                >
                  Send a Message
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Trust badge */}
              <div className="mt-8 pt-6 border-t border-sage/30 text-center">
                <p className="text-sm text-gray-500">
                  Trusted by data teams at DaaS companies, AI startups, and
                  enterprises
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
