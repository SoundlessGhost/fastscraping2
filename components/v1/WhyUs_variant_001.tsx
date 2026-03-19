"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Fingerprint,
  RefreshCw,
  Users,
  Lock,
  Terminal,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Anti-Bot Bypass Experts",
    description:
      "We reliably bypass Cloudflare, DataDome, PerimeterX, and Akamai. Most vendors give up — we solve it.",
    highlights: [
      "Cloudflare Turnstile",
      "DataDome ML Detection",
      "PerimeterX Behavioral",
    ],
    filename: "antibot.ts",
  },
  {
    icon: RefreshCw,
    title: "Recurring Data Pipelines",
    description:
      "Not one-off scripts. We build infrastructure for daily, weekly, or monthly data delivery with quality checks.",
    highlights: ["Scheduled Delivery", "Auto-Adaptation", "Quality Monitoring"],
    filename: "pipelines.ts",
  },
  {
    icon: Fingerprint,
    title: "Stealth Browser Identity",
    description:
      "We create complete digital identities — unique fingerprints, persistent cookies, aged browser profiles. Not just IP rotation.",
    highlights: [
      "Canvas & WebGL Spoofing",
      "TLS Fingerprint Match",
      "Session Persistence",
    ],
    filename: "stealth.ts",
  },
  {
    icon: Users,
    title: "Silent Backend Vendor",
    description:
      "We operate invisibly behind your brand. Your clients never know we exist. White-label partnership model.",
    highlights: ["White Label", "B2B Partnership", "Zero Attribution"],
    filename: "whitelabel.ts",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "GDPR compliant operations. Secure data delivery via API, SFTP, or S3. Encrypted pipelines end-to-end.",
    highlights: ["GDPR Compliant", "Encrypted Delivery", "Audit Ready"],
    filename: "security.ts",
  },
];

const alternatives = [
  { name: "Grepsr", issue: "Limited flexibility for complex scraping workflows" },
  { name: "Zyte", issue: "API-focused tools still require engineering setup" },
  { name: "In-house", issue: "Too expensive, breaks constantly" },
  { name: "Apify/PhantomBuster", issue: "Cookie-based, ban risk" },
  { name: "Bright Data", issue: "Proxy only, still need scraper" },
  { name: "Freelancers", issue: "No scale, no reliability" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  terminalGreen: "#059669",
  terminalYellow: "#d97706",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
  terminalBorder: "#e2e8f0",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyUsVariant001() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Code Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' font-family='monospace' font-size='14' fill='%23043f34'%3E%7B%7D%3C/text%3E%3Ctext x='35' y='50' font-family='monospace' font-size='12' fill='%23043f34'%3E%3C/%3E%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative code brackets */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-8xl font-mono pointer-events-none"
        style={{ color: colors.sage }}
      >
        {"<"}
      </motion.div>
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-8xl font-mono pointer-events-none"
        style={{ color: colors.mint }}
      >
        {"/>"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header (Terminal Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge - Terminal Prompt */}
            <span
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono mb-6 border"
              style={{
                backgroundColor: colors.codeBg,
                borderColor: colors.terminalBorder,
                color: colors.primary,
              }}
            >
              <Terminal className="w-4 h-4 mr-2" style={{ color: colors.terminalGreen }} />
              <span style={{ color: colors.terminalGray }}>$</span>
              <span className="ml-2">Why FastScraping</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-2 w-2 h-4"
                style={{ backgroundColor: colors.primary }}
              />
            </span>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span style={{ color: colors.primary }}>What Makes Us</span>{" "}
              <span
                className="font-mono"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Different
              </span>
            </h2>

            {/* Description with comment style */}
            <p className="mt-6 text-lg leading-relaxed" style={{ color: colors.terminalGray }}>
              <span className="font-mono text-sm mr-2" style={{ color: colors.terminalGreen }}>{"//"}</span>
              We're not a proxy provider. We're not a simple scraping tool.
              We're your complete data extraction team — with the technical
              depth to solve what others can't.
            </p>

            {/* Quick stats - Terminal Style */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Dedicated Team Members" },
                { value: "24/7", label: "Monitoring & Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: colors.terminalBorder }}
                >
                  <div
                    className="px-3 py-1.5 flex items-center gap-1.5 border-b"
                    style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="p-4 bg-white">
                    <p
                      className="text-3xl font-bold font-mono"
                      style={{ color: colors.terminalGreen }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm mt-1 font-mono" style={{ color: colors.terminalGray }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison - Terminal Style */}
            <div
              className="mt-10 rounded-xl overflow-hidden border"
              style={{ borderColor: colors.terminalBorder }}
            >
              <div
                className="px-4 py-2 flex items-center gap-2 border-b"
                style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono" style={{ color: colors.terminalGray }}>
                  compare.ts
                </span>
              </div>
              <div className="p-5 bg-white">
                <h4 className="font-semibold font-mono mb-4" style={{ color: colors.primary }}>
                  <span style={{ color: colors.terminalGreen }}>{">"}</span> vs Alternatives
                </h4>
                <div className="space-y-2.5 text-sm font-mono">
                  {alternatives.map((alt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: colors.terminalGreen }}
                      />
                      <div>
                        <span style={{ color: colors.primary }}>vs {alt.name}:</span>
                        <span className="ml-1" style={{ color: colors.terminalGray }}>
                          {alt.issue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Grid (Terminal Cards) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div
                  className="rounded-xl overflow-hidden border-2 transition-all duration-300"
                  style={{ borderColor: colors.terminalBorder }}
                >
                  {/* Terminal header */}
                  <div
                    className="px-4 py-2 flex items-center gap-2 border-b"
                    style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono" style={{ color: colors.terminalGray }}>
                      {benefit.filename}
                    </span>
                  </div>

                  <div className="p-5 bg-white">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: colors.codeBg,
                          borderColor: colors.terminalBorder,
                        }}
                      >
                        <benefit.icon className="w-6 h-6" style={{ color: colors.terminalGreen }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold font-mono mb-2" style={{ color: colors.primary }}>
                          {benefit.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: colors.terminalGray }}>
                          {benefit.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {benefit.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono border"
                              style={{
                                backgroundColor: colors.codeBg,
                                borderColor: colors.terminalBorder,
                                color: colors.primary,
                              }}
                            >
                              <ChevronRight className="w-3 h-3 mr-1" style={{ color: colors.terminalGreen }} />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{ border: `2px solid ${colors.terminalGreen}` }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
