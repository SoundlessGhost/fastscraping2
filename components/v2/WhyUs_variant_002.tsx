"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Fingerprint,
  RefreshCw,
  Users,
  Lock,
  CircleDot,
  ArrowRight,
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
  },
  {
    icon: RefreshCw,
    title: "Recurring Data Pipelines",
    description:
      "Not one-off scripts. We build infrastructure for daily, weekly, or monthly data delivery with quality checks.",
    highlights: ["Scheduled Delivery", "Auto-Adaptation", "Quality Monitoring"],
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
  },
  {
    icon: Users,
    title: "Silent Backend Vendor",
    description:
      "We operate invisibly behind your brand. Your clients never know we exist. White-label partnership model.",
    highlights: ["White Label", "B2B Partnership", "Zero Attribution"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "GDPR compliant operations. Secure data delivery via API, SFTP, or S3. Encrypted pipelines end-to-end.",
    highlights: ["GDPR Compliant", "Encrypted Delivery", "Audit Ready"],
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
  slate: "#475569",
  white: "#ffffff",
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

export default function WhyUsVariant002() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 1200 800">
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
          initial={{ x: -20, y: 150 + i * 130, opacity: 0 }}
          animate={{
            x: ["-5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header (Flow Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge - Node Connection Style */}
            <span
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border-2 shadow-sm"
              style={{
                backgroundColor: colors.white,
                borderColor: colors.sage,
                color: colors.primary,
              }}
            >
              <span className="flex items-center gap-1">
                <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
                <motion.span
                  className="w-6 h-0.5 rounded-full"
                  style={{ backgroundColor: colors.sage }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <CircleDot className="w-4 h-4" style={{ color: colors.primary }} />
              </span>
              <span>Why FastScraping</span>
            </span>

            {/* Title with flow connector */}
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span className="flex items-center gap-3 flex-wrap">
                <span style={{ color: colors.primary }}>What Makes Us</span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8" style={{ color: colors.sage }} />
                </motion.div>
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Different
                </span>
              </span>
            </h2>

            {/* Flow-style underline with nodes */}
            <motion.svg
              className="w-48 h-4 mt-4"
              viewBox="0 0 200 16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.circle cx="8" cy="8" r="4" fill={colors.primary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} />
              <motion.line x1="16" y1="8" x2="90" y2="8" stroke={colors.secondary} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />
              <motion.circle cx="100" cy="8" r="4" fill={colors.secondary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
              <motion.line x1="108" y1="8" x2="182" y2="8" stroke={colors.sage} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
              <motion.circle cx="192" cy="8" r="4" fill={colors.sage} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} />
            </motion.svg>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed" style={{ color: colors.slate }}>
              We're not a proxy provider. We're not a simple scraping tool.
              We're your complete data extraction team — with the technical
              depth to solve what others can't.
            </p>

            {/* Quick stats - Node Style */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Dedicated Team Members" },
                { value: "24/7", label: "Monitoring & Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative p-5 bg-white rounded-2xl border-2 transition-all hover:shadow-lg"
                  style={{ borderColor: colors.sage + "60" }}
                >
                  {/* Connection dot */}
                  <div
                    className="absolute -top-2 left-6 w-4 h-4 rounded-full border-2"
                    style={{ backgroundColor: colors.white, borderColor: colors.primary }}
                  />
                  <p className="text-3xl font-bold font-display" style={{ color: colors.primary }}>
                    {stat.value}
                  </p>
                  <p className="text-sm mt-1" style={{ color: colors.slate }}>
                    {stat.label}
                  </p>
                  {/* Flow gradient at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Comparison - Flow Style */}
            <div
              className="mt-10 p-6 bg-white rounded-2xl border-2"
              style={{ borderColor: colors.sage + "60" }}
            >
              {/* Flow indicator at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                }}
              />
              <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
                vs Alternatives
              </h4>
              <div className="space-y-3 text-sm">
                {alternatives.map((alt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <motion.span
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: colors.secondary }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    />
                    <div>
                      <span className="font-medium" style={{ color: colors.primary }}>vs {alt.name}:</span>
                      <span className="ml-1" style={{ color: colors.slate }}>
                        {alt.issue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Grid (Node Cards) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div
                  className="relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 overflow-hidden"
                  style={{ borderColor: colors.sage + "60" }}
                >
                  {/* Connection dot on left */}
                  <div
                    className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-transform z-10"
                    style={{ backgroundColor: colors.white, borderColor: colors.primary }}
                  />

                  {/* Rotating dashed ring */}
                  <motion.div
                    className="absolute top-4 left-4 w-14 h-14 rounded-full border-2 border-dashed opacity-30"
                    style={{ borderColor: colors.sage }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                        }}
                      >
                        <benefit.icon className="w-6 h-6" style={{ color: colors.primary }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-display mb-2" style={{ color: colors.primary }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: colors.slate }}>
                        {benefit.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: colors.white,
                              borderColor: colors.sage + "50",
                              color: colors.primary,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mr-2"
                              style={{ backgroundColor: colors.secondary }}
                            />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flow gradient at bottom on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 8px 30px ${colors.sage}30` }}
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
