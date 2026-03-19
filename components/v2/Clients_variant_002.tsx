"use client";

import { motion } from "framer-motion";
import { Quote, Star, CircleDot, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I'm satisfied with the results for today, so you can add $400 setup fee to next invoice. Thank you for your hard work.",
    author: "Scott Vahey",
    role: "Owner",
    company: "Ficstar",
    platform: "StubHub Pipeline",
    avatar: "SV",
  },
  {
    quote: "Most likely no one is able to do it except you. We will see :-)",
    author: "Adrian Mayer",
    role: "Founder",
    company: "TheDataHive",
    platform: "Switzerland Real Estate APIs",
    avatar: "AM",
  },
  {
    quote:
      "Your doing a great job with the Indeed US numbers over last couple months. Thank you for your efforts. Much appreciated!",
    author: "Scott Vahey",
    role: "Owner",
    company: "Ficstar",
    platform: "Indeed Pipeline",
    avatar: "SV",
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
  slate: "#475569",
  white: "#ffffff",
};

export default function ClientsVariant002() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 1200 800">
          <path
            d="M-100 200 Q 300 100, 600 200 T 1300 200"
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 400 Q 300 300, 600 400 T 1300 400"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 600 Q 300 500, 600 600 T 1300 600"
            stroke={colors.sage}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.cream}50 0%, ${colors.white} 100%)`,
        }}
      />

      {/* Animated flowing dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint }}
          initial={{ x: -20, y: 100 + i * 150, opacity: 0 }}
          animate={{
            x: ["-5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Flow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge - Node Connection Style */}
          <span
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border-2 shadow-sm"
            style={{
              backgroundColor: colors.white,
              borderColor: colors.sage,
              color: colors.primary,
            }}
          >
            <span className="flex items-center gap-1">
              <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
              <motion.span
                className="w-6 h-0.5 rounded-full"
                style={{ backgroundColor: colors.sage }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CircleDot className="w-4 h-4" style={{ color: colors.primary }} />
            </span>
            <span>Trusted By</span>
          </span>

          {/* Title with flow connector */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span className="flex items-center justify-center gap-3 flex-wrap">
              <span style={{ color: colors.primary }}>What Our</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8" style={{ color: colors.sage }} />
              </motion.div>
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clients Say
              </span>
            </span>
          </h2>

          {/* Flow-style underline */}
          <motion.svg
            className="w-48 h-4 mx-auto mt-4"
            viewBox="0 0 200 16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.circle cx="8" cy="8" r="4" fill={colors.primary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} />
            <motion.line x1="16" y1="8" x2="90" y2="8" stroke={colors.secondary} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />
            <motion.circle cx="100" cy="8" r="4" fill={colors.secondary} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
            <motion.line x1="108" y1="8" x2="182" y2="8" stroke={colors.sage} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
            <motion.circle cx="192" cy="8" r="4" fill={colors.sage} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} />
          </motion.svg>

          {/* Description */}
          <p className="mt-6 text-lg" style={{ color: colors.slate }}>
            Real feedback from our production partnerships. These are actual quotes from client
            conversations.
          </p>
        </motion.div>

        {/* Testimonials - Node Cards */}
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
                className="relative h-full rounded-2xl p-7 border-2 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.sage + "60",
                }}
              >
                {/* Connection dot on top */}
                <div
                  className="absolute -top-2 left-8 w-4 h-4 rounded-full border-2 z-10 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: colors.white, borderColor: colors.primary }}
                />

                {/* Rotating dashed ring */}
                <motion.div
                  className="absolute top-4 left-4 w-14 h-14 rounded-full border-2 border-dashed opacity-30"
                  style={{ borderColor: colors.sage }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Quote icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                  }}
                >
                  <Quote className="w-5 h-5" style={{ color: colors.primary }} />
                </div>

                {/* Quote */}
                <p className="leading-relaxed mb-5 italic" style={{ color: colors.slate }}>
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: colors.primary, color: colors.primary }}
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: colors.primary }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm" style={{ color: colors.slate }}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Platform tag */}
                <div
                  className="mt-5 pt-5 border-t flex items-center gap-2"
                  style={{ borderColor: colors.sage + "40" }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs" style={{ color: colors.slate }}>
                    Project:{" "}
                  </span>
                  <span className="text-xs font-medium" style={{ color: colors.primary }}>
                    {testimonial.platform}
                  </span>
                </div>

                {/* Flow gradient at bottom on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms We Scrape - Flow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3
            className="text-2xl font-bold font-display mb-8 flex items-center justify-center gap-3"
            style={{ color: colors.primary }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
            Platforms We Successfully Scrape
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
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
                  className="relative px-5 py-3 rounded-full border-2 transition-all duration-300"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "50",
                  }}
                >
                  {/* Connection dot */}
                  <div
                    className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <p className="font-semibold text-sm" style={{ color: colors.primary }}>
                    {platform.name}
                  </p>
                  <p className="text-xs" style={{ color: colors.slate }}>
                    {platform.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm flex items-center justify-center gap-2" style={{ color: colors.slate }}>
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.sage }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            And 50+ more platforms including Amazon, Walmart, Glassdoor, and custom websites
          </p>
        </motion.div>
      </div>
    </section>
  );
}
