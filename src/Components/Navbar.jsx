"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

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
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-2xl
        bg-white/70
        dark:bg-black/40
        border-b
        border-black/5
        dark:border-white/10
        transition-all
        duration-500
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-tight
            text-black
            dark:text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Abdullah
          <span className="text-blue-600 dark:text-blue-400">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname?.replace(/\/$/, "") ===
              link.href.replace(/\/$/, "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-black/70
                  dark:text-white/70
                  hover:text-blue-600
                  dark:hover:text-white
                  transition-all
                  duration-300
                  group
                "
              >
                <span className="relative">
                  {link.name}

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      bg-blue-600
                      dark:bg-white
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                  {/* ACTIVE DOT */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-dot"
                      className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        -bottom-3
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-blue-600
                        dark:bg-white
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* THEME TOGGLE */}
          <div className="hidden md:flex items-center justify-center">
            <ThemeToggle />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              relative
              w-11
              h-11
              rounded-2xl
              flex
              items-center
              justify-center
              bg-white/70
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <div className="relative w-5 h-4">
              
              {/* TOP */}
              <span
                className={`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-black
                  dark:bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "rotate-45 top-[6px]"
                      : ""
                  }
                `}
              />

              {/* MIDDLE */}
              <span
                className={`
                  absolute
                  top-[6px]
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-black
                  dark:bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              {/* BOTTOM */}
              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-black
                  dark:bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "-rotate-45 bottom-[6px]"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              md:hidden
              border-t
              border-black/5
              dark:border-white/10
              bg-white/80
              dark:bg-black/70
              backdrop-blur-2xl
            "
          >
            <div className="px-6 py-6 flex flex-col gap-3">

              {navLinks.map((link) => {
                const isActive =
                  pathname?.replace(/\/$/, "") ===
                  link.href.replace(/\/$/, "");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="relative"
                  >
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className={`
                        relative
                        overflow-hidden
                        rounded-2xl
                        px-5
                        py-4
                        font-medium
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                        }
                      `}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}

              {/* MOBILE THEME BUTTON */}
              <div
                className="
                  flex
                  justify-center
                  pt-4
                "
              >
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}