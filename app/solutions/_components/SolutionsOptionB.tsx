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
    platforms: ["Indeed", "LinkedIn Jobs", "Glassdoor", "ZipRecruiter", "Monster"],
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

export default function SolutionsOptionB() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur">
              <Target className="w-4 h-4 mr-2" />
              Business Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight tracking-tight">
              Data Solutions for{" "}
              <span className="text-mint">Every Challenge</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              We solve complex data acquisition problems so you can focus on building products and making decisions.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="flex flex-col items-center text-white/50">
              <span className="text-sm mb-2">Explore Solutions</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions - Full Width Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-24 scroll-mt-24 ${
            index % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Solution Header - Full Width */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary">
                    {solution.title}
                  </h2>
                  <p className="text-secondary font-medium mt-1">
                    {solution.subtitle}
                  </p>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left - Description & Features (2 cols) */}
                <div className="lg:col-span-2">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  {/* Features Grid - 3x2 */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {solution.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl ${
                          index % 2 === 0 ? "bg-cream" : "bg-white"
                        }`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-500">Platforms:</span>
                    {solution.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-sage/20 text-primary text-sm rounded-full font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Stats Card (1 col) */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white h-full flex flex-col">
                    {/* Big Stat */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <div className="text-5xl lg:text-6xl font-bold font-display mb-2">
                        {solution.stats.value}
                      </div>
                      <div className="text-white/70 text-sm">
                        {solution.stats.label}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/20 my-6" />

                    {/* Case Study */}
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-2">
                        Case Study
                      </div>
                      <div className="font-semibold mb-1">
                        {solution.caseStudy.client}
                      </div>
                      <p className="text-white/80 text-sm">
                        {solution.caseStudy.result}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all w-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
              Not sure which solution fits your needs?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll help you identify the best approach for your data challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all"
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
