"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
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
              Terms of Service
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
            <h2 className="text-2xl font-bold text-primary mt-0">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and FastScraping ("Company," "we," "us," or "our") concerning your access to and use of the fastscraping.com website and our web scraping and data extraction services (collectively, the "Services").
            </p>
            <p className="text-gray-600">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. Description of Services</h2>
            <p className="text-gray-600">
              FastScraping provides web scraping, data extraction, and data pipeline services. Our Services include:
            </p>
            <ul className="text-gray-600">
              <li>Custom web scraping solutions</li>
              <li>Data extraction from various websites and platforms</li>
              <li>Data delivery via SFTP, REST API, or other methods</li>
              <li>LinkedIn data via our Scrayz API product</li>
              <li>Anti-bot bypass solutions</li>
              <li>Ongoing pipeline maintenance and support</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. Eligibility</h2>
            <p className="text-gray-600">
              You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h2 className="text-2xl font-bold text-primary">4. Account Registration</h2>
            <p className="text-gray-600">
              To access certain features of our Services, you may be required to create an account. You agree to:
            </p>
            <ul className="text-gray-600">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">5. Use of Services</h2>
            
            <h3 className="text-xl font-semibold text-primary">5.1 Permitted Use</h3>
            <p className="text-gray-600">
              You may use our Services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of data obtained through our Services complies with all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold text-primary">5.2 Prohibited Use</h3>
            <p className="text-gray-600">
              You agree not to use our Services to:
            </p>
            <ul className="text-gray-600">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights of third parties</li>
              <li>Collect personal data in violation of privacy laws</li>
              <li>Engage in any activity that could harm our systems or other users</li>
              <li>Resell or redistribute our Services without authorization</li>
              <li>Use data for spam, harassment, or malicious purposes</li>
              <li>Circumvent any security measures we implement</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">6. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-primary">6.1 Pricing</h3>
            <p className="text-gray-600">
              Pricing for our Services is provided on a custom basis or as displayed on our website for self-serve products (e.g., Scrayz API). All prices are in US Dollars unless otherwise specified.
            </p>

            <h3 className="text-xl font-semibold text-primary">6.2 Payment</h3>
            <p className="text-gray-600">
              Payment is due as specified in your service agreement or at the time of purchase for self-serve products. We accept payment via wire transfer, PayPal, and credit cards (via Stripe).
            </p>

            <h3 className="text-xl font-semibold text-primary">6.3 Refunds</h3>
            <p className="text-gray-600">
              Refunds are handled on a case-by-case basis. Setup fees are generally non-refundable. Monthly service fees may be prorated upon termination.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Data Ownership and Usage</h2>
            
            <h3 className="text-xl font-semibold text-primary">7.1 Data Extracted</h3>
            <p className="text-gray-600">
              Data extracted through our Services is delivered to you for your use in accordance with applicable laws. We do not claim ownership of data we extract on your behalf.
            </p>

            <h3 className="text-xl font-semibold text-primary">7.2 Compliance</h3>
            <p className="text-gray-600">
              You are solely responsible for ensuring that your collection, storage, and use of data complies with all applicable laws, including data protection regulations (e.g., GDPR, CCPA).
            </p>

            <h2 className="text-2xl font-bold text-primary">8. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, features, and functionality of our Services, including but not limited to software, designs, text, graphics, and logos, are owned by FastScraping and are protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-primary">9. Confidentiality</h2>
            <p className="text-gray-600">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This includes technical information, business strategies, and client data.
            </p>

            <h2 className="text-2xl font-bold text-primary">10. Limitation of Liability</h2>
            <p className="text-gray-600">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FASTSCRAPING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY.
            </p>
            <p className="text-gray-600">
              Our total liability for any claims arising from or related to these Terms or our Services shall not exceed the total amount paid by you to us in the twelve (12) months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-primary">11. Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600">
              We do not guarantee that our Services will be uninterrupted, secure, or error-free, or that any data obtained will be accurate or complete.
            </p>

            <h2 className="text-2xl font-bold text-primary">12. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless FastScraping and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our Services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary">13. Termination</h2>
            <p className="text-gray-600">
              We may terminate or suspend your access to our Services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our Services will cease immediately.
            </p>

            <h2 className="text-2xl font-bold text-primary">14. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through arbitration or in the courts of Bangladesh.
            </p>

            <h2 className="text-2xl font-bold text-primary">15. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary">16. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-primary">17. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at:
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
