"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail, CircleDot } from "lucide-react";

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  slate: "#475569",
  white: "#ffffff",
};

export default function CTAVariant002() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 1200 600">
          <path
            d="M-100 150 Q 300 50, 600 150 T 1300 150"
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 300 Q 300 200, 600 300 T 1300 300"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 450 Q 300 350, 600 450 T 1300 450"
            stroke={colors.sage}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Animated flowing dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint }}
          initial={{ x: -20, y: 100 + i * 120, opacity: 0 }}
          animate={{
            x: ["-5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Decorative elements - Node style */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-24 h-24 rounded-2xl border-2 border-dashed pointer-events-none"
        style={{ borderColor: colors.sage + "50" }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-[15%] w-16 h-16 rounded-xl border-2 border-dashed pointer-events-none"
        style={{ borderColor: colors.mint + "50" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Flow Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span className="flex items-center gap-3 flex-wrap">
                <span style={{ color: colors.primary }}>Ready to Scale Your</span>
              </span>
              <span className="flex items-center gap-3 mt-2">
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8" style={{ color: colors.sage }} />
                </motion.div>
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Data Pipeline?
                </span>
              </span>
            </h2>

            {/* Flow-style underline */}
            <motion.svg
              className="w-48 h-4 mt-4"
              viewBox="0 0 200 16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.circle cx="8" cy="8" r="4" fill={colors.primary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} />
              <motion.line x1="16" y1="8" x2="90" y2="8" stroke={colors.secondary} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />
              <motion.circle cx="100" cy="8" r="4" fill={colors.secondary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
              <motion.line x1="108" y1="8" x2="182" y2="8" stroke={colors.sage} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
              <motion.circle cx="192" cy="8" r="4" fill={colors.sage} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} />
            </motion.svg>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: colors.slate }}>
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing while delivering better quality and coverage.
            </p>

            {/* Quick benefits - Flow Style */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Calendar, text: "48-72h Sample" },
                { icon: MessageSquare, text: "Free Consultation" },
                { icon: Mail, text: "No Commitment" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-xl border-2"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "50",
                  }}
                >
                  {/* Connection dot */}
                  <div
                    className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
                    style={{ backgroundColor: colors.white, borderColor: colors.primary }}
                  />
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
                  </div>
                  <span className="text-sm" style={{ color: colors.slate }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card (Flow Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative rounded-2xl p-8 lg:p-10 border-2 overflow-hidden"
              style={{
                backgroundColor: colors.white,
                borderColor: colors.sage + "60",
              }}
            >
              {/* Connection dot on top */}
              <div
                className="absolute -top-2 left-10 w-4 h-4 rounded-full border-2 z-10"
                style={{ backgroundColor: colors.white, borderColor: colors.primary }}
              />

              {/* Rotating dashed ring */}
              <motion.div
                className="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-dashed opacity-30"
                style={{ borderColor: colors.sage }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Flow gradient at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                }}
              />

              <h3
                className="text-2xl font-bold font-display mb-2 flex items-center gap-2"
                style={{ color: colors.primary }}
              >
                <CircleDot className="w-6 h-6" style={{ color: colors.secondary }} />
                Let's Talk Data
              </h3>
              <p className="text-sm mb-8" style={{ color: colors.slate }}>
                Tell us your target platforms and volume needs. We'll show you what's possible.
              </p>

              {/* CTA Buttons - Flow Style */}
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center w-full px-8 py-4 font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    color: colors.white,
                  }}
                >
                  {/* Flowing highlight */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.white}, transparent)`,
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="relative flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.mint }} />
                    Talk to Khalid — The Anti-Bot Expert
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="mailto:khalid@fastscraping.com"
                  className="group flex items-center justify-center w-full px-8 py-4 font-semibold rounded-xl text-lg border-2 transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "60",
                    color: colors.primary,
                  }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: colors.secondary }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Send a Message
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Trust badge */}
              <div
                className="mt-8 pt-6 text-center border-t flex items-center justify-center gap-2"
                style={{ borderColor: colors.sage + "40" }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: colors.sage }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm" style={{ color: colors.slate }}>
                  Trusted by data teams at DaaS companies, AI startups, and enterprises
                </p>
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 8px 40px ${colors.sage}30` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
