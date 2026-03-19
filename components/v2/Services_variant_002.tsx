"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Zap,
  Database,
  ArrowRight,
  CircleDot,
  ArrowRightCircle,
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
    color: "#71967d",
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

export default function ServicesVariant002() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
        >
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
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint }}
          initial={{ x: -20, y: 150 + i * 150, opacity: 0 }}
          animate={{
            x: ["-5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Flow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
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
              <CircleDot
                className="w-4 h-4"
                style={{ color: colors.secondary }}
              />
              <motion.span
                className="w-6 h-0.5 rounded-full"
                style={{ backgroundColor: colors.sage }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CircleDot
                className="w-4 h-4"
                style={{ color: colors.primary }}
              />
            </span>
            <span>Our Services</span>
          </span>

          {/* Title with flow connector */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span className="flex items-center gap-4 flex-wrap">
              <span style={{ color: colors.primary }}>
                Data Extraction Solutions
              </span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRightCircle
                  className="w-8 h-8"
                  style={{ color: colors.sage }}
                />
              </motion.div>
            </span>
            <span className="relative inline-block mt-2">
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built for Scale
              </span>
              {/* Flow-style underline with nodes */}
              <motion.svg
                className="absolute -bottom-3 left-0 w-full h-4"
                viewBox="0 0 250 16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.circle
                  cx="8"
                  cy="8"
                  r="4"
                  fill={colors.primary}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.line
                  x1="16"
                  y1="8"
                  x2="115"
                  y2="8"
                  stroke={colors.secondary}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                />
                <motion.circle
                  cx="125"
                  cy="8"
                  r="4"
                  fill={colors.secondary}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <motion.line
                  x1="133"
                  y1="8"
                  x2="232"
                  y2="8"
                  stroke={colors.sage}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
                <motion.circle
                  cx="242"
                  cy="8"
                  r="4"
                  fill={colors.sage}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                />
              </motion.svg>
            </span>
          </h2>

          {/* Description with flow arrow */}
          <div className="mt-8 flex items-start gap-4">
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
              className="text-lg leading-relaxed"
              style={{ color: colors.textBody }}
            >
              From simple web scraping to complex enterprise data pipelines. We
              handle the infrastructure, anti-bot bypass, and ongoing
              maintenance — you get clean, structured data.
            </p>
          </div>
        </motion.div>

        {/* Services Grid - Node Cards Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div
                className="relative rounded-2xl p-7 border-2 transition-all duration-300 h-full"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.sage + "60",
                }}
              >
                {/* Connection dot on left */}
                <div
                  className="absolute -left-2 top-8 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-transform"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: service.color,
                  }}
                />

                {/* Connector line animation on hover */}
                <motion.div
                  className="absolute -left-8 top-9 h-0.5 bg-gradient-to-r rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color})`,
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: 24 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon - Node style with ring */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ border: `2px dashed ${service.color}30` }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold font-display mb-3"
                  style={{ color: colors.primary }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  style={{ color: colors.textBody }}
                >
                  {service.description}
                </p>

                {/* Link - Flow style with connector */}
                <Link
                  href={service.link}
                  className="inline-flex items-center font-semibold group/link"
                  style={{ color: service.color }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: service.color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="border-b-2 border-transparent group-hover/link:border-current transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>

                {/* Hover effect - subtle glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 8px 30px ${service.color}15`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Flow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* Connected text */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="w-8 h-0.5 rounded-full"
              style={{ backgroundColor: colors.sage }}
              animate={{ scaleX: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p style={{ color: colors.textBody }}>
              Need a custom solution? We build tailored data pipelines for your
              specific requirements.
            </p>
            <motion.div
              className="w-8 h-0.5 rounded-full"
              style={{ backgroundColor: colors.sage }}
              animate={{ scaleX: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: colors.white,
            }}
          >
            {/* Flowing highlight */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.white}, transparent)`,
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative flex items-center">
              Talk to Khalid — No Commitment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
