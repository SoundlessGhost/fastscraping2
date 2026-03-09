"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
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
              Cookie Policy
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
            <h2 className="text-2xl font-bold text-primary mt-0">1. What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. How We Use Cookies</h2>
            <p className="text-gray-600">
              FastScraping uses cookies and similar technologies for the following purposes:
            </p>
            <ul className="text-gray-600">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to your actions, such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
              <li><strong>Marketing Cookies:</strong> These cookies may be used to track visitors across websites to display relevant advertisements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. Types of Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-sage/30 rounded-lg overflow-hidden">
                <thead className="bg-sage/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-primary font-semibold">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-primary font-semibold">Type</th>
                    <th className="px-4 py-3 text-left text-primary font-semibold">Purpose</th>
                    <th className="px-4 py-3 text-left text-primary font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage/20">
                  <tr>
                    <td className="px-4 py-3 text-gray-600">_session</td>
                    <td className="px-4 py-3 text-gray-600">Essential</td>
                    <td className="px-4 py-3 text-gray-600">Maintains user session</td>
                    <td className="px-4 py-3 text-gray-600">Session</td>
                  </tr>
                  <tr className="bg-cream/50">
                    <td className="px-4 py-3 text-gray-600">_ga</td>
                    <td className="px-4 py-3 text-gray-600">Analytics</td>
                    <td className="px-4 py-3 text-gray-600">Google Analytics - distinguishes users</td>
                    <td className="px-4 py-3 text-gray-600">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">_gid</td>
                    <td className="px-4 py-3 text-gray-600">Analytics</td>
                    <td className="px-4 py-3 text-gray-600">Google Analytics - distinguishes users</td>
                    <td className="px-4 py-3 text-gray-600">24 hours</td>
                  </tr>
                  <tr className="bg-cream/50">
                    <td className="px-4 py-3 text-gray-600">_gat</td>
                    <td className="px-4 py-3 text-gray-600">Analytics</td>
                    <td className="px-4 py-3 text-gray-600">Google Analytics - throttles request rate</td>
                    <td className="px-4 py-3 text-gray-600">1 minute</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">cookie_consent</td>
                    <td className="px-4 py-3 text-gray-600">Essential</td>
                    <td className="px-4 py-3 text-gray-600">Stores your cookie preferences</td>
                    <td className="px-4 py-3 text-gray-600">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-primary">4. Third-Party Cookies</h2>
            <p className="text-gray-600">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These third parties include:
            </p>
            <ul className="text-gray-600">
              <li><strong>Google Analytics:</strong> For website traffic analysis and reporting</li>
              <li><strong>Google Tag Manager:</strong> For managing website tags</li>
              <li><strong>LinkedIn Insight Tag:</strong> For conversion tracking and retargeting</li>
              <li><strong>Stripe:</strong> For secure payment processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">5. Managing Cookies</h2>
            <p className="text-gray-600">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in the following ways:
            </p>
            
            <h3 className="text-xl font-semibold text-primary">5.1 Browser Settings</h3>
            <p className="text-gray-600">
              Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser. The following links provide information on how to manage cookies in popular browsers:
            </p>
            <ul className="text-gray-600">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-primary">5.2 Opt-Out Tools</h3>
            <p className="text-gray-600">
              You can also opt out of certain third-party cookies:
            </p>
            <ul className="text-gray-600">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Opt-out</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">6. Impact of Disabling Cookies</h2>
            <p className="text-gray-600">
              Please note that if you choose to disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled as they are necessary for the basic operation of the website.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices.
            </p>

            <h2 className="text-2xl font-bold text-primary">8. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>FastScraping</strong><br />
              Email: <a href="mailto:hello@fastscraping.com" className="text-primary hover:underline">hello@fastscraping.com</a><br />
              Website: <a href="https://fastscraping.com" className="text-primary hover:underline">fastscraping.com</a>
            </p>

            <h2 className="text-2xl font-bold text-primary">9. More Information</h2>
            <p className="text-gray-600">
              For more information about cookies and how they are used, you can visit:
            </p>
            <ul className="text-gray-600">
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
              <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (EU)</a></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
