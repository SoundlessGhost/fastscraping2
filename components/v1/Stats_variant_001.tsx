"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Terminal, ChevronRight, Activity } from "lucide-react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Active Clients",
    sublabel: "Data-First Companies",
    filename: "clients.ts",
  },
  {
    value: 60,
    suffix: "M",
    label: "Records Daily",
    sublabel: "Ticketing Data",
    filename: "daily_records.ts",
  },
  {
    value: 55,
    suffix: "M",
    label: "Weekly Records",
    sublabel: "Restaurant & Pricing",
    filename: "weekly_data.ts",
  },
  {
    value: 99.7,
    suffix: "%",
    label: "Bypass Success",
    sublabel: "Anti-Bot Systems",
    filename: "success_rate.ts",
  },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  terminalGreen: "#059669",
  terminalYellow: "#d97706",
  terminalBlue: "#0284c7",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
  terminalBorder: "#e2e8f0",
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

export default function StatsVariant001() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cream relative overflow-hidden">
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
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-7xl font-mono pointer-events-none"
        style={{ color: colors.sage }}
      >
        {"["}
      </motion.div>
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-7xl font-mono pointer-events-none"
        style={{ color: colors.mint }}
      >
        {"]"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge - Terminal Prompt Style */}
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
            <span className="ml-2">Our Scale</span>
            <span className="ml-2 w-2 h-4 bg-primary/60 animate-pulse" />
          </span>

          {/* Title with code style */}
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <Activity className="w-10 h-10" style={{ color: colors.terminalGray }} />
            <span style={{ color: colors.primary }}>Numbers That</span>
            <span
              className="px-2 py-1 rounded-md font-mono"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Speak
            </span>
          </h2>

          {/* Description with comment style */}
          <p className="mt-6 text-lg" style={{ color: colors.terminalGray }}>
            <span className="font-mono text-sm mr-2">{"//"}</span>
            We operate production data pipelines delivering millions of records
            daily. These are real numbers from active client engagements.
          </p>
        </motion.div>

        {/* Stats Grid - Terminal Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div
                className="relative rounded-xl overflow-hidden border-2 transition-all duration-300"
                style={{
                  backgroundColor: colors.codeBg,
                  borderColor: colors.terminalBorder,
                }}
              >
                {/* Terminal header */}
                <div
                  className="px-4 py-2 flex items-center gap-2 border-b"
                  style={{
                    backgroundColor: "white",
                    borderColor: colors.terminalBorder,
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span
                    className="ml-2 text-xs font-mono"
                    style={{ color: colors.terminalGray }}
                  >
                    {stat.filename}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 text-center" style={{ backgroundColor: "white" }}>
                  {/* Number with code styling */}
                  <div
                    className="text-5xl lg:text-6xl font-bold font-mono mb-3"
                    style={{ color: colors.terminalGreen }}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3
                    className="text-base font-semibold font-mono mb-1"
                    style={{ color: colors.primary }}
                  >
                    {stat.label}
                  </h3>
                  <p className="text-sm font-mono" style={{ color: colors.terminalGray }}>
                    {stat.sublabel}
                  </p>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ border: `2px solid ${colors.terminalGreen}` }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicators - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 flex-wrap justify-center font-mono text-sm">
            {[
              { text: "Active pipelines in 15+ countries", color: colors.terminalGreen },
              { text: "24+ months client relationships", color: colors.terminalYellow },
              { text: "24/7 Pipeline Monitoring", color: colors.terminalBlue },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ backgroundColor: colors.codeBg }}
              >
                <ChevronRight className="w-4 h-4" style={{ color: item.color }} />
                <span style={{ color: colors.terminalGray }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
