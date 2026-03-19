"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Github, Mail, CircleDot } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Pricing Intelligence", href: "/solutions#pricing-intelligence" },
    { name: "Marketplace Intelligence", href: "/solutions#marketplace-intelligence" },
    { name: "Job Market Insights", href: "/solutions#job-market" },
    { name: "LinkedIn Data Platform", href: "/solutions#linkedin-data" },
    { name: "Web Data APIs", href: "/solutions#web-data-apis" },
    { name: "Data Pipelines & ETL", href: "/solutions#data-pipelines" },
  ],
  services: [
    { name: "Managed Web Scraping", href: "/services#managed-scraping" },
    { name: "Enterprise Web Crawling", href: "/services#enterprise-crawling" },
    { name: "Mobile App Data Extraction", href: "/services#mobile-app-scraping" },
    { name: "Real-time Data APIs", href: "/services#realtime-apis" },
    { name: "Automated Data Pipelines", href: "/services#data-pipelines" },
  ],
  industries: [
    { name: "Ecommerce & Retail", href: "/industries#ecommerce-retail" },
    { name: "Real Estate", href: "/industries#real-estate" },
    { name: "Talent & Recruitment", href: "/industries#talent-recruitment" },
    { name: "Ticketing & Events", href: "/industries#ticketing-events" },
    { name: "Food Delivery & Grocery", href: "/industries#food-delivery" },
    { name: "AI & Machine Learning", href: "/industries#ai-machine-learning" },
    { name: "Data & Analytics Platforms", href: "/industries#data-analytics" },
    { name: "SaaS & API Applications", href: "/industries#saas-api" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/md-khalid-mahmud-shawon" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  slate: "#94a3b8",
  white: "#ffffff",
};

export default function FooterVariant002() {
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === pathname) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `${path}#${hash}`);
        }
      }
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
      {/* Decorative top border - Flow style */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
        }}
      />

      {/* Flow lines pattern overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 400">
          <path d="M-100 100 Q 300 50, 600 100 T 1300 100" stroke={colors.white} strokeWidth="1" fill="none" />
          <path d="M-100 200 Q 300 150, 600 200 T 1300 200" stroke={colors.white} strokeWidth="1" fill="none" />
          <path d="M-100 300 Q 300 250, 600 300 T 1300 300" stroke={colors.white} strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Animated flowing dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{ backgroundColor: colors.mint, opacity: 0.3 }}
          initial={{ x: -20, y: 80 + i * 100 }}
          animate={{ x: ["-5%", "105%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column - Flow Style */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                {/* Flow nodes logo */}
                <div className="flex items-center gap-1">
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: colors.white }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                    animate={{ scaleX: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
                <span className="text-2xl font-bold font-display">
                  <span style={{ color: colors.white }}>Fast</span>
                  <span style={{ color: colors.sage }}>scraping</span>
                </span>
              </Link>

              <p className="leading-relaxed mb-6 max-w-sm text-sm" style={{ color: colors.slate }}>
                Your web scraping team on demand. We deliver structured data at
                scale — no Cloudflare, no Captchas, no hassles.
              </p>

              {/* Contact info - Flow style */}
              <div className="space-y-2">
                <a
                  href="mailto:khalid@fastscraping.com"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: colors.slate }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Mail className="w-4 h-4" />
                  <span>khalid@fastscraping.com</span>
                </a>
              </div>

              {/* Social links - Flow Style */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: colors.slate,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = colors.mint;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = colors.slate;
                    }}
                  >
                    {/* Connection dot */}
                    <div
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.secondary }}
                    />
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4
                className="font-semibold mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
                Solutions
              </h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.sage }}
                    />
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors"
                      style={{ color: colors.slate }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="font-semibold mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.sage }}
                    />
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors"
                      style={{ color: colors.slate }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4
                className="font-semibold mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
                Industries
              </h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.sage }}
                    />
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors"
                      style={{ color: colors.slate }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="font-semibold mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <CircleDot className="w-4 h-4" style={{ color: colors.secondary }} />
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.sage }}
                    />
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: colors.slate }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Flow Style */}
        <div
          className="py-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="flex items-center gap-2" style={{ color: colors.slate }}>
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: colors.sage }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              © {new Date().getFullYear()} Fastscraping. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((link, idx) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="transition-colors px-2"
                    style={{ color: colors.slate }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                  >
                    {link.name}
                  </Link>
                  {idx < 2 && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.secondary }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
