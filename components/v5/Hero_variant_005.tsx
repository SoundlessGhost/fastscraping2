"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, Sparkles } from "lucide-react";

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
  dark: "#0a0a0a",
  darkGray: "#141414",
  mediumGray: "#1f1f1f",
  borderGray: "#2a2a2a",
  textGray: "#888888",
  textLight: "#e5e5e5",
  white: "#ffffff",
  primary: "#059669",
  primaryGlow: "#34d399",
  secondary: "#71967d",
  mint: "#b6e5d2",
};

export default function HeroVariant005() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ backgroundColor: colors.dark }}
    >
      {/* Dark mode background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${colors.textGray} 1px, transparent 1px), linear-gradient(90deg, ${colors.textGray} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}40 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />

        {/* Floating particles with glow */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? colors.primary : colors.textGray,
              boxShadow: i % 3 === 0 ? `0 0 10px ${colors.primary}` : "none",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient lines */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40"
          style={{
            background: `linear-gradient(to bottom, transparent, ${colors.primary}50, transparent)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - Glowing style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative"
            style={{
              background: `linear-gradient(135deg, ${colors.mediumGray}, ${colors.darkGray})`,
              border: `1px solid ${colors.borderGray}`,
              boxShadow: `0 0 20px ${colors.primary}20`,
            }}
          >
            {/* Glow effect */}
            <span
              className="absolute inset-0 rounded-full opacity-30 blur-xl"
              style={{ backgroundColor: colors.primary }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.primaryGlow }} />
            </motion.div>
            <span className="text-sm font-medium relative" style={{ color: colors.textLight }}>
              Enterprise Web Scraping Platform
            </span>
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full relative"
              style={{ 
                backgroundColor: colors.primary,
                boxShadow: `0 0 8px ${colors.primary}`,
              }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span style={{ color: colors.white }}>Web Data,</span>
            <br />
            <span className="relative inline-block">
              {/* Glow behind text */}
              <span
                className="absolute inset-0 blur-2xl opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                }}
              />
              <span
                className="relative"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryGlow} 0%, ${colors.primary} 50%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delivered at Scale
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: colors.textGray }}
          >
            We bypass anti-bot systems, handle the infrastructure, and deliver 
            clean, structured data directly to your pipeline. No Cloudflare, 
            no CAPTCHAs, no hassles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Primary CTA - Glowing */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
              style={{ color: colors.white }}
            >
              {/* Glow effect */}
              <span
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity blur-xl"
                style={{ backgroundColor: colors.primary }}
              />
              {/* Background */}
              <span
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  border: `1px solid ${colors.primaryGlow}40`,
                }}
              />
              {/* Shine effect on hover */}
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
              <span className="relative flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              style={{
                background: colors.mediumGray,
                border: `1px solid ${colors.borderGray}`,
                color: colors.textLight,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = `0 0 20px ${colors.primary}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderGray;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Platform Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-sm mb-4" style={{ color: colors.textGray }}>
              Trusted for data extraction from:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {platformPills.map((platform, index) => (
                <motion.span
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    borderColor: colors.primary,
                    boxShadow: `0 0 15px ${colors.primary}30`,
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all"
                  style={{
                    background: colors.mediumGray,
                    border: `1px solid ${colors.borderGray}`,
                    color: colors.textLight,
                  }}
                >
                  {platform}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                  border: `1px solid ${colors.primary}40`,
                  color: colors.primaryGlow,
                }}
              >
                +50 more platforms
              </motion.span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
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
                whileHover={{ 
                  y: -3,
                  borderColor: colors.primary,
                  boxShadow: `0 0 20px ${colors.primary}20`,
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
                style={{
                  background: `linear-gradient(135deg, ${colors.mediumGray}, ${colors.darkGray})`,
                  border: `1px solid ${colors.borderGray}`,
                }}
              >
                <div
                  className="relative w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}20)`,
                    border: `1px solid ${colors.primary}40`,
                  }}
                >
                  {/* Icon glow */}
                  <span
                    className="absolute inset-0 rounded-lg blur-md opacity-40"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <item.icon className="w-5 h-5 relative" style={{ color: colors.primaryGlow }} />
                </div>
                <span className="text-sm font-medium" style={{ color: colors.textLight }}>
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
          background: `linear-gradient(to top, ${colors.dark}, transparent)`,
        }}
      />
    </section>
  );
}
