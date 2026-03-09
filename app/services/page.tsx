"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  BarChart3,
  Smartphone,
  Code2,
  Server,
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Database,
  RefreshCw,
  FileJson,
  Cloud,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "web-scraping",
    icon: Globe,
    title: "Web Scraping Service",
    tagline: "Extract data from any website at scale",
    description:
      "We handle the complexity of web scraping so you can focus on insights. From simple data extraction to complex multi-page crawls, we deliver clean, structured data.",
    features: [
      "Any website, any complexity",
      "Anti-bot bypass included",
      "Structured JSON/CSV output",
      "Daily, weekly, or custom schedules",
      "Dedicated account manager",
      "Quality assurance checks",
    ],
    useCases: [
      "E-commerce product data",
      "News & media monitoring",
      "Market research",
      "Lead generation",
    ],
    deliveryOptions: ["REST API", "SFTP", "AWS S3", "Google Cloud Storage"],
    gradient: "from-primary to-secondary",
  },
  {
    id: "price-monitoring",
    icon: BarChart3,
    title: "Competitor Price Monitoring",
    tagline: "Real-time pricing intelligence",
    description:
      "Stay ahead of the competition with live pricing data. We monitor competitor prices across thousands of SKUs and deliver actionable insights.",
    features: [
      "Real-time price tracking",
      "Historical price trends",
      "Stock availability monitoring",
      "Promotion & discount detection",
      "MAP violation alerts",
      "Custom reporting dashboards",
    ],
    useCases: [
      "Retail pricing optimization",
      "Dynamic pricing",
      "Competitive analysis",
      "MAP compliance",
    ],
    deliveryOptions: [
      "Live dashboard",
      "API webhooks",
      "Daily reports",
      "Custom integrations",
    ],
    gradient: "from-secondary to-sage",
  },
  {
    id: "mobile-scraping",
    icon: Smartphone,
    title: "Mobile App Scraping",
    tagline: "Extract data from mobile APIs",
    description:
      "Access data from mobile-only applications and APIs. We reverse-engineer mobile app protocols to extract data that's not available on the web.",
    features: [
      "iOS & Android app support",
      "API reverse engineering",
      "Session management",
      "Rate limit handling",
      "Authentication bypass",
      "Real device simulation",
    ],
    useCases: [
      "Social media data",
      "Food delivery menus",
      "Ride-sharing data",
      "Mobile-first platforms",
    ],
    deliveryOptions: [
      "REST API",
      "Batch exports",
      "Real-time streaming",
      "Custom format",
    ],
    gradient: "from-sage to-mint",
  },
  {
    id: "scraping-api",
    icon: Code2,
    title: "Web Scraping API",
    tagline: "Your data, on-demand via API",
    description:
      "Custom REST API endpoints built for your specific data needs. Real-time access with JSON responses and comprehensive documentation.",
    features: [
      "Custom endpoints per platform",
      "Sub-second response times",
      "Rate limiting & throttling",
      "99.9% uptime SLA",
      "Comprehensive API docs",
      "SDKs for Python, Node, PHP",
    ],
    useCases: [
      "SaaS integrations",
      "Data enrichment",
      "Real-time lookups",
      "Workflow automation",
    ],
    deliveryOptions: ["REST API", "GraphQL", "Webhooks", "SDK libraries"],
    gradient: "from-mint to-primary/60",
  },
  {
    id: "enterprise-crawling",
    icon: Server,
    title: "Enterprise Web Crawling",
    tagline: "Million-record data pipelines",
    description:
      "Large-scale crawling infrastructure for enterprise needs. We build and maintain crawlers that process millions of pages with guaranteed delivery.",
    features: [
      "Distributed infrastructure",
      "Auto-scaling capacity",
      "Deduplication & validation",
      "Schema enforcement",
      "SLA guarantees",
      "Dedicated support team",
    ],
    useCases: [
      "Full domain crawls",
      "Search index building",
      "Market intelligence",
      "Data lake population",
    ],
    deliveryOptions: [
      "S3/GCS buckets",
      "Snowflake",
      "BigQuery",
      "Custom data warehouse",
    ],
    gradient: "from-primary/80 to-sage",
  },
  {
    id: "ready-made-apis",
    icon: Layers,
    title: "Ready-Made Scraping APIs",
    tagline: "Pre-built APIs for popular platforms",
    description:
      "Production-ready APIs for popular platforms. No setup required — just plug in and start receiving data immediately.",
    features: [
      "LinkedIn profiles & companies",
      "Indeed job listings",
      "Amazon products & reviews",
      "Real estate listings",
      "Restaurant menus & prices",
      "Ticketing & events data",
    ],
    useCases: [
      "Quick integrations",
      "MVP development",
      "Data enrichment",
      "Market research",
    ],
    deliveryOptions: [
      "REST API",
      "Bulk exports",
      "Scheduled delivery",
      "Real-time access",
    ],
    gradient: "from-sage to-secondary",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We understand your data requirements, target platforms, and delivery preferences.",
    icon: Clock,
  },
  {
    step: "02",
    title: "Sample Delivery",
    description:
      "Within 48-72 hours, we deliver a free sample so you can validate data quality.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Pipeline Setup",
    description:
      "We build your custom data pipeline with anti-bot bypass and quality checks.",
    icon: Database,
  },
  {
    step: "04",
    title: "Ongoing Delivery",
    description:
      "Automated data delivery on your schedule with monitoring and maintenance.",
    icon: RefreshCw,
  },
];

const techStack = [
  {
    icon: Shield,
    label: "Anti-Bot Bypass",
    desc: "Cloudflare, DataDome, PerimeterX",
  },
  { icon: FileJson, label: "Flexible Output", desc: "JSON, CSV, Parquet, XML" },
  { icon: Cloud, label: "Cloud Delivery", desc: "S3, GCS, SFTP, API" },
  {
    icon: Lock,
    label: "Enterprise Security",
    desc: "GDPR, Encryption, Audit logs",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Data Extraction{" "}
              <span className="text-gradient">Built for Scale</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              From simple web scraping to complex enterprise data pipelines. We
              handle the infrastructure, anti-bot bypass, and ongoing
              maintenance — you get clean, structured data.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact/#demo-form"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary/20 hover:border-primary transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-semibold group"
                  >
                    <span className="border-b-2 border-transparent group-hover:border-primary transition-colors">
                      Get a free sample
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-20`}
                    />
                    <div className="relative bg-white rounded-3xl p-8 border border-sage/20 shadow-soft-lg">
                      {/* Use Cases */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Use Cases
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="px-3 py-1.5 bg-sage/20 text-primary text-sm font-medium rounded-full"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Options */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Delivery Options
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.deliveryOptions.map((option) => (
                            <div
                              key={option}
                              className="flex items-center gap-2 p-3 bg-cream rounded-xl"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span className="text-sm text-gray-700">
                                {option}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-sage to-mint" />
                )}

                <div className="relative bg-white rounded-2xl p-6 border border-sage/20 shadow-soft text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage to-mint flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-primary mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              Enterprise-Grade{" "}
              <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Built with reliability and scale in mind. Our infrastructure
              handles millions of requests daily.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-cream to-white rounded-2xl p-6 border border-sage/20 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {tech.label}
                </h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
