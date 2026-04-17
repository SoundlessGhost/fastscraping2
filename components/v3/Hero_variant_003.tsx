"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldOff,
  Zap,
  Database,
  RefreshCw,
  Shield,
  Unlock,
  Server,
  Cloud,
  Globe,
  Hexagon,
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

const dataSources = [
  { name: "DoorDash", color: "#e07b2a", x: 12, y: 18 },
  { name: "StubHub", color: "#043f34", x: 8, y: 42 },
  { name: "Indeed", color: "#71967d", x: 14, y: 66 },
  { name: "LinkedIn", color: "#0a66c2", x: 6, y: 88 },
];

export default function HeroVariant003() {
  const [activeNode, setActiveNode] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % dataSources.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unlockInterval = setInterval(() => {
      setUnlocked(true);
      setTimeout(() => setUnlocked(false), 1500);
    }, 3000);
    return () => clearInterval(unlockInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20 pb-32">
      {/* Background - Abstract organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Organic blob shapes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
          }}
        />

        {/* Decorative hexagons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%]"
        >
          <Hexagon
            className="w-12 h-12 opacity-10"
            style={{ color: colors.primary }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-40 left-[20%]"
        >
          <Hexagon
            className="w-8 h-8 opacity-10"
            style={{ color: colors.secondary }}
          />
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Artistic Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Badge - Artistic Style */}
            <motion.div variants={fadeUp}>
              <span
                className="relative inline-flex items-center px-6 py-3 rounded-2xl text-sm font-medium mb-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.mint}30 100%)`,
                  border: `2px solid ${colors.sage}40`,
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.mint}, transparent)`,
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Hexagon
                      className="w-5 h-5"
                      style={{ color: colors.primary }}
                    />
                  </motion.div>
                  <span style={{ color: colors.primary }}>
                    Enterprise-Grade Data Extraction
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  />
                </div>
              </span>
            </motion.div>

            {/* Heading - Artistic Typography */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              <span className="relative inline-block">
                <span style={{ color: colors.primary }}>We Handle Your</span>
                {/* Decorative dots */}
                <motion.span
                  className="absolute -right-8 top-0 flex flex-col gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.mint }}
                  />
                </motion.span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                {/* Artistic gradient text with glow */}
                <span
                  className="relative"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Web Scraping Pipeline
                </span>
                {/* Artistic underline - organic wave */}
                <motion.svg
                  className="absolute -bottom-4 left-0 w-full h-6"
                  viewBox="0 0 400 24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.path
                    d="M 0 12 Q 50 6, 100 12 T 200 12 T 300 12 T 400 12"
                    fill="none"
                    stroke={`url(#artGradient)`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  />
                  <defs>
                    <linearGradient
                      id="artGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="50%" stopColor={colors.secondary} />
                      <stop offset="100%" stopColor={colors.sage} />
                    </linearGradient>
                  </defs>
                  {/* Decorative dots on wave */}
                  <motion.circle
                    cx="100"
                    cy="12"
                    r="4"
                    fill={colors.primary}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                  />
                  <motion.circle
                    cx="200"
                    cy="12"
                    r="4"
                    fill={colors.secondary}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 }}
                  />
                  <motion.circle
                    cx="300"
                    cy="12"
                    r="4"
                    fill={colors.sage}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.9 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Description - With artistic accent */}
            <motion.div variants={fadeUp} className="mt-10 relative">
              {/* Left decorative bar */}
              <motion.div
                className="absolute -left-6 top-0 h-full w-1 rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${colors.primary}, ${colors.sage}, ${colors.mint})`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
              <p
                className="text-lg sm:text-xl leading-relaxed pl-4"
                style={{ color: colors.textBody }}
              >
                Delivering structured data — reliably, at any scale. Bypassing
                Cloudflare, DataDome, and login walls. No proxy headaches. No
                infrastructure overhead.
              </p>
            </motion.div>

            {/* Features - Artistic Cards */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className="relative group"
                >
                  <div
                    className="relative flex items-center gap-3 px-3 py-3 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                    style={{
                      backgroundColor: colors.white,
                      borderColor: colors.sage + "50",
                    }}
                  >
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${colors.mint}20 0%, transparent 100%)`,
                      }}
                    />
                    <div
                      className="relative w-8 h-8 rounded-md flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${colors.mint}50 0%, ${colors.sage}30 100%)`,
                      }}
                    >
                      <feature.icon
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <span
                      className="relative text-sm font-semibold"
                      style={{ color: colors.textBody }}
                    >
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Artistic Style */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact/#demo-form"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-bold rounded-2xl text-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ color: colors.white }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <span className="relative flex items-center">
                  Talk to Khalid — Free Strategy Call
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </span>
              </Link>
              <Link
                href="/solutions"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-bold rounded-2xl text-md border-2 transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: colors.sage,
                  color: colors.primary,
                  backgroundColor: colors.white,
                }}
              >
                {/* Hover fill effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: colors.mint + "30" }}
                />
                <span className="relative flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  View Solutions
                </span>
              </Link>
            </motion.div>

            {/* Trust indicators - Artistic badges */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-3"
            >
              {[
                { label: "SFTP · Parquet · CSV", icon: Database },
                { label: "API · JSON", icon: Zap },
                { label: "Amazon S3 · Webhook", icon: RefreshCw },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="relative px-4 py-2.5 rounded-full overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                    border: `1px solid ${colors.sage}40`,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: colors.secondary }}
                    />
                    <span className="text-sm" style={{ color: colors.slate }}>
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Abstract Illustration */}
          <div className="hidden lg:block relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-[520px]"
            >
              {/* Abstract SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Decorative circles */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="180"
                  stroke={colors.sage}
                  strokeWidth="1"
                  strokeDasharray="8 4"
                  opacity="0.4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "250px 250px" }}
                />
                <motion.circle
                  cx="250"
                  cy="250"
                  r="130"
                  stroke={colors.mint}
                  strokeWidth="1"
                  strokeDasharray="6 3"
                  opacity="0.5"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "250px 250px" }}
                />
                <motion.circle
                  cx="250"
                  cy="250"
                  r="80"
                  stroke={colors.secondary}
                  strokeWidth="1.5"
                  opacity="0.6"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "250px 250px" }}
                />

                {/* Connection curves */}
                {dataSources.map((source, idx) => {
                  const startX = (source.x / 100) * 500;
                  const startY = (source.y / 100) * 520;
                  return (
                    <motion.path
                      key={source.name}
                      d={`M ${startX + 80} ${startY} Q ${180} ${startY} 250 250`}
                      stroke={source.color}
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: activeNode === idx ? 0.8 : 0.2,
                      }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                    />
                  );
                })}

                {/* Output curves */}
                <motion.path
                  d="M 250 250 Q 350 180 430 130"
                  stroke={colors.mint}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M 250 250 Q 360 250 430 250"
                  stroke={colors.sage}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path
                  d="M 250 250 Q 350 320 430 370"
                  stroke={colors.secondary}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>

              {/* Source Nodes */}
              {dataSources.map((source, idx) => (
                <motion.div
                  key={source.name}
                  className="absolute"
                  style={{
                    left: `${source.x}%`,
                    top: `${source.y}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: activeNode === idx ? 1.1 : 1,
                    opacity: 1,
                  }}
                  transition={{ delay: 0.5 + idx * 0.15, duration: 0.4 }}
                >
                  <motion.div
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white shadow-lg border-2"
                    style={{
                      borderColor:
                        activeNode === idx ? source.color : colors.sage + "40",
                      boxShadow:
                        activeNode === idx
                          ? `0 8px 30px ${source.color}25`
                          : "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                    animate={{ y: activeNode === idx ? [-2, 2, -2] : 0 }}
                    transition={{
                      duration: 2,
                      repeat: activeNode === idx ? Infinity : 0,
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
                    <span
                      className="font-semibold text-sm"
                      style={{ color: colors.primary }}
                    >
                      {source.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Center Shield - Main Processing Node */}
              <motion.div
                className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                {/* Pulsing rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `2px solid ${colors.mint}` }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `2px solid ${colors.sage}` }}
                  animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
                />

                {/* Main shield */}
                <motion.div
                  className="relative w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    boxShadow: unlocked
                      ? `0 20px 60px ${colors.mint}50`
                      : `0 20px 50px ${colors.primary}35`,
                  }}
                  animate={{ scale: unlocked ? 1.08 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: unlocked ? 15 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {unlocked ? (
                      <Unlock className="w-12 h-12 text-white" />
                    ) : (
                      <ShieldOff className="w-12 h-12 text-white" />
                    )}
                  </motion.div>
                </motion.div>

                {/* Label */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: colors.primary }}
                  >
                    Fastscraping
                  </p>
                  <p className="text-xs" style={{ color: colors.slate }}>
                    Anti-Bot Bypass
                  </p>
                </div>
              </motion.div>

              {/* Output Nodes */}
              {[
                { name: "S3", icon: Cloud, x: 86, y: 24 },
                { name: "SFTP", icon: Server, x: 88, y: 47 },
                { name: "API", icon: Zap, x: 86, y: 70 },
              ].map((output, idx) => (
                <motion.div
                  key={output.name}
                  className="absolute"
                  style={{ left: `${output.x}%`, top: `${output.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + idx * 0.15 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-lg border"
                    style={{ borderColor: colors.mint + "60" }}
                  >
                    <output.icon
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className="text-xs font-medium text-center mt-1.5"
                    style={{ color: colors.slate }}
                  >
                    {output.name}
                  </p>
                </motion.div>
              ))}

              {/* Floating particles */}
              {[...Array(6)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      dataSources[idx % dataSources.length].color,
                    left: `${dataSources[idx % dataSources.length].x + 16}%`,
                    top: `${dataSources[idx % dataSources.length].y}%`,
                  }}
                  animate={{
                    x: [0, 150, 180],
                    y: [0, idx % 2 === 0 ? -30 : 30, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.6,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Stats Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl bg-white shadow-xl"
                style={{ border: `1px solid ${colors.sage}30` }}
              >
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p
                      className="text-2xl font-black"
                      style={{ color: colors.primary }}
                    >
                      24.3M
                    </p>
                    <p className="text-xs" style={{ color: colors.slate }}>
                      Today
                    </p>
                  </div>
                  <div
                    className="w-px h-10"
                    style={{ backgroundColor: colors.sage + "50" }}
                  />
                  <div className="text-center">
                    <p
                      className="text-2xl font-black"
                      style={{ color: colors.primary }}
                    >
                      99.7%
                    </p>
                    <p className="text-xs" style={{ color: colors.slate }}>
                      Success
                    </p>
                  </div>
                </div>
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
