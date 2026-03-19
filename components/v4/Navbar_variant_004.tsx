"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const colors = {
  primary: "#043f34",
  secondary: "#71967d",
  sage: "#afcab8",
  mint: "#b6e5d2",
  cream: "#faf9f7",
  white: "#ffffff",
  slate: "#475569",
};

export default function NavbarVariant004() {
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
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glassmorphism container */}
          <div
            className="relative rounded-2xl px-6 py-3 transition-all duration-500"
            style={{
              background: isScrolled
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: isScrolled
                ? "0 8px 32px rgba(4, 63, 52, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                : "0 4px 24px rgba(4, 63, 52, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
            }}
          >
            {/* Subtle glow behind navbar */}
            <div
              className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${colors.mint}40 0%, transparent 70%)`,
              }}
            />

            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.sage}30)`,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: colors.primary }} />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
                    }}
                  />
                </div>
                <span className="text-xl font-bold">
                  <span style={{ color: colors.primary }}>Fast</span>
                  <span style={{ color: colors.secondary }}>scraping</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group"
                    style={{ color: colors.slate }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.slate;
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    />
                    <span className="relative">{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-6 py-2.5 rounded-xl text-sm font-semibold overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: colors.white,
                    boxShadow: `0 4px 20px ${colors.primary}30`,
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
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
                className="lg:hidden p-2 rounded-xl transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: colors.primary,
                }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
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
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 8px 32px rgba(4, 63, 52, 0.1)",
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
                    className="block px-4 py-3 rounded-xl font-medium transition-all"
                    style={{ color: colors.slate }}
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
                  className="w-full py-3 rounded-xl font-semibold text-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: colors.white,
                  }}
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
