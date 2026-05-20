"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-transform hover:scale-105"
        >
          Abdullah<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
  const isActive =
  pathname?.replace(/\/$/, "") ===
  link.href.replace(/\/$/, "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600"
              >
                {link.name}

                {/* Active underline (animated) */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Active glow dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
      {/* Mobile Button */}
<button
  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
  onClick={() => setIsOpen(!isOpen)}
>
  {/* wrapper for lines */}
  <div className="relative w-5 h-4 flex flex-col justify-between items-center">
    
    {/* Top line */}
    <span
      className={`block h-0.5 w-5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
        isOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
    />

    {/* Middle line */}
    <span
      className={`block h-0.5 w-5 bg-gray-800 rounded-full transition-all duration-300 ${
        isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
      }`}
    />

    {/* Bottom line */}
    <span
      className={`block h-0.5 w-5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
        isOpen ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />

  </div>

  {/* Glow effect */}
  <span className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
</button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-3 py-6 px-4">

  {navLinks.map((link) => {
    const isActive =
      pathname === link.href ||
      pathname.startsWith(link.href + "/");

    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="relative w-full text-center py-3 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden"
      >
        {/* Active background */}
        {isActive && (
          <motion.div
            layoutId="mobile-active"
            className="absolute inset-0 bg-blue-600 rounded-xl"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}

        {/* Hover background glow */}
        <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300 rounded-xl" />

        {/* Text */}
        <span
          className={`relative z-10 transition-all duration-300 ${
            isActive ? "text-white" : "text-gray-700 group-hover:text-blue-600"
          }`}
        >
          {link.name}
        </span>
      </Link>
    );
  })}
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}