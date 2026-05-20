"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-6 py-24 overflow-hidden relative font-sans">

      {/* Floating Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-16"
        >
          About Me
        </motion.h1>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
           <motion.div
  whileHover={{ scale: 1.05, rotate: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="relative rounded-3xl overflow-visible shadow-soft border-4 border-white"
>
  
  {/* 🎀 Top Left Tape */}
  <div className="absolute -top-3 -left-3 w-10 h-4 bg-blue-300 rotate-[-25deg] shadow-md opacity-90" />

 
 
  {/* 🎀 Bottom Right Tape */}
  <div className="absolute -bottom-3 -right-3 w-10 h-4 bg-blue-300 rotate-[-25deg] shadow-md opacity-90" />

  <Image
    src="/myimg.jpeg"
    alt="Abdullah Babar"
    width={380}
    height={420}
    className="object-cover"
  />
</motion.div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-blue-600 font-semibold">Abdullah Babar</span>,
              a passionate <strong>Next.js & Frontend Developer</strong> who loves building
              modern, responsive, and interactive web applications.
            </p>

            <p>
              I specialize in creating beautiful user interfaces using{" "}
              <strong>React, Next.js, and Tailwind CSS</strong> with smooth animations
              and clean user experience.
            </p>

            <p>
              My focus is not only writing code but crafting experiences that feel fast,
              elegant, and professional.
            </p>

            <p>
              I am constantly learning new technologies and improving my skills to build
              better digital products.
            </p>
          </motion.div>
        </div>

        {/* STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-10 mt-24"
        >
          {[
            { number: "10+", label: "Projects Built" },
            { number: "1+", label: "Years Learning" },
            { number: "100%", label: "Passion for UI/UX" },
          ].map((item, i) => (
           <motion.div
  key={i}
  whileHover={{ y: -10, scale: 1.06 }}
  transition={{
    duration: 0.15,
    ease: "easeOut"
  }}
  className="bg-white p-10 rounded-2xl shadow-soft text-center hover:shadow-glow transition-all duration-150"
>
              <h3 className="font-heading text-4xl font-bold text-blue-600">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}