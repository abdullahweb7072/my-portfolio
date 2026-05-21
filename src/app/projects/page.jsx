"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ThemeToggle from "@/Components/ThemeToggle";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ProjectsPage() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built using HTML, CSS and JavaScript with modern UI and smooth animations.",
      image: "/projects/pfp-js.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://abdullah-dev-portfoli-f.netlify.app",
    },
    {
      title: "Image Tools",
      description:
        "Beautiful and elegant clone inspired by Ugwu Cynthia website using HTML, CSS and JavaScript.",
      image: "/projects/img-tool.jpg",
      tech: ["Next.js", "Tailwind CSS",],
      live: "https://image-tool-project-ku6s.vercel.app/",
    },
    {
      title: "Luxury Cars Site",
      description:
        "A luxury cars information website built with Next.js featuring clean UI and responsive layout.",
      image: "/projects/car-site.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      live: "https://abdullah-cars.netlify.app/",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -100,
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
        y: 120,
        scale: 0.85,
        rotateX: 20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-transparent px-6 py-24">

        <ThemeToggle />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:80px_80px]
            z-0
          "
        />

        {/* LIGHT GLOW */}
        <div className="absolute inset-0 overflow-hidden z-0">

          <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.div
            ref={titleRef}
            className="text-center mb-24 opacity-0"
          >

            <h1
              className="
                text-6xl
                md:text-7xl
                lg:text-[110px]
                font-black
                tracking-[-0.06em]
                leading-[0.9]
                text-[var(--foreground)]
                dark:text-white
              "
            >
              Elite
              <br />

              <span className="text-6xl
                md:text-7xl
                lg:text-[110px]
                font-black
                tracking-[-0.06em]
                leading-[0.9]
                text-[var(--foreground)]
                dark:text-white">
                Projects
              </span>
            </h1>

            <p className="mt-8 text-lg text-[var(--foreground)] dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
              A collection of immersive digital experiences,
              cinematic interfaces and modern web applications
              crafted with performance and aesthetics in mind.
            </p>

          </motion.div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, i) => (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                whileHover={{
                  y: -15,
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  bg-white/60
                  dark:bg-white/5
                  backdrop-blur-3xl
                  border
                  border-slate-200/60
                  dark:border-white/10
                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                  dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  opacity-0
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* Animated Border */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[34px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    p-[1px]
                    bg-[linear-gradient(130deg,rgba(59,130,246,0.8),rgba(255,255,255,0.9),rgba(139,92,246,0.8))]
                  "
                />

                {/* Glow */}
                <div
                  className="
                    absolute
                    -inset-[2px]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-blue-500/20
                    blur-2xl
                  "
                />

                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="w-full h-full"
                  >

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Shine */}
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

                {/* CONTENT */}
                <div className="relative p-7 space-y-5 z-10">

                  <h2 className="text-3xl font-bold text-[var(--foreground)] dark:text-white">
                    {project.title}
                  </h2>

                  <p className="text-[15px] leading-relaxed text-[var(--foreground)] dark:text-white/65">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 pt-1">

                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-medium
                          bg-blue-100
                          text-blue-700
                          dark:bg-white/10
                          dark:text-white
                          border
                          border-blue-200
                          dark:border-white/10
                          backdrop-blur-xl
                        "
                      >
                        {t}
                      </span>
                    ))}

                  </div>

                  {/* BUTTON */}
                  <div className="pt-4">

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.03,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        group/button
                        relative
                        overflow-hidden
                        flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        py-4
                        rounded-2xl
                        font-semibold
                        text-white
                        bg-gradient-to-r
                        from-[#003366]
                        via-blue-600
                        to-indigo-600
                        shadow-[0_10px_50px_rgba(37,99,235,0.45)]
                        hover:shadow-[0_20px_80px_rgba(37,99,235,0.65)]
                        transition-all
                        duration-500
                      "
                    >

                      {/* Shine */}
                      <span
                        className="
                          absolute
                          top-0
                          left-[-120%]
                          h-full
                          w-[120%]
                          rotate-12
                          bg-gradient-to-r
                          from-transparent
                          via-white/30
                          to-transparent
                          group-hover/button:left-[120%]
                          transition-all
                          duration-1000
                        "
                      />

                      <span className="relative z-10">
                        View Live
                      </span>

                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                        }}
                        className="relative z-10"
                      >
                        →
                      </motion.span>

                    </motion.a>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
   </>
  );
}