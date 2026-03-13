"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cookie,
  Info,
  Settings,
  Users,
  ToggleRight,
  Mail,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies?", icon: Cookie },
  { id: "how-we-use", title: "How We Use Cookies", icon: Info },
  { id: "types", title: "Types of Cookies", icon: Settings },
  { id: "third-party", title: "Third-Party Cookies", icon: Users },
  { id: "manage", title: "Managing Cookies", icon: ToggleRight },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const cookieTypes = [
  {
    name: "_session",
    type: "Essential",
    typeColor: "bg-green-100 text-green-700",
    purpose: "Maintains user session",
    duration: "Session",
  },
  {
    name: "_ga",
    type: "Analytics",
    typeColor: "bg-blue-100 text-blue-700",
    purpose: "Google Analytics - distinguishes users",
    duration: "2 years",
  },
  {
    name: "_gid",
    type: "Analytics",
    typeColor: "bg-blue-100 text-blue-700",
    purpose: "Google Analytics - distinguishes users",
    duration: "24 hours",
  },
  {
    name: "_gat",
    type: "Analytics",
    typeColor: "bg-blue-100 text-blue-700",
    purpose: "Google Analytics - throttles request rate",
    duration: "1 minute",
  },
  {
    name: "cookie_consent",
    type: "Essential",
    typeColor: "bg-green-100 text-green-700",
    purpose: "Stores your cookie preferences",
    duration: "1 year",
  },
];

export default function CookiePolicyPage() {
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
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary tracking-tight">
              Cookie Policy
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
                {/* What Are Cookies */}
                <section id="what-are-cookies" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      1. What Are Cookies?
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      Cookies are small text files that are stored on your
                      device (computer, tablet, or mobile) when you visit a
                      website. They are widely used to make websites work more
                      efficiently, provide a better user experience, and give
                      website owners information about how their site is being
                      used.
                    </p>
                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-sage/20">
                      <p className="text-sm text-gray-600">
                        <strong className="text-primary">Good to know:</strong>{" "}
                        Cookies cannot harm your device, and they do not contain
                        any personal information like your name or payment
                        details.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How We Use Cookies */}
                <section id="how-we-use" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      2. How We Use Cookies
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      FastScraping uses cookies and similar technologies for the
                      following purposes:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Essential Cookies",
                          desc: "These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to your actions, such as setting your privacy preferences, logging in, or filling in forms.",
                          color: "bg-green-50 border-green-200",
                        },
                        {
                          title: "Analytics Cookies",
                          desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
                          color: "bg-blue-50 border-blue-200",
                        },
                        {
                          title: "Functional Cookies",
                          desc: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
                          color: "bg-purple-50 border-purple-200",
                        },
                        {
                          title: "Marketing Cookies",
                          desc: "These cookies may be used to track visitors across websites to display relevant advertisements. We currently do not use marketing cookies, but we may in the future.",
                          color: "bg-orange-50 border-orange-200",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`rounded-2xl p-5 border ${item.color}`}
                        >
                          <h4 className="font-semibold text-primary mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Types of Cookies We Use */}
                <section id="types" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      3. Types of Cookies We Use
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Here is a detailed list of the cookies we use on our
                      website:
                    </p>

                    {/* Cookie Table */}
                    <div className="overflow-x-auto">
                      <div className="bg-cream rounded-2xl p-1 min-w-[600px]">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-white rounded-xl">
                              <th className="text-left py-4 px-4 text-sm font-semibold text-primary rounded-l-xl">
                                Cookie Name
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-primary">
                                Type
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-primary">
                                Purpose
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-primary rounded-r-xl">
                                Duration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cookieTypes.map((cookie, i) => (
                              <tr key={i} className="border-t border-sage/10">
                                <td className="py-4 px-4">
                                  <code className="text-sm bg-white px-2 py-1 rounded text-primary">
                                    {cookie.name}
                                  </code>
                                </td>
                                <td className="py-4 px-4">
                                  <span
                                    className={`text-xs font-medium px-2 py-1 rounded-full ${cookie.typeColor}`}
                                  >
                                    {cookie.type}
                                  </span>
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-600">
                                  {cookie.purpose}
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-500">
                                  {cookie.duration}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section id="third-party" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      4. Third-Party Cookies
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      In addition to our own cookies, we may also use various
                      third-party cookies to report usage statistics, deliver
                      advertisements, and so on. These third parties include:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Google Analytics",
                          purpose: "Website analytics and usage tracking",
                          link: "https://policies.google.com/privacy",
                        },
                        {
                          name: "Cloudflare",
                          purpose: "Security and performance optimization",
                          link: "https://www.cloudflare.com/privacypolicy/",
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-cream rounded-2xl p-5">
                          <h4 className="font-semibold text-primary mb-2">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            {item.purpose}
                          </p>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-secondary hover:underline inline-flex items-center gap-1"
                          >
                            Privacy Policy
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Managing Cookies */}
                <section id="manage" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <ToggleRight className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      5. Managing Cookies
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You can control and manage cookies in various ways. Please
                      note that removing or blocking cookies may impact your
                      user experience and some functionality may no longer be
                      available.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-cream rounded-2xl p-6">
                        <h4 className="font-semibold text-primary mb-3">
                          Browser Settings
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Most browsers allow you to control cookies through
                          their settings. Here are links to manage cookies in
                          popular browsers:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            {
                              name: "Chrome",
                              url: "https://support.google.com/chrome/answer/95647",
                            },
                            {
                              name: "Firefox",
                              url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
                            },
                            {
                              name: "Safari",
                              url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
                            },
                            {
                              name: "Edge",
                              url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                            },
                          ].map((browser, i) => (
                            <a
                              key={i}
                              href={browser.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-primary border border-sage/20 hover:border-primary/30 transition-all"
                            >
                              {browser.name}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200">
                        <p className="text-sm text-gray-700">
                          <strong className="text-amber-700">
                            Please note:
                          </strong>{" "}
                          If you disable cookies, some features of our website
                          may not function properly, and your user experience
                          may be affected.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      6. Contact Us
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you have any questions about our use of cookies, please
                      contact us:
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
                  href="/terms"
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-sage/20 text-sm font-medium text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                  Terms of Service
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
