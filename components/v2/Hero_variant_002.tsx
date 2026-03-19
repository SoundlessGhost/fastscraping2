"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldOff,
  Zap,
  Database,
  RefreshCw,
  Sparkles,
  Globe,
  Server,
  CloudDownload,
  Check,
  ArrowRightCircle,
  CircleDot,
} from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  { icon: ShieldOff, text: "Bypass Cloudflare & Captchas" },
  { icon: Zap, text: "Large-Scale On Demand" },
  { icon: Database, text: "No Proxy Hassles" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  slate: "#475569",
  textBody: "#374151",
  white: "#ffffff",
};

const sources = [
  { name: "DoorDash", color: "#e07b2a", records: "55M/week" },
  { name: "StubHub", color: "#043f34", records: "8.2M/day" },
  { name: "Indeed", color: "#71967d", records: "1.4M/week" },
  { name: "LinkedIn", color: "#0a66c2", records: "100M/month" },
];

const deliveryMethods = [
  { name: "S3", icon: CloudDownload },
  { name: "SFTP", icon: Server },
  { name: "API", icon: Zap },
];

export default function HeroVariant002() {
  const [activeSource, setActiveSource] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % sources.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20 pb-32">
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
        >
          {/* Curved flow lines */}
          <path
            d="M-100 200 Q 300 100, 600 200 T 1300 200"
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 400 Q 300 300, 600 400 T 1300 400"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 600 Q 300 500, 600 600 T 1300 600"
            stroke={colors.sage}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Animated flowing dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint }}
          initial={{ x: -20, y: 150 + i * 120, opacity: 0 }}
          animate={{
            x: ["-5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient blurs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-mint/20 to-sage/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Flow-Inspired Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Badge - Node Style */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border-2 shadow-sm"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.sage,
                  color: colors.primary,
                }}
              >
                <span className="flex items-center gap-1">
                  <CircleDot
                    className="w-4 h-4"
                    style={{ color: colors.secondary }}
                  />
                  <motion.span
                    className="w-8 h-0.5 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <CircleDot
                    className="w-4 h-4"
                    style={{ color: colors.primary }}
                  />
                </span>
                <span>Enterprise-Grade Data Extraction</span>
              </span>
            </motion.div>

            {/* Heading - With flow connector */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              <span className="flex items-center gap-4">
                <span style={{ color: colors.primary }}>We Handle Your</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRightCircle
                    className="w-8 h-8 hidden sm:block"
                    style={{ color: colors.sage }}
                  />
                </motion.div>
              </span>
              <span className="relative inline-block mt-2">
                <span
                  className="relative"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Web Scraping Pipeline
                </span>
                {/* Flow-style underline with nodes */}
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 400 16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.circle
                    cx="10"
                    cy="8"
                    r="4"
                    fill={colors.primary}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 }}
                  />
                  <motion.line
                    x1="18"
                    y1="8"
                    x2="185"
                    y2="8"
                    stroke={colors.secondary}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  />
                  <motion.circle
                    cx="195"
                    cy="8"
                    r="4"
                    fill={colors.secondary}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 }}
                  />
                  <motion.line
                    x1="203"
                    y1="8"
                    x2="380"
                    y2="8"
                    stroke={colors.sage}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  />
                  <motion.circle
                    cx="390"
                    cy="8"
                    r="4"
                    fill={colors.sage}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Description - With flowing arrow */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-start gap-4"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex-shrink-0 mt-1"
              >
                <ArrowRight
                  className="w-5 h-5"
                  style={{ color: colors.secondary }}
                />
              </motion.div>
              <p
                className="text-lg sm:text-xl leading-relaxed"
                style={{ color: colors.textBody }}
              >
                Delivering structured data — reliably, at any scale. Bypassing
                Cloudflare, DataDome, and login walls. No proxy headaches. No
                infrastructure overhead.
              </p>
            </motion.div>

            {/* Features - Node Cards Style */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "60",
                  }}
                >
                  {/* Connection dot */}
                  <div
                    className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 group-hover:scale-125 transition-transform"
                    style={{
                      backgroundColor: colors.white,
                      borderColor: colors.primary,
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.mint}50` }}
                  >
                    <feature.icon
                      className="w-5 h-5"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: colors.textBody }}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Flow Style */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact/#demo-form"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl text-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.white,
                }}
              >
                {/* Flowing highlight effect */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.white}, transparent)`,
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative flex items-center">
                  Talk to Khalid — Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl text-md border-2 transition-all duration-300 hover:bg-sage/10"
                style={{
                  borderColor: colors.sage,
                  color: colors.primary,
                  backgroundColor: colors.white,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  />
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                  />
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.mint }}
                  />
                </div>
                <span className="ml-3">View Solutions</span>
              </Link>
            </motion.div>

            {/* Trust indicators - Connected nodes style */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-2 text-sm"
            >
              {[
                { label: "SFTP · Parquet · CSV", icon: Database },
                { label: "API · JSON", icon: Zap },
                { label: "Amazon S3 · Webhook", icon: RefreshCw },
              ].map((item, idx) => (
                <div key={item.label} className="flex items-center">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{
                      backgroundColor: colors.white,
                      borderColor: colors.sage + "50",
                    }}
                  >
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: colors.secondary }}
                    />
                    <span style={{ color: colors.slate }}>{item.label}</span>
                  </div>
                  {idx < 2 && (
                    <motion.div
                      className="w-4 h-0.5 mx-1"
                      style={{ backgroundColor: colors.sage }}
                      animate={{ scaleX: [1, 0.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Data Flow Visualization */}
          <div className="hidden lg:block relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border min-h-[480px]"
              style={{ borderColor: colors.sage + "40" }}
            >
              {/* SOURCE NODES - Left Column */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-4">
                {sources.map((source, idx) => (
                  <motion.div
                    key={source.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: activeSource === idx ? 1.05 : 1,
                    }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white border-2 transition-all duration-300"
                    style={{
                      borderColor:
                        activeSource === idx
                          ? source.color
                          : colors.sage + "40",
                      boxShadow:
                        activeSource === idx
                          ? `0 8px 24px ${source.color}20`
                          : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${source.color}15` }}
                    >
                      <Globe
                        className="w-4 h-4"
                        style={{ color: source.color }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: colors.primary }}
                      >
                        {source.name}
                      </p>
                      <p className="text-xs" style={{ color: colors.slate }}>
                        {source.records}
                      </p>
                    </div>

                    {activeSource === idx && (
                      <motion.div
                        className="absolute -right-1 -top-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: source.color }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CENTER - Processing Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 0 0 ${colors.primary}20`,
                      `0 0 0 20px ${colors.primary}00`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  >
                    <ShieldOff className="w-8 h-8 text-white mb-1" />
                    <p className="text-white text-xs font-medium">
                      Fastscraping
                    </p>
                  </div>

                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-3 border-2 border-dashed rounded-3xl"
                    style={{ borderColor: colors.sage }}
                  />
                </motion.div>

                {/* Stats */}
                <div className="mt-6 text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    99.7%
                  </p>
                  <p className="text-xs" style={{ color: colors.slate }}>
                    Success Rate
                  </p>
                </div>
              </div>

              {/* DELIVERY NODES - Right Column */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 space-y-4">
                {deliveryMethods.map((method, idx) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border-2 shadow-sm"
                    style={{ borderColor: colors.mint + "80" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: colors.mint }}
                    >
                      <method.icon
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: colors.primary }}
                      >
                        {method.name}
                      </p>
                      <p
                        className="text-xs flex items-center gap-1"
                        style={{ color: colors.slate }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: colors.secondary }}
                        />{" "}
                        Ready
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connection Lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: -1 }}
              >
                <defs>
                  <linearGradient
                    id="flowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor={colors.sage} />
                    <stop offset="100%" stopColor={colors.mint} />
                  </linearGradient>
                </defs>

                {/* Animated flow particles */}
                {sources.map((_, idx) => (
                  <motion.circle
                    key={idx}
                    r="4"
                    fill={sources[idx].color}
                    initial={{ cx: 160, cy: 80 + idx * 75 }}
                    animate={{
                      cx: [160, 230, 380],
                      cy: [80 + idx * 75, 220, 120 + (idx % 3) * 75],
                      opacity: activeSource === idx ? [1, 1, 0] : 0,
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              {/* Records counter */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white shadow-lg border"
                style={{ borderColor: colors.sage + "40" }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.primary }}
                >
                  <span className="font-bold">24.3M</span> records today
                </p>
              </motion.div>
            </motion.div>
          </div>
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
