"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Zap,
  Clock,
  Users,
  Check,
  Shield,
  Server,
  Database,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Building2,
  HelpCircle,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

// What affects pricing (factors)
const pricingFactors = [
  {
    title: "Platforms",
    description:
      "Which websites you need scraped — complexity and anti-bot level affect cost.",
  },
  {
    title: "Volume",
    description:
      "How many records you need — from thousands to millions per day.",
  },
  {
    title: "Frequency",
    description:
      "How often you need fresh data — daily, weekly, or monthly refresh cycles.",
  },
  {
    title: "Delivery",
    description:
      "How you want data delivered — REST API, SFTP, S3, CSV, Parquet, or Webhook.",
  },
];

// FAQ Items (no pricing numbers)
const faqs = [
  {
    question: "How does FastScraping pricing work?",
    answer:
      "We offer custom pricing based on your specific needs — the platform(s) you want to scrape, data volume, refresh frequency, and delivery method. We work with you to find a plan that fits your budget and goals. Contact us for a custom quote.",
  },
  {
    question: "Do you offer a trial or sample data?",
    answer:
      "Yes! We offer a trial period to prove our capabilities. We'll deliver sample data quickly so you can validate quality before committing to an ongoing contract. Reach out to discuss trial options.",
  },
  {
    question: "Are there any setup fees?",
    answer:
      "Setup fees depend on the complexity of your project — the number of platforms, data volume, and delivery requirements. We'll provide a clear breakdown during our initial consultation so there are no surprises.",
  },
  {
    question: "Can you match my current vendor's pricing?",
    answer:
      "In most cases, yes. Tell us what you're currently paying and we'll do our best to match or beat it while delivering better quality and reliability. We've replaced many failed vendors at competitive rates.",
  },
  {
    question: "What delivery formats do you support?",
    answer:
      "We deliver data via REST API (JSON), SFTP (Parquet, TSV, CSV, ZIP), Amazon S3, or Webhooks. We build recurring pipelines — daily, weekly, or monthly — not one-off jobs.",
  },
  {
    question: "What anti-bot systems can you bypass?",
    answer:
      "We reliably bypass Cloudflare, DataDome, PerimeterX (HUMAN), Akamai, and custom anti-bot systems. Our stealth browser identity technology creates unique digital fingerprints per session — not just IP rotation.",
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

export default function PricingContent() {
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
              Custom Pricing,{" "}
              <span className="text-gradient">Built for You</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Every data pipeline is different. Tell us what you need and
              we&apos;ll put together a plan that fits your budget, volume, and
              delivery requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Card — Expanded */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-3xl border border-sage/20 shadow-soft overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-8 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    FastScraping
                  </h3>
                  <p className="text-sm text-gray-500">
                    Fully Managed Data Pipelines
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                We build and maintain custom data pipelines for your exact
                needs. You tell us what data you want — we handle everything
                else. Pricing is tailored to your volume, platforms, and
                delivery requirements.
              </p>
            </div>

            {/* Features Grid */}
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Any website, any scale",
                  "Anti-bot bypass included",
                  "SFTP, API, or S3 delivery",
                  "24/7 monitoring & maintenance",
                  "Dedicated account manager",
                  "No long-term contracts",
                  "50+ internal QA checks per dataset",
                  "Month-to-month billing",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Affects Pricing */}
            <div className="px-8 pb-8">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">
                What Affects Your Price
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {pricingFactors.map((factor) => (
                  <div
                    key={factor.title}
                    className="bg-white rounded-xl p-4 border border-sage/10"
                  >
                    <p className="text-sm font-semibold text-primary mb-1">
                      {factor.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Anti-bot systems */}
            <div className="px-8 pb-8">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                Anti-Bot Systems We Bypass
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cloudflare",
                  "DataDome",
                  "PerimeterX",
                  "Akamai",
                  "CAPTCHAs",
                  "Browser Fingerprinting",
                ].map((system) => (
                  <span
                    key={system}
                    className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-primary border border-sage/20"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="px-8 pb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 py-3.5 bg-primary text-white font-semibold rounded-full text-center hover:shadow-glow transition-all"
                >
                  Get a Custom Quote
                </Link>
                <a
                  href="mailto:khalid@fastscraping.com"
                  className="flex-1 py-3.5 bg-white text-primary font-semibold rounded-full text-center border-2 border-primary/20 hover:border-primary transition-all"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA Banner */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-mint" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Let&apos;s Build Your Data Pipeline
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Tell us what data you need and we&apos;ll provide a custom quote
              within 24 hours. We can scrape virtually any website — even those
              with advanced anti-bot protection.
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
                href="mailto:khalid@fastscraping.com"
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
              What&apos;s Included
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
                  "Cloudflare, DataDome, PerimeterX, Akamai — all bypassed, included in price.",
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

      {/* Process Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              How It Works
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              From Request to{" "}
              <span className="text-gradient">Data Delivery</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our streamlined process gets you from initial consultation to
              production data in days, not weeks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Horizontal connecting lines - Row 1 */}
            <div className="hidden lg:block absolute top-[88px] left-[calc(16.67%+60px)] w-[calc(33.33%-120px)] h-1 bg-gradient-to-r from-sage to-mint" />
            <div className="hidden lg:block absolute top-[88px] left-[calc(50%+60px)] w-[calc(33.33%-120px)] h-1 bg-gradient-to-r from-sage to-mint" />

            {/* Vertical connecting line - between rows */}
            <div className="hidden lg:block absolute top-[176px] right-[calc(16.67%)] w-1 h-64 bg-gradient-to-b from-mint to-sage" />

            {/* Horizontal connecting lines - Row 2 */}
            <div className="hidden lg:block absolute top-[calc(50%+88px)] left-[calc(16.67%+60px)] w-[calc(33.33%-120px)] h-1 bg-gradient-to-r from-mint to-sage" />
            <div className="hidden lg:block absolute top-[calc(50%+88px)] left-[calc(50%+60px)] w-[calc(33.33%-120px)] h-1 bg-gradient-to-r from-mint to-sage" />

            {[
              {
                step: "01",
                title: "Share your requirements",
                description:
                  "Let us know what data you need. We'll discuss your goals, target platforms, and how you want the data delivered.",
                icon: Clock,
              },
              {
                step: "02",
                title: "Pricing & trial run",
                description:
                  "Receive a clear, transparent quote. Once confirmed, we'll run a quick test to make sure everything meets your standards.",
                icon: Zap,
              },
              {
                step: "03",
                title: "Dedicated manager assigned",
                description:
                  "You'll get a dedicated point of contact who keeps you updated and ensures your project runs smoothly.",
                icon: Users,
              },
              {
                step: "06",
                title: "Custom data delivery",
                description:
                  "Get your data exactly how you want it — via API, SFTP, S3, or email. On schedule, every time.",
                icon: RefreshCw,
              },
              {
                step: "05",
                title: "Complete data extraction",
                description:
                  "We extract your complete dataset with rigorous quality checks to ensure accuracy and reliability.",
                icon: Server,
              },
              {
                step: "04",
                title: "Sample data approval",
                description:
                  "Review your sample data and share feedback. We'll fine-tune everything before moving to full production.",
                icon: Database,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 border border-sage/20 shadow-soft text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage to-mint flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-primary mt-2 mb-2">
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
              Common <span className="text-gradient">Questions</span>
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
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Book a quick call and we&apos;ll put together a plan tailored to
              your data needs. No commitments, no pressure.
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
                href="mailto:khalid@fastscraping.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary rounded-full font-semibold hover:border-primary transition-all"
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
