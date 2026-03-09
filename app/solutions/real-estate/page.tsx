"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  MapPin,
  TrendingUp,
  Users,
  Search,
  BarChart3,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Shield,
    title: "DataDome Bypass",
    description:
      "We bypass advanced anti-bot systems like DataDome that protect most real estate portals. Reliable access guaranteed.",
  },
  {
    icon: MapPin,
    title: "Multi-Market Coverage",
    description:
      "US, European, or global markets — we cover Zillow, Redfin, ImmoScout24, Homegate, and hundreds more.",
  },
  {
    icon: BarChart3,
    title: "Custom APIs",
    description:
      "Get your data via REST API with JSON responses. Real-time queries or bulk exports — your choice.",
  },
  {
    icon: TrendingUp,
    title: "Historical Data",
    description:
      "Track listing changes over time. Price history, days on market, and market trend analysis.",
  },
];

const platforms = [
  { name: "Zillow", region: "US" },
  { name: "Redfin", region: "US" },
  { name: "Realtor.com", region: "US" },
  { name: "Trulia", region: "US" },
  { name: "ImmoScout24", region: "Germany/Switzerland" },
  { name: "Homegate", region: "Switzerland" },
  { name: "Newhome.ch", region: "Switzerland" },
  { name: "Rightmove", region: "UK" },
];

const dataPoints = [
  "Property addresses & locations",
  "Listing prices & price history",
  "Property specifications (beds, baths, sqft)",
  "Property descriptions",
  "Agent/broker information",
  "Days on market",
  "Property images & virtual tours",
  "Neighborhood data",
  "School ratings",
  "Comparable sales",
];

const useCases = [
  {
    title: "Real Estate Analytics Platforms",
    description:
      "Build comprehensive property databases for valuation models, market analysis, and investment research.",
    icon: BarChart3,
  },
  {
    title: "PropTech Applications",
    description:
      "Power your property search apps, home valuation tools, and real estate marketplaces with fresh listing data.",
    icon: Home,
  },
  {
    title: "Investment Analysis",
    description:
      "Track property listings, price changes, and market trends for real estate investment decisions.",
    icon: TrendingUp,
  },
  {
    title: "Agent & Broker Tools",
    description:
      "Provide your users with comprehensive market data, comparable listings, and lead generation tools.",
    icon: Users,
  },
];

export default function RealEstatePage() {
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
              <Building2 className="w-4 h-4 mr-2" />
              Solutions for Real Estate & PropTech
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Real Estate Data{" "}
              <span className="text-gradient">Without Limits</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Property listings, agent data, and market intelligence from
              Zillow, Redfin, ImmoScout24, and 100+ real estate platforms
              worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Property Data
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
              { value: "2M+", label: "Listings/Month" },
              { value: "100+", label: "Platforms Covered" },
              { value: "DataDome", label: "Bypass Included" },
              { value: "REST API", label: "Delivery Option" },
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
              Real Estate Data <span className="text-gradient">Expertise</span>
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

      {/* Case Study */}
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
                  TheDataHive: Swiss Real Estate APIs
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  We built custom REST APIs for TheDataHive covering all major
                  Swiss real estate platforms — ImmoScout24, Homegate, Newhome,
                  and Urbanhome. DataDome bypass included.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-mint">CHF 3K</div>
                    <div className="text-white/70 text-sm">/month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">5</div>
                    <div className="text-white/70 text-sm">APIs delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">5+</div>
                    <div className="text-white/70 text-sm">Months running</div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Get Similar Results
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-white/70 text-sm mb-3">Platforms Covered:</div>
                  <div className="space-y-2">
                    {["ImmoScout24.ch", "Homegate.ch", "Newhome.ch", "Urbanhome.ch"].map(
                      (platform) => (
                        <div
                          key={platform}
                          className="flex items-center gap-2 text-white"
                        >
                          <CheckCircle2 className="w-5 h-5 text-mint" />
                          {platform}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                Global <span className="text-gradient">Coverage</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-white rounded-xl p-4 border border-sage/20"
                  >
                    <div className="font-semibold text-primary">{platform.name}</div>
                    <div className="text-sm text-gray-500">{platform.region}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                And many more... Tell us which markets you need coverage for.
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
                Complete <span className="text-gradient">Property Data</span>
              </h3>
              <div className="bg-white rounded-2xl p-8 border border-sage/20">
                <div className="grid grid-cols-1 gap-3">
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
              PropTech <span className="text-gradient">Applications</span>
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
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-display">
              Ready to power your PropTech platform?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample of real estate data within 48-72 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Get Property Data
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
