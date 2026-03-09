"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  BarChart3,
  RefreshCw,
  ShoppingCart,
  Tag,
  Clock,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: RefreshCw,
    title: "Real-Time Monitoring",
    description:
      "Track competitor prices as they change. Daily, hourly, or real-time updates based on your needs.",
  },
  {
    icon: BarChart3,
    title: "Historical Trends",
    description:
      "Analyze pricing patterns over time. Identify seasonal trends, promotional cycles, and market shifts.",
  },
  {
    icon: Target,
    title: "Competitive Coverage",
    description:
      "Monitor all your competitors across every marketplace. Amazon, Walmart, Target, and niche retailers.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing Data",
    description:
      "Feed your pricing algorithms with accurate, fresh data. Optimize margins and stay competitive.",
  },
];

const platforms = [
  { name: "Amazon", category: "E-commerce" },
  { name: "Walmart", category: "E-commerce" },
  { name: "Target", category: "E-commerce" },
  { name: "Best Buy", category: "Electronics" },
  { name: "eBay", category: "Marketplace" },
  { name: "Shopify Stores", category: "D2C" },
  { name: "StubHub", category: "Ticketing" },
  { name: "SeatGeek", category: "Ticketing" },
];

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Price Tracking",
    description:
      "Monitor product prices across Amazon, Walmart, Target, and hundreds of other retailers. Track SKU-level pricing, stock status, and promotions.",
    stats: "Millions of SKUs tracked",
  },
  {
    icon: Tag,
    title: "Ticketing & Events",
    description:
      "Real-time ticket pricing for concerts, sports, and events. Track seat availability, price changes, and market trends on StubHub, SeatGeek, and more.",
    stats: "60M+ tickets/daily",
  },
  {
    icon: TrendingUp,
    title: "MAP Monitoring",
    description:
      "Ensure retailers comply with your Minimum Advertised Price policies. Automated monitoring and violation alerts.",
    stats: "24/7 monitoring",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Understand your competitive landscape. Track new products, pricing strategies, and promotional activities.",
    stats: "Competitive insights",
  },
];

const dataPoints = [
  "Product prices & discounts",
  "Stock availability",
  "Shipping costs",
  "Seller information",
  "Product variants",
  "Historical price data",
  "Promotional pricing",
  "Bundle offers",
];

export default function PricingIntelligencePage() {
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Solutions for Pricing Intelligence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Competitor Pricing{" "}
              <span className="text-gradient">At Scale</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Monitor competitor prices across every marketplace. Real-time
              updates, historical trends, and reliable data to fuel your pricing
              strategy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Pricing Data
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
              { value: "60M+", label: "Prices Tracked Daily" },
              { value: "Real-time", label: "Update Frequency" },
              { value: "99%+", label: "Data Accuracy" },
              { value: "100+", label: "Platforms Covered" },
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
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Pricing Data <span className="text-gradient">Done Right</span>
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

      {/* Use Cases */}
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
              Pricing Intelligence <span className="text-gradient">In Action</span>
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
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">
                        {useCase.title}
                      </h3>
                      <span className="px-3 py-1 bg-mint/30 text-primary text-xs font-semibold rounded-full">
                        {useCase.stats}
                      </span>
                    </div>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Data Points */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
                Platforms
              </span>
              <h3 className="text-2xl font-bold text-primary mb-8">
                We Monitor <span className="text-gradient">100+ Platforms</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-white rounded-xl p-4 border border-sage/20"
                  >
                    <div className="font-semibold text-primary">{platform.name}</div>
                    <div className="text-sm text-gray-500">{platform.category}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                And many more... Tell us which platforms you need to monitor.
              </p>
            </motion.div>

            {/* Data Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
                Data Points
              </span>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Comprehensive <span className="text-gradient">Price Data</span>
              </h3>
              <div className="bg-white rounded-2xl p-8 border border-sage/20">
                <div className="grid grid-cols-2 gap-4">
                  {dataPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-display">
              Ready to optimize your pricing strategy?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample of competitor pricing data within 48-72 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Get Pricing Data
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
