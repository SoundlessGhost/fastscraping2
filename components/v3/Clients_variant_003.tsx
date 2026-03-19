"use client";

import { motion } from "framer-motion";
import { Quote, Star, Hexagon } from "lucide-react";

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

export default function ClientsVariant003() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background - Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 pointer-events-none"
      >
        <Hexagon className="w-12 h-12 opacity-10" style={{ color: colors.primary }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-20 pointer-events-none"
      >
        <Hexagon className="w-8 h-8 opacity-10" style={{ color: colors.secondary }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${10 + i * 10}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.cream}50 0%, ${colors.white} 100%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Abstract Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge - Artistic with gradient */}
          <span
            className="relative inline-flex items-center px-6 py-3 rounded-2xl text-sm font-medium mb-6 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.mint}30 100%)`,
              border: `2px solid ${colors.sage}40`,
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.mint}, transparent)`,
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Hexagon className="w-5 h-5" style={{ color: colors.primary }} />
              </motion.div>
              <span style={{ color: colors.primary }}>Trusted By</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.secondary }}
              />
            </div>
          </span>

          {/* Title - Artistic Typography */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span className="relative inline-block">
              <span style={{ color: colors.primary }}>What Our</span>
              {/* Decorative dots */}
              <motion.span
                className="absolute -right-6 top-0 flex flex-col gap-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sage }} />
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.mint }} />
              </motion.span>
            </span>{" "}
            <span className="relative inline-block">
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.sage} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clients Say
              </span>
              {/* Organic wave underline */}
              <motion.svg
                className="absolute -bottom-3 left-0 w-full h-4"
                viewBox="0 0 120 16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M 0 8 Q 20 2, 40 8 T 80 8 T 120 8"
                  fill="none"
                  stroke={`url(#clientGradient)`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <defs>
                  <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={colors.primary} />
                    <stop offset="50%" stopColor={colors.secondary} />
                    <stop offset="100%" stopColor={colors.sage} />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg" style={{ color: colors.slate }}>
            Real feedback from our production partnerships. These are actual quotes from client
            conversations.
          </p>
        </motion.div>

        {/* Testimonials - Artistic Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className="relative h-full rounded-3xl p-7 border transition-all duration-500 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.white} 100%)`,
                  borderColor: colors.sage + "50",
                }}
              >
                {/* Hover gradient fill */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.mint}15 0%, transparent 100%)`,
                  }}
                />

                {/* Decorative corner blob */}
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: colors.mint }}
                />

                {/* Quote icon */}
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.sage}40 0%, ${colors.mint}40 100%)`,
                    }}
                  >
                    <Quote className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  {/* Pulsing ring on hover */}
                  <motion.div
                    className="absolute inset-0 w-12 h-12 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ border: `2px solid ${colors.sage}40` }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Quote */}
                <p className="relative leading-relaxed mb-6 italic" style={{ color: colors.slate }}>
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="relative flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: colors.primary, color: colors.primary }}
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="relative flex items-center gap-3">
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
                  className="relative mt-5 pt-5 border-t"
                  style={{ borderColor: colors.sage + "40" }}
                >
                  <span className="text-xs" style={{ color: colors.slate }}>
                    Project:{" "}
                  </span>
                  <span className="text-xs font-medium" style={{ color: colors.primary }}>
                    {testimonial.platform}
                  </span>
                </div>

                {/* Gradient bottom bar on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms We Scrape - Artistic Style */}
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
            <Hexagon className="w-5 h-5" style={{ color: colors.secondary }} />
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
                  className="relative px-5 py-3 rounded-2xl border transition-all duration-300 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                    borderColor: colors.sage + "40",
                  }}
                >
                  {/* Hover shimmer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.mint}30, transparent)`,
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="relative font-semibold text-sm" style={{ color: colors.primary }}>
                    {platform.name}
                  </p>
                  <p className="relative text-xs" style={{ color: colors.slate }}>
                    {platform.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm flex items-center justify-center gap-2" style={{ color: colors.slate }}>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.sage }}
            />
            And 50+ more platforms including Amazon, Walmart, Glassdoor, and custom websites
          </p>
        </motion.div>
      </div>
    </section>
  );
}
