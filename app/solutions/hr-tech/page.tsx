"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  Search,
  Globe,
  BarChart3,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Globe,
    title: "Global Job Market Data",
    description:
      "Indeed, LinkedIn, Glassdoor, and 50+ job boards. US, UK, Europe, Asia — we cover every major market.",
  },
  {
    icon: Users,
    title: "Talent Intelligence",
    description:
      "LinkedIn profiles at scale. Skills, experience, company history — build comprehensive talent databases.",
  },
  {
    icon: Shield,
    title: "Zero Account Bans",
    description:
      "Our cookieless approach means no LinkedIn account bans. Ever. 15+ months and counting.",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description:
      "Fresh job postings daily. Track new openings, salary changes, and market movements as they happen.",
  },
];

const dataSources = [
  {
    category: "Job Boards",
    sources: ["Indeed", "LinkedIn Jobs", "Glassdoor", "ZipRecruiter", "Monster"],
    icon: Briefcase,
  },
  {
    category: "Professional Networks",
    sources: ["LinkedIn Profiles", "Company Pages", "Employee Data", "Skills & Endorsements"],
    icon: Users,
  },
  {
    category: "Company Data",
    sources: ["Company Profiles", "Employee Counts", "Funding Info", "Tech Stacks"],
    icon: Building2,
  },
  {
    category: "Salary & Compensation",
    sources: ["Salary Ranges", "Benefits Data", "Compensation Trends", "Market Benchmarks"],
    icon: TrendingUp,
  },
];

const useCases = [
  {
    title: "Talent Sourcing Platforms",
    description:
      "Build AI-powered sourcing tools with comprehensive candidate profiles. Skills, experience, contact info — all in one database.",
    stats: "100M+ profiles available",
    icon: Search,
  },
  {
    title: "Labor Market Analytics",
    description:
      "Track hiring trends, skill demand, salary movements, and workforce shifts across industries and regions.",
    stats: "1.4M+ jobs/week",
    icon: BarChart3,
  },
  {
    title: "Competitive Intelligence",
    description:
      "Monitor competitor hiring patterns, team growth, and talent movements. Know when competitors are scaling.",
    stats: "Real-time tracking",
    icon: Target,
  },
  {
    title: "Recruitment Automation",
    description:
      "Power your ATS integrations and recruitment automation tools with fresh candidate and job data.",
    stats: "Daily updates",
    icon: Zap,
  },
];

const dataPoints = [
  "Job titles & descriptions",
  "Salary ranges & benefits",
  "Required skills & experience",
  "Company information",
  "Location & remote options",
  "Posting dates & freshness",
  "Application requirements",
  "Industry classifications",
];

const profileDataPoints = [
  "Professional headlines",
  "Work experience",
  "Education history",
  "Skills & endorsements",
  "Current company",
  "Location data",
  "Connection counts",
  "Profile summaries",
];

export default function HRTechPage() {
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
              <Users className="w-4 h-4 mr-2" />
              Solutions for HR Tech
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Talent & Job Data{" "}
              <span className="text-gradient">At Scale</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Power your HR tech platform with comprehensive job market and
              talent data. LinkedIn profiles, job postings, salary data — all
              without account bans.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get HR Data
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://scrayz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary rounded-full font-semibold hover:border-primary transition-all"
              >
                Try Scrayz LinkedIn API
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "100M+", label: "LinkedIn Profiles/Month" },
              { value: "1.4M+", label: "Jobs/Week" },
              { value: "0", label: "Account Bans" },
              { value: "5+", label: "Countries Covered" },
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
              Why HR Tech Teams Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Built for <span className="text-gradient">Talent Platforms</span>
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

      {/* Data Sources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Data Sources
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Comprehensive <span className="text-gradient">HR Data</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={source.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-6 border border-sage/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <source.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-4">{source.category}</h3>
                <ul className="space-y-2">
                  {source.sources.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-cream">
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
              HR Tech <span className="text-gradient">Applications</span>
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
                className="bg-white rounded-2xl p-8 border border-sage/20 shadow-soft"
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

      {/* Data Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Job Data Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4 mr-2" />
                Job Data
              </span>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Comprehensive <span className="text-gradient">Job Listings</span>
              </h3>
              <div className="bg-cream rounded-2xl p-8 border border-sage/20">
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

            {/* Profile Data Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Profile Data
              </span>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Rich <span className="text-gradient">Talent Profiles</span>
              </h3>
              <div className="bg-cream rounded-2xl p-8 border border-sage/20">
                <div className="grid grid-cols-1 gap-3">
                  {profileDataPoints.map((point) => (
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

      {/* Scrayz API Promo */}
      <section className="py-24 bg-cream">
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
                  Self-Serve Option
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                  Scrayz LinkedIn API
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Need LinkedIn data for your HR platform? Try our self-serve
                  API. Profiles, companies, jobs — all without cookies or
                  account bans.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Profile & Company endpoints",
                    "Jobs & Posts API",
                    "No cookies needed",
                    "GDPR compliant",
                    "Start free — 20 calls/day",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://scrayz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Try Scrayz Free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <pre className="text-sm text-white/90 font-mono">
{`GET /linkedin/profile

{
  "name": "Sarah Chen",
  "headline": "Senior Software Engineer",
  "company": "TechCorp",
  "location": "San Francisco, CA",
  "experience": [...],
  "skills": ["Python", "ML", "AWS"],
  ...
}`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-3xl p-10 lg:p-16 border border-sage/20"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Case Study
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-4">
                  Jesse Infotech: 100M+ LinkedIn Profiles
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  We power Jesse Infotech's talent data platform — delivering
                  100M+ LinkedIn profiles monthly for their B2B data products.
                  15+ months of partnership with zero account bans.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">100M+</div>
                    <div className="text-gray-500 text-sm">Profiles/month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-gray-500 text-sm">Months running</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">0</div>
                    <div className="text-gray-500 text-sm">Account bans</div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow transition-all"
                >
                  Get Similar Results
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-mint/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white rounded-2xl p-8 border border-sage/20 shadow-soft">
                    <div className="text-6xl font-bold text-primary text-center mb-4">
                      100M+
                    </div>
                    <div className="text-gray-600 text-center">
                      LinkedIn profiles delivered monthly
                    </div>
                  </div>
                </div>
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
              Ready to power your HR tech platform?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample of job market or talent data within 48-72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://scrayz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary rounded-full font-semibold hover:border-primary transition-all"
              >
                Try Scrayz Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
