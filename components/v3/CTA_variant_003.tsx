"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail, Hexagon } from "lucide-react";

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  slate: "#475569",
  white: "#ffffff",
};

export default function CTAVariant003() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[10%] w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 left-[15%] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] pointer-events-none"
      >
        <Hexagon className="w-16 h-16 opacity-10" style={{ color: colors.primary }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-[10%] pointer-events-none"
      >
        <Hexagon className="w-10 h-10 opacity-10" style={{ color: colors.secondary }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Abstract Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span className="relative inline-block">
                <span style={{ color: colors.primary }}>Ready to Scale Your</span>
                {/* Decorative dots */}
                <motion.span
                  className="absolute -right-6 top-0 flex flex-col gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sage }} />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.mint }} />
                </motion.span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Data Pipeline?
                </span>
                {/* Organic wave underline */}
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 200 16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M 0 8 Q 30 2, 60 8 T 120 8 T 180 8 T 200 8"
                    fill="none"
                    stroke={`url(#ctaGradient)`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="50%" stopColor={colors.secondary} />
                      <stop offset="100%" stopColor={colors.sage} />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: colors.slate }}>
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing while delivering better quality and coverage.
            </p>

            {/* Quick benefits - Artistic Style */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Calendar, text: "48-72h Sample" },
                { icon: MessageSquare, text: "Free Consultation" },
                { icon: Mail, text: "No Commitment" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-2xl border overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                    borderColor: colors.sage + "40",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover shimmer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.mint}30, transparent)`,
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div
                    className="relative w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
                  </div>
                  <span className="relative text-sm" style={{ color: colors.slate }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card (Abstract Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative rounded-3xl p-8 lg:p-10 border overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                borderColor: colors.sage + "50",
              }}
            >
              {/* Gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                }}
              />

              {/* Decorative corner blob */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                style={{ backgroundColor: colors.mint }}
              />

              {/* Another decorative blob */}
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                style={{ backgroundColor: colors.sage }}
              />

              <h3
                className="relative text-2xl font-bold font-display mb-2 flex items-center gap-3"
                style={{ color: colors.primary }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon className="w-6 h-6" style={{ color: colors.secondary }} />
                </motion.div>
                Let's Talk Data
              </h3>
              <p className="relative text-sm mb-8" style={{ color: colors.slate }}>
                Tell us your target platforms and volume needs. We'll show you what's possible.
              </p>

              {/* CTA Buttons - Artistic Style */}
              <div className="relative space-y-4">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center w-full px-8 py-4 font-bold rounded-2xl text-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  style={{ color: colors.white }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
                      backgroundSize: "200% 200%",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <span className="relative flex items-center">
                    Talk to Khalid — The Anti-Bot Expert
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </span>
                </Link>

                <Link
                  href="mailto:khalid@fastscraping.com"
                  className="group relative flex items-center justify-center w-full px-8 py-4 font-semibold rounded-2xl text-lg border-2 transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "60",
                    color: colors.primary,
                  }}
                >
                  {/* Hover gradient fill */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.mint}20 0%, transparent 100%)`,
                    }}
                  />
                  <span className="relative flex items-center">
                    Send a Message
                    <Mail className="ml-2 w-5 h-5" />
                  </span>
                </Link>
              </div>

              {/* Trust badge */}
              <div
                className="relative mt-8 pt-6 text-center border-t flex items-center justify-center gap-2"
                style={{ borderColor: colors.sage + "40" }}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
                <p className="text-sm" style={{ color: colors.slate }}>
                  Trusted by data teams at DaaS companies, AI startups, and enterprises
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
