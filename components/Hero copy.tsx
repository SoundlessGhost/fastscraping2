"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Database, CheckCircle2, RefreshCw, TrendingUp } from "lucide-react";

const features = [
  { icon: Shield, text: "Bypass Cloudflare & Captchas" },
  { icon: Zap, text: "Large-Scale On Demand" },
  { icon: Database, text: "No Proxy Hassles" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

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
};

// NEW COLOR PALETTE - Navy Blue + Coral Orange
const colors = {
  primary: "#0f172a", // Deep Navy
  secondary: "#1e3a5f", // Navy Blue
  accent: "#f97316", // Coral Orange
  accentLight: "#fb923c", // Light Orange
  sky: "#38bdf8", // Sky Blue
  skyLight: "#7dd3fc", // Light Sky
  slate: "#64748b", // Slate Gray
  cream: "#f8fafc", // Light Background
  white: "#ffffff",
};

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
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 right-[25%] w-12 h-12 bg-gradient-to-br from-sage/40 to-mint/40 rounded-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
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
              Your Web Scraping Team{" "}
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
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
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
              We deliver structured data at large scale — no Cloudflare, no
              Captchas, no hassles. Just tell us what you need, we&apos;ll
              handle everything.
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
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact/#demo-form"
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
            {/* Right Visual - Dashboard Preview */}
            <div className="relative hidden lg:block">
              {/* Glow Effect */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${colors.sky} 0%, ${colors.accent} 100%)`,
                }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                {/* Header Bar */}
                <div
                  className="px-6 py-4 border-b border-slate-100 flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    Pipeline Dashboard
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-xs">Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        value: "24.3M",
                        label: "Records Today",
                        trend: "+12%",
                        icon: TrendingUp,
                      },
                      {
                        value: "99.7%",
                        label: "Success Rate",
                        trend: "+0.3%",
                        icon: CheckCircle2,
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-2xl transition-all hover:scale-105 cursor-pointer"
                        style={{
                          background: `linear-gradient(135deg, ${colors.cream} 0%, white 100%)`,
                          border: `1px solid ${colors.sky}20`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon
                            className="w-5 h-5"
                            style={{ color: colors.accent }}
                          />
                          <span
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${colors.accent}15`,
                              color: colors.accent,
                            }}
                          >
                            {stat.trend}
                          </span>
                        </div>
                        <p
                          className="text-2xl font-bold"
                          style={{ color: colors.primary }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-sm" style={{ color: colors.slate }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline List */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "StubHub Tickets",
                        status: "Running",
                        records: "8.2M/day",
                        color: colors.accent,
                      },
                      {
                        name: "Indeed Jobs",
                        status: "Running",
                        records: "1.4M/week",
                        color: colors.sky,
                      },
                      {
                        name: "LinkedIn Profiles",
                        status: "Running",
                        records: "100M/mo",
                        color: colors.accentLight,
                      },
                    ].map((pipeline) => (
                      <div
                        key={pipeline.name}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: pipeline.color }}
                          />
                          <span
                            className="font-semibold"
                            style={{ color: colors.primary }}
                          >
                            {pipeline.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className="text-sm"
                            style={{ color: colors.slate }}
                          >
                            {pipeline.records}
                          </span>
                          <span
                            className="text-xs font-medium px-3 py-1 rounded-full text-white"
                            style={{ backgroundColor: pipeline.color }}
                          >
                            {pipeline.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce border border-slate-100"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
                    }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.primary }}
                    >
                      Cloudflare Bypassed
                    </p>
                    <p className="text-xs" style={{ color: colors.slate }}>
                      StubHub • Just now
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce border border-slate-100"
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.sky} 0%, ${colors.skyLight} 100%)`,
                    }}
                  >
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.primary }}
                    >
                      Auto-Retry Active
                    </p>
                    <p className="text-xs" style={{ color: colors.slate }}>
                      Zero failures today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 43.3C384 47 480 63 576 68.3C672 73 768 67 864 58.3C960 50 1056 40 1152 41.7C1248 43 1344 57 1392 63.3L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
