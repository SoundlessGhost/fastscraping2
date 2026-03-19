"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Zap,
  Database,
  ArrowRight,
  Terminal,
  ChevronRight,
  Code2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Managed Web Scraping",
    description:
      "End-to-end web scraping handled by our expert team. We build, deploy, monitor, and maintain your scrapers. You receive clean, structured data — no infrastructure headaches.",
    color: "#059669",
    link: "/services#managed-scraping",
  },
  {
    icon: Server,
    title: "Enterprise Web Crawling",
    description:
      "Crawl entire domains at massive scale. We handle the infrastructure, proxy rotation, and rate limiting. Perfect for market research, competitive analysis, and large-scale data collection.",
    color: "#0284c7",
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
    color: "#d97706",
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
  terminalBg: "#f8fafc",
  terminalBorder: "#e2e8f0",
  terminalGreen: "#059669",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
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

export default function ServicesVariant001() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-8xl font-mono pointer-events-none"
        style={{ color: colors.sage }}
      >
        {"</>"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge - Terminal Prompt Style */}
          <span
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono mb-6 border"
            style={{
              backgroundColor: colors.codeBg,
              borderColor: colors.terminalBorder,
              color: colors.primary,
            }}
          >
            <Terminal
              className="w-4 h-4 mr-2"
              style={{ color: colors.terminalGreen }}
            />
            <span style={{ color: colors.terminalGray }}>$</span>
            <span className="ml-2">Our Services</span>
            <span className="ml-2 w-2 h-4 bg-primary/60 animate-pulse" />
          </span>

          {/* Title with code icon */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight flex flex-wrap items-center gap-3">
            <Code2
              className="w-10 h-10"
              style={{ color: colors.terminalGray }}
            />
            <span style={{ color: colors.primary }}>
              Data Extraction Solutions
            </span>
            <span
              className="px-2 py-1 rounded-md font-mono"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built for Scale
            </span>
          </h2>

          {/* Description with comment style */}
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: colors.textBody }}
          >
            <span
              className="font-mono text-sm mr-2"
              style={{ color: colors.terminalGray }}
            >
              {"//"}
            </span>
            From simple web scraping to complex enterprise data pipelines. We
            handle the infrastructure, anti-bot bypass, and ongoing maintenance
            — you get clean, structured data.
          </p>
        </motion.div>

        {/* Services Grid - Code Block Style */}
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
                className="relative rounded-xl p-6 border-2 transition-all duration-300 h-full"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.terminalBorder,
                }}
              >
                {/* Terminal-style header bar */}
                <div
                  className="flex items-center gap-2 pb-4 mb-4 border-b"
                  style={{ borderColor: colors.terminalBorder }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span
                    className="ml-2 text-xs font-mono"
                    style={{ color: colors.terminalGray }}
                  >
                    service_{index + 1}.ts
                  </span>
                </div>

                {/* Icon - Code style */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border"
                  style={{
                    backgroundColor: `${service.color}10`,
                    borderColor: `${service.color}30`,
                  }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold font-mono mb-3"
                  style={{ color: colors.primary }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: colors.textBody }}
                >
                  {service.description}
                </p>

                {/* Link - Terminal style */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-mono group/link"
                  style={{ color: service.color }}
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span className="group-hover/link:underline">Learn more</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ border: `2px solid ${service.color}` }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p
            className="mb-6 font-mono text-sm"
            style={{ color: colors.terminalGray }}
          >
            <span style={{ color: colors.terminalGreen }}>{"// "}</span>
            Need a custom solution? We build tailored data pipelines for your
            specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 font-semibold rounded-lg font-mono transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: colors.white,
            }}
          >
            <span style={{ color: colors.mint }}>{">"}</span>
            <span className="ml-2">Talk to Khalid — No Commitment</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
