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

import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

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
      icon: (
        <SiExpress className="text-[var(--foreground)] text-3xl md:text-5xl" />
      ),
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
      <section className="relative min-h-screen overflow-x-hidden bg-transparent transition-colors duration-500">

        <ThemeToggle />

        {/* ========================================================
            BACKGROUND GLOWS
        ======================================================== */}

        <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl dark:bg-white/5 sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute right-[-120px] top-[500px] h-72 w-72 rounded-full bg-purple-300/20 blur-3xl dark:bg-white/5 sm:h-96 sm:w-96" />

        {/* ========================================================
            HERO
        ======================================================== */}

        {/* ========================================================
    HERO SECTION
======================================================== */}

<section className="relative z-10">

  <div
    className="
      mx-auto
      flex
      min-h-[auto]
      w-full
      max-w-7xl
      items-center
      px-5
      pb-20
      pt-28
      sm:px-8
      sm:pb-24
      sm:pt-32
      md:min-h-screen
      md:px-10
      md:py-20
    "
  >

    <div
      className="
        grid
        w-full
        grid-cols-1
        items-center
        gap-12
        md:grid-cols-2
        md:gap-14
        lg:gap-20
      "
    >

      {/* ==================================================
          LEFT SIDE — HERO CONTENT
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          order-2
          space-y-6
          text-center
          md:order-1
          md:text-left
        "
      >

        {/* -----------------------------------------------
            SMALL INTRO LABEL
        ------------------------------------------------ */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-blue-500
            sm:text-sm
          "
        >
          PERN Stack Developer
        </motion.p>


        {/* -----------------------------------------------
            MAIN HEADING
        ------------------------------------------------ */}

        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            text-3xl
            font-extrabold
            leading-[1.12]
            tracking-tight
            text-[var(--foreground)]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-[4.2rem]
          "
        >
          I build{" "}

          <span
            className="
              text-blue-600
              dark:text-blue-400
            "
          >
            modern, scalable
          </span>{" "}

          & animated full-stack web experiences
        </motion.h1>


        {/* -----------------------------------------------
            DESCRIPTION
        ------------------------------------------------ */}

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
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mx-auto
            max-w-2xl
            text-base
            leading-relaxed
            text-[var(--foreground)]/70
            sm:text-lg
            md:mx-0
          "
        >
          I’m Abdullah Babar, a PERN stack developer focused on
          building scalable full-stack applications using PostgreSQL,
          Express.js, React and Node.js — with polished interfaces,
          smooth motion and performance-first architecture.
        </motion.p>


        {/* -----------------------------------------------
            TECHNOLOGY PILLS
        ------------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-2
            pt-1
            md:justify-start
          "
        >

          {[
            "PostgreSQL",
            "Express.js",
            "React",
            "Node.js",
          ].map((tech) => (

            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/[0.06]
                px-3
                py-1.5
                text-xs
                text-[var(--foreground)]/70
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/10
              "
            >
              {tech}
            </span>

          ))}

        </motion.div>


        {/* -----------------------------------------------
            ACTION BUTTONS
        ------------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            justify-center
            gap-3
            pt-4
            sm:flex-row
            sm:flex-wrap
            md:justify-start
          "
        >

          {/* VIEW WORK */}

          <Link
            href="#projects"
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-blue-600
              via-blue-500
              to-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(37,99,235,0.15)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)]
            "
          >
            View Work →
          </Link>


          {/* CONTACT */}

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              border
              border-blue-500
              px-6
              py-3
              font-semibold
              text-blue-600
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-600
              hover:text-white
              dark:text-white
            "
          >
            Contact Me →
          </Link>


          {/* DOWNLOAD CV */}

          <a
            href="/Abdullah_Babar_CV.pdf"
            download
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              border
              border-[var(--foreground)]/20
              px-6
              py-3
              font-semibold
              text-[var(--foreground)]/80
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[var(--foreground)]/40
              hover:bg-[var(--foreground)]/[0.05]
            "
          >
            Download CV →
          </a>

        </motion.div>

      </motion.div>


      {/* ==================================================
          RIGHT SIDE — PROFESSIONAL PORTRAIT
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          order-1
          flex
          w-full
          items-center
          justify-center
          md:order-2
        "
      >

        {/* ==================================================
            IMAGE CONTAINER
        ================================================== */}

        <div
          className="
            relative
            flex
            w-full
            max-w-[290px]
            items-center
            justify-center
            sm:max-w-[350px]
            md:max-w-[420px]
            lg:max-w-[470px]
          "
        >


          {/* ==================================================
              MAIN SUBTLE BLUE GLOW
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[5%]
              left-1/2
              h-[65%]
              w-[70%]
              -translate-x-1/2
              rounded-full
              bg-blue-500/15
              blur-[90px]
              dark:bg-blue-500/20
            "
          />


          {/* ==================================================
              SECONDARY INDIGO GLOW
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[15%]
              left-1/2
              h-[40%]
              w-[45%]
              -translate-x-1/2
              rounded-full
              bg-indigo-500/10
              blur-[70px]
            "
          />


          {/* ==================================================
              LEFT FLOATING LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="
              absolute
              left-[-10px]
              top-[18%]
              z-20
              hidden
              sm:block
              md:left-[-25px]
              lg:left-[-35px]
            "
          >

            <div
              className="
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.05]
                px-3
                py-2
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                dark:border-white/[0.08]
                dark:bg-white/[0.04]
              "
            >

              <div className="flex items-center gap-2">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    shadow-[0_0_10px_rgba(59,130,246,0.8)]
                  "
                />

                <div>

                  <p
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[var(--foreground)]/45
                    "
                  >
                    Role
                  </p>

                  <p
                    className="
                      whitespace-nowrap
                      text-[11px]
                      font-semibold
                      text-[var(--foreground)]/80
                    "
                  >
                    Full Stack Developer
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ==================================================
              RIGHT FLOATING LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            className="
              absolute
              right-[-10px]
              bottom-[22%]
              z-20
              hidden
              sm:block
              md:right-[-25px]
              lg:right-[-35px]
            "
          >

            <div
              className="
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.05]
                px-3
                py-2
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                dark:border-white/[0.08]
                dark:bg-white/[0.04]
              "
            >

              <div className="flex items-center gap-2">

                <div className="flex -space-x-1">

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-blue-500
                    "
                  />

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-indigo-500
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[var(--foreground)]/45
                    "
                  >
                    Stack
                  </p>

                  <p
                    className="
                      whitespace-nowrap
                      text-[11px]
                      font-semibold
                      text-[var(--foreground)]/80
                    "
                  >
                    PERN Stack
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ==================================================
              PROFESSIONAL PORTRAIT
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              w-full
            "
          >

            <Image
              src="/my-img-bg-removed.png"
              alt="Abdullah Babar - Full Stack Developer"
              width={520}
              height={700}
              priority
              className="
                mx-auto
                h-auto
                w-auto
                max-w-full
                select-none
                object-contain
                drop-shadow-[0_30px_60px_rgba(0,0,0,0.28)]
                dark:drop-shadow-[0_35px_75px_rgba(0,0,0,0.55)]
              "
            />

          </motion.div>


          {/* ==================================================
              SUBTLE FLOOR SHADOW
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              z-0
              h-7
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-black/15
              blur-2xl
              dark:bg-black/30
            "
          />

        </div>

      </motion.div>

    </div>

  </div>

</section>

        {/* ========================================================
            PROJECTS
        ======================================================== */}

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            z-10
            mt-4
            border-t
            border-white/[0.06]
            py-20
            md:mt-8
            md:py-24
          "
        >

          {/* BACKGROUND GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-10
              h-[300px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.06]
              blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-[300px]
              w-[300px]
              rounded-full
              bg-purple-500/[0.05]
              blur-[100px]
            "
          />

          {/* SECTION HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              z-10
              mx-auto
              mb-14
              max-w-6xl
              px-5
              text-center
              sm:px-6
              md:mb-16
            "
          >

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-blue-500" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-blue-500
                  sm:text-sm
                "
              >
                Selected Work
              </p>

              <span className="h-px w-8 bg-blue-500" />

            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-tight
                text-[var(--foreground)]
                sm:text-5xl
                md:text-6xl
              "
            >
              Projects
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-[var(--foreground)]/60
                sm:text-base
                md:text-lg
              "
            >
              A selection of full-stack applications built with modern
              technologies, scalable architecture and polished user
              experiences.
            </p>

          </motion.div>

          {/* PROJECT GRID */}

          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

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
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {projects.map((project, i) => {

                const technologies = {
                  ChatHub: [
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
                          overflow-hidden
                          rounded-[24px]
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                          backdrop-blur-2xl
                          transition-all
                          duration-500
                          group-hover:border-blue-500/30
                          group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                        "
                      >

                        {/* IMAGE */}

                        <div
                          className="
                            relative
                            h-[220px]
                            overflow-hidden
                            sm:h-[250px]
                          "
                        >

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
                              left-4
                              top-4
                              z-20
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/15
                              bg-black/40
                              backdrop-blur-xl
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
                              right-4
                              top-4
                              z-20
                              flex
                              h-10
                              w-10
                              translate-y-2
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/15
                              bg-black/40
                              opacity-0
                              backdrop-blur-xl
                              transition-all
                              duration-300
                              group-hover:translate-y-0
                              group-hover:opacity-100
                            "
                          >
                            <span className="text-lg text-white">
                              ↗
                            </span>
                          </div>

                          {/* IMAGE LABEL */}

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
                                rounded-full
                                border
                                border-white/10
                                bg-white/10
                                px-3
                                py-1
                                text-[9px]
                                uppercase
                                tracking-[0.2em]
                                text-white/70
                                backdrop-blur-xl
                              "
                            >
                              Full-Stack Project
                            </span>
                          </div>

                        </div>

                        {/* CONTENT */}

                        <div className="p-5 sm:p-6">

                          <h3
                            className="
                              text-xl
                              font-bold
                              text-[var(--foreground)]
                              transition-colors
                              duration-300
                              group-hover:text-blue-500
                              sm:text-2xl
                            "
                          >
                            {project.title}
                          </h3>

                          <p
                            className="
                              mt-2
                              text-sm
                              leading-relaxed
                              text-[var(--foreground)]/55
                            "
                          >
                            Modern web application focused on performance,
                            responsive design and interactive user experience.
                          </p>

                          {/* TECHNOLOGIES */}

                          <div className="mt-5 flex flex-wrap gap-2">

                            {technologies[project.title]?.map((tech) => (
                              <span
                                key={tech}
                                className="
                                  rounded-full
                                  border
                                  border-white/[0.08]
                                  bg-white/[0.03]
                                  px-2.5
                                  py-1
                                  text-[10px]
                                  text-[var(--foreground)]/55
                                  transition-all
                                  duration-300
                                  group-hover:border-blue-500/20
                                  group-hover:text-[var(--foreground)]/70
                                  sm:text-[11px]
                                "
                              >
                                {tech}
                              </span>
                            ))}

                          </div>

                          {/* DIVIDER */}

                          <div className="my-5 h-px bg-white/[0.07]" />

                          {/* FOOTER */}

                          <div className="flex items-center justify-between">

                            <span
                              className="
                                text-xs
                                font-medium
                                text-[var(--foreground)]/45
                                transition-colors
                                duration-300
                                group-hover:text-blue-500
                              "
                            >
                              View Project
                            </span>

                            <span
                              className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                text-[var(--foreground)]/50
                                transition-all
                                duration-300
                                group-hover:translate-x-1
                                group-hover:border-blue-500/40
                                group-hover:text-blue-500
                              "
                            >
                              →
                            </span>

                          </div>

                        </div>

                        {/* SUBTLE HOVER LIGHT */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-blue-500/[0.05]
                            via-transparent
                            to-purple-500/[0.04]
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
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
            KEEP YOUR EXISTING ABOUT SECTION HERE
            ======================================================== */}

        {/* 
          Paste your existing ABOUT section here.
          It starts with:

          <motion.section
            id="about"
            ...

          and ends before the SKILLS section.
        */}


        {/* ========================================================
            KEEP YOUR EXISTING SKILLS SECTION HERE
            ======================================================== */}

        {/* 
          Paste your existing SKILLS section here.
          It starts with:

          <motion.section
            id="skills"
            ...

          and ends before EXPERIENCE.
        */}


        {/* ========================================================
            KEEP YOUR EXISTING EXPERIENCE SECTION HERE
            ======================================================== */}

        {/* 
          Paste your existing EXPERIENCE section here.
        */}


        {/* ========================================================
            KEEP YOUR EXISTING CONTACT SECTION HERE
            ======================================================== */}

        {/* 
          Paste your existing CONTACT section here.
        */}


        {/* ========================================================
            KEEP YOUR EXISTING INFINITE STACK MARQUEE HERE
            ======================================================== */}

        {/* 
          Paste your existing marquee section here.
        */}


        {/* ========================================================
            ABOUT
        ======================================================== */}

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-28 md:mt-40 px-6 relative"
        >

          <div className="absolute top-20 left-[10%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.05] blur-[130px] pointer-events-none" />

          <div className="absolute bottom-0 right-[5%] w-[380px] h-[380px] rounded-full bg-purple-500/[0.04] blur-[130px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24 relative z-10"
          >

            <p className="uppercase tracking-[0.4em] text-blue-500 text-xs sm:text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
              Building
              <span className="block">
                full-stack experiences
              </span>
            </h2>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

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
                  h-[480px]
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
                  hidden sm:block
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
                  hidden sm:block
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
              className="space-y-6 md:space-y-8"
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
                  rounded-[28px] sm:rounded-[32px]
                  border
                  border-white/10
                  backdrop-blur-2xl
                  bg-transparent
                  p-6 sm:p-8
                "
              >

                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/[0.07] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p className="uppercase tracking-[0.3em] text-blue-400 text-xs sm:text-sm mb-4 relative z-10">
                  Full-Stack Development
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 relative z-10">
                  Building complete digital products
                </h3>

                <p className="text-[var(--foreground)]/70 leading-relaxed text-base sm:text-lg relative z-10">
                  I enjoy building applications from database to interface —
                  designing PostgreSQL schemas, developing REST APIs with
                  Express.js and Node.js, and creating polished React
                  experiences on top.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 relative z-10">

                  {[
                    "PostgreSQL",
                    "Express.js",
                    "React",
                    "Node.js",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        px-3 sm:px-4
                        py-1.5 sm:py-2
                        rounded-full
                        border
                        border-white/10
                        bg-transparent
                        text-xs sm:text-sm
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
                  rounded-[28px] sm:rounded-[32px]
                  border
                  border-white/10
                  backdrop-blur-2xl
                  bg-transparent
                  p-6 sm:p-8
                "
              >

                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-500/[0.07] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p className="uppercase tracking-[0.3em] text-purple-400 text-xs sm:text-sm mb-4 relative z-10">
                  Vision
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 relative z-10">
                  Blending architecture with experience
                </h3>

                <p className="text-[var(--foreground)]/70 leading-relaxed text-base sm:text-lg relative z-10">
                  My goal is to combine reliable backend architecture with
                  beautiful frontend experiences — creating applications
                  that are scalable, fast, responsive and memorable.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 relative z-10">

                  {[
                    "REST APIs",
                    "Performance",
                    "UX",
                    "Scalability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        px-3 sm:px-4
                        py-1.5 sm:py-2
                        rounded-full
                        border
                        border-white/10
                        bg-transparent
                        text-xs sm:text-sm
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

            <p className="mt-6 text-base sm:text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              From PostgreSQL databases and Node.js APIs to React interfaces
              and modern motion design, I build across the full application
              stack.
            </p>

          </div>

          <div className="relative flex items-center justify-center min-h-[800px] sm:min-h-[850px] md:min-h-[900px]">

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
                w-[280px]
                h-[280px]
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
                w-[200px]
                h-[200px]
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
                max-w-[280px]
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

              <div className="flex items-center gap-4 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <FaReact className="text-cyan-400 text-2xl md:text-3xl" />
                </div>

                <div>

                  <h3 className="text-base md:text-xl font-bold text-[var(--foreground)]">
                    Frontend
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--foreground)]/60">
                    React Ecosystem
                  </p>

                </div>

              </div>

              <p className="text-xs md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
                Building responsive and interactive interfaces with React,
                Next.js, Tailwind CSS and modern animation systems.
              </p>

              <div className="flex gap-2 mt-4 md:mt-5 flex-wrap">

                {["React", "Next.js", "Tailwind"].map((item) => (
                  <span
                    key={item}
                    className="
                      px-2.5
                      py-1
                      rounded-full
                      text-[10px]
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
                max-w-[280px]
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

              <div className="flex items-center gap-4 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />
                </div>

                <div>

                  <h3 className="text-base md:text-xl font-bold text-[var(--foreground)]">
                    Backend
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--foreground)]/60">
                    APIs & Architecture
                  </p>

                </div>

              </div>

              <p className="text-xs md:text-[15px] leading-relaxed text-[var(--foreground)]/70">
                Developing scalable REST APIs and backend systems with
                Node.js, Express.js and PostgreSQL.
              </p>

              <div className="flex gap-2 mt-4 md:mt-5 flex-wrap">

                {["Node.js", "Express.js", "PostgreSQL"].map((item) => (
                  <span
                    key={item}
                    className="
                      px-2.5
                      py-1
                      rounded-full
                      text-[10px]
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
                w-[220px]
                h-[220px]
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
                      ? 110
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
                          w-16
                          h-16
                          sm:w-24
                          sm:h-24
                          md:w-28
                          md:h-28
                          rounded-[18px]
                          sm:rounded-[22px]
                          md:rounded-[30px]
                          border border-white/10
                          backdrop-blur-2xl
                          shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                          flex flex-col
                          items-center
                          justify-center
                          gap-1
                          md:gap-3
                        "
                      >

                        {skill.icon}

                        <span className="text-[8px] sm:text-xs md:text-sm text-[var(--foreground)] text-center px-1">
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
                w-24
                h-24
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

              <div className="relative z-10 text-center px-2">

                <h3 className="text-xs sm:text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  {expanded ? "Close" : "Click To Explore"}
                </h3>

                <p className="text-[9px] sm:text-xs md:text-sm text-[var(--foreground)]/70 mt-0.5 sm:mt-1">
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
          className="max-w-7xl mx-auto mt-28 md:mt-40 px-6 relative overflow-hidden"
        >

          <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24 relative z-10"
          >

            <p className="uppercase tracking-[0.4em] text-blue-500 text-xs sm:text-sm mb-4">
              Journey
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
              Experience
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
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
                  mb-12 md:mb-24
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
                    rounded-[28px] md:rounded-[34px]
                    border border-white/10
                    backdrop-blur-3xl
                    p-6 md:p-8
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

                  <div className="relative z-10 flex items-center justify-between mb-4 md:mb-6">

                    <div>

                      <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-blue-400 mb-1 sm:mb-2">
                        Experience
                      </p>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[var(--foreground)]">
                        {item.title}
                      </h3>

                    </div>

                    <div
                      className="
                        px-3 sm:px-5
                        py-1.5 sm:py-2
                        rounded-2xl
                        border border-white/10
                        text-xs sm:text-sm
                        text-[var(--foreground)]
                        backdrop-blur-xl
                      "
                    >
                      {item.year}
                    </div>

                  </div>

                  <p className="relative z-10 text-[var(--foreground)]/70 leading-relaxed text-sm sm:text-base md:text-lg">
                    {item.desc}
                  </p>

                  <div className="relative z-10 flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">

                    {item.tech.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="
                          px-3 sm:px-4
                          py-1.5 sm:py-2
                          rounded-2xl
                          border border-white/10
                          backdrop-blur-xl
                          text-xs sm:text-sm
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
          className="relative max-w-7xl mx-auto mt-28 md:mt-40 px-4 sm:px-6 overflow-hidden"
        >

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[140px] rounded-full pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none" />

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24 relative z-10"
          >

            <p className="uppercase tracking-[0.4em] text-blue-500 text-xs sm:text-sm mb-4">
              Contact
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[var(--foreground)] leading-tight">
              Let’s Build
              <span className="block">
                Something Amazing
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
              Have an idea, product or collaboration in mind?
              Let’s build a scalable full-stack experience together.
            </p>

          </motion.div>

          <div
            className="
              relative
              z-10
              rounded-[28px] sm:rounded-[40px]
              border border-white/10
              backdrop-blur-3xl
              bg-white/[0.04]
              p-4 sm:p-8
            "
          >

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

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
                  rounded-[28px] sm:rounded-[36px]
                  border border-white/10
                  backdrop-blur-[40px]
                  bg-white/[0.06]
                  shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                  p-6 sm:p-10
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                <div className="relative z-10">

                  <p className="uppercase tracking-[0.3em] text-blue-400 text-xs sm:text-sm mb-4 sm:mb-5">
                    Why Work With Me
                  </p>

                  <h3 className="text-2xl sm:text-4xl font-black text-[var(--foreground)] mb-4 sm:mb-6">
                    Full-Stack Architecture &
                    <br />
                    Premium Experiences
                  </h3>

                  <p className="text-[var(--foreground)]/70 leading-relaxed text-base sm:text-lg">
                    I build complete web applications with PostgreSQL,
                    Express.js, React and Node.js while maintaining a strong
                    focus on polished UI, smooth interactions and performance.
                  </p>

                  <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-5">

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
                          px-4 sm:px-5
                          py-3 sm:py-4
                          text-xs sm:text-base
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
              <div className="flex flex-col gap-6 sm:gap-8">

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
                    rounded-[28px] sm:rounded-[36px]
                    border border-white/10
                    backdrop-blur-[40px]
                    bg-white/[0.06]
                    shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                    p-6 sm:p-8
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

                  <div className="relative z-10">

                    <p className="uppercase tracking-[0.3em] text-blue-400 text-xs sm:text-sm mb-3">
                      Email
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] mb-3 sm:mb-4">
                      Start a Project
                    </h3>

                    <p className="text-[var(--foreground)]/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
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
                        w-full sm:w-auto
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
                    rounded-[28px] sm:rounded-[36px]
                    border border-white/10
                    backdrop-blur-[40px]
                    bg-white/[0.06]
                    shadow-[0_20px_70px_rgba(0,0,0,0.3)]
                    p-6 sm:p-8
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

                  <div className="relative z-10">

                    <p className="uppercase tracking-[0.3em] text-purple-400 text-xs sm:text-sm mb-3">
                      Social
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] mb-3 sm:mb-4">
                      Let’s Connect
                    </h3>

                    <p className="text-[var(--foreground)]/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
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
                        w-full sm:w-auto
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

        <div className="max-w-7xl mx-auto w-full overflow-hidden mt-16 md:mt-24 py-12 md:py-24 relative z-10">

          {/* LEFT FADE */}
          <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="w-[700px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full" />

          </div>

          {/* MARQUEE */}
          <motion.div
            className="flex w-max gap-8 sm:gap-16 md:gap-24"
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
                  w-28 h-28 sm:w-36 sm:h-36
                  rounded-[24px] sm:rounded-[32px]
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
                  className="relative z-10 text-4xl sm:text-6xl"
                >
                  {skill.icon}
                </motion.div>

                {/* TEXT */}
                <p
                  className="
                    relative
                    z-10
                    mt-2 sm:mt-4
                    text-xs sm:text-sm
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
                    rounded-[24px] sm:rounded-[32px]
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