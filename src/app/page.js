
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

import ClientWrapper from "@/Components/ClientWrapper";
import ThemeToggle from "@/Components/ThemeToggle";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

export default function Home() {
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const heroRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // ============================================================
  // HERO CARD ANIMATION
  // ============================================================

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

    const heroRect = hero.getBoundingClientRect();

    const baseX = heroRect.width * 0.68;
    const baseY = heroRect.height * 0.08;

    // Floating animation
    gsap.to(card, {
      y: "+=18",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Breathing scale
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

      // Rope physics
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

  // ============================================================
  // PROJECTS
  // ============================================================

  const projects = [
    {
      title: "ChatHub",
      image: "/projects/chathub.PNG",
      live: "https://chathub-9bet.onrender.com",
    },
    {
      title: "Image Tools",
      image: "/projects/img-tool.PNG",
      live: "https://image-tool-project-ku6s.vercel.app/",
    },
    {
      title: "Luxury Cars Site",
      image: "/projects/car-site.jpg",
      live: "https://abdullah-cars.netlify.app/",
    },
  ];

  // ============================================================
  // PERN STACK
  // ============================================================

  const pernSkills = [
    {
      icon: <SiPostgresql className="text-blue-400 text-3xl md:text-5xl" />,
      name: "PostgreSQL",
      angle: 0,
    },
    {
      icon: <SiExpress className="text-[var(--foreground)] text-3xl md:text-5xl" />,
      name: "Express.js",
      angle: 45,
    },
    {
      icon: <FaReact className="text-cyan-400 text-3xl md:text-5xl" />,
      name: "React",
      angle: 90,
    },
    {
      icon: <FaNodeJs className="text-green-500 text-3xl md:text-5xl" />,
      name: "Node.js",
      angle: 135,
    },
    {
      icon: (
        <SiNextdotjs className="text-[var(--foreground)] text-3xl md:text-5xl" />
      ),
      name: "Next.js",
      angle: 180,
    },
    {
      icon: <FaJs className="text-yellow-400 text-3xl md:text-5xl" />,
      name: "JavaScript",
      angle: 225,
    },
    {
      icon: <FaHtml5 className="text-orange-500 text-3xl md:text-5xl" />,
      name: "HTML5",
      angle: 270,
    },
    {
      icon: <FaCss3Alt className="text-blue-500 text-3xl md:text-5xl" />,
      name: "CSS3",
      angle: 315,
    },
  ];

  return (
    <ClientWrapper>
      <section className="min-h-screen bg-transparent transition-colors duration-500 overflow-x-hidden relative">

        <ThemeToggle />

        {/* NAVBAR ANCHOR */}
        <div
          id="navbar-anchor"
          className="absolute top-0 left-1/2 w-2 h-2"
        />

        {/* BACKGROUND GLOWS */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 dark:bg-white/5 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 dark:bg-white/5 blur-3xl rounded-full animate-pulse" />

        {/* ROPE */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        >
          <path
            className="stroke-blue-400/60 dark:stroke-white/30 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>

        {/* ========================================================
            HERO
        ======================================================== */}

        <div className="h-screen flex items-center justify-center px-6 relative z-10">

          <div
            ref={heroRef}
            className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center w-full px-4 sm:px-6"
          >

            {/* ====================================================
                LEFT SIDE
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6 order-2 md:order-1"
            >

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="uppercase tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold"
              >
                PERN Stack Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] transition-colors duration-500 leading-tight"
              >
                I build{" "}
                <span className="text-blue-600 dark:text-white underline decoration-white/20">
                  modern, scalable & animated
                </span>{" "}
                full-stack web experiences
              </motion.h1>

              <p className="text-lg text-[var(--foreground)] opacity-80 transition-colors duration-500 leading-relaxed">
                I’m Abdullah Babar, a PERN stack developer focused on building
                scalable full-stack applications using PostgreSQL, Express.js,
                React and Node.js — with polished interfaces, smooth motion
                and performance-first architecture.
              </p>

              {/* STACK HIGHLIGHT */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "PostgreSQL",
                  "Express.js",
                  "React",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-blue-500/20
                      bg-blue-500/[0.06]
                      text-xs
                      text-[var(--foreground)]/70
                      backdrop-blur-xl
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">

                <Link
                  href="#projects"
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-zinc-800 dark:to-zinc-700 border dark:border-white/20 rounded-lg transition-all duration-300 group-hover:scale-110" />

                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-400/50 dark:bg-white/10" />

                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20" />

                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                    View Work →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-blue-500 text-blue-600 dark:text-white dark:border-white"
                >
                  <span className="absolute inset-0 bg-blue-600 dark:bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-blue-400 dark:bg-white blur-xl transition duration-300" />

                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Contact Me →
                  </span>
                </Link>

                <a
                  href="/Abdullah_Babar_CV.pdf"
                  download
                  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-[var(--foreground)] text-[var(--foreground)] transition-colors duration-500"
                >
                  <span className="absolute inset-0 bg-[var(--foreground)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  <span className="relative z-10 group-hover:text-[var(--background)] transition-colors duration-300">
                    Download CV →
                  </span>
                </a>

              </div>
            </motion.div>

            {/* ====================================================
                HERO PROFILE CARD
            ==================================================== */}

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

              <div className="text-center mt-4 md:mt-5">

                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] transition-colors duration-500">
                  Abdullah Babar
                </h3>

                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                  PERN Stack Developer
                </p>

                <div className="flex justify-center flex-wrap gap-2 mt-3">
                  {["PostgreSQL", "Express", "React", "Node.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                          text-[9px]
                          px-2
                          py-1
                          rounded-full
                          border
                          border-white/10
                          text-[var(--foreground)]/60
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            PROJECTS
        ======================================================== */}

       {/* ========================================================
    PROJECTS
======================================================== */}

<motion.section
  id="projects"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.8 }}
  className="relative py-20 md:py-24 overflow-hidden"
>
  {/* BACKGROUND GLOW */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/[0.06] blur-[120px] rounded-full pointer-events-none" />

  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/[0.05] blur-[100px] rounded-full pointer-events-none" />

  {/* ======================================================
      SECTION HEADER
  ====================================================== */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="max-w-6xl mx-auto px-6 text-center mb-14 md:mb-16 relative z-10"
  >
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-px bg-blue-500" />

      <p className="uppercase tracking-[0.3em] text-blue-500 text-xs sm:text-sm font-semibold">
        Selected Work
      </p>

      <span className="w-8 h-px bg-blue-500" />
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] leading-tight">
      Projects
    </h2>

    <p className="mt-5 text-sm sm:text-base md:text-lg text-[var(--foreground)]/60 max-w-xl mx-auto leading-relaxed">
      A selection of full-stack applications built with modern
      technologies, scalable architecture and polished user experiences.
    </p>
  </motion.div>

  {/* ======================================================
      PROJECT GRID
  ====================================================== */}

  <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {projects.map((project, i) => {

        const technologies = {
          "ChatHub": [
            "Next.js",
            "Node.js",
            "PostgreSQL",
          ],

          "Image Tools": [
            "Next.js",
            "React",
            "API",
          ],

          "Luxury Cars Site": [
            "Next.js",
            "React",
            "Tailwind",
          ],
        };

        return (
          <motion.div
            key={project.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >

            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >

              <motion.article
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
                className="
                  relative
                  h-full
                  rounded-[24px]
                  overflow-hidden
                  border border-white/[0.09]
                  bg-white/[0.025]
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-500
                  group-hover:border-blue-500/30
                  group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                "
              >

                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[240px] sm:h-[250px] overflow-hidden">

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        brightness-[0.72]
                        saturate-[0.85]
                        transition-all
                        duration-700
                        group-hover:brightness-[0.9]
                        group-hover:saturate-100
                      "
                    />

                  </motion.div>

                  {/* IMAGE GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* PROJECT NUMBER */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      w-10
                      h-10
                      rounded-xl
                      border
                      border-white/15
                      bg-black/40
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      z-20
                    "
                  >
                    <span className="text-xs font-bold text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* OPEN PROJECT */}

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-xl
                      border
                      border-white/15
                      bg-black/40
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      z-20
                      opacity-0
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-white text-lg">
                      ↗
                    </span>
                  </div>

                  {/* IMAGE TITLE */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      z-20
                    "
                  >

                    <span
                      className="
                        inline-flex
                        items-center
                        px-3
                        py-1
                        rounded-full
                        bg-white/10
                        border
                        border-white/10
                        backdrop-blur-xl
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-white/70
                      "
                    >
                      Full-Stack Project
                    </span>

                  </div>

                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="p-5 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          font-bold
                          text-[var(--foreground)]
                          transition-colors
                          duration-300
                          group-hover:text-blue-500
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[var(--foreground)]/55
                          leading-relaxed
                        "
                      >
                        Modern web application focused on performance,
                        responsive design and interactive user experience.
                      </p>

                    </div>

                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="flex flex-wrap gap-2 mt-5">

                    {technologies[project.title]?.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-2.5
                          py-1
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.03]
                          text-[10px]
                          sm:text-[11px]
                          text-[var(--foreground)]/55
                          transition-all
                          duration-300
                          group-hover:border-blue-500/20
                          group-hover:text-[var(--foreground)]/70
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* DIVIDER */}

                  <div className="h-px bg-white/[0.07] my-5" />

                  {/* FOOTER */}

                  <div className="flex items-center justify-between">

                    <span
                      className="
                        text-xs
                        font-medium
                        text-[var(--foreground)]/45
                        group-hover:text-blue-500
                        transition-colors
                        duration-300
                      "
                    >
                      View Project
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-8
                        h-8
                        rounded-full
                        border
                        border-white/10
                        text-[var(--foreground)]/50
                        group-hover:border-blue-500/40
                        group-hover:text-blue-500
                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    >
                      →
                    </span>

                  </div>

                </div>

                {/* ==================================================
                    SUBTLE HOVER LIGHT
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-blue-500/[0.05]
                    via-transparent
                    to-purple-500/[0.04]
                  "
                />

              </motion.article>

            </Link>

          </motion.div>
        );
      })}
    </motion.div>

  </div>

</motion.section>

        {/* ========================================================
            ABOUT
        ======================================================== */}

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-40 px-6 relative"
        >

          <div className="absolute top-20 left-[10%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.05] blur-[130px] pointer-events-none" />

          <div className="absolute bottom-0 right-[5%] w-[380px] h-[380px] rounded-full bg-purple-500/[0.04] blur-[130px] pointer-events-none" />

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
                full-stack experiences
              </span>
            </h2>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center relative z-10">

            {/* PROFILE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex justify-center items-center"
            >

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 18,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-[470px]
                  h-[540px]
                  sm:h-[590px]
                  rounded-[36px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.02]
                  backdrop-blur-2xl
                  shadow-[0_35px_100px_rgba(0,0,0,0.25)]
                "
              >

                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.05] via-transparent to-purple-500/[0.05] pointer-events-none" />

                <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[330px] h-[330px] rounded-full bg-blue-500/[0.10] blur-[100px] pointer-events-none" />

                {/* HEADER */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    z-30
                    flex
                    items-center
                    justify-between
                    px-6
                    sm:px-8
                    py-5
                    border-b
                    border-white/[0.07]
                  "
                >

                  <div className="flex items-center gap-3">

                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />

                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/50">
                      01 / About
                    </span>

                  </div>

                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/30">
                    PERN
                  </span>

                </div>

                {/* IMAGE */}
                <div className="absolute inset-x-0 top-[70px] bottom-[110px] flex items-end justify-center">

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      opacity: [0.25, 0.38, 0.25],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 w-[260px] h-[350px] sm:w-[310px] sm:h-[410px] rounded-full bg-blue-500/[0.10] blur-[80px]"
                  />

                  <div className="absolute bottom-0 w-[200px] h-[150px] rounded-full bg-purple-500/[0.06] blur-[65px]" />

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="relative z-20 h-full flex items-end justify-center"
                  >
                    <Image
                      src="/my-img-bg-removed.png"
                      alt="Abdullah Babar"
                      width={420}
                      height={620}
                      priority
                      className="object-contain select-none h-[92%] w-auto max-w-[95%] drop-shadow-[0_35px_70px_rgba(0,0,0,0.45)]"
                    />
                  </motion.div>

                </div>

                {/* CORNERS */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/60 rounded-tl-[36px] pointer-events-none" />

                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 rounded-tr-[36px] pointer-events-none" />

                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/20 rounded-bl-[36px] pointer-events-none" />

                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/60 rounded-br-[36px] pointer-events-none" />

                {/* BOTTOM INFO */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-30
                    px-6
                    sm:px-8
                    py-4
                    border-t
                    border-white/[0.07]
                    bg-[var(--background)]/20
                    backdrop-blur-xl
                  "
                >

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--foreground)]/30 mb-1">
                        Specialization
                      </p>

                      <p className="text-sm font-medium text-[var(--foreground)]/80">
                        PERN Stack Developer
                      </p>
                    </div>

                    <div className="flex items-center gap-2">

                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--foreground)]/40">
                        Available for work
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* STACK BADGE */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-2
                  sm:-right-5
                  top-20
                  z-40
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-[var(--background)]/70
                  backdrop-blur-xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                "
              >

                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--foreground)]/30 mb-1">
                  Stack
                </p>

                <p className="text-xs font-medium text-[var(--foreground)]/80">
                  PostgreSQL • Express
                </p>

                <p className="text-xs font-medium text-[var(--foreground)]/80">
                  React • Node.js
                </p>

              </motion.div>

              {/* FOCUS BADGE */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-2
                  sm:-left-5
                  bottom-20
                  z-40
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-[var(--background)]/70
                  backdrop-blur-xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                "
              >

                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--foreground)]/30 mb-1">
                  Focus
                </p>

                <p className="text-xs font-medium text-[var(--foreground)]/80">
                  Full-Stack • UI • Motion
                </p>

              </motion.div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >

              {/* PASSION */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  backdrop-blur-2xl
                  bg-transparent
                  p-8
                "
              >

                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/[0.07] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-4 relative z-10">
                  Full-Stack Development
                </p>

                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-5 relative z-10">
                  Building complete digital products
                </h3>

                <p className="text-[var(--foreground)]/70 leading-relaxed text-lg relative z-10">
                  I enjoy building applications from database to interface —
                  designing PostgreSQL schemas, developing REST APIs with
                  Express.js and Node.js, and creating polished React
                  experiences on top.
                </p>

                <div className="flex flex-wrap gap-3 mt-7 relative z-10">

                  {[
                    "PostgreSQL",
                    "Express.js",
                    "React",
                    "Node.js",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
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

              {/* VISION */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  backdrop-blur-2xl
                  bg-transparent
                  p-8
                "
              >

                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-500/[0.07] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4 relative z-10">
                  Vision
                </p>

                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-5 relative z-10">
                  Blending architecture with experience
                </h3>

                <p className="text-[var(--foreground)]/70 leading-relaxed text-lg relative z-10">
                  My goal is to combine reliable backend architecture with
                  beautiful frontend experiences — creating applications
                  that are scalable, fast, responsive and memorable.
                </p>

                <div className="flex flex-wrap gap-3 mt-7 relative z-10">

                  {[
                    "REST APIs",
                    "Performance",
                    "UX",
                    "Scalability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
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

        {/* ========================================================
            SKILLS
        ======================================================== */}

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-28 md:mt-40 px-4 sm:px-6 relative overflow-hidden"
        >

          <div className="text-center mb-16 md:mb-24">

            <p className="uppercase tracking-[0.35em] text-blue-500 text-xs sm:text-sm mb-4">
              PERN Stack & Expertise
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--foreground)]">
              My Skills
            </h2>

            <p className="mt-6 text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              From PostgreSQL databases and Node.js APIs to React interfaces
              and modern motion design, I build across the full application
              stack.
            </p>

          </div>

          <div className="relative flex items-center justify-center min-h-[1050px] sm:min-h-[850px] md:min-h-[900px]">

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
                md:w-[700px]
                md:h-[700px]
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
                md:w-[540px]
                md:h-[540px]
                rounded-full
                border
                border-white/10
              "
            />

            {/* FRONTEND CARD */}
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
                    React Ecosystem
                  </p>

                </div>

              </div>

              <p className="text-sm md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
                Building responsive and interactive interfaces with React,
                Next.js, Tailwind CSS and modern animation systems.
              </p>

              <div className="flex gap-2 mt-5 flex-wrap">

                {["React", "Next.js", "Tailwind"].map((item) => (
                  <span
                    key={item}
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

            {/* BACKEND CARD */}
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
              "
            >

              <div className="flex items-center gap-4 mb-5">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />
                </div>

                <div>

                  <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                    Backend
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--foreground)]/60">
                    APIs & Architecture
                  </p>

                </div>

              </div>

              <p className="text-sm md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
                Developing scalable REST APIs and backend systems with
                Node.js, Express.js and PostgreSQL.
              </p>

              <div className="flex gap-2 mt-5 flex-wrap">

                {["Node.js", "Express.js", "PostgreSQL"].map((item) => (
                  <span
                    key={item}
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

            {/* ROTATING SKILLS */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              }}
              className="
                absolute
                w-[260px]
                h-[260px]
                sm:w-[420px]
                sm:h-[420px]
                md:w-[560px]
                md:h-[560px]
              "
            >

              {pernSkills.map((skill, i) => {

                const radius =
                  expanded
                    ? window.innerWidth < 640
                      ? 130
                      : window.innerWidth < 768
                        ? 175
                        : 245
                    : 0;

                const x =
                  Math.cos((skill.angle * Math.PI) / 180) *
                  radius;

                const y =
                  Math.sin((skill.angle * Math.PI) / 180) *
                  radius;

                return (
                  <motion.div
                    key={skill.name}
                    animate={{
                      x,
                      y,
                      opacity: expanded ? 1 : 0,
                      scale: expanded ? 1 : 0,
                    }}
                    transition={{
                      delay: i * 0.06,
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

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 35,
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
                          flex flex-col
                          items-center
                          justify-center
                          gap-2
                          md:gap-3
                        "
                      >

                        {skill.icon}

                        <span className="text-[9px] sm:text-xs md:text-sm text-[var(--foreground)] text-center px-1">
                          {skill.name}
                        </span>

                      </motion.div>

                    </motion.div>

                  </motion.div>
                );
              })}

            </motion.div>

            {/* CENTER BUTTON */}
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
                flex flex-col
                items-center
                justify-center
              "
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

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
                  {expanded ? "Close" : "Click To Explore"}
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm text-[var(--foreground)]/70 mt-1">
                  PERN Stack
                </p>

              </div>

            </motion.button>

          </div>
        </motion.section>

        {/* ========================================================
            EXPERIENCE
        ======================================================== */}

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto mt-40 px-6 relative overflow-hidden"
        >

          <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

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
              My journey building full-stack applications, scalable backend
              systems and immersive frontend experiences with the PERN
              ecosystem.
            </p>

          </motion.div>

          <div className="relative max-w-5xl mx-auto">

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
                title: "Frontend Development",
                year: "2025",
                desc:
                  "Built modern responsive interfaces and interactive web experiences using React, Next.js, Tailwind CSS and Framer Motion.",
                tech: ["React", "Next.js", "Tailwind"],
                side: "left",
              },

              {
                title: "PERN Stack Development",
                year: "2026",
                desc:
                  "Expanded into full-stack development by building applications with PostgreSQL, Express.js, React and Node.js, including REST APIs and database-driven features.",
                tech: ["PostgreSQL", "Express.js", "Node.js"],
                side: "right",
              },

              {
                title: "Full-Stack Projects",
                year: "Present",
                desc:
                  "Continuously building real-world applications while improving backend architecture, API design, authentication, database management, performance and premium UI.",
                tech: ["PERN", "REST APIs", "Performance"],
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
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className={`
                  relative
                  mb-24
                  flex
                  ${
                    item.side === "right"
                      ? "md:justify-end"
                      : "md:justify-start"
                  }
                `}
              >

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

                  <div className="relative z-10 flex items-center justify-between mb-6">

                    <div>

                      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">
                        Experience
                      </p>

                      <h3 className="text-3xl font-black text-[var(--foreground)]">
                        {item.title}
                      </h3>

                    </div>

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

                  <p className="relative z-10 text-[var(--foreground)]/70 leading-relaxed text-lg">
                    {item.desc}
                  </p>

                  <div className="relative z-10 flex flex-wrap gap-3 mt-8">

                    {item.tech.map((tag) => (
                      <motion.div
                        key={tag}
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

        </motion.section>

        {/* ========================================================
            CONTACT
        ======================================================== */}

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto mt-40 px-6 overflow-hidden"
        >

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[140px] rounded-full pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none" />

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
              Have an idea, product or collaboration in mind?
              Let’s build a scalable full-stack experience together.
            </p>

          </motion.div>

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

            <div className="grid lg:grid-cols-2 gap-10">

              {/* LEFT */}
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

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                <div className="relative z-10">

                  <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-5">
                    Why Work With Me
                  </p>

                  <h3 className="text-4xl font-black text-[var(--foreground)] mb-6">
                    Full-Stack Architecture &
                    <br />
                    Premium Experiences
                  </h3>

                  <p className="text-[var(--foreground)]/70 leading-relaxed text-lg">
                    I build complete web applications with PostgreSQL,
                    Express.js, React and Node.js while maintaining a strong
                    focus on polished UI, smooth interactions and performance.
                  </p>

                  <div className="mt-10 space-y-5">

                    {[
                      "⚡ Fast & Scalable Applications",
                      "🗄️ PostgreSQL Database Architecture",
                      "🔌 Express.js REST APIs",
                      "⚙️ Node.js Backend Systems",
                      "🎨 Premium React Interfaces",
                      "📱 Fully Responsive Experiences",
                    ].map((item) => (
                      <motion.div
                        key={item}
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

              {/* RIGHT */}
              <div className="flex flex-col gap-8">

                {/* EMAIL */}
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
                      Let’s discuss your idea and turn it into a scalable,
                      modern full-stack product.
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

                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-110" />

                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-blue-400/50" />

                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20" />

                      <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                        Email Me →
                      </span>

                    </Link>

                  </div>

                </motion.div>

                {/* SOCIAL */}
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
                      Follow my journey, full-stack experiments, UI
                      explorations and modern web creations.
                    </p>

                    <Link
                      href="https://www.instagram.com/0_abdullah.1"
                      target="_blank"
                      rel="noopener noreferrer"
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

                      <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                      <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-2xl transition duration-300" />

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

        {/* ========================================================
            INFINITE STACK MARQUEE
        ======================================================== */}

        <div className="max-w-7xl mx-auto w-full overflow-hidden mt-24 py-24 relative z-10">

          {/* LEFT FADE */}
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
              duration: 22,
              ease: "linear",
            }}
          >

            {[
              {
                icon: <SiPostgresql className="text-blue-400" />,
                name: "PostgreSQL",
              },
              {
                icon: <SiExpress className="text-[var(--foreground)]" />,
                name: "Express.js",
              },
              {
                icon: <FaReact className="text-cyan-400" />,
                name: "React",
              },
              {
                icon: <FaNodeJs className="text-green-500" />,
                name: "Node.js",
              },
              {
                icon: <SiNextdotjs className="text-[var(--foreground)]" />,
                name: "Next.js",
              },
              {
                icon: <FaJs className="text-yellow-400" />,
                name: "JavaScript",
              },
              {
                icon: <FaHtml5 className="text-orange-500" />,
                name: "HTML5",
              },
              {
                icon: <FaCss3Alt className="text-blue-500" />,
                name: "CSS3",
              },

              // DUPLICATE FOR SMOOTH LOOP

              {
                icon: <SiPostgresql className="text-blue-400" />,
                name: "PostgreSQL",
              },
              {
                icon: <SiExpress className="text-[var(--foreground)]" />,
                name: "Express.js",
              },
              {
                icon: <FaReact className="text-cyan-400" />,
                name: "React",
              },
              {
                icon: <FaNodeJs className="text-green-500" />,
                name: "Node.js",
              },
              {
                icon: <SiNextdotjs className="text-[var(--foreground)]" />,
                name: "Next.js",
              },
              {
                icon: <FaJs className="text-yellow-400" />,
                name: "JavaScript",
              },
              {
                icon: <FaHtml5 className="text-orange-500" />,
                name: "HTML5",
              },
              {
                icon: <FaCss3Alt className="text-blue-500" />,
                name: "CSS3",
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

                {/* LIGHT */}
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

