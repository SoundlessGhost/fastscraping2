"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Terminal, ChevronRight } from "lucide-react";

const navLinks = [
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "Competitor Pricing Intelligence", href: "/solutions#pricing-intelligence" },
      { name: "Product & Marketplace Intelligence", href: "/solutions#marketplace-intelligence" },
      { name: "Job Market Insights", href: "/solutions#job-market" },
      { name: "LinkedIn Data Platform", href: "/solutions#linkedin-data" },
      { name: "Web Data APIs", href: "/solutions#web-data-apis" },
      { name: "Data Pipelines & ETL", href: "/solutions#data-pipelines" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Managed Web Scraping", href: "/services#managed-scraping" },
      { name: "Enterprise Web Crawling", href: "/services#enterprise-crawling" },
      { name: "Mobile App Data Extraction", href: "/services#mobile-app-scraping" },
      { name: "Real-time Data APIs", href: "/services#realtime-apis" },
      { name: "Automated Data Pipelines", href: "/services#data-pipelines" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    dropdown: [
      { name: "Ecommerce & Retail", href: "/industries#ecommerce-retail" },
      { name: "Real Estate", href: "/industries#real-estate" },
      { name: "Talent & Recruitment", href: "/industries#talent-recruitment" },
      { name: "Ticketing & Events", href: "/industries#ticketing-events" },
      { name: "Food Delivery & Grocery", href: "/industries#food-delivery" },
      { name: "AI & Machine Learning", href: "/industries#ai-machine-learning" },
      { name: "Data & Analytics Platforms", href: "/industries#data-analytics" },
      { name: "SaaS & API Applications", href: "/industries#saas-api" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  terminalGreen: "#059669",
  terminalGray: "#64748b",
  codeBg: "#f1f5f9",
  terminalBorder: "#e2e8f0",
};

export default function NavbarVariant001() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === name ? null : name);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
        style={{
          borderBottom: isScrolled ? `1px solid ${colors.terminalBorder}` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo - Terminal Style */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              {/* Terminal icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center border"
                style={{
                  backgroundColor: colors.codeBg,
                  borderColor: colors.terminalBorder,
                }}
              >
                <Terminal className="w-5 h-5" style={{ color: colors.terminalGreen }} />
              </div>
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <span className="text-2xl font-bold font-mono flex items-center">
                  <span style={{ color: colors.terminalGray }}>{"<"}</span>
                  <span style={{ color: colors.primary }}>Fast</span>
                  <span style={{ color: colors.secondary }}>scraping</span>
                  <span style={{ color: colors.terminalGray }}>{"/>"}</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Terminal Style */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-2 font-medium font-mono text-sm rounded-lg transition-all duration-300"
                    style={{
                      color: activeDropdown === link.name ? colors.primary : colors.terminalGray,
                      backgroundColor: activeDropdown === link.name ? colors.codeBg : "transparent",
                    }}
                  >
                    <span style={{ color: colors.terminalGreen }} className="mr-1">
                      {">"}
                    </span>
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu - Terminal Style */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                          style={{ border: `1px solid ${colors.terminalBorder}` }}
                        >
                          {/* Terminal header */}
                          <div
                            className="px-4 py-2 flex items-center gap-2 border-b"
                            style={{
                              backgroundColor: colors.codeBg,
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
                              {link.name.toLowerCase()}.ts
                            </span>
                          </div>
                          <div className="p-2">
                            {link.dropdown.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group font-mono text-sm"
                                  style={{ color: colors.terminalGray }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.codeBg;
                                    e.currentTarget.style.color = colors.primary;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = colors.terminalGray;
                                  }}
                                >
                                  <ChevronRight
                                    className="w-4 h-4 mr-2"
                                    style={{ color: colors.terminalGreen }}
                                  />
                                  <span>{item.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Terminal Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact/#demo-form"
                className="group relative inline-flex items-center px-6 py-2.5 font-semibold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: "white",
                }}
              >
                <span style={{ color: colors.mint }} className="mr-1">
                  {">"}
                </span>
                <span className="relative z-10">Talk to Khalid</span>
                <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ backgroundColor: isMobileMenuOpen ? colors.codeBg : "transparent" }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: colors.primary }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: colors.primary }} />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Terminal Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
              style={{ borderLeft: `1px solid ${colors.terminalBorder}` }}
            >
              {/* Terminal header for mobile */}
              <div
                className="px-6 py-4 flex items-center gap-2 border-b"
                style={{
                  backgroundColor: colors.codeBg,
                  borderColor: colors.terminalBorder,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono" style={{ color: colors.terminalGray }}>
                  navigation.ts
                </span>
              </div>

              <div className="p-6">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="flex items-center justify-between w-full px-4 py-3 font-medium font-mono rounded-lg transition-all"
                            style={{
                              color: mobileExpandedMenu === link.name ? colors.primary : colors.terminalGray,
                              backgroundColor: mobileExpandedMenu === link.name ? colors.codeBg : "transparent",
                            }}
                          >
                            <span className="flex items-center">
                              <span style={{ color: colors.terminalGreen }} className="mr-2">
                                {">"}
                              </span>
                              {link.name}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                mobileExpandedMenu === link.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpandedMenu === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center px-4 py-2.5 text-sm font-mono rounded-lg transition-all"
                                      style={{ color: colors.terminalGray }}
                                    >
                                      <ChevronRight
                                        className="w-4 h-4 mr-2"
                                        style={{ color: colors.terminalGreen }}
                                      />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 font-medium font-mono rounded-lg transition-all"
                          style={{ color: colors.terminalGray }}
                        >
                          <span style={{ color: colors.terminalGreen }} className="mr-2">
                            {">"}
                          </span>
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8" style={{ borderTop: `1px solid ${colors.terminalBorder}` }}>
                  <Link
                    href="/contact/#demo-form"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 font-semibold font-mono rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: "white",
                    }}
                  >
                    <span style={{ color: colors.mint }} className="mr-1">
                      {">"}
                    </span>
                    Book a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
