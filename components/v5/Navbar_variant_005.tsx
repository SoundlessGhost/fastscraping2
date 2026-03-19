"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight, Zap } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const colors = {
  dark: "#0a0a0a",
  darkGray: "#141414",
  mediumGray: "#1f1f1f",
  borderGray: "#2a2a2a",
  textGray: "#888888",
  textLight: "#e5e5e5",
  white: "#ffffff",
  // Accent colors
  primary: "#059669", // Emerald green
  primaryGlow: "#34d399",
  secondary: "#71967d",
  mint: "#b6e5d2",
};

export default function NavbarVariant005() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
        style={{ backgroundColor: isScrolled ? colors.dark : "transparent" }}
      >
        {/* Subtle top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: isScrolled
              ? `linear-gradient(90deg, transparent, ${colors.primary}50, transparent)`
              : "transparent",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl px-6 py-3 transition-all duration-500"
            style={{
              background: isScrolled
                ? `linear-gradient(135deg, ${colors.darkGray}, ${colors.mediumGray})`
                : "rgba(10, 10, 10, 0.5)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${isScrolled ? colors.borderGray : "rgba(255,255,255,0.05)"}`,
              boxShadow: isScrolled
                ? `0 0 40px ${colors.primary}10, 0 8px 32px rgba(0, 0, 0, 0.4)`
                : "none",
            }}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group">
                {/* Glowing icon */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <div
                    className="relative w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  >
                    <Zap className="w-5 h-5 text-white" fill="white" />
                  </div>
                </div>
                <span className="text-xl font-bold">
                  <span style={{ color: colors.white }}>Fast</span>
                  <span style={{ color: colors.primary }}>scraping</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
                    style={{ color: colors.textGray }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.white;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.textGray;
                    }}
                  >
                    {/* Subtle glow on hover */}
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.mediumGray}, ${colors.borderGray})`,
                        border: `1px solid ${colors.borderGray}`,
                      }}
                    />
                    <span className="relative">{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* CTA Button - Glowing style */}
              <div className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-5 py-2.5 rounded-lg text-sm font-semibold overflow-hidden group"
                  style={{ color: colors.white }}
                >
                  {/* Glow effect */}
                  <span
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity blur-xl"
                    style={{ backgroundColor: colors.primary }}
                  />
                  {/* Button background */}
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      border: `1px solid ${colors.primaryGlow}40`,
                    }}
                  />
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg transition-all"
                style={{
                  background: colors.mediumGray,
                  border: `1px solid ${colors.borderGray}`,
                  color: colors.white,
                }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Dark Mode */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-40 px-4 lg:hidden"
          >
            <div
              className="rounded-2xl p-6 space-y-2"
              style={{
                background: `linear-gradient(135deg, ${colors.darkGray}, ${colors.mediumGray})`,
                backdropFilter: "blur(20px)",
                border: `1px solid ${colors.borderGray}`,
                boxShadow: `0 0 40px ${colors.primary}10, 0 8px 32px rgba(0, 0, 0, 0.5)`,
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg font-medium transition-all"
                    style={{
                      color: colors.textGray,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.mediumGray;
                      e.currentTarget.style.color = colors.white;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = colors.textGray;
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <button
                  className="relative w-full py-3 rounded-lg font-semibold text-center overflow-hidden"
                  style={{ color: colors.white }}
                >
                  <span
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  />
                  <span className="relative">Get Started</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
