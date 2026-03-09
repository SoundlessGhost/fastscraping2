"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600">
              Last updated: March 9, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-sage/20 shadow-soft prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-primary mt-0">1. Introduction</h2>
            <p className="text-gray-600">
              FastScraping ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fastscraping.com and use our services.
            </p>
            <p className="text-gray-600">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-primary">2.1 Personal Information</h3>
            <p className="text-gray-600">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="text-gray-600">
              <li>Fill out contact forms or request a demo</li>
              <li>Subscribe to our newsletter</li>
              <li>Create an account for our services</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p className="text-gray-600">
              This information may include your name, email address, company name, job title, phone number, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-primary">2.2 Usage Information</h3>
            <p className="text-gray-600">
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul className="text-gray-600">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">4. Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="text-gray-600">
              <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., hosting, analytics, payment processing).</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets.</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">5. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Data Retention</h2>
            <p className="text-gray-600">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Your Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="text-gray-600">
              <li>Access and receive a copy of your data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600">
              To exercise these rights, please contact us at <a href="mailto:hello@fastscraping.com" className="text-primary hover:underline">hello@fastscraping.com</a>.
            </p>

            <h2 className="text-2xl font-bold text-primary">8. GDPR Compliance</h2>
            <p className="text-gray-600">
              For users in the European Economic Area (EEA), we process personal data in compliance with the General Data Protection Regulation (GDPR). Our legal bases for processing include consent, contractual necessity, and legitimate interests.
            </p>

            <h2 className="text-2xl font-bold text-primary">9. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold text-primary">10. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-primary">11. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>FastScraping</strong><br />
              Email: <a href="mailto:hello@fastscraping.com" className="text-primary hover:underline">hello@fastscraping.com</a><br />
              Website: <a href="https://fastscraping.com" className="text-primary hover:underline">fastscraping.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
