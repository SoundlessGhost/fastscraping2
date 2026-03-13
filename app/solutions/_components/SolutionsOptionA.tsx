"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

import {
  Code,
  Users,
  Target,
  Database,
  Briefcase,
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    id: "pricing-intelligence",
    icon: TrendingUp,
    title: "Competitor Pricing Intelligence",
    shortTitle: "Pricing Intelligence",
    subtitle: "Track competitor prices in real-time",
    description:
      "Monitor pricing across e-commerce platforms, ticketing sites, and marketplaces. Get daily or real-time price feeds to optimize your pricing strategy and protect your margins.",
    features: [
      "Real-time price monitoring across 100+ platforms",
      "Historical pricing trends and analytics",
      "MAP violation detection and alerts",
      "Automated competitor price matching",
      "Dynamic pricing data feeds",
      "Multi-currency support",
    ],
    platforms: ["Amazon", "Walmart", "StubHub", "SeatGeek", "eBay", "Target"],
    stats: { value: "60M+", label: "Prices tracked daily" },
    caseStudy: {
      client: "Ficstar",
      result: "24M+ tickets/day from StubHub with PerimeterX bypass",
    },
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "marketplace-intelligence",
    icon: ShoppingCart,
    title: "Product & Marketplace Intelligence",
    shortTitle: "Marketplace Data",
    subtitle: "Deep insights into product data",
    description:
      "Extract comprehensive product information from any marketplace. Track inventory levels, reviews, ratings, seller data, and product specifications at scale.",
    features: [
      "Product catalog extraction",
      "Review and rating aggregation",
      "Seller and inventory monitoring",
      "Category and ranking tracking",
      "Product specification parsing",
      "Image and media extraction",
    ],
    platforms: ["Amazon", "Shopee", "Alibaba", "Etsy", "Mercado Libre"],
    stats: { value: "10M+", label: "Products monitored" },
    caseStudy: {
      client: "Enterprise clients",
      result: "Complete product intelligence across global marketplaces",
    },
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "job-market",
    icon: Briefcase,
    title: "Job Market Insights",
    shortTitle: "Job Market",
    subtitle: "Labor market intelligence at scale",
    description:
      "Aggregate job postings from Indeed, LinkedIn, Glassdoor, and 50+ job boards worldwide. Track hiring trends, salary data, and skill demand across industries and regions.",
    features: [
      "Multi-country job data (US, UK, EU, Asia)",
      "Salary range extraction",
      "Skills and requirements analysis",
      "Hiring trend monitoring",
      "Company hiring velocity tracking",
      "Remote job identification",
    ],
    platforms: ["Indeed", "LinkedIn Jobs", "Glassdoor", "ZipRecruiter", "Monster"],
    stats: { value: "1.4M+", label: "Jobs collected weekly" },
    caseStudy: {
      client: "Ficstar",
      result: "5 countries, $500/month, Cloudflare bypass, 12+ months stable",
    },
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "linkedin-data",
    icon: Users,
    title: "LinkedIn Data Platform",
    shortTitle: "LinkedIn Data",
    subtitle: "Professional data without account bans",
    description:
      "Access LinkedIn profiles, companies, jobs, and posts at scale. Our cookieless approach means zero risk of account bans. Power your sales intelligence, recruiting tools, and market research.",
    features: [
      "Profile data with full experience history",
      "Company intelligence and employee data",
      "Job postings and hiring signals",
      "Sales Navigator data extraction",
      "Skills and endorsement data",
      "No cookies, no account ban risk",
    ],
    platforms: ["LinkedIn", "Sales Navigator"],
    stats: { value: "100M+", label: "Profiles per month" },
    caseStudy: {
      client: "Jesse Infotech",
      result: "100M+ profiles, 15+ months partnership, zero account bans",
    },
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: "web-data-apis",
    icon: Code,
    title: "Web Data APIs",
    shortTitle: "Data APIs",
    subtitle: "Custom APIs for any data source",
    description:
      "Get structured data via REST APIs built specifically for your needs. Real-time access with JSON responses, comprehensive documentation, and 99.9% uptime SLA.",
    features: [
      "Custom REST API endpoints",
      "Real-time data access",
      "JSON/XML response formats",
      "Webhook delivery options",
      "Rate limiting and authentication",
      "Comprehensive API documentation",
    ],
    platforms: ["Any website", "Custom builds"],
    stats: { value: "200ms", label: "Average response time" },
    caseStudy: {
      client: "TheDataHive",
      result: "5 Swiss real estate APIs, CHF 3,000/month, DataDome bypass",
    },
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "data-pipelines",
    icon: Database,
    title: "Data Pipelines & ETL",
    shortTitle: "Data Pipelines",
    subtitle: "Automated data delivery infrastructure",
    description:
      "Fully managed data pipelines that deliver clean, structured data on your schedule. SFTP, S3, or direct database integration. We handle extraction, transformation, and loading.",
    features: [
      "Scheduled data delivery (daily/weekly/monthly)",
      "Multiple formats (Parquet, CSV, JSON, TSV)",
      "Direct S3/SFTP/Webhook delivery",
      "Data validation and QA checks",
      "Schema normalization",
      "Automatic error recovery",
    ],
    platforms: ["Snowflake", "BigQuery", "S3", "SFTP", "Webhooks"],
    stats: { value: "99%+", label: "Uptime SLA" },
    caseStudy: {
      client: "Ficstar",
      result: "55M+ restaurant records weekly across 5 platforms",
    },
    color: "from-rose-500 to-pink-500",
  },
];

export default function SolutionsOptionA() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = solutions[activeTab];

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Business Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Data Solutions for{" "}
              <span className="text-gradient">Every Challenge</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Choose the solution that fits your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-white shadow-glow"
                    : "bg-cream text-gray-600 hover:bg-sage/20 hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <solution.icon className="w-4 h-4" />
                  {solution.shortTitle}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-cream rounded-3xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left Content - 3 columns */}
                <div className="lg:col-span-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeSolution.color} flex items-center justify-center mb-6`}>
                    <activeSolution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-3">
                    {activeSolution.title}
                  </h2>
                  <p className="text-lg text-secondary font-medium mb-4">
                    {activeSolution.subtitle}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {activeSolution.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {activeSolution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3">Platforms we cover:</p>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1.5 bg-white text-primary text-sm rounded-full border border-sage/30"
                        >
                          {platform}
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
                </div>

                {/* Right Stats Card - 2 columns */}
                <div className="lg:col-span-2">
                  <div className={`bg-gradient-to-br ${activeSolution.color} rounded-3xl p-8 text-white h-full flex flex-col justify-between`}>
                    {/* Stats */}
                    <div className="text-center mb-8">
                      <div className="text-6xl font-bold font-display mb-2">
                        {activeSolution.stats.value}
                      </div>
                      <div className="text-white/80">{activeSolution.stats.label}</div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/20 my-6" />

                    {/* Case Study */}
                    <div>
                      <div className="text-white/60 text-sm uppercase tracking-wider mb-2">Case Study</div>
                      <div className="font-semibold text-lg mb-2">
                        {activeSolution.caseStudy.client}
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {activeSolution.caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
              Not sure which solution fits your needs?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll help you identify the best approach for your data challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
