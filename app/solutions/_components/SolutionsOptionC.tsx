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
  X,
} from "lucide-react";

const solutions = [
  {
    id: "pricing-intelligence",
    icon: TrendingUp,
    title: "Competitor Pricing Intelligence",
    shortDesc: "Track competitor prices in real-time across 100+ platforms to optimize your pricing strategy and protect your margins",
    description:
      "Monitor pricing across e-commerce platforms, ticketing sites, and marketplaces. Get daily or real-time price feeds to optimize your pricing strategy and protect your margins. Detect MAP violations, track historical trends, and automate competitor price matching with ease. Our solution covers 100+ platforms including Amazon, Walmart, StubHub, SeatGeek, eBay, and Target. With over 60M prices tracked daily, you can make data-driven pricing decisions with confidence.",
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
    gradient: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50",
  },
  {
    id: "marketplace-intelligence",
    icon: ShoppingCart,
    title: "Marketplace Intelligence",
    shortDesc: "Extract product data from any marketplace at scale to power your e-commerce analytics and competitive research ",
    description:
      "Extract comprehensive product information from any marketplace. Track inventory levels, reviews, ratings, seller data, and product specifications at scale. Our solution covers Amazon, Shopee, Alibaba, Etsy, Mercado Libre, and more. With over 10M products monitored globally, you can gain complete product intelligence to optimize your assortment, pricing, and marketing strategies.",
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
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
  },
  {
    id: "job-market",
    icon: Briefcase,
    title: "Job Market Insights",
    shortDesc: "Aggregate job data from 50+ boards worldwide to track hiring trends, salary data, and skill demand across industries and regions",
    description:
      "Aggregate job postings from Indeed, LinkedIn, Glassdoor, and 50+ job boards worldwide. Track hiring trends, salary data, and skill demand across industries and regions. Our solution provides multi-country job data, salary range extraction, skills and requirements analysis, hiring trend monitoring, company hiring velocity tracking, and remote job identification. With over 1.4M jobs collected weekly, you can gain comprehensive insights into the global job market to inform your talent strategy and market research.",
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
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
  },
  {
    id: "linkedin-data",
    icon: Users,
    title: "LinkedIn Data Platform",
    shortDesc: "Professional data with zero account ban risk - access LinkedIn profiles, companies, jobs, and posts at scale with our cookieless approach",
    description:
      "Access LinkedIn profiles, companies, jobs, and posts at scale. Our cookieless approach means zero risk of account bans. Power your sales intelligence, recruiting tools, and market research. our solution provides profile data with full experience history, company intelligence and employee data, job postings and hiring signals, Sales Navigator data extraction, skills and endorsement data, all without using cookies or risking account bans. With over 100M profiles processed monthly, you can gain comprehensive professional data to fuel your business insights and growth.",
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
    gradient: "from-sky-500 to-cyan-500",
    bgLight: "bg-sky-50",
  },
  {
    id: "web-data-apis",
    icon: Code,
    title: "Web Data APIs",
    shortDesc: "Custom REST APIs for any data source with real-time access, JSON/XML responses, and comprehensive documentation",
    description:
      "Get structured data via REST APIs built specifically for your needs. Real-time access with JSON responses, comprehensive documentation, and 99.9% uptime SLA. Our solution provides custom REST API endpoints, real-time data access, JSON/XML response formats, webhook delivery options, rate limiting and authentication, and comprehensive API documentation. We cover any website or custom builds to ensure you get the data you need in the format you want, with reliable performance and support.",
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
    gradient: "from-purple-500 to-violet-500",
    bgLight: "bg-purple-50",
  },
  {
    id: "data-pipelines",
    icon: Database,
    title: "Data Pipelines & ETL",
    shortDesc: "Automated data delivery on your schedule - SFTP, S3, or direct database integration with data validation and schema normalization",
    description:
      "Fully managed data pipelines that deliver clean, structured data on your schedule. SFTP, S3, or direct database integration. We handle extraction, transformation, and loading. Our solution provides scheduled data delivery (daily/weekly/monthly), multiple formats (Parquet, CSV, JSON, TSV), direct S3/SFTP/Webhook delivery, data validation and QA checks, schema normalization, and automatic error recovery. We integrate with Snowflake, BigQuery, S3, SFTP, Webhooks, and more to ensure your data is delivered where you need it, when you need it, with the quality and reliability you expect.",
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
    gradient: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
  },
];

export default function SolutionsOptionC() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const activeSolution = solutions.find((s) => s.id === selectedSolution);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
              Click any card to explore the solution details
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSolution(solution.id)}
                className={`group cursor-pointer relative overflow-hidden rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                  selectedSolution === solution.id
                    ? "border-primary shadow-glow"
                    : "border-transparent bg-cream hover:border-sage/50 hover:shadow-soft-lg"
                }`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6`}
                >
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="relative text-gray-600 text-sm leading-relaxed mb-6">
                  {solution.shortDesc}
                </p>

                {/* Stats Badge */}
                <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sage/30">
                  <span className="font-bold text-primary">{solution.stats.value}</span>
                  <span className="text-xs text-gray-500">{solution.stats.label}</span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Slide Panel for Selected Solution */}
      <AnimatePresence>
        {activeSolution && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-sage/20 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${activeSolution.gradient} p-8 pt-16 text-white`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                  <activeSolution.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-display mb-2">
                  {activeSolution.title}
                </h2>
                <p className="text-white/80">{activeSolution.shortDesc}</p>

                {/* Stats */}
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-bold">{activeSolution.stats.value}</div>
                    <div className="text-white/70 text-sm">{activeSolution.stats.label}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8">
                  {activeSolution.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-bold text-primary mb-4">Features</h3>
                  <div className="space-y-3">
                    {activeSolution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="mb-8">
                  <h3 className="font-bold text-primary mb-4">Platforms We Cover</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeSolution.platforms.map((platform) => (
                      <span
                        key={platform}
                        className={`px-4 py-2 ${activeSolution.bgLight} text-gray-700 rounded-full text-sm font-medium`}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-cream rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-primary mb-3">Case Study</h3>
                  <div className="font-semibold text-gray-800 mb-1">
                    {activeSolution.caseStudy.client}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {activeSolution.caseStudy.result}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${activeSolution.gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all`}
                >
                  Get Started with {activeSolution.title.split(" ")[0]}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
