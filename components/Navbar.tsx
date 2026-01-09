"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show navbar after splash completes (on homepage) or immediately (other pages)
  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
      return;
    }

    // Wait for splash to complete (2.8s splash + small buffer)
    const timer = setTimeout(() => setShowNavbar(true), 2900);
    return () => clearTimeout(timer);
  }, [isHomePage]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo-black.png"
              alt="Hideaway Hair Studio"
              width={140}
              height={40}
              className="h-10 w-48 transition-opacity duration-500"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-text={link.label}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive ? "nav-link-active" : "nav-link"
                  }`}
                  style={
                    !isActive
                      ? { color: "#1A1A1A" }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/book"
              className="ml-4 px-7 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={
                isScrolled
                  ? { backgroundColor: "#FFFFFF", color: "#1A1A1A", border: "2px solid #1A1A1A" }
                  : { backgroundColor: "#FFFFFF", color: "#1A1A1A" }
              }
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-charcoal ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-charcoal ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-charcoal ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden rounded-2xl mt-4 ${
                isScrolled ? "bg-white" : "bg-white/10 backdrop-blur-md"
              }`}
            >
              <div className="flex flex-col gap-1 p-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-text={link.label}
                        className={`block py-3 text-lg font-medium transition-all ${
                          isActive ? "nav-link-active" : "nav-link"
                        }`}
                        style={
                          !isActive
                            ? { color: isScrolled ? "#1A1A1A" : "#FFFFFF" }
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href="/book"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block mt-4 px-7 py-3 text-sm font-medium rounded-full"
                    style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
