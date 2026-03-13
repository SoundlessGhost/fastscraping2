"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Zap,
  Mail,
  Send,
  User,
  Clock,
  Globe,
  MapPin,
  Calendar,
  Linkedin,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "khalid@fastscraping.com",
    link: "mailto:khalid@fastscraping.com",
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "See FastScraping in action",
    value: "Schedule a 30-min call",
    link: "#demo-form",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team",
    value: "Available Mon-Fri",
    link: "#",
  },
];

const faqs = [
  {
    question: "How quickly can you start a new pipeline?",
    answer:
      "Most pipelines are up and running within 48-72 hours. Complex anti-bot bypasses may take up to a week for initial setup.",
  },
  {
    question: "Do you offer a trial period?",
    answer:
      "Yes! We offer a 1-week trial at $800 to prove our capabilities before you commit to a monthly contract.",
  },
  {
    question: "What platforms can you scrape?",
    answer:
      "We can scrape virtually any website including those protected by Cloudflare, DataDome, PerimeterX, and Akamai. Popular platforms include LinkedIn, Indeed, Ticketing sites, Real Estate portals, and more.",
  },
  {
    question: "How do you deliver the data?",
    answer:
      "We support multiple delivery methods: SFTP (Parquet/TSV/CSV), REST API (JSON), AWS S3, or custom integrations based on your needs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Absolutely! All our clients get dedicated support. We monitor pipelines 24/7 and fix any issues proactively.",
  },
];

const benefits = [
  "Free consultation call",
  "Custom pipeline assessment",
  "Sample data delivery in 48-72 hours",
  "No commitment required",
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    website: "",
    message: "",
    dataNeeds: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get Started
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              Let's Build Your{" "}
              <span className="text-gradient">Data Pipeline</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Tell us what data you need. We'll show you how we can deliver it —
              reliably, at scale, without the headaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-sage/20 shadow-soft hover:shadow-soft-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {method.description}
                    </p>
                    <p className="text-secondary font-medium">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="demo-form" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-sage/20 shadow-soft-lg">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3 font-display">
                    Book a Free Demo
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form and we'll get back to you within 24 hours
                    with a custom solution for your data needs.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-mint/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We've received your message. Our team will reach out
                      within 24 hours to schedule your demo.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company & Role Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Role
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                          >
                            <option value="">Select role</option>
                            <option value="cto">CTO / VP Engineering</option>
                            <option value="head-data">Head of Data</option>
                            <option value="data-engineer">Data Engineer</option>
                            <option value="product">Product Manager</option>
                            <option value="founder">Founder / CEO</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Website to Scrape */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website(s) you want to scrape
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="e.g., linkedin.com, indeed.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Data Needs */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What data do you need?
                      </label>
                      <select
                        name="dataNeeds"
                        value={formData.dataNeeds}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select data type</option>
                        <option value="linkedin">
                          LinkedIn Profiles/Companies
                        </option>
                        <option value="jobs">
                          Job Listings (Indeed, LinkedIn, etc.)
                        </option>
                        <option value="ecommerce">
                          E-commerce/Product Data
                        </option>
                        <option value="real-estate">
                          Real Estate Listings
                        </option>
                        <option value="ticketing">Ticketing/Events Data</option>
                        <option value="pricing">Competitor Pricing</option>
                        <option value="reviews">Reviews & Ratings</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us more about your project
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How many records do you need? How often? Any specific challenges you're facing?"
                        className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-primary text-white rounded-xl font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request Demo
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      By submitting, you agree to our{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Side - Benefits & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              {/* What You Get */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-6">
                  What you'll get:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-mint/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-mint" />
                  <h3 className="text-xl font-bold">Why FastScraping?</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-mint">48-72h</div>
                    <div className="text-white/70 text-sm">Pipeline Setup</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">100M+</div>
                    <div className="text-white/70 text-sm">Records/Month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">0</div>
                    <div className="text-white/70 text-sm">Account Bans</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-mint">15+</div>
                    <div className="text-white/70 text-sm">
                      Months Avg. Partnership
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-cream rounded-2xl p-6 border border-sage/20">
                <h4 className="font-bold text-primary mb-4">
                  Prefer to reach out directly?
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:khalid@fastscraping.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    khalid@fastscraping.com
                  </a>
                  <a
                    href="https://linkedin.com/in/md-khalid-mahmud-shawon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    Bangladesh (Serving clients globally)
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    Response within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
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
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-6 border border-sage/20"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:khalid@fastscraping.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Email us directly
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-grid opacity-30" />

        {/* Decorative elements */}
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-sage/20 rounded-3xl" />
        <div className="absolute bottom-10 left-[15%] w-20 h-20 bg-mint/30 rounded-2xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-display">
              Ready to automate your data extraction?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join companies like Ficstar, TheDataHive, and Jesse Infotech who
              trust FastScraping for their critical data pipelines.
            </p>
            <a
              href="#demo-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
