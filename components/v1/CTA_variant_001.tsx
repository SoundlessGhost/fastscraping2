"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail, Terminal, ChevronRight } from "lucide-react";

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  terminalGreen: "#059669",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
  terminalBorder: "#e2e8f0",
  white: "#ffffff",
};

export default function CTAVariant001() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {/* Background - Code Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' font-family='monospace' font-size='14' fill='%23043f34'%3E%7B%7D%3C/text%3E%3Ctext x='35' y='50' font-family='monospace' font-size='12' fill='%23043f34'%3E%3C/%3E%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative code brackets */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[10%] text-6xl font-mono pointer-events-none"
        style={{ color: colors.sage }}
      >
        {"{ }"}
      </motion.div>
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05], y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-[15%] text-4xl font-mono pointer-events-none"
        style={{ color: colors.mint }}
      >
        {"</>"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight leading-tight">
              <span style={{ color: colors.primary }}>Ready to Scale Your</span>{" "}
              <span
                className="font-mono"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Data Pipeline?
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: colors.terminalGray }}>
              <span className="font-mono text-sm mr-2" style={{ color: colors.terminalGreen }}>
                {"//"}
              </span>
              Get a free sample within 48-72 hours. We'll match or beat your
              current vendor's pricing while delivering better quality and coverage.
            </p>

            {/* Quick benefits - Terminal Style */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Calendar, text: "48-72h Sample" },
                { icon: MessageSquare, text: "Free Consultation" },
                { icon: Mail, text: "No Commitment" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg border"
                  style={{
                    backgroundColor: colors.codeBg,
                    borderColor: colors.terminalBorder,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center border"
                    style={{
                      backgroundColor: colors.white,
                      borderColor: colors.terminalBorder,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: colors.terminalGreen }} />
                  </div>
                  <span className="text-sm font-mono" style={{ color: colors.terminalGray }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card (Terminal Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-xl overflow-hidden border-2"
              style={{ borderColor: colors.terminalBorder }}
            >
              {/* Terminal header */}
              <div
                className="px-4 py-3 flex items-center gap-2 border-b"
                style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
              >
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-sm font-mono" style={{ color: colors.terminalGray }}>
                  contact.ts
                </span>
              </div>

              <div className="p-8 lg:p-10 bg-white">
                <h3
                  className="text-2xl font-bold font-mono mb-2 flex items-center gap-2"
                  style={{ color: colors.primary }}
                >
                  <Terminal className="w-6 h-6" style={{ color: colors.terminalGreen }} />
                  Let's Talk Data
                </h3>
                <p className="font-mono text-sm mb-8" style={{ color: colors.terminalGray }}>
                  <span style={{ color: colors.terminalGreen }}>{"// "}</span>
                  Tell us your target platforms and volume needs. We'll show you what's possible.
                </p>

                {/* CTA Buttons - Terminal Style */}
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center w-full px-8 py-4 font-semibold font-mono rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: colors.white,
                    }}
                  >
                    <ChevronRight className="mr-1 w-5 h-5" style={{ color: colors.mint }} />
                    Talk to Khalid — The Anti-Bot Expert
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="mailto:khalid@fastscraping.com"
                    className="group flex items-center justify-center w-full px-8 py-4 font-semibold font-mono rounded-lg text-lg border-2 transition-all duration-300"
                    style={{
                      backgroundColor: colors.codeBg,
                      borderColor: colors.terminalBorder,
                      color: colors.primary,
                    }}
                  >
                    <ChevronRight className="mr-1 w-5 h-5" style={{ color: colors.terminalGreen }} />
                    Send a Message
                    <Mail className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Trust badge */}
                <div
                  className="mt-8 pt-6 text-center border-t"
                  style={{ borderColor: colors.terminalBorder }}
                >
                  <p className="text-sm font-mono" style={{ color: colors.terminalGray }}>
                    <span style={{ color: colors.terminalGreen }}>{"// "}</span>
                    Trusted by data teams at DaaS companies, AI startups, and enterprises
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
