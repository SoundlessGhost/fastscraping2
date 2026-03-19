"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Hexagon } from "lucide-react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Active Clients",
    sublabel: "Data-First Companies",
  },
  {
    value: 60,
    suffix: "M",
    label: "Records Daily",
    sublabel: "Ticketing Data",
  },
  {
    value: 55,
    suffix: "M",
    label: "Weekly Records",
    sublabel: "Restaurant & Pricing",
  },
  {
    value: 99.7,
    suffix: "%",
    label: "Bypass Success",
    sublabel: "Anti-Bot Systems",
  },
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

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          value % 1 !== 0 ? latest.toFixed(1) : Math.round(latest).toString();
        ref.current.textContent = formatted + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsVariant003() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background - Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.mint} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 pointer-events-none"
      >
        <Hexagon className="w-12 h-12 opacity-10" style={{ color: colors.primary }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-20 pointer-events-none"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Artistic Style */}
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
              <span style={{ color: colors.primary }}>Our Scale</span>
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
              <span style={{ color: colors.primary }}>Numbers That</span>
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
                Speak
              </span>
              {/* Organic wave underline */}
              <motion.svg
                className="absolute -bottom-4 left-0 w-full h-6"
                viewBox="0 0 120 24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M 0 12 Q 20 6, 40 12 T 80 12 T 120 12"
                  fill="none"
                  stroke={`url(#statsGradient)`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <defs>
                  <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={colors.primary} />
                    <stop offset="50%" stopColor={colors.secondary} />
                    <stop offset="100%" stopColor={colors.sage} />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>

          {/* Description with artistic accent */}
          <div className="mt-10 relative">
            <p className="text-lg" style={{ color: colors.slate }}>
              We operate production data pipelines delivering millions of records
              daily. These are real numbers from active client engagements.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid - Artistic Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div
                className="relative rounded-3xl p-8 border-2 transition-all duration-500 text-center overflow-hidden"
                style={{
                  backgroundColor: colors.white,
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
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: colors.mint }}
                />

                {/* Pulsing ring behind number */}
                <motion.div
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ border: `2px solid ${colors.sage}30` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative">
                  {/* Number with gradient on hover */}
                  <motion.div
                    className="text-5xl lg:text-6xl font-bold font-display mb-3"
                    style={{ color: colors.primary }}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ color: colors.primary }}
                  >
                    {stat.label}
                  </h3>
                  <p className="text-sm" style={{ color: colors.slate }}>
                    {stat.sublabel}
                  </p>
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

        {/* Bottom indicators - Artistic floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 flex-wrap justify-center">
            {[
              { text: "Active pipelines in 15+ countries", color: colors.primary },
              { text: "24+ months client relationships", color: colors.secondary },
              { text: "24/7 Pipeline Monitoring", color: colors.sage },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative px-5 py-3 rounded-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.cream} 100%)`,
                  border: `1px solid ${colors.sage}40`,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.mint}30, transparent)`,
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  />
                  <span style={{ color: colors.slate }}>{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
