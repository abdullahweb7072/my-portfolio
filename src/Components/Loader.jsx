"use client";

import { motion } from "framer-motion";

export default function Loader() {
  const text = "Abdullah Babar".split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f5f7ff] dark:bg-[#05070d]"
    >
      {/* 🌌 NEW CINEMATIC AMBIENT BACKGROUND (ONLY CHANGE) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 blur-[160px]" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-indigo-500/10 blur-[180px]" />
      </div>

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#3b82f622_1px,transparent_1px),linear-gradient(to_bottom,#3b82f622_1px,transparent_1px)] bg-[size:70px_70px]"
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]"
      />

      {/* Floating Tiny Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.2,
              delay: i * 0.15,
            }}
            className="absolute w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white"
        >
          {text.map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Gradient Line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: "circOut",
          }}
          className="mt-6 h-[2px] w-[280px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-center shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        />

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="mt-5 text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 dark:text-white/50"
        >
          Frontend Developer • Next.js • UI Engineer
        </motion.p>

      </div>
    </motion.div>
  );
}