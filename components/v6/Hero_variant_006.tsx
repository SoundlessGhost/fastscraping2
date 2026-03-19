"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Clock, Waves } from "lucide-react";

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
  aurora1: "#043f34",
  aurora2: "#059669",
  aurora3: "#71967d",
  aurora4: "#b6e5d2",
  aurora5: "#a78bfa",
  aurora6: "#60a5fa",
  aurora7: "#f0abfc",
  white: "#ffffff",
  cream: "#faf9f7",
  textDark: "#1e293b",
  textGray: "#64748b",
};

export default function HeroVariant006() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ backgroundColor: colors.cream }}
    >
      {/* Aurora/Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large animated gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.aurora4} 0%, ${colors.aurora5}50 40%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.aurora6} 0%, ${colors.aurora2}50 40%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.aurora7} 0%, ${colors.aurora5}40 50%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />

        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, ${colors.aurora4}40 0px, transparent 50%),
              radial-gradient(at 80% 0%, ${colors.aurora5}30 0px, transparent 50%),
              radial-gradient(at 0% 50%, ${colors.aurora6}30 0px, transparent 50%),
              radial-gradient(at 80% 50%, ${colors.aurora2}30 0px, transparent 50%),
              radial-gradient(at 0% 100%, ${colors.aurora4}40 0px, transparent 50%),
              radial-gradient(at 80% 100%, ${colors.aurora7}30 0px, transparent 50%)
            `,
          }}
        />

        {/* Floating aurora particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              background: `linear-gradient(135deg, ${
                [colors.aurora2, colors.aurora4, colors.aurora5, colors.aurora6][i % 4]
              }, transparent)`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - Aurora style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 4px 24px rgba(4, 63, 52, 0.08)",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Waves className="w-4 h-4" style={{ color: colors.aurora2 }} />
            </motion.div>
            <span className="text-sm font-medium" style={{ color: colors.textDark }}>
              Enterprise Web Scraping Platform
            </span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.aurora5 }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span style={{ color: colors.textDark }}>Web Data,</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="relative inline-block"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora5}, ${colors.aurora6}, ${colors.aurora1})`,
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Delivered at Scale
            </motion.span>
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

          {/* CTA Buttons - Aurora gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
              style={{ color: colors.white }}
            >
              {/* Animated aurora gradient */}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora3}, ${colors.aurora5})`,
                  backgroundSize: "300% 300%",
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
              className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all overflow-hidden relative"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: colors.textDark,
              }}
            >
              <span className="relative flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Platform Pills - Aurora style */}
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium cursor-default overflow-hidden group"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: colors.textDark,
                  }}
                >
                  <span className="relative">{platform}</span>
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="px-4 py-2 rounded-xl text-sm font-medium overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, ${colors.aurora4}30, ${colors.aurora5}20)`,
                  border: `1px solid ${colors.aurora5}40`,
                  color: colors.aurora1,
                }}
              >
                +50 more platforms
              </motion.span>
            </div>
          </motion.div>

          {/* Trust Indicators - Aurora cards */}
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
                className="flex items-center gap-3 px-5 py-3 rounded-xl relative overflow-hidden group"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center relative"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.aurora1}20, ${colors.aurora5}20, ${colors.aurora6}20)`,
                    backgroundSize: "200% 200%",
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: colors.aurora1 }} />
                </motion.div>
                <span className="text-sm font-medium relative" style={{ color: colors.textDark }}>
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
