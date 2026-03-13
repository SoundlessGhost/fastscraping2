"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Fingerprint,
  RefreshCw,
  Clock,
  Users,
  Lock,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Anti-Bot Bypass Experts",
    description:
      "We reliably bypass Cloudflare, DataDome, PerimeterX, and Akamai. Most vendors give up — we solve it.",
    highlights: [
      "Cloudflare Turnstile",
      "DataDome ML Detection",
      "PerimeterX Behavioral",
    ],
  },
  {
    icon: RefreshCw,
    title: "Recurring Data Pipelines",
    description:
      "Not one-off scripts. We build infrastructure for daily, weekly, or monthly data delivery with quality checks.",
    highlights: ["Scheduled Delivery", "Auto-Adaptation", "Quality Monitoring"],
  },
  {
    icon: Fingerprint,
    title: "Stealth Browser Identity",
    description:
      "We create complete digital identities — unique fingerprints, persistent cookies, aged browser profiles. Not just IP rotation.",
    highlights: [
      "Canvas & WebGL Spoofing",
      "TLS Fingerprint Match",
      "Session Persistence",
    ],
  },
  {
    icon: Users,
    title: "Silent Backend Vendor",
    description:
      "We operate invisibly behind your brand. Your clients never know we exist. White-label partnership model.",
    highlights: ["White Label", "B2B Partnership", "Zero Attribution"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "GDPR compliant operations. Secure data delivery via API, SFTP, or S3. Encrypted pipelines end-to-end.",
    highlights: ["GDPR Compliant", "Encrypted Delivery", "Audit Ready"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-sage/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Why FastScraping
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight leading-tight">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We're not a proxy provider. We're not a simple scraping tool.
              We're your complete data extraction team — with the technical
              depth to solve what others can't.
            </p>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-2xl border border-sage/20">
                <p className="text-3xl font-bold text-primary font-display">
                  15+
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Dedicated Team Members
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-sage/20">
                <p className="text-3xl font-bold text-primary font-display">
                  24/7
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Monitoring & Support
                </p>
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-10 p-6 bg-white rounded-2xl border border-sage/20">
              <h4 className="font-semibold text-primary mb-4">
                vs Alternatives
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs Grepsr:</span>
                    <span className="text-gray-600 ml-1">
                      Limited flexibility for complex scraping workflows
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs Zyte:</span>
                    <span className="text-gray-600 ml-1">
                      API-focused tools still require engineering setup
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs In-house:</span>
                    <span className="text-gray-600 ml-1">
                      Too expensive, breaks constantly
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs Apify/PhantomBuster:</span>
                    <span className="text-gray-600 ml-1">
                      Cookie-based, ban risk
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs Bright Data:</span>
                    <span className="text-gray-600 ml-1">
                      Proxy only, still need scraper
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">vs Freelancers:</span>
                    <span className="text-gray-600 ml-1">
                      No scale, no reliability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-sage/20 shadow-soft group-hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary font-display mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {benefit.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-sage/20 text-primary text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
