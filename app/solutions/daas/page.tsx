"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  RefreshCw,
  Shield,
  Zap,
  Server,
  TrendingUp,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Shield,
    title: "White-Label Ready",
    description:
      "We're your silent backend vendor. Your clients never know we exist. Resell our data under your brand.",
  },
  {
    icon: RefreshCw,
    title: "Reliable Pipelines",
    description:
      "24/7 monitoring with proactive fixes. We maintain 99%+ uptime so you can promise reliability to your clients.",
  },
  {
    icon: Layers,
    title: "Multi-Platform Coverage",
    description:
      "One vendor for all your data needs. We scrape LinkedIn, Indeed, real estate portals, ticketing sites, and more.",
  },
  {
    icon: Zap,
    title: "Anti-Bot Expertise",
    description:
      "Cloudflare, DataDome, PerimeterX — we bypass them all. When protections update, we adapt at no extra cost.",
  },
];

const useCases = [
  {
    title: "Ticketing Data Aggregation",
    description:
      "Real-time event pricing, seat availability, and historical trends from StubHub, SeatGeek, TickPick, and Vivid Seats.",
    stats: "60M+ records/daily",
  },
  {
    title: "Job Market Intelligence",
    description:
      "Aggregate job listings from Indeed, LinkedIn, Glassdoor across multiple countries for labor market analysis.",
    stats: "1.4M+ jobs/week",
  },
  {
    title: "LinkedIn Data at Scale",
    description:
      "Company profiles, employee data, job postings — all without cookies or account bans.",
    stats: "100M+ profiles/month",
  },
  {
    title: "Restaurant & Location Data",
    description:
      "Menu items, pricing, store locations from McDonald's, Starbucks, DoorDash, and more.",
    stats: "55M+ records/week",
  },
];

const deliveryMethods = [
  {
    icon: Server,
    title: "SFTP Delivery",
    description: "Parquet, TSV, CSV files delivered on your schedule",
  },
  {
    icon: Database,
    title: "REST API",
    description: "FastAPI endpoints with JSON responses",
  },
  {
    icon: Layers,
    title: "AWS S3",
    description: "Direct delivery to your S3 buckets",
  },
  {
    icon: RefreshCw,
    title: "Custom Integration",
    description: "Snowflake, BigQuery, or your preferred data warehouse",
  },
];

export default function DaaSPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mint/20 to-sage/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              Solutions for DaaS Companies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Your Silent Backend for{" "}
              <span className="text-gradient">Data Aggregation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Power your data products with reliable, large-scale web scraping.
              We handle the extraction — you focus on delivering value to your
              clients.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary rounded-full font-semibold hover:border-primary transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "100M+", label: "Records/Month" },
              { value: "15+", label: "Months Avg. Partnership" },
              { value: "0", label: "Account Bans" },
              { value: "48h", label: "Sample Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary font-display">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Why DaaS Companies Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Built for <span className="text-gradient">Data Resellers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-sage/20 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Use Cases
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Data We Deliver for <span className="text-gradient">DaaS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 border border-sage/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {useCase.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {useCase.stats}
                  </span>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Data Delivery
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Flexible <span className="text-gradient">Delivery Options</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-sage/20"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-1">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 lg:p-16 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm mb-6">
                  Case Study
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                  Ficstar: 60M Records Daily
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  We power Ficstar's ticketing data aggregation — StubHub,
                  SeatGeek, TickPick, and Vivid Seats. 12+ months of reliable
                  partnership with zero downtime.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="text-3xl font-bold text-mint">$1,800</div>
                    <div className="text-white/70 text-sm">/month per platform</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">60M</div>
                    <div className="text-white/70 text-sm">Records daily</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">12+</div>
                    <div className="text-white/70 text-sm">Months running</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Get Similar Results
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Ready to scale your data business?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
