"use client";

import { motion } from "framer-motion";
import { Quote, Star, Terminal, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I'm satisfied with the results for today, so you can add $400 setup fee to next invoice. Thank you for your hard work.",
    author: "Scott Vahey",
    role: "Owner",
    company: "Ficstar",
    platform: "StubHub Pipeline",
    avatar: "SV",
    filename: "feedback_001.ts",
  },
  {
    quote: "Most likely no one is able to do it except you. We will see :-)",
    author: "Adrian Mayer",
    role: "Founder",
    company: "TheDataHive",
    platform: "Switzerland Real Estate APIs",
    avatar: "AM",
    filename: "feedback_002.ts",
  },
  {
    quote:
      "Your doing a great job with the Indeed US numbers over last couple months. Thank you for your efforts. Much appreciated!",
    author: "Scott Vahey",
    role: "Owner",
    company: "Ficstar",
    platform: "Indeed Pipeline",
    avatar: "SV",
    filename: "feedback_003.ts",
  },
];

const platforms = [
  { name: "StubHub", category: "Ticketing" },
  { name: "SeatGeek", category: "Ticketing" },
  { name: "Indeed", category: "Job Data" },
  { name: "LinkedIn", category: "B2B Data" },
  { name: "ImmoScout24", category: "Real Estate" },
  { name: "Starbucks", category: "Restaurant" },
  { name: "McDonald's", category: "Restaurant" },
  { name: "DoorDash", category: "Restaurant" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  terminalGreen: "#059669",
  terminalYellow: "#d97706",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
  terminalBorder: "#e2e8f0",
  white: "#ffffff",
};

export default function ClientsVariant001() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
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

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.cream}50 0%, ${colors.white} 100%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge - Terminal Prompt */}
          <span
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono mb-6 border"
            style={{
              backgroundColor: colors.codeBg,
              borderColor: colors.terminalBorder,
              color: colors.primary,
            }}
          >
            <Terminal className="w-4 h-4 mr-2" style={{ color: colors.terminalGreen }} />
            <span style={{ color: colors.terminalGray }}>$</span>
            <span className="ml-2">Trusted By</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2 w-2 h-4"
              style={{ backgroundColor: colors.primary }}
            />
          </span>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span style={{ color: colors.primary }}>What Our</span>{" "}
            <span
              className="font-mono"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clients Say
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg" style={{ color: colors.terminalGray }}>
            <span className="font-mono text-sm mr-2" style={{ color: colors.terminalGreen }}>
              {"//"}
            </span>
            Real feedback from our production partnerships. These are actual quotes from client
            conversations.
          </p>
        </motion.div>

        {/* Testimonials - Terminal Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className="h-full rounded-xl overflow-hidden border-2 transition-all duration-300"
                style={{ borderColor: colors.terminalBorder }}
              >
                {/* Terminal header */}
                <div
                  className="px-4 py-2 flex items-center gap-2 border-b"
                  style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-mono" style={{ color: colors.terminalGray }}>
                    {testimonial.filename}
                  </span>
                </div>

                <div className="p-6 bg-white">
                  {/* Quote icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 border"
                    style={{ backgroundColor: colors.codeBg, borderColor: colors.terminalBorder }}
                  >
                    <Quote className="w-5 h-5" style={{ color: colors.terminalGreen }} />
                  </div>

                  {/* Quote */}
                  <p
                    className="leading-relaxed mb-5 italic font-mono text-sm"
                    style={{ color: colors.terminalGray }}
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{ fill: colors.terminalYellow, color: colors.terminalYellow }}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono text-sm border"
                      style={{
                        backgroundColor: colors.codeBg,
                        borderColor: colors.terminalBorder,
                        color: colors.terminalGreen,
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold font-mono text-sm" style={{ color: colors.primary }}>
                        {testimonial.author}
                      </p>
                      <p className="text-xs font-mono" style={{ color: colors.terminalGray }}>
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Platform tag */}
                  <div
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: colors.terminalBorder }}
                  >
                    <span className="text-xs font-mono" style={{ color: colors.terminalGray }}>
                      Project:{" "}
                    </span>
                    <span
                      className="text-xs font-mono font-medium"
                      style={{ color: colors.terminalGreen }}
                    >
                      {testimonial.platform}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms We Scrape - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3
            className="text-2xl font-bold font-mono mb-8 flex items-center justify-center gap-2"
            style={{ color: colors.primary }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: colors.terminalGreen }} />
            Platforms We Successfully Scrape
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div
                  className="px-5 py-3 rounded-lg border-2 transition-all duration-300"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.terminalBorder,
                  }}
                >
                  <p className="font-semibold font-mono text-sm" style={{ color: colors.primary }}>
                    {platform.name}
                  </p>
                  <p className="text-xs font-mono" style={{ color: colors.terminalGray }}>
                    {platform.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm font-mono" style={{ color: colors.terminalGray }}>
            <span style={{ color: colors.terminalGreen }}>{"// "}</span>
            And 50+ more platforms including Amazon, Walmart, Glassdoor, and custom websites
          </p>
        </motion.div>
      </div>
    </section>
  );
}
