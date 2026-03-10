"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

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
  },
  {
    id: "marketplace-intelligence",
    icon: ShoppingCart,
    title: "Product & Marketplace Intelligence",
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
  },
  {
    id: "job-market",
    icon: Briefcase,
    title: "Job Market Insights",
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
    platforms: [
      "Indeed",
      "LinkedIn Jobs",
      "Glassdoor",
      "ZipRecruiter",
      "Monster",
    ],
    stats: { value: "1.4M+", label: "Jobs collected weekly" },
    caseStudy: {
      client: "Ficstar",
      result: "5 countries, $500/month, Cloudflare bypass, 12+ months stable",
    },
  },
  {
    id: "linkedin-data",
    icon: Users,
    title: "LinkedIn Data Platform",
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
  },
  {
    id: "web-data-apis",
    icon: Code,
    title: "Web Data APIs",
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
  },
  {
    id: "data-pipelines",
    icon: Database,
    title: "Data Pipelines & ETL",
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
  },
];

export default function SolutionsContent() {
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
              We solve complex data acquisition problems so you can focus on
              building products and making decisions. Choose the solution that
              fits your business needs.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {solutions.map((solution) => (
              <a
                key={solution.id}
                href={`#${solution.id}`}
                className="px-4 py-2 bg-white rounded-full border border-sage/30 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary hover:shadow-soft transition-all"
              >
                {solution.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-24 scroll-mt-24 ${
            index % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-3">
                  {solution.title}
                </h2>
                <p className="text-lg text-secondary font-medium mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-gray-600 mb-8">{solution.description}</p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {solution.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-sage/20 text-primary text-sm rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Stats & Case Study Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                  {/* Stats */}
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold font-display mb-2">
                      {solution.stats.value}
                    </div>
                    <div className="text-white/70">{solution.stats.label}</div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-6" />

                  {/* Case Study */}
                  <div>
                    <div className="text-white/70 text-sm mb-2">Case Study</div>
                    <div className="font-semibold mb-2">
                      {solution.caseStudy.client}
                    </div>
                    <p className="text-white/80 text-sm">
                      {solution.caseStudy.result}
                    </p>
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
              Not sure which solution fits your needs?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll help you identify the best
              approach for your data challenges.
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
