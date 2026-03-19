"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const platformPills = [
  "LinkedIn", "Indeed", "StubHub", "SeatGeek", 
  "Zillow", "Amazon", "Google Maps", "Yelp"
];

const trustIndicators = [
  { icon: Shield, text: "Enterprise-grade Security" },
  { icon: Zap, text: "99.7% Success Rate" },
  { icon: Clock, text: "24/7 Pipeline Monitoring" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  white: "#ffffff",
  slate: "#475569",
};

export default function HeroVariant004() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.white} 100%)` }}
    >
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.mint}50 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.sage}40 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Floating glass shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className="absolute rounded-2xl"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - Glass style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 4px 24px rgba(4, 63, 52, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
            </motion.div>
            <span className="text-sm font-medium" style={{ color: colors.primary }}>
              Enterprise Web Scraping Platform
            </span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.secondary }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span style={{ color: colors.primary }}>Web Data,</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Delivered at Scale
              {/* Glassmorphism underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-3 rounded-full origin-left"
                style={{
                  background: `linear-gradient(90deg, ${colors.mint}60, ${colors.sage}40)`,
                  filter: "blur(4px)",
                }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: colors.slate }}
          >
            We bypass anti-bot systems, handle the infrastructure, and deliver 
            clean, structured data directly to your pipeline. No Cloudflare, 
            no CAPTCHAs, no hassles.
          </motion.p>

          {/* CTA Buttons - Glass style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.white,
                boxShadow: `0 8px 32px ${colors.primary}30`,
              }}
            >
              {/* Glass shine */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
                }}
              />
              <span className="relative flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: colors.primary,
                boxShadow: "0 4px 24px rgba(4, 63, 52, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
              }}
            >
              <span className="flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Platform Pills - Glass style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-sm mb-4" style={{ color: colors.slate }}>
              Trusted for data extraction from:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {platformPills.map((platform, index) => (
                <motion.span
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-xl text-sm font-medium cursor-default"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: colors.primary,
                    boxShadow: "0 2px 12px rgba(4, 63, 52, 0.05)",
                  }}
                >
                  {platform}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${colors.sage}50`,
                  color: colors.secondary,
                }}
              >
                +50 more platforms
              </motion.span>
            </div>
          </motion.div>

          {/* Trust Indicators - Glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(4, 63, 52, 0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}15, ${colors.sage}20)`,
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: colors.primary }} />
                </div>
                <span className="text-sm font-medium" style={{ color: colors.slate }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${colors.white}, transparent)`,
        }}
      />
    </section>
  );
}
