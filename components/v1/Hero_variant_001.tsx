"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldOff,
  Zap,
  Database,
  RefreshCw,
  Terminal,
  CheckCircle,
  Circle,
  Code2,
  Braces,
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
  // Terminal Light Theme
  terminalBg: "#f8fafc",
  terminalBorder: "#e2e8f0",
  terminalGreen: "#059669",
  terminalYellow: "#d97706",
  terminalBlue: "#0284c7",
  terminalPurple: "#7c3aed",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
};

const pipelines = [
  { name: "DoorDash Brands", tag: "Pricing Intel", records: "55M/week", color: "#e07b2a" },
  { name: "StubHub Tickets", tag: "Ticketing", records: "8.2M/day", color: "#059669" },
  { name: "Indeed Jobs", tag: "Job Data", records: "1.4M/week", color: "#d97706" },
  { name: "LinkedIn Profiles", tag: "B2B Data", records: "100M/month", color: "#0284c7" },
];

export default function HeroVariant001() {
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % pipelines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20 pb-32">
      {/* Background - Code Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' font-family='monospace' font-size='14' fill='%23043f34'%3E%7B%7D%3C/text%3E%3Ctext x='35' y='50' font-family='monospace' font-size='12' fill='%23043f34'%3E%3C/%3E%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Decorative code brackets */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] text-8xl font-mono pointer-events-none"
        style={{ color: colors.sage }}
      >
        {"{"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[20%] text-8xl font-mono pointer-events-none"
        style={{ color: colors.mint }}
      >
        {"}"}
      </motion.div>
      
      {/* Gradient blurs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/20 to-mint/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-mint/15 to-sage/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Code-Inspired Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Badge - Terminal Style */}
            <motion.div variants={fadeUp}>
              <span 
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono mb-8 border"
                style={{ 
                  backgroundColor: colors.codeBg,
                  borderColor: colors.terminalBorder,
                  color: colors.primary
                }}
              >
                <Terminal className="w-4 h-4 mr-2" style={{ color: colors.terminalGreen }} />
                <span style={{ color: colors.terminalGray }}>$</span>
                <span className="ml-2">Enterprise-Grade Data Extraction</span>
                <span className="ml-2 w-2 h-4 bg-primary/60 animate-pulse" />
              </span>
            </motion.div>

            {/* Heading - Code Style */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              <span className="flex items-center gap-3">
                <Code2 className="w-10 h-10 hidden sm:block" style={{ color: colors.terminalGray }} />
                <span style={{ color: colors.primary }}>We Handle Your</span>
              </span>
              <span className="relative inline-block mt-2">
                <span 
                  className="px-3 py-1 rounded-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Web Scraping Pipeline
                </span>
                {/* Underline like code editor selection */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Description - With code comment style */}
            <motion.div variants={fadeUp} className="mt-6">
              <p 
                className="text-lg sm:text-xl leading-relaxed max-w-xl"
                style={{ color: colors.textBody }}
              >
                <span className="font-mono text-sm mr-2" style={{ color: colors.terminalGray }}>{"//"}</span>
                Delivering structured data — reliably, at any scale. Bypassing
                Cloudflare, DataDome, and login walls. No proxy headaches. No
                infrastructure overhead.
              </p>
            </motion.div>

            {/* Features - Code Block Style */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: colors.white,
                    borderColor: colors.terminalBorder,
                  }}
                >
                  <span className="font-mono text-xs" style={{ color: colors.terminalGreen }}>✓</span>
                  <feature.icon className="w-4 h-4" style={{ color: colors.primary }} />
                  <span 
                    className="text-sm font-medium font-mono"
                    style={{ color: colors.textBody }}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Terminal Style */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/#demo-form"
                className="group inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-lg text-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-mono"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.white
                }}
              >
                <span style={{ color: colors.mint }}>{">"}</span>
                <span className="ml-2">Talk to Khalid — Free Strategy Call</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-lg text-md border-2 transition-all duration-300 hover:bg-sage/10 font-mono"
                style={{ 
                  borderColor: colors.terminalBorder,
                  color: colors.primary,
                  backgroundColor: colors.white
                }}
              >
                <Braces className="w-4 h-4 mr-2" />
                View Solutions
              </Link>
            </motion.div>

            {/* Trust indicators - Inline code style */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm font-mono"
            >
              {[
                { label: "SFTP · Parquet · CSV", icon: Database },
                { label: "API · JSON", icon: Zap },
                { label: "Amazon S3 · Webhook", icon: RefreshCw },
              ].map((item) => (
                <div 
                  key={item.label} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md"
                  style={{ backgroundColor: colors.codeBg }}
                >
                  <item.icon className="w-3.5 h-3.5" style={{ color: colors.terminalGreen }} />
                  <span style={{ color: colors.terminalGray }}>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Terminal Light Style Dashboard */}
          <div className="hidden lg:block relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ 
                backgroundColor: colors.terminalBg,
                border: `1px solid ${colors.terminalBorder}`
              }}
            >
              {/* Terminal Header - Light */}
              <div 
                className="px-4 py-3 flex items-center justify-between border-b"
                style={{ 
                  backgroundColor: colors.white,
                  borderColor: colors.terminalBorder
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" style={{ color: colors.terminalGray }} />
                  <span className="text-sm font-mono" style={{ color: colors.terminalGray }}>
                    fastscraping-cli v2.4.1
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.terminalGreen }} />
                  <span className="text-xs font-mono" style={{ color: colors.terminalGreen }}>
                    connected
                  </span>
                </div>
              </div>

              {/* Terminal Content - Light Theme */}
              <div className="p-5 font-mono text-sm space-y-4 min-h-[420px]" style={{ backgroundColor: colors.terminalBg }}>
                {/* Command Input */}
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.terminalGreen }}>➜</span>
                  <span style={{ color: colors.terminalBlue }}>~/pipelines</span>
                  <span style={{ color: colors.terminalGray }}>$</span>
                  <span style={{ color: colors.primary }}>fastscraping status --live</span>
                </div>

                {/* Output Header */}
                <div className="pt-2">
                  <span style={{ color: colors.terminalPurple }}>
                    ━━━ Active Pipelines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  </span>
                </div>

                {/* Pipeline Status */}
                <div className="space-y-3">
                  {pipelines.map((pipeline, idx) => (
                    <motion.div
                      key={pipeline.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.15 }}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg border transition-all"
                      style={{ 
                        backgroundColor: activeLog === idx ? `${pipeline.color}08` : colors.white,
                        borderColor: activeLog === idx ? pipeline.color : colors.terminalBorder,
                        borderLeftWidth: activeLog === idx ? "3px" : "1px"
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {activeLog === idx ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <RefreshCw className="w-4 h-4" style={{ color: pipeline.color }} />
                          </motion.div>
                        ) : (
                          <CheckCircle className="w-4 h-4" style={{ color: colors.terminalGreen }} />
                        )}
                        <span style={{ color: colors.primary }}>{pipeline.name}</span>
                        <span 
                          className="text-xs px-2 py-0.5 rounded font-medium"
                          style={{ 
                            backgroundColor: `${pipeline.color}15`,
                            color: pipeline.color
                          }}
                        >
                          {pipeline.tag}
                        </span>
                      </div>
                      <span style={{ color: colors.terminalGray }}>{pipeline.records}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Summary */}
                <div 
                  className="mt-4 p-4 rounded-lg border"
                  style={{ backgroundColor: colors.white, borderColor: colors.terminalBorder }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: colors.terminalGreen }}>24.3M</p>
                      <p className="text-xs" style={{ color: colors.terminalGray }}>Records Today</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: colors.terminalGreen }}>99.7%</p>
                      <p className="text-xs" style={{ color: colors.terminalGray }}>Success Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: colors.terminalBlue }}>S3</p>
                      <p className="text-xs" style={{ color: colors.terminalGray }}>Delivery</p>
                    </div>
                  </div>
                </div>

                {/* Live Log */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="w-2 h-2 fill-current animate-pulse" style={{ color: colors.terminalGreen }} />
                    <span style={{ color: colors.terminalGray }}>Live stream:</span>
                  </div>
                  <motion.div
                    key={activeLog}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs px-3 py-2 rounded-md"
                    style={{ backgroundColor: colors.codeBg }}
                  >
                    <span style={{ color: colors.terminalGray }}>[{new Date().toLocaleTimeString()}]</span>
                    {" "}
                    <span style={{ color: colors.terminalGreen }}>✓</span>
                    {" "}
                    <span style={{ color: colors.terminalYellow }}>
                      {pipelines[activeLog].name}: Anti-bot bypassed, {pipelines[activeLog].records} extracted
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating JSON Preview - Light */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 rounded-xl shadow-xl p-4 font-mono text-xs border"
              style={{ 
                backgroundColor: colors.white,
                borderColor: colors.terminalBorder
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldOff className="w-4 h-4" style={{ color: colors.terminalGreen }} />
                <span className="font-semibold" style={{ color: colors.terminalGreen }}>200 OK</span>
              </div>
              <pre style={{ color: colors.terminalGray }}>
{`{
  `}<span style={{ color: colors.terminalBlue }}>"status"</span>{`: `}<span style={{ color: colors.terminalGreen }}>"bypassed"</span>{`,
  `}<span style={{ color: colors.terminalBlue }}>"records"</span>{`: `}<span style={{ color: colors.terminalYellow }}>8247</span>{`
}`}
              </pre>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 43.3C384 47 480 63 576 68.3C672 73 768 67 864 58.3C960 50 1056 40 1152 41.7C1248 43 1344 57 1392 63.3L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
