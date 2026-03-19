"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight, Waves } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const colors = {
  // Aurora inspired colors
  aurora1: "#043f34", // Deep green
  aurora2: "#059669", // Emerald
  aurora3: "#71967d", // Sage
  aurora4: "#b6e5d2", // Mint
  aurora5: "#a78bfa", // Purple accent
  aurora6: "#60a5fa", // Blue accent
  white: "#ffffff",
  cream: "#faf9f7",
  textDark: "#1e293b",
  textGray: "#64748b",
};

export default function NavbarVariant006() {
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
          {/* Aurora gradient container */}
          <div
            className="relative rounded-2xl px-6 py-3 transition-all duration-500 overflow-hidden"
            style={{
              background: isScrolled
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: isScrolled
                ? "0 8px 32px rgba(4, 63, 52, 0.12)"
                : "0 4px 24px rgba(4, 63, 52, 0.06)",
            }}
          >
            {/* Animated aurora gradient border */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora4}, ${colors.aurora5}, ${colors.aurora6}, ${colors.aurora1})`,
                backgroundSize: "200% 100%",
              }}
            />

            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group">
                {/* Aurora waves icon */}
                <div className="relative">
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora4})`,
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <Waves className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <span className="text-xl font-bold">
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Fast
                  </span>
                  <span style={{ color: colors.aurora3 }}>scraping</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden"
                    style={{ color: colors.textGray }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.aurora1;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.textGray;
                    }}
                  >
                    {/* Aurora hover gradient */}
                    <motion.span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.aurora4}30, ${colors.aurora5}20, ${colors.aurora6}20)`,
                      }}
                    />
                    <span className="relative">{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* CTA Button - Aurora gradient */}
              <div className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-6 py-2.5 rounded-xl text-sm font-semibold overflow-hidden group"
                  style={{ color: colors.white }}
                >
                  {/* Animated gradient background */}
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora3}, ${colors.aurora4})`,
                      backgroundSize: "300% 300%",
                    }}
                  />
                  {/* Shimmer overlay */}
                  <motion.span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
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
                className="lg:hidden p-2 rounded-xl transition-all overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.aurora4}30, ${colors.aurora5}20)`,
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: colors.aurora1,
                }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Aurora style */}
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
              className="relative rounded-2xl p-6 space-y-2 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 8px 32px rgba(4, 63, 52, 0.1)",
              }}
            >
              {/* Aurora gradient overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${colors.aurora4}, ${colors.aurora5}, ${colors.aurora6})`,
                }}
              />

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
                    className="relative block px-4 py-3 rounded-xl font-medium transition-all"
                    style={{ color: colors.textGray }}
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
                <motion.button
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-full py-3 rounded-xl font-semibold text-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.aurora1}, ${colors.aurora2}, ${colors.aurora3})`,
                    backgroundSize: "200% 200%",
                    color: colors.white,
                  }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
