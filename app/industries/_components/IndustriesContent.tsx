"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import {
  Code,
  Globe,
  Users,
  Brain,
  Ticket,
  Building2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    id: "ecommerce-retail",
    icon: ShoppingCart,
    title: "Ecommerce & Retail",
    subtitle: "Price monitoring, product intelligence, MAP compliance",
    description:
      "Track competitor prices, monitor product availability, analyze reviews, and ensure MAP compliance across all major marketplaces. Power your pricing strategy with real-time data.",
    useCases: [
      "Competitor price monitoring",
      "Product catalog aggregation",
      "MAP violation detection",
      "Review and rating analysis",
      "Inventory tracking",
      "Dynamic pricing feeds",
    ],
    platforms: ["Amazon", "Walmart", "Target", "eBay", "Shopify stores"],
    stats: { value: "10M+", label: "Products tracked" },
    clientTypes: [
      "Pricing intelligence companies",
      "E-commerce brands",
      "Retail analytics platforms",
      "Market research firms",
    ],
  },
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    subtitle: "Property listings, market analytics, agent data",
    description:
      "Extract property listings, pricing history, agent information, and market trends from real estate platforms worldwide. Build comprehensive property databases for valuation and analysis.",
    useCases: [
      "Listing aggregation",
      "Price history tracking",
      "Agent and broker data",
      "Market trend analysis",
      "Property specifications",
      "Comparable sales data",
    ],
    platforms: ["Zillow", "Redfin", "ImmoScout24", "Homegate", "Rightmove"],
    stats: { value: "2M+", label: "Listings/month" },
    clientTypes: [
      "PropTech companies",
      "Real estate analytics platforms",
      "Investment analysis tools",
      "Valuation services",
    ],
    caseStudy: {
      client: "TheDataHive",
      result: "5 Swiss real estate APIs, CHF 3K/month, DataDome bypass",
    },
  },
  {
    id: "talent-recruitment",
    icon: Users,
    title: "Talent & Recruitment",
    subtitle: "LinkedIn profiles, job postings, hiring trends",
    description:
      "Access LinkedIn profiles at scale, aggregate job postings, and track hiring trends. Power your recruiting tools, sales intelligence platforms, and HR analytics with comprehensive talent data.",
    useCases: [
      "Candidate sourcing",
      "Job market intelligence",
      "Salary benchmarking",
      "Hiring trend analysis",
      "Skills demand tracking",
      "Company hiring velocity",
    ],
    platforms: ["LinkedIn", "Indeed", "Glassdoor", "Sales Navigator"],
    stats: { value: "100M+", label: "Profiles/month" },
    clientTypes: [
      "HR Tech companies",
      "Recruiting platforms",
      "Sales intelligence tools",
      "Talent analytics providers",
    ],
    caseStudy: {
      client: "Jesse Infotech",
      result: "100M+ LinkedIn profiles, 15+ months, zero account bans",
    },
  },
  {
    id: "ticketing-events",
    icon: Ticket,
    title: "Ticketing & Events",
    subtitle: "Real-time ticket prices, availability, market trends",
    description:
      "Monitor ticket prices and availability across all major ticketing platforms in real-time. Track pricing trends, seat inventory, and market dynamics for concerts, sports, and events.",
    useCases: [
      "Real-time price tracking",
      "Seat availability monitoring",
      "Price trend analysis",
      "Event inventory data",
      "Resale market intelligence",
      "Dynamic pricing feeds",
    ],
    platforms: ["StubHub", "SeatGeek", "TickPick", "Vivid Seats"],
    stats: { value: "60M+", label: "Tickets/day" },
    clientTypes: [
      "Ticket resale platforms",
      "Price comparison sites",
      "Event analytics companies",
      "Travel aggregators",
    ],
    caseStudy: {
      client: "Ficstar",
      result: "24M+ tickets/day from StubHub, $1,800/month, PerimeterX bypass",
    },
  },
  {
    id: "food-delivery",
    icon: UtensilsCrossed,
    title: "Food Delivery & Grocery",
    subtitle: "Menu pricing, restaurant data, delivery platforms",
    description:
      "Track menu prices, restaurant information, and product availability across food delivery and grocery platforms. Monitor pricing changes across thousands of locations.",
    useCases: [
      "Menu price monitoring",
      "Restaurant data aggregation",
      "Location-based pricing",
      "Delivery platform analysis",
      "Product availability tracking",
      "Competitive benchmarking",
    ],
    platforms: ["DoorDash", "McDonald's", "Starbucks", "Subway", "Dutch Bros"],
    stats: { value: "55M+", label: "Records/week" },
    clientTypes: [
      "Restaurant analytics platforms",
      "Food delivery aggregators",
      "QSR competitive intelligence",
      "Menu pricing tools",
    ],
    caseStudy: {
      client: "Ficstar",
      result: "16K+ Starbucks stores monthly, 5 restaurant chains tracked",
    },
  },
  {
    id: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Training data, RAG pipelines, knowledge bases",
    description:
      "Fuel your AI models with high-quality, structured web data. Training datasets, RAG pipeline data, and knowledge base construction — we deliver the data your models need.",
    useCases: [
      "LLM training datasets",
      "RAG pipeline data",
      "Knowledge graph construction",
      "Fine-tuning datasets",
      "Content enrichment",
      "Continuous data refresh",
    ],
    platforms: ["Any website", "Custom sources"],
    stats: { value: "100M+", label: "Records/month capacity" },
    clientTypes: [
      "AI/LLM startups",
      "ML research teams",
      "Enterprise AI initiatives",
      "Knowledge management platforms",
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    subtitle: "DaaS, market intelligence, competitive analysis",
    description:
      "Power your data products with reliable, large-scale web scraping. We operate as your silent backend vendor — your clients never know we exist.",
    useCases: [
      "Data product feeds",
      "Market intelligence data",
      "Competitive analysis",
      "Industry benchmarking",
      "Trend monitoring",
      "Custom data aggregation",
    ],
    platforms: ["Any website", "Multiple platforms"],
    stats: { value: "White-label", label: "Ready" },
    clientTypes: [
      "DaaS companies",
      "Market intelligence SaaS",
      "Business intelligence platforms",
      "Data consulting firms",
    ],
  },
  {
    id: "saas-api",
    icon: Code,
    title: "SaaS & API Applications",
    subtitle: "Data enrichment, integrations, real-time feeds",
    description:
      "Integrate web data directly into your SaaS product via API. Real-time data enrichment, automated lookups, and custom integrations to enhance your application's value.",
    useCases: [
      "Data enrichment APIs",
      "Real-time lookups",
      "Lead enrichment",
      "Company intelligence",
      "Contact verification",
      "Custom integrations",
    ],
    platforms: ["Custom APIs"],
    stats: { value: "200ms", label: "Avg response time" },
    clientTypes: [
      "SaaS products",
      "CRM enrichment tools",
      "Sales intelligence platforms",
      "Developer tools",
    ],
  },
];

export default function IndustriesContent() {
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
              <Globe className="w-4 h-4 mr-2" />
              Industries We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Data Solutions for{" "}
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              From e-commerce to AI, we provide specialized data extraction
              solutions tailored to your industry's unique requirements.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="px-4 py-2 bg-white rounded-full border border-sage/30 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary hover:shadow-soft transition-all"
              >
                {industry.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-24 scroll-mt-24 ${
            index % 2 === 0 ? "bg-white" : "bg-cream"
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
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-3">
                  {industry.title}
                </h2>
                <p className="text-lg text-secondary font-medium mb-4">
                  {industry.subtitle}
                </p>
                <p className="text-gray-600 mb-8">{industry.description}</p>

                {/* Use Cases */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-500 mb-3">
                    Platforms We Cover
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {industry.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-sage/20 text-primary text-sm rounded-full"
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
                  Discuss Your Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Info Card */}
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
                      {industry.stats.value}
                    </div>
                    <div className="text-white/70">{industry.stats.label}</div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-6" />

                  {/* Client Types */}
                  <div className="mb-6">
                    <div className="text-white/70 text-sm mb-3">
                      Who We Serve
                    </div>
                    <div className="space-y-2">
                      {industry.clientTypes.map((type) => (
                        <div
                          key={type}
                          className="flex items-center gap-2 text-white/90 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-mint" />
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study if exists */}
                  {industry.caseStudy && (
                    <>
                      <div className="border-t border-white/20 my-6" />
                      <div>
                        <div className="text-white/70 text-sm mb-2">
                          Case Study
                        </div>
                        <div className="font-semibold mb-1">
                          {industry.caseStudy.client}
                        </div>
                        <p className="text-white/80 text-sm">
                          {industry.caseStudy.result}
                        </p>
                      </div>
                    </>
                  )}
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
              Don't see your industry?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We work with companies across all sectors. If you need web data,
              we can help. Let's discuss your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
