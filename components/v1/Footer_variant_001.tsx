"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Github, Mail, Terminal, ChevronRight } from "lucide-react";

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
  terminalGreen: "#059669",
  terminalGray: "#94a3b8",
  white: "#ffffff",
};

export default function FooterVariant001() {
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
      {/* Decorative top border - Terminal style */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
        }}
      />

      {/* Code pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' font-family='monospace' font-size='14' fill='%23ffffff'%3E%7B%7D%3C/text%3E%3Ctext x='35' y='50' font-family='monospace' font-size='12' fill='%23ffffff'%3E%3C/%3E%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column - Terminal Style */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6" style={{ color: colors.terminalGreen }} />
                <span className="text-2xl font-bold font-mono">
                  <span style={{ color: colors.terminalGray }}>{"<"}</span>
                  <span style={{ color: colors.white }}>Fast</span>
                  <span style={{ color: colors.sage }}>scraping</span>
                  <span style={{ color: colors.terminalGray }}>{"/>"}</span>
                </span>
              </Link>

              <p
                className="leading-relaxed mb-6 max-w-sm font-mono text-sm"
                style={{ color: colors.terminalGray }}
              >
                <span style={{ color: colors.terminalGreen }}>{"// "}</span>
                Your web scraping team on demand. We deliver structured data at
                scale — no Cloudflare, no Captchas, no hassles.
              </p>

              {/* Contact info */}
              <div className="space-y-2">
                <a
                  href="mailto:khalid@fastscraping.com"
                  className="flex items-center gap-2 font-mono text-sm transition-colors"
                  style={{ color: colors.terminalGray }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: colors.terminalGreen }} />
                  <Mail className="w-4 h-4" />
                  <span>khalid@fastscraping.com</span>
                </a>
              </div>

              {/* Social links - Terminal Style */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: colors.terminalGray,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.terminalGreen;
                      e.currentTarget.style.color = colors.terminalGreen;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = colors.terminalGray;
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4
                className="font-semibold font-mono mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <span style={{ color: colors.terminalGreen }}>{">"}</span>
                Solutions
              </h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="font-mono text-sm transition-colors flex items-center gap-1"
                      style={{ color: colors.terminalGray }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
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
                className="font-semibold font-mono mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <span style={{ color: colors.terminalGreen }}>{">"}</span>
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="font-mono text-sm transition-colors"
                      style={{ color: colors.terminalGray }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
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
                className="font-semibold font-mono mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <span style={{ color: colors.terminalGreen }}>{">"}</span>
                Industries
              </h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="font-mono text-sm transition-colors"
                      style={{ color: colors.terminalGray }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
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
                className="font-semibold font-mono mb-4 flex items-center gap-2"
                style={{ color: colors.white }}
              >
                <span style={{ color: colors.terminalGreen }}>{">"}</span>
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-mono text-sm transition-colors"
                      style={{ color: colors.terminalGray }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Terminal Style */}
        <div
          className="py-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono">
            <p style={{ color: colors.terminalGray }}>
              <span style={{ color: colors.terminalGreen }}>{"// "}</span>
              © {new Date().getFullYear()} Fastscraping. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors"
                  style={{ color: colors.terminalGray }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.mint)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.terminalGray)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
