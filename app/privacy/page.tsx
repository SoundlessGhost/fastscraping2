"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Settings,
  Mail,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "introduction", title: "Introduction", icon: Shield },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
  },
  { id: "how-we-use", title: "How We Use Your Information", icon: Settings },
  { id: "sharing", title: "Information Sharing", icon: Share2 },
  { id: "security", title: "Data Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: Eye },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/20 to-mint/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mint/10 to-sage/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sage to-mint mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-500">Last updated: March 9, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Table of Contents */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-32">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  On this page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-sage/10 rounded-lg transition-all group"
                    >
                      <section.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-gradient-to-br from-sage/20 to-mint/20 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-3">Have questions?</p>
                  <a
                    href="mailto:khalid@fastscraping.com"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Contact us
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 min-w-0"
            >
              <div className="bg-white rounded-3xl border border-sage/20 shadow-soft p-8 lg:p-12">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      1. Introduction
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      FastScraping ("we," "our," or "us") is committed to
                      protecting your privacy. This Privacy Policy explains how
                      we collect, use, disclose, and safeguard your information
                      when you visit our website fastscraping.com and use our
                      services.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Please read this Privacy Policy carefully. By accessing or
                      using our services, you acknowledge that you have read,
                      understood, and agree to be bound by this Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section
                  id="information-we-collect"
                  className="scroll-mt-32 mb-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      2. Information We Collect
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-cream rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        2.1 Personal Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We may collect personal information that you voluntarily
                        provide when you:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Fill out contact forms or request a demo",
                          "Subscribe to our newsletter",
                          "Create an account for our services",
                          "Communicate with us via email or other channels",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-600 leading-relaxed mt-4">
                        This information may include your name, email address,
                        company name, job title, phone number, and any other
                        information you choose to provide.
                      </p>
                    </div>

                    <div className="bg-cream rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        2.2 Usage Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We automatically collect certain information when you
                        visit our website, including:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "IP address and location data",
                          "Browser type and version",
                          "Operating system",
                          "Pages visited and time spent on pages",
                          "Referring website addresses",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section id="how-we-use" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      3. How We Use Your Information
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Provide, maintain, and improve our services",
                        "Process transactions and send related information",
                        "Send promotional communications (with your consent)",
                        "Respond to your comments, questions, and requests",
                        "Monitor and analyze trends, usage, and activities",
                        "Detect, investigate, and prevent fraudulent activities",
                        "Comply with legal obligations",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-cream rounded-xl p-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-mint/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">
                              {i + 1}
                            </span>
                          </div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Information Sharing */}
                <section id="sharing" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      4. Information Sharing
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties without your consent, except
                      in the following circumstances:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Service Providers",
                          desc: "We may share information with third-party vendors who perform services on our behalf, such as hosting, analytics, and email delivery.",
                        },
                        {
                          title: "Legal Requirements",
                          desc: "We may disclose information if required by law or in response to valid requests by public authorities.",
                        },
                        {
                          title: "Business Transfers",
                          desc: "In connection with any merger, sale of company assets, or acquisition, your information may be transferred.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-cream rounded-2xl p-5">
                          <h4 className="font-semibold text-primary mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section id="security" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      5. Data Security
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      We implement appropriate technical and organizational
                      measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or
                      destruction. However, no method of transmission over the
                      Internet or electronic storage is 100% secure, and we
                      cannot guarantee absolute security.
                    </p>
                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-sage/20">
                      <p className="text-sm text-gray-600">
                        <strong className="text-primary">
                          Our security measures include:
                        </strong>{" "}
                        SSL encryption, secure data centers, regular security
                        audits, and strict access controls for our team members.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      6. Your Rights
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Depending on your location, you may have certain rights
                      regarding your personal information:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Access your personal data",
                        "Correct inaccurate data",
                        "Delete your data",
                        "Object to processing",
                        "Data portability",
                        "Withdraw consent",
                      ].map((right, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span className="text-gray-600 text-sm">{right}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      To exercise any of these rights, please contact us using
                      the information provided below.
                    </p>
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      7. Contact Us
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-sage/20 to-mint/20 rounded-2xl p-6">
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          <strong className="text-primary">Email:</strong>{" "}
                          <a
                            href="mailto:khalid@fastscraping.com"
                            className="text-secondary hover:underline"
                          >
                            khalid@fastscraping.com
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-primary">Website:</strong>{" "}
                          <a
                            href="https://fastscraping.com"
                            className="text-secondary hover:underline"
                          >
                            fastscraping.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Related Links */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/terms"
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-sage/20 text-sm font-medium text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                  Terms of Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cookies"
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-sage/20 text-sm font-medium text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                  Cookie Policy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
