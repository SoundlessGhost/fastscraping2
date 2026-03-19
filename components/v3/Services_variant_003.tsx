"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Zap,
  Database,
  ArrowRight,
  Hexagon,
  Shield,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Managed Web Scraping",
    description:
      "End-to-end web scraping handled by our expert team. We build, deploy, monitor, and maintain your scrapers. You receive clean, structured data — no infrastructure headaches.",
    color: "#e07b2a",
    link: "/services#managed-scraping",
  },
  {
    icon: Server,
    title: "Enterprise Web Crawling",
    description:
      "Crawl entire domains at massive scale. We handle the infrastructure, proxy rotation, and rate limiting. Perfect for market research, competitive analysis, and large-scale data collection.",
    color: "#043f34",
    link: "/services#enterprise-crawling",
  },
  {
    icon: Smartphone,
    title: "Mobile App Data Extraction",
    description:
      "Access data from mobile applications and APIs. We reverse-engineer mobile app protocols to extract data that's not available on the web. iOS and Android support.",
    color: "#7c3aed",
    link: "/services#mobile-app-scraping",
  },
  {
    icon: Zap,
    title: "Real-time Data APIs",
    description:
      "Custom REST API endpoints built for your specific data needs. Real-time access with JSON responses, comprehensive documentation, and 99.9% uptime SLA. Query any website on-demand.",
    color: "#0a66c2",
    link: "/services#realtime-apis",
  },
  {
    icon: Database,
    title: "Automated Data Pipelines (ETL / DaaS)",
    description:
      "Fully automated data pipelines that extract, transform, and load data on your schedule. Connect directly to your data warehouse. We handle the entire ETL process.",
    color: "#059669",
    link: "/services#data-pipelines",
  },
];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesVariant003() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background - Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 pointer-events-none"
      >
        <Hexagon
          className="w-16 h-16 opacity-10"
          style={{ color: colors.primary }}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-16 pointer-events-none"
      >
        <Hexagon
          className="w-10 h-10 opacity-10"
          style={{ color: colors.secondary }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${15 + i * 12}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Artistic Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
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
                <Hexagon
                  className="w-5 h-5"
                  style={{ color: colors.primary }}
                />
              </motion.div>
              <span style={{ color: colors.primary }}>Our Services</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.secondary }}
              />
            </div>
          </span>

          {/* Title - Artistic Typography */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span className="relative inline-block">
              <span style={{ color: colors.primary }}>
                Data Extraction Solutions
              </span>
              {/* Decorative dots */}
              <motion.span
                className="absolute -right-6 top-0 flex flex-col gap-1"
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
              {/* Artistic gradient text */}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built for Scale
              </span>
              {/* Organic wave underline */}
              <motion.svg
                className="absolute -bottom-4 left-0 w-full h-6"
                viewBox="0 0 250 24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M 0 12 Q 30 6, 60 12 T 120 12 T 180 12 T 250 12"
                  fill="none"
                  stroke="url(#artGradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <defs>
                  <linearGradient
                    id="artGradient2"
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
                {/* Dots on wave */}
                <motion.circle
                  cx="60"
                  cy="12"
                  r="3"
                  fill={colors.primary}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <motion.circle
                  cx="120"
                  cy="12"
                  r="3"
                  fill={colors.secondary}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <motion.circle
                  cx="180"
                  cy="12"
                  r="3"
                  fill={colors.sage}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                />
              </motion.svg>
            </span>
          </h2>

          {/* Description with artistic accent bar */}
          <div className="mt-10 relative">
            <motion.div
              className="absolute -left-6 top-0 h-full w-1 rounded-full"
              style={{
                background: `linear-gradient(180deg, ${colors.primary}, ${colors.sage}, ${colors.mint})`,
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <p
              className="text-lg leading-relaxed pl-4"
              style={{ color: colors.textBody }}
            >
              From simple web scraping to complex enterprise data pipelines. We
              handle the infrastructure, anti-bot bypass, and ongoing
              maintenance — you get clean, structured data.
            </p>
          </div>
        </motion.div>

        {/* Services Grid - Artistic Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div
                className="relative rounded-3xl p-8 border-2 transition-all duration-500 h-full overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.sage + "50",
                }}
              >
                {/* Hover gradient fill */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}08 0%, transparent 100%)`,
                  }}
                />

                {/* Decorative corner shape */}
                <div
                  className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon - Artistic gradient */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                    }}
                  >
                    <service.icon
                      className="w-8 h-8"
                      style={{ color: service.color }}
                    />
                  </div>
                  {/* Pulsing ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ border: `2px solid ${service.color}30` }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="relative text-xl font-bold font-display mb-3"
                  style={{ color: colors.primary }}
                >
                  {service.title}
                </h3>
                <p
                  className="relative text-gray-600 leading-relaxed mb-6"
                  style={{ color: colors.textBody }}
                >
                  {service.description}
                </p>

                {/* Link - Artistic underline */}
                <Link
                  href={service.link}
                  className="relative inline-flex items-center font-semibold group/link"
                  style={{ color: service.color }}
                >
                  <span className="relative">
                    Learn more
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                      style={{ backgroundColor: service.color }}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Artistic Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6" style={{ color: colors.textBody }}>
            Need a custom solution? We build tailored data pipelines for your
            specific requirements.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center px-10 py-5 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            style={{ color: colors.white }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
                backgroundSize: "200% 200%",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <span className="relative flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Talk to Khalid — No Commitment
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
