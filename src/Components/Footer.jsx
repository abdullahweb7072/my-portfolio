"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-white">
            Abdullah<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            A passionate Next.js developer building modern, responsive and
            interactive web experiences with smooth UI and animations.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="relative text-gray-400 hover:text-white transition group"
                >
                  {item.name}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="space-y-4"
>
  <h3 className="text-lg font-semibold text-white">Connect</h3>

  <div className="flex gap-4">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1FfJoauR3P/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
    >
      <FaFacebookF className="text-gray-300 group-hover:text-white transition" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/0_abdullah.1?igsh=MTh1dTZ5cjAxcGZoNQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full border border-gray-700 hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 hover:scale-110"
    >
      <FaInstagram className="text-gray-300 group-hover:text-white transition" />
    </a>

    {/* Email */}
    <Link
      href="/contact"
      className="group p-3 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500 transition-all duration-300 hover:scale-110"
    >
      <FaEnvelope className="text-gray-300 group-hover:text-white transition" />
    </Link>

  </div>
</motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Abdullah. Built with Next.js & Passion.
      </div>
    </footer>
  );
}