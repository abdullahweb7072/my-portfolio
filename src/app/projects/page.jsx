"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import ThemeToggle from "@/Components/ThemeToggle";

export default function ProjectsPage() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      number: "01",
      title: "ChatHub",
      description:
        "A real-time communication platform featuring messaging, presence, reactions, file sharing, games and video calling.",
      image: "/projects/chathub.PNG",
      tech: ["REACT", "NEXT.JS", "PRISMA", "TAILWIND CSS"],
      live: "https://chathub-9bet.onrender.com",
    },
    {
      number: "02",
      title: "Image Tools",
      description:
        "A modern image utility platform designed for a smooth and elegant experience with powerful image-focused tools.",
      image: "/projects/img-tool.PNG",
      tech: ["NEXT.JS", "TAILWIND CSS"],
      live: "https://image-tool-project-ku6s.vercel.app/",
    },
    {
      number: "03",
      title: "Luxury Cars",
      description:
        "A premium automotive experience showcasing luxury vehicles through an elegant, responsive and immersive interface.",
      image: "/projects/car-site.jpg",
      tech: ["NEXT.JS", "TAILWIND CSS"],
      live: "https://abdullah-cars.netlify.app/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -80,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.88,
          rotateX: 12,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.15,
          stagger: 0.16,
          ease: "power4.out",
          delay: 0.25,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-transparent px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* ============================================================
            THEME TOGGLE
        ============================================================ */}

        <ThemeToggle />

        {/* ============================================================
            BACKGROUND GRID
        ============================================================ */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.035]
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* ============================================================
            BACKGROUND GLOWS
        ============================================================ */}

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute
              -left-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-500/[0.08]
              blur-[140px]
              dark:bg-blue-500/[0.12]
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -right-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-purple-500/[0.08]
              blur-[140px]
              dark:bg-purple-500/[0.12]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[35%]
              h-[300px]
              w-[300px]
              -translate-x-1/2
              rounded-full
              bg-blue-400/[0.025]
              blur-[120px]
              dark:bg-blue-400/[0.05]
            "
          />
        </div>

        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ==========================================================
              HEADER
          ========================================================== */}

          <motion.div
            ref={titleRef}
            className="mb-20 text-center opacity-0 sm:mb-24"
          >
            {/* Small label */}

            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-500/60 sm:w-12" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-blue-600
                  dark:text-blue-400
                  sm:text-xs
                "
              >
                Selected Work
              </span>

              <span className="h-px w-8 bg-blue-500/60 sm:w-12" />
            </div>

            {/* Main heading */}

            <h1
              className="
                text-5xl
                font-black
                leading-[0.88]
                tracking-[-0.065em]
                text-[var(--foreground)]
                sm:text-6xl
                md:text-7xl
                lg:text-[105px]
                dark:text-white
              "
            >
              Elite
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[var(--foreground)]
                  via-blue-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                  dark:from-white
                  dark:via-blue-200
                  dark:to-indigo-300
                "
              >
                Projects
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-[var(--foreground)]
                opacity-60
                sm:text-base
                sm:leading-8
                dark:text-white
              "
            >
              A collection of immersive digital experiences, modern
              applications and cinematic interfaces crafted with
              performance, usability and aesthetics in mind.
            </p>
          </motion.div>

          {/* ==========================================================
              PROJECT GRID
          ========================================================== */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                whileHover={{
                  y: -14,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? -3 : 3,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-200/70
                  bg-white/60
                  shadow-[0_25px_80px_rgba(0,0,0,0.10)]
                  backdrop-blur-3xl
                  dark:border-white/[0.08]
                  dark:bg-white/[0.045]
                  dark:shadow-[0_25px_90px_rgba(0,0,0,0.38)]
                "
              >
                {/* ====================================================
                    HOVER BORDER
                ==================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    rounded-[30px]
                    bg-[linear-gradient(120deg,rgba(59,130,246,0.75),transparent_35%,rgba(139,92,246,0.7))]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[1px]
                    z-[1]
                    rounded-[29px]
                    bg-white/80
                    dark:bg-[#0b0d12]/95
                  "
                />

                {/* ====================================================
                    CARD CONTENT WRAPPER
                ==================================================== */}

                <div className="relative z-10">
                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative h-[270px] overflow-hidden sm:h-[300px]">
                    {/* Image */}

                    <motion.div
                      className="h-full w-full"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                        "
                      />
                    </motion.div>

                    {/* Dark gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* Top gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-32
                        bg-gradient-to-b
                        from-black/40
                        to-transparent
                      "
                    />

                    {/* =================================================
                        PROJECT NUMBER
                    ================================================= */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-10
                        min-w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/25
                        px-3
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-white
                        backdrop-blur-xl
                      "
                    >
                      {project.number}
                    </div>

                    {/* =================================================
                        IMAGE TITLE
                    ================================================= */}

                    <div className="absolute bottom-5 left-5 right-5">
                      <p
                        className="
                          mb-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-white/60
                        "
                      >
                        Featured Project
                      </p>

                      <h2
                        className="
                          text-3xl
                          font-bold
                          tracking-tight
                          text-white
                        "
                      >
                        {project.title}
                      </h2>
                    </div>

                    {/* =================================================
                        IMAGE SHINE
                    ================================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-[-130%]
                        top-0
                        h-full
                        w-[100%]
                        rotate-12
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        transition-all
                        duration-1000
                        group-hover:left-[130%]
                      "
                    />
                  </div>

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}

                  <div className="p-6 sm:p-7">
                    {/* Description */}

                    <p
                      className="
                        min-h-[72px]
                        text-sm
                        leading-7
                        text-[var(--foreground)]
                        opacity-65
                        dark:text-white
                      "
                    >
                      {project.description}
                    </p>

                    {/* =================================================
                        TECH STACK
                    ================================================= */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-blue-200
                            bg-blue-50
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            tracking-wide
                            text-blue-700
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            group-hover:border-blue-300
                            dark:border-white/10
                            dark:bg-white/[0.06]
                            dark:text-white/80
                            dark:group-hover:border-blue-400/30
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div className="my-6 h-px bg-slate-200/70 dark:bg-white/[0.07]" />

                    {/* =================================================
                        LIVE BUTTON
                    ================================================= */}

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.025,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        group/button
                        relative
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        overflow-hidden
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#003366]
                        via-blue-600
                        to-indigo-600
                        px-5
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_10px_45px_rgba(37,99,235,0.30)]
                        transition-all
                        duration-500
                        hover:shadow-[0_15px_60px_rgba(37,99,235,0.50)]
                      "
                    >
                      {/* Button shine */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-[-120%]
                          top-0
                          h-full
                          w-[120%]
                          rotate-12
                          bg-gradient-to-r
                          from-transparent
                          via-white/25
                          to-transparent
                          transition-all
                          duration-1000
                          group-hover/button:left-[120%]
                        "
                      />

                      <span className="relative z-10">
                        View Live Project
                      </span>

                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                        className="relative z-10 text-lg"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ==========================================================
              BOTTOM STATEMENT
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-20 text-center sm:mt-24"
          >
            <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[var(--foreground)]
                  opacity-40
                  dark:text-white
                "
              >
                More coming soon
              </span>

              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}