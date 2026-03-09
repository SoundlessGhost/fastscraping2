"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  FileJson,
  Layers,
  RefreshCw,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Database,
    title: "Training Data at Scale",
    description:
      "Millions of structured records for fine-tuning your models. Clean, consistent, and ready for ingestion.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Data Refresh",
    description:
      "Keep your models current with daily, weekly, or real-time data updates from across the web.",
  },
  {
    icon: FileJson,
    title: "Structured Output",
    description:
      "JSON, Parquet, or custom formats. Data delivered in the exact schema your ML pipeline needs.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description:
      "We help you navigate data compliance. No cookies, no account bans, transparent data collection.",
  },
];

const dataSources = [
  {
    category: "Professional Data",
    sources: ["LinkedIn Profiles", "Company Information", "Job Postings", "Professional Networks"],
    icon: Brain,
  },
  {
    category: "Market Intelligence",
    sources: ["Product Listings", "Pricing Data", "Reviews & Ratings", "Competitor Analysis"],
    icon: Layers,
  },
  {
    category: "Content & Knowledge",
    sources: ["News Articles", "Research Papers", "Forum Discussions", "Documentation"],
    icon: FileJson,
  },
  {
    category: "Industry Specific",
    sources: ["Real Estate Listings", "Job Market Data", "Event Information", "Location Data"],
    icon: Database,
  },
];

const useCases = [
  {
    title: "RAG Pipeline Data",
    description:
      "Feed your Retrieval-Augmented Generation systems with fresh, structured web data for accurate, up-to-date responses.",
  },
  {
    title: "Model Fine-Tuning",
    description:
      "Large-scale datasets for domain-specific fine-tuning. Get exactly the data your model needs to specialize.",
  },
  {
    title: "Knowledge Base Construction",
    description:
      "Build comprehensive knowledge graphs from structured web data. Companies, people, relationships, and more.",
  },
  {
    title: "Competitive Intelligence",
    description:
      "Track competitors, monitor pricing changes, and analyze market trends with automated data collection.",
  },
];

export default function AILLMPage() {
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
              <Brain className="w-4 h-4 mr-2" />
              Solutions for AI/LLM Companies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Web Data for{" "}
              <span className="text-gradient">AI Training & RAG</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Fuel your AI models with high-quality, structured web data.
              Training datasets, RAG pipelines, and knowledge bases — we deliver
              the data your models need.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Discuss Your Data Needs
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
              { value: "100M+", label: "Records/Month Capacity" },
              { value: "JSON", label: "Native Format Support" },
              { value: "99%+", label: "Data Accuracy" },
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
              Why AI Teams Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Data Engineered for <span className="text-gradient">AI</span>
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
              Rich Data for <span className="text-gradient">Your Models</span>
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
              How AI Teams <span className="text-gradient">Use Our Data</span>
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
                  <div className="w-10 h-10 rounded-lg bg-mint/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
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

      {/* Scrayz API Promo */}
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
                  Self-Serve Option
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                  Scrayz LinkedIn API
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Need LinkedIn data for your AI? Try our self-serve API. Simple
                  REST endpoints, no cookies needed, start free.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Profile & Company data",
                    "Posts & Jobs API",
                    "No account bans",
                    "GDPR compliant",
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
              <div className="hidden lg:flex justify-end">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <pre className="text-sm text-white/90 font-mono">
{`GET /linkedin/profile

{
  "name": "John Doe",
  "headline": "AI Engineer",
  "company": "TechCorp",
  "location": "San Francisco",
  "connections": 500,
  ...
}`}
                  </pre>
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
              Ready to fuel your AI with quality data?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your data requirements and we'll propose a custom
              solution within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Discuss Your Data Needs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
