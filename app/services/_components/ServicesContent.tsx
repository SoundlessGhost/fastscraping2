"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import {
  Zap,
  Globe,
  Clock,
  Layers,
  Server,
  Shield,
  Settings,
  Database,
  ArrowRight,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "managed-scraping",
    icon: Globe,
    title: "Managed Web Scraping",
    subtitle: "Your web scraping team on demand",
    description:
      "End-to-end web scraping handled by our expert team. We build, deploy, monitor, and maintain your scrapers. You receive clean, structured data — no infrastructure headaches.",
    features: [
      "Custom scraper development for any website",
      "Anti-bot bypass (Cloudflare, DataDome, PerimeterX)",
      "24/7 monitoring and proactive maintenance",
      "QA validation with 50+ checks per dataset",
      "Dedicated project manager",
      "White-label ready for agencies",
    ],
    process: [
      { step: "Define", desc: "Tell us your target platforms and fields" },
      { step: "Build", desc: "We develop stealth scrapers with bypass" },
      { step: "Deliver", desc: "Receive data via API, S3, or SFTP" },
    ],
    pricing: "From $500/month per platform",
    deliveryOptions: [
      "REST API",
      "CSV/TSV",
      "Parquet",
      "S3",
      "SFTP",
      "Webhook",
    ],
  },
  {
    id: "enterprise-crawling",
    icon: Server,
    title: "Enterprise-scale Web Crawling",
    subtitle: "Millions of pages, zero downtime",
    description:
      "Crawl entire domains at massive scale. We handle the infrastructure, proxy rotation, and rate limiting. Perfect for market research, competitive analysis, and large-scale data collection.",
    features: [
      "Domain-wide crawling with intelligent discovery",
      "Distributed infrastructure for parallel processing",
      "Automatic rate limiting and politeness controls",
      "Deduplication and change detection",
      "Structured output with custom schemas",
      "Historical data archiving",
    ],
    process: [
      { step: "Scope", desc: "Define domains, depth, and frequency" },
      { step: "Crawl", desc: "Distributed crawlers extract all pages" },
      { step: "Structure", desc: "Data normalized to your schema" },
    ],
    pricing: "Custom pricing based on scale",
    deliveryOptions: ["Data Lake", "BigQuery", "Snowflake", "S3", "SFTP"],
  },
  {
    id: "mobile-app-scraping",
    icon: Smartphone,
    title: "Mobile App Data Extraction",
    subtitle: "Data from mobile-only sources",
    description:
      "Access data from mobile applications and APIs. We reverse-engineer mobile app protocols to extract data that's not available on the web. iOS and Android support.",
    features: [
      "iOS and Android app support",
      "API reverse engineering",
      "Session and authentication management",
      "Rate limit handling",
      "Real device simulation",
      "Authentication bypass where possible",
    ],
    process: [
      { step: "Analyze", desc: "We study the app's API patterns" },
      { step: "Extract", desc: "Build extraction pipeline" },
      { step: "Deliver", desc: "Clean data on your schedule" },
    ],
    pricing: "From $1,500/month per app",
    deliveryOptions: ["REST API", "JSON", "CSV", "S3"],
  },
  {
    id: "realtime-apis",
    icon: Zap,
    title: "Real-time Data APIs",
    subtitle: "Your data, on-demand via API",
    description:
      "Custom REST API endpoints built for your specific data needs. Real-time access with JSON responses, comprehensive documentation, and 99.9% uptime SLA. Query any website on-demand.",
    features: [
      "Custom endpoints per your requirements",
      "Sub-200ms response times",
      "API key authentication",
      "Rate limiting and usage dashboards",
      "Webhook delivery for async operations",
      "Comprehensive API documentation",
    ],
    process: [
      { step: "Design", desc: "Define endpoints and data schema" },
      { step: "Build", desc: "We deploy production-grade APIs" },
      { step: "Integrate", desc: "Simple REST calls from your app" },
    ],
    pricing: "$1 per 1,000 requests (volume discounts)",
    deliveryOptions: ["REST API", "GraphQL", "Webhooks"],
  },
  {
    id: "data-pipelines",
    icon: Database,
    title: "Automated Data Pipelines (ETL / DaaS)",
    subtitle: "Set it and forget it",
    description:
      "Fully automated data pipelines that extract, transform, and load data on your schedule. Connect directly to your data warehouse. We handle the entire ETL process.",
    features: [
      "Scheduled extraction (hourly/daily/weekly)",
      "Data transformation and normalization",
      "Direct warehouse integration",
      "Incremental updates and change detection",
      "Data validation and quality checks",
      "Automatic error recovery and alerts",
    ],
    process: [
      { step: "Connect", desc: "Link your warehouse or storage" },
      { step: "Schedule", desc: "Set your delivery frequency" },
      { step: "Automate", desc: "Data flows automatically" },
    ],
    pricing: "From $500/month per pipeline",
    deliveryOptions: ["Snowflake", "BigQuery", "Redshift", "Databricks", "S3"],
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Anti-Bot Expertise",
    description:
      "We bypass Cloudflare, DataDome, PerimeterX, and Akamai. Our stealth browser identity system creates unique digital fingerprints per session.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "99%+ uptime SLA. 24/7 monitoring with proactive fixes. We adapt when websites change — at no extra cost.",
  },
  {
    icon: Settings,
    title: "Fully Managed",
    description:
      "You focus on your business. We handle scraper development, maintenance, proxy management, and QA.",
  },
  {
    icon: Layers,
    title: "White-Label Ready",
    description:
      "We operate as your silent backend vendor. Your clients never know we exist. Perfect for agencies and DaaS companies.",
  },
];

export default function ServicesContent() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-mint/30 to-sage/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Web Scraping <span className="text-gradient">Done Right</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              From one-off extractions to enterprise-scale pipelines — we handle
              the complexity so you can focus on using the data.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white rounded-full border border-sage/30 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary hover:shadow-soft transition-all"
              >
                {service.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white border-y border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 scroll-mt-24 ${
            index % 2 === 0 ? "bg-cream" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-secondary font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-8">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Delivery Options */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-500 mb-3">
                    Delivery Options
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.deliveryOptions.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Process Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="bg-white rounded-3xl border border-sage/20 shadow-soft p-8">
                  <h3 className="text-lg font-bold text-primary mb-6">
                    How It Works
                  </h3>

                  {/* Process Steps */}
                  <div className="space-y-6 mb-8">
                    {service.process.map((item, idx) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-primary">
                            {item.step}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-sage/20 pt-6">
                    <div className="text-sm text-gray-500 mb-1">
                      Starting Price
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {service.pricing}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-sage/20 rounded-3xl" />
        <div className="absolute bottom-10 left-[15%] w-20 h-20 bg-mint/30 rounded-2xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-display">
              Ready to get started?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Request Free Sample
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
