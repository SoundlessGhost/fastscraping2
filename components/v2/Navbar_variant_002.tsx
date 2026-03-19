"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, CircleDot } from "lucide-react";

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

export default function NavbarVariant002() {
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
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo - Flow Style */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              {/* Flow nodes logo */}
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-6 h-0.5 rounded-full"
                  style={{ backgroundColor: colors.sage }}
                  animate={{ scaleX: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <span className="text-2xl font-bold font-display">
                  <span style={{ color: colors.primary }}>Fast</span>
                  <span style={{ color: colors.secondary }}>scraping</span>
                </span>
                {/* Flow underline on hover */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 flex items-center gap-1"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1 h-full rounded-full" style={{ backgroundColor: colors.primary }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sage }} />
                  <div className="flex-1 h-full rounded-full" style={{ backgroundColor: colors.secondary }} />
                </motion.div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Flow Style */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative flex items-center"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Connector line between nav items */}
                  {index > 0 && (
                    <motion.div
                      className="w-4 h-0.5 rounded-full mx-1"
                      style={{ backgroundColor: colors.sage }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <Link
                    href={link.href}
                    className="relative flex items-center px-4 py-2 font-medium rounded-full transition-all duration-300"
                    style={{
                      color: activeDropdown === link.name ? colors.primary : colors.slate,
                      backgroundColor: activeDropdown === link.name ? `${colors.sage}30` : "transparent",
                    }}
                  >
                    {/* Active indicator dot */}
                    {activeDropdown === link.name && (
                      <motion.span
                        className="absolute -left-1 w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu - Flow Style */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-lg overflow-hidden"
                          style={{ border: `2px solid ${colors.sage}40` }}
                        >
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
                                  className="relative flex items-center px-4 py-3 rounded-xl transition-all duration-200 group text-sm"
                                  style={{ color: colors.slate }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = `${colors.sage}20`;
                                    e.currentTarget.style.color = colors.primary;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = colors.slate;
                                  }}
                                >
                                  {/* Flow dot indicator */}
                                  <span
                                    className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform"
                                    style={{ backgroundColor: colors.secondary }}
                                  />
                                  <span>{item.name}</span>
                                  <ArrowRight className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          {/* Flow indicator at bottom */}
                          <div
                            className="h-1 w-full"
                            style={{
                              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Flow Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact/#demo-form"
                className="group relative inline-flex items-center px-6 py-2.5 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: "white",
                }}
              >
                {/* Flowing highlight effect */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.white}, transparent)`,
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.mint }} />
                  Talk to Khalid
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full transition-colors"
              style={{
                backgroundColor: isMobileMenuOpen ? `${colors.sage}30` : "transparent",
              }}
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

      {/* Mobile Menu - Flow Style */}
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
              style={{ borderLeft: `2px solid ${colors.sage}40` }}
            >
              {/* Flow indicator at top */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.sage})`,
                }}
              />

              <div className="p-6 pt-20">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-xl transition-all"
                            style={{
                              color: mobileExpandedMenu === link.name ? colors.primary : colors.slate,
                              backgroundColor: mobileExpandedMenu === link.name ? `${colors.sage}20` : "transparent",
                            }}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: mobileExpandedMenu === link.name ? colors.primary : colors.sage,
                                }}
                              />
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
                                <div className="pl-6 py-2 space-y-1 border-l-2" style={{ borderColor: colors.sage }}>
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg transition-all"
                                      style={{ color: colors.slate }}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.secondary }} />
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
                          className="flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-xl transition-all"
                          style={{ color: colors.slate }}
                        >
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.sage }} />
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8" style={{ borderTop: `2px solid ${colors.sage}40` }}>
                  <Link
                    href="/contact/#demo-form"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: "white",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.mint }} />
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
