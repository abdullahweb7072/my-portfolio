"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";
import ClientWrapper from "@/Components/ClientWrapper";
import ThemeToggle from "@/Components/ThemeToggle";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const heroRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  
useEffect(() => {
  const card = cardRef.current;
  const hero = heroRef.current;
  const svg = svgRef.current;

  if (!card || !hero || !svg) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    gsap.set(card, {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    });
    return;
  }

  gsap.set(card, {
    opacity: 1,
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
  });

  // Initial Position
  const heroRect = hero.getBoundingClientRect();

  const baseX = heroRect.width * 0.68;
  const baseY = heroRect.height * 0.08;

  // Floating Animation
  gsap.to(card, {
    y: "+=18",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Breathing Scale
  gsap.to(card, {
    scale: 1.02,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.set(card, {
    x: baseX,
    y: baseY,
  });

  let currentX = 0;
  let currentY = 0;

  const moveCard = (e) => {
    const rect = hero.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = (mouseX / rect.width - 0.5) * 2;
    const yPercent = (mouseY / rect.height - 0.5) * 2;

    const targetX = xPercent * 25;
    const targetY = yPercent * 20;

    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    gsap.to(card, {
      x: baseX + currentX,
      y: baseY + currentY,
      rotateY: currentX * 0.6,
      rotateX: -currentY * 0.6,
      duration: 0.6,
      ease: "power3.out",
    });

    // Rope Physics
    const path = svg.querySelector("path");

    if (path) {
      const nav = document.getElementById("navbar-anchor");

      if (nav) {
        const navRect = nav.getBoundingClientRect();

        const ax = navRect.left + navRect.width / 2;
        const ay = navRect.bottom;

        const cardRect = card.getBoundingClientRect();

        const bx = cardRect.left + cardRect.width / 2;
        const by = cardRect.top;

        const curve = Math.abs(bx - ax) * 0.18;

        const d = `
          M ${ax} ${ay}
          C ${ax} ${ay + 180},
            ${bx} ${by - curve},
            ${bx} ${by}
        `;

        path.setAttribute("d", d);
      }
    }
  };

  window.addEventListener("mousemove", moveCard);

  return () => {
    window.removeEventListener("mousemove", moveCard);
  };
}, []);

  const projects = [
    {
      title: "Portfolio Website",
      image: "/projects/pfp-js.jpg",
      live: "https://abdullah-dev-portfoli-f.netlify.app",
    },
    {
      title: "Image Tools",
      image: "/projects/img-tool.jpg",
      live: "https://image-tool-project-ku6s.vercel.app/",
    },
    {
      title: "Luxury Cars Site",
      image: "/projects/car-site.jpg",
      live: "https://abdullah-cars.netlify.app/",
    },
  ];

  return (
    <ClientWrapper>
      <section className="min-h-screen bg-transparent transition-colors duration-500 overflow-x-hidden relative">
   <ThemeToggle/>

        <div id="navbar-anchor" className="absolute top-0 left-1/2 w-2 h-2" />

        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 dark:bg-white/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 dark:bg-white/5 blur-3xl rounded-full animate-pulse"></div>

        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          <path
  className="stroke-blue-400/60 dark:stroke-white/30 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
  strokeWidth="2.5" 
  fill="none"
/>
        </svg>

        <div className="h-screen flex items-center justify-center px-6 relative z-10">
          <div ref={heroRef} className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center w-full px-4 sm:px-6">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6 order-2 md:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] transition-colors duration-500 leading-tight"
              >
                {/* CHANGED: dark:text-blue-400 -> dark:text-white */}
                I build <span className="text-blue-600 dark:text-white underline decoration-white/20">modern, fast & animated</span> web experiences
              </motion.h1>

              <p className="text-lg text-[var(--foreground)] opacity-80 transition-colors duration-500 leading-relaxed">
                I’m Abdullah Babar, a Next.js developer focused on crafting smooth UI, micro-interactions, and performance-first web applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="#projects"
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg overflow-hidden group"
                >
                  {/* CHANGED: dark:from-blue-500 dark:to-indigo-500 -> dark:from-white/10 dark:to-white/20 */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-zinc-800 dark:to-zinc-700 border dark:border-white/20 rounded-lg transition-all duration-300 group-hover:scale-110"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-400/50 dark:bg-white/10"></span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></span>
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                    View Work →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-blue-500 text-blue-600 dark:text-white dark:border-white"
                >
                  <span className="absolute inset-0 bg-blue-600 dark:bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-blue-400 dark:bg-white blur-xl transition duration-300"></span>
                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Contact Me →
                  </span>
                </Link>

                <a
                  href="/Abdullah_Babar_CV.pdf"
                  download
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-[var(--foreground)] text-[var(--foreground)] transition-colors duration-500"
                >
                  <span className="absolute inset-0 bg-[var(--foreground)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative z-10 group-hover:text-[var(--background)] transition-colors duration-300">
                    Download CV →
                  </span>
                </a>
              </div>
            </motion.div>

            {/* INTERACTIVE DRAG CARD */}
           
<div
  ref={cardRef}
  style={{ opacity: 1 }}
  className="
    z-30
    bg-white/10 dark:bg-white/5
    backdrop-blur-3xl
    border border-white/20
    shadow-[0_25px_80px_rgba(0,0,0,0.35)]
    rounded-[24px] md:rounded-[32px]
    
    p-3 md:p-5
    
    relative
    mx-auto
    mt-10
    md:absolute
    md:mt-0
    md:mx-0
    
    transition-colors duration-500
    
    before:absolute
    before:inset-0
    before:rounded-[24px]
    md:before:rounded-[32px]
    before:bg-gradient-to-br
    before:from-white/20
    before:to-transparent
    before:pointer-events-none
    
    overflow-hidden
  "
>
  {/* IMAGE */}
  <div className="w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-80 relative rounded-2xl overflow-hidden">
    <Image
      src="/myimg.jpeg"
      alt="About Abdullah"
      width={260}
      height={260}
      className="rounded-2xl shadow-xl object-cover w-full h-full"
      priority
    />
  </div>

  {/* TEXT */}
  <div className="text-center mt-4 md:mt-5">
    <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] transition-colors duration-500">
      Abdullah Babar
    </h3>

    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
      Frontend Developer
    </p>
  </div>
</div>

          </div>
        </div>

        {/* ================== PROJECTS SECTION ================== */}
        {/* ================== PROJECTS SECTION ================== */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1 }}
  className="relative py-32 overflow-hidden"
>
  {/* BACKGROUND GLOWS */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

  {/* FLOATING PARTICLES */}
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -35, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 4 + i,
      }}
      className="absolute w-2 h-2 rounded-full bg-white/10"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}

  {/* HEADING */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10"
  >
    <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-5">
      Featured Work
    </p>

    <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
      My Projects
    </h2>

    <p className="text-lg text-[var(--foreground)]/70 mt-8 max-w-2xl mx-auto leading-relaxed">
      A collection of immersive digital experiences built with modern UI,
      cinematic animations and performance-first frontend architecture.
    </p>
  </motion.div>

  {/* PROJECT GRID */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.18,
        },
      },
    }}
    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"
  >
    {projects.map((project, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: {
            opacity: 0,
            y: 80,
            scale: 0.92,
          },

          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <motion.div
            whileHover={{
              y: -18,
              rotateX: 4,
              rotateY: 2,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="
              relative
              h-[460px]

              rounded-[38px]
              overflow-hidden

              border border-white/10

              backdrop-blur-3xl
              bg-white/[0.03]

              shadow-[0_25px_90px_rgba(0,0,0,0.35)]

              preserve-3d
            "
          >
            {/* HOVER GRADIENT */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-blue-500/10
                via-transparent
                to-purple-500/10

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-700

                z-10
              "
            />

            {/* ANIMATED LIGHT */}
            <motion.div
              animate={{
                x: [-250, 250],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: i * 0.5,
              }}
              className="
                absolute
                top-0
                left-0

                w-28
                h-full

                bg-white/10
                blur-3xl
                rotate-12

                z-20
              "
            />

            {/* NUMBERING */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
              }}
              className="
                absolute
                top-5
                left-5
                z-30

                w-16
                h-16

                rounded-2xl

                border border-white/10
                bg-black/30
                backdrop-blur-2xl

                flex
                items-center
                justify-center

                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
            >
              <span
                className="
                  text-2xl
                  font-black

                  bg-gradient-to-br
                  from-blue-400
                  to-purple-400

                  bg-clip-text
                  text-transparent
                "
              >
                0{i + 1}
              </span>
            </motion.div>

            {/* IMAGE */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                whileHover={{
                  scale: 1.12,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover

                    brightness-[0.65]

                    group-hover:brightness-[0.9]

                    transition-all
                    duration-700
                  "
                />
              </motion.div>
            </div>

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent

                z-10
              "
            />

            {/* PARTICLES */}
            {[...Array(6)].map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + idx,
                }}
                className="
                  absolute
                  w-2
                  h-2
                  rounded-full
                  bg-white/20
                  z-20
                "
                style={{
                  top: `${20 + idx * 12}%`,
                  left: `${10 + idx * 14}%`,
                }}
              />
            ))}

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0
                left-0

                w-full
                p-8

                z-30
              "
            >
              {/* TOP TAG */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2
                  mb-5

                  rounded-full

                  border border-white/10
                  bg-white/10

                  backdrop-blur-xl

                  text-xs
                  tracking-[0.2em]
                  uppercase
                  text-white/80
                "
              >
                Featured Project
              </div>

              {/* TITLE */}
              <motion.h3
                whileHover={{
                  x: 6,
                }}
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  text-white
                "
              >
                {project.title}
              </motion.h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-white/70 leading-relaxed max-w-md">
                Modern interactive web experience with premium animations,
                immersive UI and performance-focused frontend development.
              </p>

              {/* BUTTON */}
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="
                  mt-7

                  inline-flex
                  items-center
                  gap-3

                  text-blue-300
                  dark:text-white

                  font-semibold
                  tracking-wide
                "
              >
                Explore Project
                <span className="text-xl">→</span>
              </motion.div>
            </div>

            {/* BORDER GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[38px]

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-700

                shadow-[0_0_70px_rgba(59,130,246,0.25)]
              "
            />
          </motion.div>
        </Link>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

        
{/* ================== ABOUT SECTION ================== */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-7xl mx-auto mt-40 px-6 relative overflow-hidden"
>
  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[140px] rounded-full pointer-events-none" />

  {/* HEADING */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24 relative z-10"
  >
    <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-4">
      About Me
    </p>

    <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
      Building
      <span className="block">
        immersive experiences
      </span>
    </h2>
  </motion.div>

  <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">

    {/* ================= IMAGE SIDE ================= */}
    {/* ================= IMAGE SIDE ================= */}
<div className="relative flex justify-center items-center min-h-[420px] md:min-h-[620px] overflow-hidden">

  {/* OUTER ROTATING RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    }}
    className="
      absolute
      w-[260px]
      h-[260px]
      sm:w-[320px]
      sm:h-[320px]
      md:w-[420px]
      md:h-[420px]
      rounded-full
      border
      border-blue-500/10
    "
  />

  {/* SECOND RING */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      repeat: Infinity,
      duration: 40,
      ease: "linear",
    }}
    className="
      absolute
      w-[340px]
      h-[340px]
      sm:w-[420px]
      sm:h-[420px]
      md:w-[540px]
      md:h-[540px]
      rounded-full
      border
      border-white/10
    "
  />

  {/* ORBIT DOTS */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    }}
    className="
      absolute
      w-[340px]
      h-[340px]
      sm:w-[420px]
      sm:h-[420px]
      md:w-[540px]
      md:h-[540px]
    "
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />

    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />

    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-pink-400 shadow-[0_0_25px_rgba(244,114,182,0.8)]" />
  </motion.div>

  {/* FLOATING TAG */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      repeat: Infinity,
      duration: 4,
    }}
    className="
      absolute
      top-4
      left-2
      sm:left-6
      md:left-0

      px-3
      py-2
      md:px-5
      md:py-3

      rounded-2xl
      backdrop-blur-2xl
      border border-white/10
      bg-transparent

      text-[11px]
      sm:text-xs
      md:text-sm

      text-[var(--foreground)]

      shadow-[0_15px_40px_rgba(0,0,0,0.2)]

      z-30
    "
  >
    ⚡ Smooth UI
  </motion.div>

  {/* FLOATING TAG */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{
      repeat: Infinity,
      duration: 5,
    }}
    className="
      absolute
      bottom-4
      right-2
      sm:right-6
      md:right-0

      px-3
      py-2
      md:px-5
      md:py-3

      rounded-2xl
      backdrop-blur-2xl
      border border-white/10
      bg-transparent

      text-[11px]
      sm:text-xs
      md:text-sm

      text-[var(--foreground)]

      shadow-[0_15px_40px_rgba(0,0,0,0.2)]

      z-30
    "
  >
    🔥 Modern Animation
  </motion.div>

  {/* IMAGE */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
    className="relative z-20"
  >
    {/* IMAGE GLOW */}
    <div className="absolute inset-0 blur-[60px] md:blur-[90px] rounded-full scale-90" />

    <Image
      src="/my-img-bg-removed.png"
      alt="Abdullah Babar"
      width={420}
      height={620}
      priority
      className="
        relative
        object-contain
        select-none

        w-[220px]
        sm:w-[280px]
        md:w-[420px]

        h-auto

        drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
        md:drop-shadow-[0_45px_80px_rgba(0,0,0,0.45)]
      "
    />
  </motion.div>
</div>

    {/* ================= RIGHT SIDE ================= */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >

      {/* BLOCK */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border border-white/10
          backdrop-blur-2xl
          bg-transparent
          p-8
         
        "
      >
        <div className="absolute inset-0 pointer-events-none" />

        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-4 relative z-10">
          Passion
        </p>

        <h3 className="text-3xl font-bold text-[var(--foreground)] mb-5 relative z-10">
          Crafting premium digital experiences
        </h3>

        <p className="text-[var(--foreground)]/70 leading-relaxed text-lg relative z-10">
          I love building interfaces that feel cinematic, smooth and
          deeply interactive with modern motion design principles.
        </p>

        {/* MINI TAGS */}
        <div className="flex flex-wrap gap-3 mt-7 relative z-10">
          {["Modern UI", "Animations", "Responsive"].map((item, i) => (
            <div
              key={i}
              className="
                px-4
                py-2
                rounded-full
                border border-white/10
                bg-transparent
                text-sm
                text-[var(--foreground)]/70
              "
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* BLOCK */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border border-white/10
          backdrop-blur-2xl
          bg-transparent
          p-8
          
        "
      >
        <div className="absolute inset-0 pointer-events-none" />

        <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4 relative z-10">
          Vision
        </p>

        <h3 className="text-3xl font-bold text-[var(--foreground)] mb-5 relative z-10">
          Blending aesthetics with performance
        </h3>

        <p className="text-[var(--foreground)]/70 leading-relaxed text-lg relative z-10">
          My goal is to create fast, beautiful and immersive web
          products that feel unforgettable for users.
        </p>

        {/* MINI TAGS */}
        <div className="flex flex-wrap gap-3 mt-7 relative z-10">
          {["Next.js", "Performance", "UX"].map((item, i) => (
            <div
              key={i}
              className="
                px-4
                py-2
                rounded-full
                border border-white/10
                bg-transparent
                text-sm
                text-[var(--foreground)]/70
              "
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  </div>
</motion.section>

<motion.section
  id="skills"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-7xl mx-auto mt-28 md:mt-40 px-4 sm:px-6 relative overflow-hidden"
>
  {/* HEADING */}
  <div className="text-center mb-16 md:mb-24">
    <p className="uppercase tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
      Expertise
    </p>

    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--foreground)]">
      My Skills
    </h2>
  </div>

  {/* CENTER AREA */}
 <div className="relative flex items-center justify-center min-h-[950px] sm:min-h-[760px] md:min-h-[850px]">

    {/* OUTER RING */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      }}
      className="
        absolute
        w-[320px]
        h-[320px]
        sm:w-[500px]
        sm:h-[500px]
        md:w-[650px]
        md:h-[650px]
        rounded-full
        border
        border-blue-500/10
      "
    />

    {/* INNER RING */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
      className="
        absolute
        w-[240px]
        h-[240px]
        sm:w-[380px]
        sm:h-[380px]
        md:w-[500px]
        md:h-[500px]
        rounded-full
        border
        border-white/10
      "
    />

    {/* ================= FLOATING INFO CARD — FRONTEND ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      animate={{
        y: [0, -12, 0],
      }}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-0

        sm:left-0
        sm:translate-x-0
        sm:top-10

        w-full
        max-w-[320px]
        sm:w-[240px]
        md:w-[260px]

        rounded-[24px]
        md:rounded-[28px]

        border border-white/10
        backdrop-blur-2xl

        p-5
        md:p-6

        shadow-[0_20px_60px_rgba(0,0,0,0.25)]

        lg:block
      "
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
          <FaReact className="text-cyan-400 text-2xl md:text-3xl" />
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
            Frontend
          </h3>

          <p className="text-xs md:text-sm text-[var(--foreground)]/60">
            Interactive UI
          </p>
        </div>
      </div>

      <p className="text-sm md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
        Building smooth, responsive and cinematic interfaces using
        React, Next.js, Tailwind and Framer Motion.
      </p>

      <div className="flex gap-2 mt-5 flex-wrap">
        {["React", "Next.js", "Tailwind"].map((item, i) => (
          <span
            key={i}
            className="
              px-3
              py-1
              rounded-full
              text-[11px]
              md:text-xs
              border border-white/10
              text-[var(--foreground)]/70
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>

    {/* ================= FLOATING INFO CARD — ANIMATION ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      animate={{
        y: [0, 12, 0],
      }}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-0

        sm:right-0
        sm:left-auto
        sm:translate-x-0
        sm:bottom-10

        w-full
        max-w-[320px]
        sm:w-[240px]
        md:w-[260px]

        rounded-[24px]
        md:rounded-[28px]

        border border-white/10
        backdrop-blur-2xl

        p-5
        md:p-6

        shadow-[0_20px_60px_rgba(0,0,0,0.25)]

        lg:block
      "
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
          <FaJs className="text-yellow-400 text-2xl md:text-3xl" />
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
            Motion & UX
          </h3>

          <p className="text-xs md:text-sm text-[var(--foreground)]/60">
            Premium Feel
          </p>
        </div>
      </div>

      <p className="text-sm md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
        Creating fluid animations, hover interactions and immersive
        user experiences with modern motion principles.
      </p>

      <div className="flex gap-2 mt-5 flex-wrap">
        {["GSAP", "Framer", "UI/UX"].map((item, i) => (
          <span
            key={i}
            className="
              px-3
              py-1
              rounded-full
              text-[11px]
              md:text-xs
              border border-white/10
              text-[var(--foreground)]/70
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>

    {/* ================= FLOATING STATS ================= */}
    <motion.div
      ref={ref}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="
        absolute
        top-1/2
        left-4
        -translate-y-1/2

        hidden
        xl:flex

        flex-col
        gap-5
      "
    >
    
    </motion.div>

    {/* ================= ROTATING SKILLS ================= */}
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
      className="
        absolute
        w-[260px]
        h-[260px]

        sm:w-[420px]
        sm:h-[420px]

        md:w-[520px]
        md:h-[520px]
      "
    >
      {[
        {
          icon: <FaHtml5 className="text-orange-500 text-3xl md:text-5xl" />,
          angle: 0,
          name: "HTML",
        },
        {
          icon: <FaCss3Alt className="text-blue-500 text-3xl md:text-5xl" />,
          angle: 60,
          name: "CSS",
        },
        {
          icon: <FaJs className="text-yellow-400 text-3xl md:text-5xl" />,
          angle: 120,
          name: "JavaScript",
        },
        {
          icon: <FaReact className="text-cyan-400 text-3xl md:text-5xl" />,
          angle: 180,
          name: "React",
        },
        {
          icon: (
            <SiNextdotjs className="text-[var(--foreground)] text-3xl md:text-5xl" />
          ),
          angle: 240,
          name: "Next.js",
        },
        {
          icon: (
            <SiPostgresql className="text-indigo-500 dark:text-white text-3xl md:text-5xl" />
          ),
          angle: 300,
          name: "PostgreSQL",
        },
      ].map((skill, i) => {
        const radius = expanded
          ? window.innerWidth < 640
            ? 130
            : window.innerWidth < 768
            ? 170
            : 220
          : 0;

        const x =
          Math.cos((skill.angle * Math.PI) / 180) * radius;

        const y =
          Math.sin((skill.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            animate={{
              x,
              y,
              opacity: expanded ? 1 : 0,
              scale: expanded ? 1 : 0,
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.8,
              type: "spring",
              stiffness: 120,
            }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* COUNTER ROTATION */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.12,
                  y: -8,
                }}
                className="
                  w-20
                  h-20

                  sm:w-24
                  sm:h-24

                  md:w-28
                  md:h-28

                  rounded-[22px]
                  md:rounded-[30px]

                  border border-white/10
                  backdrop-blur-2xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.3)]

                  flex flex-col items-center justify-center

                  gap-2
                  md:gap-3
                "
              >
                {skill.icon}

                <span className="text-[10px] sm:text-xs md:text-sm text-[var(--foreground)]">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>

    {/* ================= CENTER BUTTON ================= */}
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.08 }}
      onClick={() => setExpanded(!expanded)}
      className="
        relative
        z-30

        w-28
        h-28

        sm:w-36
        sm:h-36

        md:w-44
        md:h-44

        rounded-full

        border border-white/10
        backdrop-blur-3xl

        overflow-hidden

        shadow-[0_25px_80px_rgba(0,0,0,0.4)]

        flex flex-col items-center justify-center
      "
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

      {/* PULSE */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-blue-400/20
        "
      />

      <div className="relative z-10 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)]">
          {expanded ? "Close" : "Click To Expolre"}
        </h3>

        <p className="text-[10px] sm:text-xs md:text-sm text-[var(--foreground)]/70 mt-1">
          Skills
        </p>
      </div>
    </motion.button>
  </div>
</motion.section>
<motion.section
  id="experience"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="max-w-7xl mx-auto mt-40 px-6 relative overflow-hidden"
>
  {/* BACKGROUND GLOWS */}
  <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

  {/* HEADING */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24 relative z-10"
  >
    <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-4">
      Journey
    </p>

    <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
      Experience
    </h2>

    <p className="mt-6 text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
      My path of building immersive interfaces, modern web products and
      continuously evolving as a frontend developer.
    </p>
  </motion.div>

  {/* TIMELINE */}
  <div className="relative max-w-5xl mx-auto">

    {/* CENTER LINE */}
    <div
      className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[2px]
        h-full
        bg-gradient-to-b
        from-blue-500/0
        via-blue-500/40
        to-purple-500/0
        hidden md:block
      "
    />

    {[
      {
        title: "Freelance Frontend Projects",
        year: "2025",
        desc:
          "Built modern responsive websites and interactive UI experiences using Next.js, Tailwind CSS and Framer Motion.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        side: "left",
      },

      {
        title: "Portfolio & UI Experiments",
        year: "2025",
        desc:
          "Designed cinematic portfolio experiences with immersive animations, smooth transitions and modern layouts.",
        tech: ["GSAP", "UI/UX", "Animation"],
        side: "right",
      },

      {
        title: "Daily Learning & Building",
        year: "Present",
        desc:
          "Continuously improving through real-world projects, creative experiments and exploring cutting-edge frontend technologies.",
        tech: ["React", "Performance", "Modern Web"],
        side: "left",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: i * 0.2,
          duration: 0.9,
          ease: "easeOut",
        }}
        className={`
          relative
          mb-24
          flex
          ${item.side === "right"
            ? "md:justify-end"
            : "md:justify-start"}
        `}
      >

        {/* GLOW DOT */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
            hidden md:flex
            absolute
            left-1/2
            top-10
            -translate-x-1/2
            w-6
            h-6
            rounded-full
            bg-blue-500
            shadow-[0_0_35px_rgba(59,130,246,0.9)]
            z-20
          "
        />

        {/* CARD */}
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
          className="
            relative
            w-full
            md:w-[44%]

            rounded-[34px]
            border border-white/10

            backdrop-blur-3xl

            p-8

            overflow-hidden

            shadow-[0_20px_70px_rgba(0,0,0,0.25)]
          "
        >

          {/* HOVER GRADIENT */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              hover:opacity-100
              transition-opacity
              duration-500

              bg-gradient-to-br
              from-blue-500/10
              via-transparent
              to-purple-500/10
            "
          />

          {/* TOP ROW */}
          <div className="relative z-10 flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">
                Experience
              </p>

              <h3 className="text-3xl font-black text-[var(--foreground)]">
                {item.title}
              </h3>
            </div>

            {/* YEAR BADGE */}
            <div
              className="
                px-5
                py-2
                rounded-2xl
                border border-white/10
                text-sm
                text-[var(--foreground)]
                backdrop-blur-xl
              "
            >
              {item.year}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="relative z-10 text-[var(--foreground)]/70 leading-relaxed text-lg">
            {item.desc}
          </p>

          {/* TECH TAGS */}
          <div className="relative z-10 flex flex-wrap gap-3 mt-8">
            {item.tech.map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  px-4
                  py-2
                  rounded-2xl
                  border border-white/10
                  backdrop-blur-xl
                  text-sm
                  text-[var(--foreground)]/80
                "
              >
                {tag}
              </motion.div>
            ))}
          </div>

          {/* FLOATING LIGHT */}
          <motion.div
            animate={{
              x: [-100, 250],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: i * 1.2,
            }}
            className="
              absolute
              top-0
              left-0
              w-32
              h-full
              bg-white/10
              blur-2xl
              rotate-12
            "
          />
        </motion.div>
      </motion.div>
    ))}
  </div>

  {/* BOTTOM STATS */}
  
</motion.section>

        {/* ================== CONTACT SECTION ================== */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="relative max-w-7xl mx-auto mt-40 px-6 overflow-hidden"
>
  {/* BACKGROUND GLOWS */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[140px] rounded-full pointer-events-none" />

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none" />

  {/* FLOATING PARTICLES */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        repeat: Infinity,
        duration: 4 + i,
      }}
      className="absolute w-2 h-2 rounded-full border border-white/20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}

  {/* HEADING */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24 relative z-10"
  >
    <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-4">
      Contact
    </p>

    <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
      Let’s Build
      <span className="block">
        Something Amazing
      </span>
    </h2>

    <p className="mt-6 text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
      Have an idea, project or collaboration in mind?
      Let’s create immersive digital experiences together.
    </p>
  </motion.div>

  {/* WRAPPER CONTAINER */}
  <div
    className="
      relative
      z-10
      rounded-[40px]
      border border-white/10
      backdrop-blur-3xl
      bg-white/[0.04]
      
      p-5 md:p-8
    "
  >
    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT CARD */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border border-white/10

          backdrop-blur-[40px]
          bg-white/[0.06]

          shadow-[0_15px_50px_rgba(0,0,0,0.2)]

          p-10
        "
      >
        {/* EXTRA GLASS LAYER */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

        <div className="relative z-10">
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-5">
            Why Work With Me
          </p>

          <h3 className="text-4xl font-black text-[var(--foreground)] mb-6">
            Premium UI &
            <br />
            Smooth Experiences
          </h3>

          <p className="text-[var(--foreground)]/70 leading-relaxed text-lg">
            I focus on building modern, cinematic and high-performance
            web experiences with immersive interactions and polished UI.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">
            {[
              "⚡ Fast Performance",
              "🎨 Modern UI Design",
              "🚀 Smooth Animations",
              "📱 Fully Responsive",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border border-white/10

                  backdrop-blur-2xl
                  bg-white/[0.05]

                  px-5
                  py-4
                  text-[var(--foreground)]/80
                "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-8">

        {/* EMAIL CARD */}
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border border-white/10

            backdrop-blur-[40px]
            bg-white/[0.06]

            shadow-[0_15px_50px_rgba(0,0,0,0.2)]

            p-8
          "
        >
          {/* EXTRA GLASS */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-3">
              Email
            </p>

            <h3 className="text-3xl font-black text-[var(--foreground)] mb-4">
              Start a Project
            </h3>

            <p className="text-[var(--foreground)]/70 mb-8 leading-relaxed">
              Let’s discuss your next idea and turn it into an immersive experience.
            </p>

            <Link
              href="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                px-8
                py-4
                font-semibold
                text-white
              "
            >
              {/* BG */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-110" />

              {/* GLOW */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-blue-400/50" />

              {/* SWEEP */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20" />

              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                Email Me →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* SOCIAL CARD */}
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border border-white/10

            backdrop-blur-[40px]
            bg-white/[0.06]

            shadow-[0_20px_70px_rgba(0,0,0,0.3)]

            p-8
          "
        >
          {/* EXTRA GLASS */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-3">
              Social
            </p>

            <h3 className="text-3xl font-black text-[var(--foreground)] mb-4">
              Let’s Connect
            </h3>

            <p className="text-[var(--foreground)]/70 mb-8 leading-relaxed">
              Follow my journey, UI experiments and modern web creations.
            </p>

            <Link
              href="https://www.instagram.com/0_abdullah.1"
              target="_blank"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                px-8
                py-4
                font-semibold
                border border-white/10
                text-[var(--foreground)]
              "
            >
              {/* HOVER FILL */}
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* GLOW */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-2xl transition duration-300" />

              {/* SWEEP */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20" />

              <span className="relative z-10 group-hover:text-black transition-colors duration-300 group-hover:tracking-wider">
                Instagram →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</motion.section>

        {/* ================== INFINITE SKILLS MARQUEE ================== */}
        <div className="max-w-7xl mx-auto w-full overflow-hidden mt-24 py-24 relative z-10">

  {/* TOP FADE */}
  <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />

  {/* RIGHT FADE */}
  <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[700px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full" />
  </div>

  {/* MARQUEE */}
  <motion.div
    className="flex w-max gap-16 md:gap-24"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 18,
      ease: "linear",
    }}
  >
    {[
      {
        icon: <FaHtml5 className="text-orange-500" />,
        name: "HTML5",
      },
      {
        icon: <FaCss3Alt className="text-blue-500" />,
        name: "CSS3",
      },
      {
        icon: <FaJs className="text-yellow-400" />,
        name: "JavaScript",
      },
      {
        icon: <FaReact className="text-cyan-400" />,
        name: "React",
      },
      {
        icon: <SiNextdotjs className="text-[var(--foreground)]" />,
        name: "Next.js",
      },
      {
        icon: (
          <SiPostgresql className="text-indigo-500 dark:text-white" />
        ),
        name: "PostgreSQL",
      },

      // DUPLICATE FOR SMOOTH LOOP
      {
        icon: <FaHtml5 className="text-orange-500" />,
        name: "HTML5",
      },
      {
        icon: <FaCss3Alt className="text-blue-500" />,
        name: "CSS3",
      },
      {
        icon: <FaJs className="text-yellow-400" />,
        name: "JavaScript",
      },
      {
        icon: <FaReact className="text-cyan-400" />,
        name: "React",
      },
      {
        icon: <SiNextdotjs className="text-[var(--foreground)]" />,
        name: "Next.js",
      },
      {
        icon: (
          <SiPostgresql className="text-indigo-500 dark:text-white" />
        ),
        name: "PostgreSQL",
      },
    ].map((skill, i) => (
      <motion.div
        key={i}
        whileHover={{
          y: -14,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        className="
          group
          relative
          flex
          flex-col
          items-center
          justify-center

          w-36
          h-36

          rounded-[32px]

          border border-white/10

          backdrop-blur-3xl
          bg-white/[0.03]

          overflow-hidden
        "
      >
        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500

            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-purple-500/10
          "
        />

        {/* FLOATING LIGHT */}
        <motion.div
          animate={{
            x: [-120, 120],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            delay: i * 0.3,
          }}
          className="
            absolute
            top-0
            left-0
            w-20
            h-full
            bg-white/10
            blur-2xl
            rotate-12
          "
        />

        {/* ICON */}
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative z-10 text-6xl"
        >
          {skill.icon}
        </motion.div>

        {/* TEXT */}
        <p
          className="
            relative
            z-10
            mt-4
            text-sm
            tracking-wide
            text-[var(--foreground)]/70
            group-hover:text-[var(--foreground)]
            transition-colors
            duration-300
          "
        >
          {skill.name}
        </p>

        {/* BORDER GLOW */}
        <div
          className="
            absolute
            inset-0
            rounded-[32px]
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500

            shadow-[0_0_40px_rgba(59,130,246,0.25)]
          "
        />
      </motion.div>
    ))}
  </motion.div>
</div>
      </section>
    </ClientWrapper>
  );
}