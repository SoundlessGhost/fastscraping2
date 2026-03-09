"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Building2,
  Users,
  Server,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Shield,
  Clock,
  Database,
  Globe,
  Code,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Scrayz API Pricing Tiers
const scrayzPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try before you buy",
    calls: "20 calls/day",
    features: [
      "LinkedIn Profile API",
      "LinkedIn Company API",
      "Basic support",
      "API documentation",
    ],
    notIncluded: ["Posts API", "Jobs API", "Priority support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For individual developers",
    calls: "1,000 calls/month",
    features: [
      "LinkedIn Profile API",
      "LinkedIn Company API",
      "LinkedIn Posts API",
      "Email support",
      "API documentation",
    ],
    notIncluded: ["Jobs API", "Priority support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For growing teams",
    calls: "10,000 calls/month",
    features: [
      "All Starter features",
      "LinkedIn Jobs API",
      "Faster rate limits",
      "Priority email support",
    ],
    notIncluded: [],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "$199",
    period: "/month",
    description: "For scaling products",
    calls: "100,000 calls/month",
    features: [
      "All Growth features",
      "Dedicated support",
      "Custom rate limits",
      "SLA guarantee",
    ],
    notIncluded: [],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "$999",
    period: "/month",
    description: "For high-volume needs",
    calls: "1,000,000 calls/month",
    features: [
      "All Scale features",
      "Account manager",
      "Custom integrations",
      "Invoice billing",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

// FastScraping Enterprise Examples
const enterpriseExamples = [
  {
    platform: "Ticketing Platforms",
    examples: "StubHub, SeatGeek, TickPick, Vivid Seats",
    price: "$1,800",
    period: "/month per platform",
    volume: "Up to 60M records/daily",
    features: [
      "Real-time event pricing",
      "Seat availability data",
      "Historical price trends",
      "SFTP or API delivery",
    ],
    icon: Zap,
  },
  {
    platform: "Job Boards",
    examples: "Indeed, LinkedIn Jobs, Glassdoor",
    price: "$500",
    period: "/month (5 countries)",
    volume: "1.4M+ jobs/week",
    features: [
      "Multi-country coverage",
      "Daily refresh cycles",
      "Cloudflare bypass included",
      "Structured JSON/CSV",
    ],
    icon: Globe,
  },
  {
    platform: "Real Estate",
    examples: "Zillow, Redfin, ImmoScout24",
    price: "$3,000",
    period: "/month",
    volume: "2M+ listings/month",
    features: [
      "Property details & pricing",
      "Agent information",
      "Custom REST APIs",
      "DataDome bypass included",
    ],
    icon: Building2,
  },
  {
    platform: "E-commerce & Pricing",
    examples: "Amazon, Walmart, Target",
    price: "Custom",
    period: "based on volume",
    volume: "Millions of SKUs",
    features: [
      "Product details & pricing",
      "Stock availability",
      "Review aggregation",
      "Competitor monitoring",
    ],
    icon: Database,
  },
];

// FAQ Items
const faqs = [
  {
    question: "How does FastScraping pricing work?",
    answer:
      "FastScraping offers custom enterprise pricing based on your specific needs — the platform(s) you want to scrape, data volume, refresh frequency, and delivery method. We typically charge a monthly retainer plus setup fees. Contact us for a custom quote.",
  },
  {
    question: "What's the difference between FastScraping and Scrayz?",
    answer:
      "FastScraping is our fully managed enterprise service — we build and maintain custom data pipelines for you. Scrayz is our self-serve LinkedIn API product with simple pay-as-you-go pricing. Choose FastScraping for complex, large-scale needs; choose Scrayz for LinkedIn data with a simple API.",
  },
  {
    question: "Do you offer a trial or sample data?",
    answer:
      "Yes! We offer a 1-week trial at $800 to prove our capabilities. We'll deliver sample data within 48-72 hours so you can validate quality before committing to a monthly contract.",
  },
  {
    question: "What are the setup fees?",
    answer:
      "Setup fees typically range from $400-$800 depending on complexity. This covers initial pipeline development, anti-bot bypass configuration, and delivery setup. Complex projects with multiple platforms may have higher setup costs.",
  },
  {
    question: "Can you match my current vendor's pricing?",
    answer:
      "In most cases, yes. Tell us what you're currently paying and we'll do our best to match or beat it while delivering better quality and reliability. We've replaced many failed vendors at competitive rates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept wire transfers, PayPal, and can set up invoice billing for enterprise clients. Scrayz API payments are processed via Stripe (credit cards).",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "No long-term contracts required. We offer month-to-month billing for most clients. However, we find that most clients stay with us for 12+ months because our pipelines just work.",
  },
  {
    question: "What's included in the monthly price?",
    answer:
      "Everything: pipeline maintenance, anti-bot bypass updates, monitoring, data delivery, and support. If a platform changes their anti-bot system, we handle it at no extra cost.",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Choose Scrayz for self-serve LinkedIn API access, or FastScraping
              for fully managed enterprise data pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Products Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-sage/20 shadow-soft">
              <a
                href="#scrayz"
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-primary text-white"
              >
                Scrayz API (Self-Serve)
              </a>
              <a
                href="#enterprise"
                className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                FastScraping (Enterprise)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scrayz API Pricing */}
      <section id="scrayz" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/20 rounded-full mb-6">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Scrayz API</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              LinkedIn API — <span className="text-gradient">Self-Serve</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Simple REST API for LinkedIn data. No cookies, no account bans,
              GDPR compliant. Start free and scale as you grow.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {scrayzPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-cream rounded-2xl p-6 border ${
                  plan.popular
                    ? "border-primary shadow-soft-lg ring-2 ring-primary/20"
                    : "border-sage/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-secondary font-medium mt-2">
                    {plan.calls}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={
                    plan.name === "Business" ? "/contact" : "https://scrayz.com"
                  }
                  className={`block w-full py-2.5 px-4 rounded-full text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:shadow-glow"
                      : "bg-white text-primary border border-primary/20 hover:border-primary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-gray-500"
          >
            Need unlimited calls?{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact us for custom pricing →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* FastScraping Enterprise Pricing */}
      <section id="enterprise" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                FastScraping Enterprise
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Fully Managed{" "}
              <span className="text-gradient">Data Pipelines</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Custom pricing based on your needs. Here are some examples of what
              our clients pay for production data pipelines.
            </p>
          </motion.div>

          {/* Enterprise Pricing Examples */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {enterpriseExamples.map((example, index) => (
              <motion.div
                key={example.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-sage/20 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center flex-shrink-0">
                    <example.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {example.platform}
                    </h3>
                    <p className="text-sm text-gray-500">{example.examples}</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">
                    {example.price}
                  </span>
                  <span className="text-gray-500">{example.period}</span>
                </div>
                <p className="text-secondary text-sm font-medium mb-6">
                  {example.volume}
                </p>

                <div className="space-y-2">
                  {example.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-mint" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need a Custom Data Pipeline?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Tell us what data you need and we'll provide a custom quote within
              24 hours. We can scrape virtually any website — even those with
              advanced anti-bot protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:hello@fastscraping.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              What's Included
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Everything You Need,{" "}
              <span className="text-gradient">Nothing Hidden</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Anti-Bot Bypass",
                description:
                  "Cloudflare, DataDome, PerimeterX — all bypassed, included in price.",
              },
              {
                icon: Server,
                title: "Infrastructure",
                description:
                  "We handle proxies, browsers, servers. No infrastructure for you to manage.",
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description:
                  "We monitor pipelines around the clock. Issues fixed before you notice.",
              },
              {
                icon: MessageSquare,
                title: "Dedicated Support",
                description:
                  "Direct access to our team. No ticket queues, no chatbots.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary tracking-tight">
              Pricing <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-sage/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Book a Demo
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
