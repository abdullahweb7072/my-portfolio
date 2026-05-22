"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ThemeToggle from "@/Components/ThemeToggle";
import CountUp from "react-countup";

export default function AboutPage() {
  return (
    <>
      {/* UPDATED: Dynamic background matching your home layout */}
      <section className="min-h-screen bg-transparent px-6 py-24 overflow-hidden relative font-sans transition-colors duration-500">
        <ThemeToggle />

        {/* Floating Background Blurs - Adapted for Dark Mode */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading - Updated for Dark Mode */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-5xl md:text-6xl font-extrabold text-center text-[var(--foreground)] dark:text-white mb-16 transition-colors duration-500"
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
               initial={{ opacity: 0, x: -80 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="flex justify-center"
             >
               <motion.div
                 whileHover={{
                   rotateY: 8,
                   rotateX: -4,
                   scale: 1.03,
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 180,
                   damping: 18,
                 }}
                 style={{
                   transformStyle: "preserve-3d",
                 }}
                 className="group relative"
               >
             
                 {/* GLOW */}
                 <div
                   className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-indigo-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700"
                 />
             
                 {/* ANIMATED BORDER */}
                 <div
                   className="
                     absolute
                     inset-0
                     rounded-[32px]
                     p-[1.5px]
                     bg-[linear-gradient(130deg,rgba(59,130,246,0.9),rgba(255,255,255,0.9),rgba(139,92,246,0.9))]
                   "
                 >
                   <div className="w-full h-full rounded-[32px] bg-white dark:bg-[#0b0b0f]" />
                 </div>
             
                 {/* FLOATING BADGE */}
                 <motion.div
                   animate={{
                     y: [0, -10, 0],
                   }}
                   transition={{
                     repeat: Infinity,
                     duration: 3,
                     ease: "easeInOut",
                   }}
                   className="
                     absolute
                     -top-6
                     -right-6
                     z-30
                     px-5
                     py-3
                     rounded-2xl
                     bg-white/80
                     dark:bg-white/10
                     backdrop-blur-2xl
                     border
                     border-white/20
                     shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                   "
                 >
                   <p className="text-sm font-semibold text-[var(--foreground)] dark:text-white">
                     Next.js Developer ✦
                   </p>
                 </motion.div>
             
                 {/* SMALL FLOATING BADGE */}
                 <motion.div
                   animate={{
                     y: [0, 8, 0],
                   }}
                   transition={{
                     repeat: Infinity,
                     duration: 4,
                     ease: "easeInOut",
                   }}
                   className="
                     absolute
                     -bottom-5
                     -left-5
                     z-30
                     px-4
                     py-2
                     rounded-xl
                     bg-blue-600
                     text-white
                     shadow-xl
                   "
                 >
                   <p className="text-xs font-medium">
                     UI / UX Focused
                   </p>
                 </motion.div>
             
                 {/* IMAGE WRAPPER */}
                 {/* IMAGE WRAPPER */}
{/* IMAGE WRAPPER */}
<div
  className="
    relative
    overflow-hidden
    rounded-[32px]
    w-[280px]
    md:w-[300px]
    h-[360px]
    md:h-[390px]
    backdrop-blur-xl
  "
>
                   {/* IMAGE */}
                   <motion.div
                     whileHover={{
                       scale: 1.08,
                     }}
                     transition={{
                       duration: 0.7,
                     }}
                     className="w-full h-full"
                   >
                     <Image
                       src="/myimg.jpeg"
                       alt="Abdullah Babar"
                       fill
                       priority
                       className="
                         object-cover
                         grayscale
                         group-hover:grayscale-0
                         transition-all
                         duration-700
                       "
                     />
                   </motion.div>
             
                   {/* DARK OVERLAY */}
                   <div
                     className="
                       absolute
                       inset-0
                       bg-gradient-to-t
                       from-black/40
                       via-transparent
                       to-transparent
                     "
                   />
             
                   {/* SHINE EFFECT */}
                   <div
                     className="
                       absolute
                       top-0
                       left-[-120%]
                       h-full
                       w-[120%]
                       rotate-12
                       bg-gradient-to-r
                       from-transparent
                       via-white/20
                       to-transparent
                       group-hover:left-[120%]
                       transition-all
                       duration-1000
                     "
                   />
             
                 </div>
             
               </motion.div>
             </motion.div>
            </motion.div>

            {/* RIGHT — TEXT - Updated colors to use Global CSS Variables */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6 text-[var(--foreground)] dark:text-white/90 text-lg leading-relaxed transition-colors duration-500"
            >
              <p className="opacity-90">
                Hello! I'm <span className="text-blue-600 dark:text-white font-semibold underline decoration-white/20">Abdullah Babar</span>,
                a passionate <strong>Next.js & Frontend Developer</strong> who loves building
                modern, responsive, and interactive web applications.
              </p>

              <p className="opacity-90">
                I specialize in creating beautiful user interfaces using{" "}
                <strong>React, Next.js, and Tailwind CSS</strong> with smooth animations
                and clean user experience.
              </p>

              <p className="opacity-90">
                My focus is not only writing code but crafting experiences that feel fast,
                elegant, and professional.
              </p>

              <p className="opacity-90">
                I am constantly learning new technologies and improving my skills to build
                better digital products.
              </p>
            </motion.div>
          </div>

          {/* STATS / HIGHLIGHTS - Adapted cards for dark backgrounds */}
          {/* STATS / HIGHLIGHTS - Adapted cards for dark backgrounds */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="grid md:grid-cols-3 gap-10 mt-24"
>
  {[
    { number: 10, suffix: "+", label: "Projects Built" },
    { number: 1, suffix: "+", label: "Years Learning" },
    { number: 100, suffix: "%", label: "Passion for UI/UX" },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10, scale: 1.06 }}
      transition={{
        duration: 0.15,
        ease: "easeOut"
      }}
      className="
        bg-[var(--background)]
        dark:bg-gray-900
        p-10
        rounded-2xl
        shadow-soft
        text-center
        hover:shadow-glow
        border
        border-gray-100
        dark:border-gray-800/60
        transition-all
        duration-300
        relative
        overflow-hidden
        group
      "
    >

      {/* Animated Glow */}
      <div className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-gradient-to-r
        from-blue-500/10
        via-purple-500/10
        to-indigo-500/10
      " />

      {/* Number */}
      <motion.h3
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 10,
          delay: i * 0.15,
        }}
        className="
          relative
          z-10
          font-heading
          text-5xl
          md:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-500
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]
        "
      >
        <CountUp
          end={item.number}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
        {item.suffix}
      </motion.h3>

      {/* Label */}
      <p className="
        relative
        z-10
        text-[var(--foreground)]
        mt-4
        text-lg
        font-medium
        transition-colors
        duration-500
      ">
        {item.label}
      </p>

    </motion.div>
  ))}
</motion.div>

        </div>
      </section>
      </>
  );
}