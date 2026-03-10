"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import {
  Quote,
  Ticket,
  Shield,
  Linkedin,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  UtensilsCrossed,
} from "lucide-react";

// Case Studies Data
const caseStudies = [
  {
    id: "ticketing-intelligence",
    title: "Ticketing Price Intelligence",
    client: "US-based DaaS Company",
    industry: "Ticketing & Events",
    icon: Ticket,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-600",
    challenge:
      "Their previous vendor's scraper kept breaking due to PerimeterX anti-bot protection. They were losing critical pricing data and couldn't serve their clients reliably.",
    solution:
      "We deployed our Camoufox stealth browser with residential proxies and behavioral simulation. Built a fully managed pipeline that runs 24/7 with automatic recovery.",
    results: [
      { metric: "24M+", label: "Tickets scraped daily" },
      { metric: "4", label: "Platforms covered" },
      { metric: "99.9%", label: "Uptime achieved" },
      { metric: "1 week", label: "Replaced failing vendor" },
    ],
    platforms: ["StubHub", "SeatGeek", "TickPick", "Vivid Seats"],
    antiBot: "PerimeterX / HUMAN",
    timeline: "12+ months and counting",
    quote:
      "FastScraping replaced our failing vendor in just one week. The data quality and reliability has been exceptional ever since.",
  },
  {
    id: "restaurant-monitoring",
    title: "Restaurant & Pricing Monitor",
    client: "US-based DaaS Company",
    industry: "Food & Pricing Intelligence",
    icon: UtensilsCrossed,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
    challenge:
      "Needed comprehensive menu and pricing data from major restaurant chains and delivery platforms. Required weekly refreshes across thousands of locations.",
    solution:
      "Built automated pipelines for 5 major platforms with location-based extraction. Implemented smart scheduling to handle rate limits and ensure complete coverage.",
    results: [
      { metric: "55M+", label: "Records per week" },
      { metric: "16,000+", label: "Store locations" },
      { metric: "5", label: "Platforms monitored" },
      { metric: "Weekly", label: "Full refresh cycle" },
    ],
    platforms: ["McDonald's", "Starbucks", "Subway", "DoorDash", "Dutch Bros"],
    antiBot: "Cloudflare, Custom WAF",
    timeline: "12+ months and counting",
    quote:
      "We scaled from 271 Starbucks stores to over 16,000 locations. FastScraping handled the growth seamlessly.",
  },
  {
    id: "job-market-data",
    title: "Multi-Country Job Market Data",
    client: "US-based DaaS Company",
    industry: "HR Tech & Recruitment",
    icon: Briefcase,
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-600",
    challenge:
      "Required job posting data from Indeed across 5 countries with different anti-bot protections. Previous solutions couldn't handle Cloudflare's aggressive blocking.",
    solution:
      "Deployed country-specific proxy pools with geo-matched residential IPs. Used our stealth browser stack to bypass Cloudflare across all regions consistently.",
    results: [
      { metric: "1.39M+", label: "Jobs scraped weekly" },
      { metric: "5", label: "Countries covered" },
      { metric: "Daily", label: "Refresh frequency" },
      { metric: "12+ months", label: "Stable operation" },
    ],
    platforms: [
      "Indeed US",
      "Indeed UK",
      "Indeed CN",
      "Indeed TW",
      "Indeed IN",
    ],
    antiBot: "Cloudflare",
    timeline: "12+ months and counting",
    quote:
      "The multi-country Cloudflare bypass was something no other vendor could deliver reliably. FastScraping made it look easy.",
  },
  {
    id: "swiss-real-estate",
    title: "Swiss Real Estate APIs",
    client: "Swiss PropTech Company",
    industry: "Real Estate & PropTech",
    icon: Building2,
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-600",
    challenge:
      "Needed real-time property listing data from Swiss real estate platforms. DataDome anti-bot was blocking all standard scraping attempts.",
    solution:
      "Built custom REST APIs (FastAPI) for each platform with DataDome bypass. Delivered clean, structured data with consistent schemas across all sources.",
    results: [
      { metric: "2M+", label: "API requests monthly" },
      { metric: "5", label: "Platforms integrated" },
      { metric: "REST API", label: "Delivery method" },
      { metric: "Zero", label: "Churn rate" },
    ],
    platforms: [
      "ImmoScout24",
      "Homegate",
      "Newhome",
      "Urbanhome",
      "Immomapper",
    ],
    antiBot: "DataDome",
    timeline: "5+ months and counting",
    quote:
      "The custom APIs they built for us are exactly what we needed. Clean data, reliable uptime, and they handled the DataDome bypass we couldn't crack.",
  },
  {
    id: "linkedin-scale",
    title: "LinkedIn Data at Scale",
    client: "Indian B2B Data Company",
    industry: "B2B Data & Intelligence",
    icon: Linkedin,
    color: "from-sky-500/20 to-cyan-500/20",
    iconColor: "text-sky-600",
    challenge:
      "Required massive LinkedIn profile extraction without account bans. Traditional cookie-based scrapers kept getting blocked and risking client accounts.",
    solution:
      "Deployed our Scrayz infrastructure — no cookies, no account risk. Built for massive scale with distributed extraction and automatic quality validation.",
    results: [
      { metric: "100M+", label: "Profiles extracted" },
      { metric: "Zero", label: "Account bans" },
      { metric: "15+ months", label: "Partnership duration" },
      { metric: "GDPR", label: "Compliant delivery" },
    ],
    platforms: ["LinkedIn Profiles", "LinkedIn Companies", "LinkedIn Jobs"],
    antiBot: "LinkedIn Anti-Scraping",
    timeline: "15+ months and counting",
    quote:
      "We've extracted over 100 million profiles with zero account bans. That's unheard of in this industry.",
  },
];

// Stats
const stats = [
  { value: "100M+", label: "Records Delivered Monthly" },
  { value: "15+", label: "Months Avg. Client Retention" },
  { value: "99.9%", label: "Pipeline Uptime" },
  { value: "5+", label: "Anti-Bot Systems Bypassed" },
];

export default function CaseStudiesContent() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Real Results for{" "}
              <span className="text-gradient">Data-Driven</span> Companies
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              See how we've helped businesses scale their data operations with
              reliable, high-volume web scraping solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                id={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-3xl border border-sage/20 shadow-soft overflow-hidden">
                  {/* Header */}
                  <div
                    className={`p-8 bg-gradient-to-r ${study.color} border-b border-sage/10`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center ${study.iconColor}`}
                      >
                        <study.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-white/60 backdrop-blur rounded-full text-xs font-medium text-gray-700">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                            {study.timeline}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                          {study.title}
                        </h2>
                        <p className="text-gray-600 mt-1">{study.client}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                            <Shield className="w-4 h-4 text-red-600" />
                          </div>
                          <h3 className="font-semibold text-primary">
                            The Challenge
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          </div>
                          <h3 className="font-semibold text-primary">
                            Our Solution
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="bg-cream rounded-xl p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-500">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Details Row */}
                    <div className="flex flex-wrap gap-6 mb-8 text-sm">
                      <div>
                        <span className="text-gray-500">Platforms:</span>{" "}
                        <span className="text-primary font-medium">
                          {study.platforms.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">
                          Anti-Bot Bypassed:
                        </span>{" "}
                        <span className="text-primary font-medium">
                          {study.antiBot}
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-sage/10 to-mint/10 rounded-2xl p-6 relative">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-sage/30" />
                      <p className="text-gray-700 italic pl-8 leading-relaxed">
                        "{study.quote}"
                      </p>
                    </div>
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
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-sage/20 rounded-3xl" />
        <div className="absolute bottom-10 left-[15%] w-20 h-20 bg-mint/30 rounded-2xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-display">
              Want Similar Results?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your data requirements. Get a free sample within
              48-72 hours and see the quality for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Book a Demo
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

      <Footer />
    </main>
  );
}
