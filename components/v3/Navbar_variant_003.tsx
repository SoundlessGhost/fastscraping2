"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Hexagon } from "lucide-react";

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
  cream: "#faf9f7",
  slate: "#475569",
  white: "#ffffff",
};

export default function NavbarVariant003() {
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
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo - Abstract/Artistic Style */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              {/* Hexagon logo with gradient */}
              <motion.div
                className="relative"
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon
                    className="w-9 h-9"
                    style={{ color: colors.primary }}
                    strokeWidth={1.5}
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <span className="text-2xl font-bold font-display">
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Fast
                  </span>
                  <span style={{ color: colors.secondary }}>scraping</span>
                </span>
                {/* Organic wave underline on hover */}
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-2"
                  viewBox="0 0 120 8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M 0 4 Q 20 0, 40 4 T 80 4 T 120 4"
                    fill="none"
                    stroke={`url(#logoGradient)`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="100%" stopColor={colors.sage} />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Abstract Style */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center px-4 py-2 font-medium rounded-xl transition-all duration-300 overflow-hidden"
                    style={{
                      color: activeDropdown === link.name ? colors.primary : colors.slate,
                    }}
                  >
                    {/* Gradient hover background */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${colors.mint}30 0%, ${colors.sage}20 100%)`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: activeDropdown === link.name ? 1 : 0,
                        scale: activeDropdown === link.name ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown
                        className={`relative z-10 ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu - Abstract/Artistic Style */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-3xl shadow-xl overflow-hidden"
                          style={{
                            border: `1px solid ${colors.sage}30`,
                          }}
                        >
                          {/* Gradient top bar */}
                          <div
                            className="h-1"
                            style={{
                              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                            }}
                          />
                          <div className="p-3">
                            {link.dropdown.map((item, idx) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                              >
                                <Link
                                  href={item.href}
                                  className="relative flex items-center px-4 py-3 rounded-2xl transition-all duration-300 group text-sm overflow-hidden"
                                  style={{ color: colors.slate }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = colors.primary;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = colors.slate;
                                  }}
                                >
                                  {/* Hover gradient fill */}
                                  <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                      background: `linear-gradient(135deg, ${colors.mint}20 0%, transparent 100%)`,
                                    }}
                                  />
                                  <span className="relative z-10">{item.name}</span>
                                  <ArrowRight className="relative z-10 ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          {/* Decorative corner */}
                          <div
                            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20"
                            style={{ backgroundColor: colors.mint }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Abstract/Artistic Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact/#demo-form"
                className="group relative inline-flex items-center px-7 py-3 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl"
                style={{ color: "white" }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
                    backgroundSize: "200% 200%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center">
                  Talk to Khalid
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl transition-colors overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.mint}30 0%, ${colors.sage}20 100%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              {isMobileMenuOpen ? (
                <X className="relative z-10 w-6 h-6" style={{ color: colors.primary }} />
              ) : (
                <Menu className="relative z-10 w-6 h-6" style={{ color: colors.primary }} />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Abstract/Artistic Style */}
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
            >
              {/* Gradient top bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage}, ${colors.mint})`,
                }}
              />

              {/* Decorative blob */}
              <div
                className="absolute top-20 -right-10 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                style={{ backgroundColor: colors.mint }}
              />

              <div className="p-6 pt-20 relative">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="relative flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-2xl transition-all overflow-hidden"
                            style={{
                              color: mobileExpandedMenu === link.name ? colors.primary : colors.slate,
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                background: `linear-gradient(135deg, ${colors.mint}20 0%, ${colors.sage}10 100%)`,
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: mobileExpandedMenu === link.name ? 1 : 0 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="relative z-10">{link.name}</span>
                            <ChevronDown
                              className={`relative z-10 w-5 h-5 transition-transform duration-300 ${
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
                                <div
                                  className="ml-4 pl-4 py-2 space-y-1"
                                  style={{
                                    borderLeft: `2px solid`,
                                    borderImage: `linear-gradient(180deg, ${colors.primary}, ${colors.sage}) 1`,
                                  }}
                                >
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block px-4 py-2.5 text-sm rounded-xl transition-all"
                                      style={{ color: colors.slate }}
                                    >
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
                          className="block px-4 py-3 text-lg font-medium rounded-2xl transition-all"
                          style={{ color: colors.slate }}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div
                  className="mt-8 pt-8"
                  style={{
                    borderTop: `1px solid ${colors.sage}30`,
                  }}
                >
                  <Link
                    href="/contact/#demo-form"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative block w-full text-center px-6 py-4 font-bold rounded-2xl overflow-hidden"
                    style={{ color: "white" }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
                        backgroundSize: "200% 200%",
                      }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <span className="relative z-10">Book a Demo</span>
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
