"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { CircleDot, ArrowRightCircle } from "lucide-react";

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

export default function StatsVariant002() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background - Flow lines pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 1200 600">
          <path
            d="M-100 150 Q 300 50, 600 150 T 1300 150"
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 300 Q 300 200, 600 300 T 1300 300"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 450 Q 300 350, 600 450 T 1300 450"
            stroke={colors.sage}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Animated flowing dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint }}
          initial={{ x: -20, y: 100 + i * 120, opacity: 0 }}
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
            <span>Our Scale</span>
          </span>

          {/* Title with flow connector */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            <span className="flex items-center justify-center gap-4 flex-wrap">
              <span style={{ color: colors.primary }}>Numbers That</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRightCircle className="w-8 h-8" style={{ color: colors.sage }} />
              </motion.div>
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Speak
              </span>
            </span>
            {/* Flow-style underline with nodes */}
            <motion.svg
              className="w-64 h-4 mx-auto mt-4"
              viewBox="0 0 250 16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.circle
                cx="8"
                cy="8"
                r="4"
                fill={colors.primary}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.line
                x1="16"
                y1="8"
                x2="115"
                y2="8"
                stroke={colors.secondary}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
              <motion.circle
                cx="125"
                cy="8"
                r="4"
                fill={colors.secondary}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.line
                x1="133"
                y1="8"
                x2="232"
                y2="8"
                stroke={colors.sage}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              />
              <motion.circle
                cx="242"
                cy="8"
                r="4"
                fill={colors.sage}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              />
            </motion.svg>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg" style={{ color: colors.slate }}>
            We operate production data pipelines delivering millions of records
            daily. These are real numbers from active client engagements.
          </p>
        </motion.div>

        {/* Stats Grid - Node Cards Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Connection dot on top */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 group-hover:scale-125 transition-transform"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.primary,
                }}
              />

              <div
                className="relative rounded-2xl p-8 border-2 transition-all duration-300 text-center overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.sage + "60",
                }}
              >
                {/* Rotating dashed ring */}
                <motion.div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-2 border-dashed"
                  style={{ borderColor: colors.sage + "40" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Content */}
                <div className="relative pt-4">
                  {/* Number */}
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

                {/* Hover effect - flow gradient at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 8px 30px ${colors.sage}30`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicators - Connected Pills Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            {[
              { text: "Active pipelines in 15+ countries", color: colors.primary },
              { text: "24+ months client relationships", color: colors.secondary },
              { text: "24/7 Pipeline Monitoring", color: colors.sage },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.sage + "50",
                  }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  />
                  <span style={{ color: colors.slate }}>{item.text}</span>
                </div>
                {idx < 2 && (
                  <motion.div
                    className="w-4 h-0.5 mx-1"
                    style={{ backgroundColor: colors.sage }}
                    animate={{ scaleX: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
