"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";
import ClientWrapper from "@/Components/ClientWrapper";
import ThemeToggle from "@/Components/ThemeToggle";


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const heroRef = useRef(null);

  
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
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="py-28 bg-transparent"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-6xl mx-auto px-6 text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-[var(--foreground)] transition-colors duration-500">My Projects</h2>
            <p className="text-[var(--foreground)] mt-4 text-lg">
              Selected work showcasing modern UI, animation & performance
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ y: -14 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="relative rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.4)] cursor-pointer"
                  >
                    <div className="relative h-[320px] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-semibold tracking-wide">
                        {project.title}
                      </h3>
                      {/* CHANGED: text-blue-300 -> dark:text-white */}
                      <p className="text-sm mt-2 opacity-90 text-blue-300 dark:text-white">
                        View Live Project →
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ================== ABOUT ME SECTION ================== */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-32 px-6"
        >
          <h2 className="text-4xl font-bold text-center text-[var(--foreground)] transition-colors duration-500 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[var(--foreground)] opacity-80 transition-colors duration-500 text-lg leading-relaxed">
              <p>
                I'm Abdullah Babar, a passionate Next.js developer focused on building
                modern, animated and highly responsive web interfaces.
              </p>
              <p>
                I love crafting smooth user experiences with clean UI, performance
                optimization, and beautiful animations using React, Tailwind and
                Framer Motion.
              </p>
              <p>
                My goal is to create websites that not only work perfectly but also
                feel premium and interactive.
              </p>
            </div>

            {/* LEFT — CINEMATIC IMAGE */}
<motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-3xl overflow-visible shadow-soft border-4 border-white dark:border-gray-800 transition-colors duration-500"
              >
                {/* 🎀 Top Left Tape - Neutralized for Dark Mode integration */}
                <div className="absolute -top-3 -left-3 w-10 h-4 bg-blue-300 dark:bg-zinc-700 rotate-[-25deg] shadow-md opacity-90 transition-colors duration-500" />

                {/* 🎀 Bottom Right Tape */}
                <div className="absolute -bottom-3 -right-3 w-10 h-4 bg-blue-300 dark:bg-zinc-700 rotate-[-25deg] shadow-md opacity-90 transition-colors duration-500" />

                <Image
                  src="/myimg.jpeg"
                  alt="Abdullah Babar"
                  width={250}
                  height={300}
                  className="object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================== SKILLS SECTION ================== */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-32 px-6"
        >
          <h2 className="text-4xl font-bold text-center text-[var(--foreground)] transition-colors duration-500 mb-14">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl mx-auto" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl mx-auto" /> },
              { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl mx-auto" /> },
              { name: "React", icon: <FaReact className="text-cyan-400 text-5xl mx-auto" /> },
              { name: "Next.js", icon: <SiNextdotjs className="text-[var(--foreground)] text-5xl mx-auto" /> },
              { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-600 dark:text-white text-5xl mx-auto" /> },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-8 bg-[var(--background)] dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800/60 hover:-translate-y-2 hover:scale-105 transition duration-300 space-y-4"
              >
                {skill.icon}
                <p className="font-semibold text-[var(--foreground)] transition-colors duration-500">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================== EXPERIENCE SECTION ================== */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-32 px-6"
        >
          {/* CHANGED: border-blue-500 dark:border-blue-400 -> dark:border-white */}
          <h2 className="text-4xl font-bold text-center text-[var(--foreground)] transition-colors duration-500 mb-14">
            Experience
          </h2>

          <div className="space-y-10 border-l-4 border-blue-500 dark:border-white pl-8">
            {[
              {
                title: "Freelance Frontend Projects",
                desc: "Built responsive websites and UI for clients using Next.js and Tailwind.",
              },
              {
                title: "Personal Portfolio & UI Experiments",
                desc: "Created modern animated interfaces to practice smooth UX patterns.",
              },
              {
                title: "Learning & Building Daily",
                desc: "Continuously improving by building real-world projects and exploring new tools.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-500">{item.title}</h3>
                <p className="text-[var(--foreground)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================== CONTACT SECTION ================== */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-32 px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--foreground)] transition-colors duration-500 mb-8">
            Get In Touch
          </h2>

          <p className="text-[var(--foreground)] opacity-80 transition-colors duration-500 mb-8">
            Interested in working together? Feel free to reach out.
          </p>

          <div className="flex justify-center gap-6">
  {/* EMAIL BUTTON (Upgraded) */}
  <Link
    href="/contact"
    className="relative inline-flex items-center justify-center px-7 py-3 font-semibold text-white rounded-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
  >
    {/* base gradient */}
    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-lg transition-all duration-300 group-hover:scale-110"></span>

    {/* glow layer */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-400/40"></span>

    {/* sweep light */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></span>

    {/* border glow */}
    <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition"></span>

    <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
      Email Me →
    </span>
  </Link>

  {/* INSTAGRAM BUTTON (Upgraded) */}
  <Link
    href="https://www.instagram.com/0_abdullah.1?igsh=MTh1dTZ5cjAxcGZoNQ%3D%3D&utm_source=qr"
    target="_blank"
    className="relative inline-flex items-center justify-center px-7 py-3 font-semibold rounded-lg overflow-hidden group border border-blue-600 text-blue-600 dark:text-white dark:border-white transition-transform duration-300 hover:-translate-y-1"
  >
    {/* hover fill */}
    <span className="absolute inset-0 bg-blue-600 dark:bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

    {/* glow */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-blue-400 dark:bg-white blur-xl transition duration-300"></span>

    {/* sweep */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></span>

    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 group-hover:tracking-wide">
      Instagram →
    </span>
  </Link>
</div>
        </motion.section>

        {/* ================== INFINITE SKILLS MARQUEE ================== */}
        <div className="max-w-6xl mx-auto w-full overflow-hidden mt-20 py-20 relative z-10">
          <motion.div
            className="flex w-max gap-24 text-7xl"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
          >
            {[FaHtml5, FaCss3Alt, FaJs, FaReact, SiNextdotjs, SiPostgresql,
              FaHtml5, FaCss3Alt, FaJs, FaReact, SiNextdotjs, SiPostgresql].map((Icon, i) => (
                <div key={i} className="hover:scale-125 hover:rotate-6 transition duration-300">
                  {Icon === FaHtml5 && <FaHtml5 className="text-orange-500" />}
                  {Icon === FaCss3Alt && <FaCss3Alt className="text-blue-500" />}
                  {Icon === FaJs && <FaJs className="text-yellow-400" />}
                  {Icon === FaReact && <FaReact className="text-cyan-400" />}
                  {Icon === SiNextdotjs && <SiNextdotjs className="text-[var(--foreground)]" />}
                  {Icon === SiPostgresql && <SiPostgresql className="text-indigo-600 dark:text-white" />}
                </div>
              ))}
          </motion.div>
        </div>
      </section>
    </ClientWrapper>
  );
}