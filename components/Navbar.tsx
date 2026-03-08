"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "Ticketing & Events", href: "/solutions/ticketing" },
      { name: "Real Estate Data", href: "/solutions/real-estate" },
      { name: "Job Market Intelligence", href: "/solutions/jobs" },
      { name: "Restaurant & Pricing", href: "/solutions/restaurant" },
      { name: "LinkedIn Intelligence", href: "/solutions/linkedin" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 group">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad"
                    x1="10"
                    y1="4"
                    x2="40"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#043f34" />
                    <stop offset="1" stopColor="#71967d" />
                  </linearGradient>
                </defs>
                <path
                  d="M30 4L10 28H24L20 44L40 18H26L30 4Z"
                  fill="url(#grad)"
                />
              </svg>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-bold font-display">
                  <span className="text-primary">Fast</span>
                  <span className="text-secondary">scraping</span>
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-primary font-medium rounded-lg hover:bg-sage/20 transition-all duration-300"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-soft-lg border border-sage/20 overflow-hidden"
                        >
                          <div className="p-2">
                            {link.dropdown.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-sage/20 rounded-xl transition-all duration-200 group"
                                >
                                  <span>{item.name}</span>
                                  <ArrowRight className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/demo"
                className="group relative inline-flex items-center px-6 py-2.5 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow"
              >
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-sage/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
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
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-sage/20 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-sage/30">
                  <Link
                    href="/demo"
                    className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-full"
                  >
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
