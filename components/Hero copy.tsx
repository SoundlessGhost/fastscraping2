"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Database,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  Sparkles,
  Upload,
} from "lucide-react";

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

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  slate: "#475569", // Darker slate for better readability
  textBody: "#374151", // Darker body text (was gray-600, now gray-700)
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
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                <Sparkles className="w-4 h-4 mr-1.5" /> Enterprise-Grade Data
                Extraction
              </span>
            </motion.div>

            {/* Heading — "Web Scraping Pipeline" stays together */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[50px] font-bold font-display text-primary leading-[1.08] tracking-tight"
            >
              We Handle Your
              <br />
              <span className="relative inline-block mt-1 pb-2">
                <span className="text-gradient">Web Scraping Pipeline</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M 0 4 Q 75 0, 150 4 Q 225 8, 300 4"
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

            {/* Description — more top margin, darker text */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg sm:text-xl leading-relaxed"
              style={{ color: colors.textBody }}
            >
              Delivering structured data — reliably, at any scale. Bypassing
              Cloudflare, DataDome, and login walls. No proxy headaches. No
              infrastructure overhead.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-soft border border-sage/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.mint}50 0%, ${colors.sage}50 100%)`,
                    }}
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: colors.textBody }}
                  >
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
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-2xl text-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary font-semibold rounded-2xl text-lg border-2 border-primary/20 hover:border-primary hover:bg-sage/10 transition-all duration-300"
              >
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
              style={{ color: colors.slate }}
            >
              {[
                { label: "SFTP · Parquet · CSV", icon: Database },
                { label: "API · JSON", icon: Zap },
                { label: "Amazon S3 · Webhook", icon: RefreshCw },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual — Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${colors.mint} 0%, ${colors.secondary} 100%)`,
                }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-sage/20">
                {/* Header Bar */}
                <div
                  className="px-6 py-4 border-b border-sage/20 flex items-center justify-between"
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
                    <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                    <span className="text-white/80 text-xs">Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
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
                      {
                        value: "S3 · SFTP",
                        label: "Data Delivery",
                        trend: "API · CSV",
                        icon: Upload,
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-2xl transition-all hover:scale-105 cursor-pointer"
                        style={{
                          background: `linear-gradient(135deg, ${colors.cream} 0%, white 100%)`,
                          border: `1px solid ${colors.sage}30`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon
                            className="w-5 h-5"
                            style={{ color: colors.primary }}
                          />
                          <span
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: colors.mint,
                              color: colors.primary,
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
                        name: "DoorDash Brands",
                        tag: "Pricing Intel",
                        records: "55M/week",
                        color: "#e07b2a", // orange
                        bg: "#fef3e8",
                      },
                      {
                        name: "StubHub Tickets",
                        tag: "Ticketing",
                        records: "8.2M/day",
                        color: "#043f34", // deep green
                        bg: "#e8f5f0",
                      },
                      {
                        name: "Indeed Jobs",
                        tag: "Job Data",
                        records: "1.4M/week",
                        color: "#71967d", // secondary
                        bg: "#f0f7f2",
                      },
                      {
                        name: "LinkedIn Profiles",
                        tag: "B2B Data",
                        records: "100M/month",
                        color: "#0a66c2", // LinkedIn blue
                        bg: "#e8f1fb",
                      },
                    ].map((pipeline) => (
                      <div
                        key={pipeline.name}
                        className="flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer hover:shadow-sm"
                        style={{ backgroundColor: pipeline.bg }}
                      >
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: pipeline.color }}
                          />
                          {/* Name + Tag — same line */}
                          <span
                            className="font-semibold text-sm"
                            style={{ color: colors.primary }}
                          >
                            {pipeline.name}
                          </span>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: pipeline.color + "22",
                              color: pipeline.color,
                            }}
                          >
                            {pipeline.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-medium"
                            style={{ color: colors.slate }}
                          >
                            {pipeline.records}
                          </span>
                          <span
                            className="text-xs font-medium px-2.5 py-1 rounded-full text-white"
                            style={{ backgroundColor: pipeline.color }}
                          >
                            Running
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Notification — Cloudflare Bypassed (top-right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-sage/20"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.primary }}
                    >
                      Anti-Bot Bypassed
                    </p>
                    <p className="text-xs" style={{ color: colors.slate }}>
                      StubHub • Just now
                    </p>
                  </div>
                </div>
              </motion.div>
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
