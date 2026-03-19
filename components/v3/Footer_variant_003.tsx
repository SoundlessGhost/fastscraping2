"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Github, Mail, Hexagon } from "lucide-react";

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

export default function FooterVariant003() {
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
      {/* Decorative top border - Gradient style */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
        }}
      />

      {/* Organic blob shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[10%] w-64 h-64 rounded-full opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: colors.sage }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 left-[20%] w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: colors.mint }}
      />

      {/* Decorative hexagons */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] pointer-events-none opacity-10"
      >
        <Hexagon className="w-12 h-12" style={{ color: colors.sage }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-[10%] pointer-events-none opacity-10"
      >
        <Hexagon className="w-8 h-8" style={{ color: colors.mint }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            backgroundColor: i % 2 === 0 ? colors.sage : colors.mint,
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column - Abstract Style */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                {/* Hexagon logo */}
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 30 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Hexagon className="w-8 h-8" style={{ color: colors.sage }} strokeWidth={1.5} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${colors.sage}, ${colors.mint})`,
                      }}
                    />
                  </motion.div>
                </motion.div>
                <span className="text-2xl font-bold font-display">
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.sage} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Fast
                  </span>
                  <span style={{ color: colors.sage }}>scraping</span>
                </span>
              </Link>

              <p className="leading-relaxed mb-6 max-w-sm text-sm" style={{ color: colors.slate }}>
                Your web scraping team on demand. We deliver structured data at
                scale — no Cloudflare, no Captchas, no hassles.
              </p>

              {/* Contact info - Artistic style */}
              <div className="space-y-2">
                <a
                  href="mailto:khalid@fastscraping.com"
                  className="inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: colors.slate }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  />
                  <Mail className="w-4 h-4" />
                  <span>khalid@fastscraping.com</span>
                </a>
              </div>

              {/* Social links - Artistic Style */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: colors.slate,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.mint;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.slate;
                    }}
                  >
                    {/* Gradient hover effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary}30, ${colors.mint}20)`,
                      }}
                    />
                    <social.icon className="relative w-5 h-5" />
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
                <Hexagon className="w-4 h-4" style={{ color: colors.secondary }} />
                Solutions
              </h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors hover:translate-x-1 inline-block"
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
                <Hexagon className="w-4 h-4" style={{ color: colors.secondary }} />
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors hover:translate-x-1 inline-block"
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
                <Hexagon className="w-4 h-4" style={{ color: colors.secondary }} />
                Industries
              </h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm transition-colors hover:translate-x-1 inline-block"
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
                <Hexagon className="w-4 h-4" style={{ color: colors.secondary }} />
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:translate-x-1 inline-block"
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

        {/* Bottom Bar - Artistic Style */}
        <div
          className="py-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="flex items-center gap-2" style={{ color: colors.slate }}>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.secondary }}
              />
              © {new Date().getFullYear()} Fastscraping. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors relative group"
                  style={{ color: colors.slate }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.slate)}
                >
                  {link.name}
                  {/* Underline on hover */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${colors.secondary}, ${colors.mint})`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
