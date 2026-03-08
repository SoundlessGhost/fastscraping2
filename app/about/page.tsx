"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Users,
  Target,
  Zap,
  Shield,
  Heart,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TeamBentoGridV2, TeamBentoGridV3 } from "@/components/team-bento-v2";

const milestones = [
  {
    year: "2023",
    title: "Founded FastScraping",
    description:
      "Started with a vision to simplify enterprise data extraction.",
  },
  {
    year: "2024",
    title: "First Enterprise Client",
    description:
      "Partnered with Ficstar for ticketing data pipelines — StubHub, SeatGeek, and more.",
  },
  {
    year: "2024",
    title: "100M+ Records Milestone",
    description:
      "Crossed 100 million LinkedIn profiles processed through our infrastructure.",
  },
  {
    year: "2025",
    title: "Launched Scrayz API",
    description:
      "Self-serve LinkedIn API product for developers and small teams.",
  },
  {
    year: "2025",
    title: "Swiss Market Expansion",
    description:
      "Built custom real estate APIs for TheDataHive — ImmoScout24, Homegate, and more.",
  },
  {
    year: "2026",
    title: "Global Operations",
    description: "Active pipelines across 5+ countries with zero downtime.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Reliability First",
    description:
      "We build infrastructure that runs 24/7. Our clients depend on us for production data pipelines.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "We solve problems others can't. From Cloudflare to DataDome — we bypass what blocks others.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "We measure success by our clients' success. Long-term partnerships, not one-off projects.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and direct communication. No surprises.",
  },
];

const stats = [
  { value: "15+", label: "Months", sublabel: "Longest Client Relationship" },
  { value: "100M+", label: "Records", sublabel: "Processed Monthly" },
  { value: "0", label: "Account Bans", sublabel: "For Any Client" },
  { value: "5+", label: "Countries", sublabel: "Active Operations" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sage/30 to-mint/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mint/20 to-sage/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight tracking-tight">
              We Make Web Data <span className="text-gradient">Accessible</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              FastScraping is a fully managed web scraping service built for
              data teams, AI companies, and enterprises who need reliable,
              large-scale data extraction without the infrastructure headaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe every company should have access to the web data they
                need — without building complex infrastructure, managing proxy
                pools, or fighting anti-bot systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to be the invisible data layer for data-first
                companies. We handle the complexity of web scraping so you can
                focus on what matters: turning data into insights.
              </p>

              <div className="space-y-4">
                {[
                  "Silent backend vendor — your clients never know we exist",
                  "Production-grade infrastructure that scales with you",
                  "Anti-bot bypass is our specialty, not an afterthought",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/30 to-mint/30 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white">
                <Globe className="w-12 h-12 mb-6 text-mint" />
                <h3 className="text-2xl font-bold mb-4">
                  "Your Web Scraping Team on Demand"
                </h3>
                <p className="text-white/80 leading-relaxed">
                  We deliver structured data at large scale — no Cloudflare, no
                  Captchas, no hassles. Just tell us what you need, we'll handle
                  everything.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Leadership
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              Meet the <span className="text-gradient">Founder</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft-lg border border-sage/20">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Avatar */}
                <div className="text-center md:text-left">
                  <div className="w-56 h-56 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg relative">
                    <Image
                      src="/shawon.jpg"
                      alt="Md Khalid Mahmud Shawon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    Md Khalid Mahmud Shawon
                  </h3>
                  <p className="text-lg text-secondary font-medium mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Specializing in Enterprise Web Scraping, Data Pipeline
                    Engineering, and LinkedIn API solutions. Built FastScraping
                    to solve the data extraction challenges that other vendors
                    couldn't handle.
                  </p>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Award className="w-5 h-5 text-primary" />
                      <span>Enterprise Web Scraping Expert</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://linkedin.com/in/md-khalid-mahmud-shawon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href="https://upwork.com/freelancers/khalidalsaba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#14A800] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <TrendingUp className="w-4 h-4" />
                      Upwork
                    </a>
                    <a
                      href="mailto:hello@fastscraping.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              The people behind{" "}
              <span className="text-gradient">FastScraping</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream rounded-2xl p-6 text-center border border-sage/20"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <img
                  src="/team/shawon.jpg"
                  alt="MD Khalid Mahmud Shawon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">MD Khalid Mahmud Shawon</h3>
              <p className="text-secondary text-sm mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Short description about this team member.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cream rounded-2xl p-6 text-center border border-sage/20"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <img
                  src="/team/shawon.jpg"
                  alt="Silent Ghost"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">Silent Ghost</h3>
              <p className="text-secondary text-sm mb-2">
                Head of Anti-Bot Research
              </p>
              <p className="text-gray-600 text-sm">
                Short description about this team member.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TeamBentoGridV2 />
      {/* <TeamBentoGridV3 /> */}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary font-display mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-sage/20 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/40 to-mint/40 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-mint to-sage" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md" />

                  {/* Content */}
                  <div className="bg-cream rounded-2xl p-6 border border-sage/20">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-bold rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Brands Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
              Our Brands
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
              Two Brands, <span className="text-gradient">One Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FastScraping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-sage/20 shadow-soft-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    FastScraping
                  </h3>
                  <p className="text-sm text-secondary">fastscraping.com</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Managed enterprise service for data teams and agencies. Any
                platform, any scale, fully managed.
              </p>
              <div className="space-y-2">
                {[
                  "Custom data pipelines",
                  "Anti-bot bypass included",
                  "Dedicated support",
                  "Enterprise SLAs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scrayz */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-sage/20 shadow-soft-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-sage flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Scrayz</h3>
                  <p className="text-sm text-secondary">scrayz.com</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Self-serve LinkedIn API for developers and small teams. No
                cookies, no account bans.
              </p>
              <div className="space-y-2">
                {[
                  "LinkedIn profiles & companies",
                  "Simple REST API",
                  "Pay-as-you-go pricing",
                  "GDPR compliant",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
