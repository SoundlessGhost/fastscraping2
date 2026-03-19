"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Fingerprint,
  RefreshCw,
  Users,
  Lock,
  Hexagon,
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

export default function WhyUsVariant003() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-20 pointer-events-none"
      >
        <Hexagon className="w-16 h-16 opacity-10" style={{ color: colors.primary }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-40 right-20 pointer-events-none"
      >
        <Hexagon className="w-10 h-10 opacity-10" style={{ color: colors.secondary }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${5 + i * 9}%`,
            top: `${10 + (i % 5) * 18}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header (Abstract/Artistic Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge - Artistic with gradient */}
            <span
              className="relative inline-flex items-center px-6 py-3 rounded-2xl text-sm font-medium mb-6 overflow-hidden"
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
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon className="w-5 h-5" style={{ color: colors.primary }} />
                </motion.div>
                <span style={{ color: colors.primary }}>Why FastScraping</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
              </div>
            </span>

            {/* Title - Artistic Typography */}
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span className="relative inline-block">
                <span style={{ color: colors.primary }}>What Makes Us</span>
                {/* Decorative dots */}
                <motion.span
                  className="absolute -right-6 top-0 flex flex-col gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sage }} />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.mint }} />
                </motion.span>
              </span>{" "}
              <span className="relative inline-block">
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Different
                </span>
                {/* Organic wave underline */}
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 120 16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M 0 8 Q 20 2, 40 8 T 80 8 T 120 8"
                    fill="none"
                    stroke={`url(#whyGradient)`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="whyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="50%" stopColor={colors.secondary} />
                      <stop offset="100%" stopColor={colors.sage} />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed" style={{ color: colors.slate }}>
              We're not a proxy provider. We're not a simple scraping tool.
              We're your complete data extraction team — with the technical
              depth to solve what others can't.
            </p>

            {/* Quick stats - Artistic Style */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Dedicated Team Members" },
                { value: "24/7", label: "Monitoring & Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="relative p-5 bg-white rounded-3xl border overflow-hidden"
                  style={{ borderColor: colors.sage + "50" }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover gradient fill */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${colors.mint}15 0%, transparent 100%)`,
                    }}
                  />
                  {/* Decorative corner blob */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full opacity-20"
                    style={{ backgroundColor: colors.mint }}
                  />
                  <p className="relative text-3xl font-bold font-display" style={{ color: colors.primary }}>
                    {stat.value}
                  </p>
                  <p className="relative text-sm mt-1" style={{ color: colors.slate }}>
                    {stat.label}
                  </p>
                  {/* Gradient bottom bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Comparison - Artistic Style */}
            <motion.div
              className="mt-10 relative p-6 bg-white rounded-3xl border overflow-hidden"
              style={{ borderColor: colors.sage + "50" }}
            >
              {/* Gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                }}
              />
              {/* Decorative blob */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: colors.mint }}
              />
              <h4 className="relative font-semibold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                <Hexagon className="w-4 h-4" style={{ color: colors.secondary }} />
                vs Alternatives
              </h4>
              <div className="relative space-y-3 text-sm">
                {alternatives.map((alt, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: colors.secondary }}
                    />
                    <div>
                      <span className="font-medium" style={{ color: colors.primary }}>vs {alt.name}:</span>
                      <span className="ml-1" style={{ color: colors.slate }}>
                        {alt.issue}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Benefits Grid (Artistic Cards) */}
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
                  className="relative bg-white rounded-3xl p-6 border transition-all duration-500 overflow-hidden"
                  style={{ borderColor: colors.sage + "50" }}
                >
                  {/* Hover gradient fill */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${colors.mint}15 0%, transparent 100%)`,
                    }}
                  />

                  {/* Decorative corner blob */}
                  <div
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: colors.mint }}
                  />

                  <div className="relative flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                        }}
                      >
                        <benefit.icon className="w-6 h-6" style={{ color: colors.primary }} />
                      </div>
                      {/* Pulsing ring on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{ border: `2px solid ${colors.sage}40` }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
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
                            className="relative inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${colors.sage}30 0%, ${colors.mint}20 100%)`,
                              color: colors.primary,
                            }}
                          >
                            {/* Hover shimmer */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${colors.white}50, transparent)`,
                              }}
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="relative">{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Gradient bottom bar on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
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
