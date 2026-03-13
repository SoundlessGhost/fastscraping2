"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Scale,
  CreditCard,
  XCircle,
  Globe,
  Mail,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "agreement", title: "Agreement to Terms", icon: FileText },
  { id: "services", title: "Description of Services", icon: Globe },
  { id: "eligibility", title: "Eligibility", icon: CheckCircle },
  { id: "use-of-services", title: "Use of Services", icon: Scale },
  { id: "payment", title: "Payment Terms", icon: CreditCard },
  { id: "termination", title: "Termination", icon: XCircle },
  { id: "limitation", title: "Limitation of Liability", icon: AlertTriangle },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function TermsOfServicePage() {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary tracking-tight">
              Terms of Service
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
                {/* Agreement to Terms */}
                <section id="agreement" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      1. Agreement to Terms
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      These Terms of Service ("Terms") constitute a legally
                      binding agreement between you and FastScraping ("Company,"
                      "we," "us," or "our") concerning your access to and use of
                      the fastscraping.com website and our web scraping and data
                      extraction services (collectively, the "Services").
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      By accessing or using our Services, you agree to be bound
                      by these Terms. If you do not agree to these Terms, you
                      must not access or use our Services.
                    </p>
                  </div>
                </section>

                {/* Description of Services */}
                <section id="services" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      2. Description of Services
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      FastScraping provides web scraping, data extraction, and
                      data pipeline services. Our Services include:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Custom web scraping solutions",
                        "Data extraction from websites and platforms",
                        "Data delivery via SFTP, REST API, or other methods",
                        "LinkedIn data via our Scrayz API product",
                        "Anti-bot bypass solutions",
                        "Ongoing pipeline maintenance and support",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      3. Eligibility
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      You must be at least 18 years old and have the legal
                      capacity to enter into a binding agreement to use our
                      Services. By using our Services, you represent and warrant
                      that you meet these eligibility requirements.
                    </p>
                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-sage/20">
                      <p className="text-sm text-gray-600">
                        <strong className="text-primary">Business Use:</strong>{" "}
                        If you are using our Services on behalf of a company or
                        organization, you represent that you have the authority
                        to bind that entity to these Terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Use of Services */}
                <section id="use-of-services" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      4. Use of Services
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-cream rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        4.1 Permitted Use
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        You may use our Services only for lawful purposes and in
                        accordance with these Terms. You are responsible for
                        ensuring that your use of data obtained through our
                        Services complies with all applicable laws and
                        regulations.
                      </p>
                    </div>

                    <div className="bg-cream rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        4.2 Prohibited Use
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        You agree not to use our Services to:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Violate any applicable laws or regulations",
                          "Infringe on intellectual property rights of third parties",
                          "Collect personal data in violation of privacy laws",
                          "Engage in any activity that could harm our systems or other users",
                          "Resell or redistribute our Services without authorization",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Payment Terms */}
                <section id="payment" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      5. Payment Terms
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <div className="space-y-4">
                      {[
                        {
                          title: "Pricing",
                          desc: "Pricing for our Services is provided on a custom basis and will be outlined in a separate agreement or quote.",
                        },
                        {
                          title: "Payment Methods",
                          desc: "We accept wire transfers, PayPal, and credit card payments (via Stripe for Scrayz API).",
                        },
                        {
                          title: "Invoicing",
                          desc: "For enterprise clients, we offer monthly invoicing with payment due within 30 days of invoice date.",
                        },
                        {
                          title: "Refunds",
                          desc: "Refunds are handled on a case-by-case basis. Please contact us if you are unsatisfied with our Services.",
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

                {/* Termination */}
                <section id="termination" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      6. Termination
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      We may terminate or suspend your access to our Services
                      immediately, without prior notice or liability, for any
                      reason, including if you breach these Terms. Upon
                      termination, your right to use the Services will
                      immediately cease.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      You may also terminate your account at any time by
                      contacting us. No refunds will be provided for any prepaid
                      amounts upon termination unless otherwise agreed in
                      writing.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      7. Limitation of Liability
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                      <p className="text-gray-700 text-sm">
                        To the maximum extent permitted by law, FastScraping
                        shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, or any loss
                        of profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses.
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Our total liability for any claims arising from or related
                      to these Terms or our Services shall not exceed the amount
                      you paid us in the twelve (12) months preceding the claim.
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
                      8. Contact Us
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you have any questions about these Terms of Service,
                      please contact us:
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
                  href="/privacy"
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-sage/20 text-sm font-medium text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                  Privacy Policy
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
