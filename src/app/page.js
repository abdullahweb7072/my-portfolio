"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";
import ClientWrapper from "@/Components/ClientWrapper";


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const heroRef = useRef(null);

  const ropeEnd = useRef({ x: 0, y: 0 });

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

useEffect(() => {
  const card = cardRef.current;
  const hero = heroRef.current;
  if (!card || !hero) return;
 

const isMobile = window.innerWidth < 768;

if (isMobile) {
  // ✅ make it visible on mobile
  gsap.set(card, {
    opacity: 1,
    x: 0,
    y: 0,
  });

  return; // skip animation only
}

  // Set visibility after mounting to avoid hydration mismatch
gsap.set(card, { opacity: 1 });

  const quickX = gsap.quickTo(card, "x", { duration: 0.35, ease: "power3" });
  const quickY = gsap.quickTo(card, "y", { duration: 0.35, ease: "power3" });
  const quickR = gsap.quickTo(card, "rotation", { duration: 0.35, ease: "power3" });

  const heroRect = hero.getBoundingClientRect();

  // ✅ SAFE positioning INSIDE hero container (no overflow)
const startX = isMobile ? 0 : heroRect.width * 0.65;
const startY = isMobile ? 0 : heroRect.height * 0.05;

  pos.current = { x: startX, y: startY };
  ropeEnd.current = { x: startX + 150, y: startY };

  gsap.set(card, { x: startX, y: startY });

  const onMove = (e) => {
    if (!dragging.current) return;
    pos.current.x = e.clientX - offset.current.x;
    pos.current.y = e.clientY - offset.current.y;
  };

  const onDown = (e) => {
  if (window.innerWidth < 768) return; // 🚫 disable drag on mobile

  const rect = card.getBoundingClientRect();
    if (
      e.clientX > rect.left &&
      e.clientX < rect.right &&
      e.clientY > rect.top &&
      e.clientY < rect.bottom
    ) {
      dragging.current = true;
      offset.current.x = e.clientX - rect.left;
      offset.current.y = e.clientY - rect.top;
    }
  };

  const onUp = () => {
    dragging.current = false;
  };

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mousedown", onDown);
  window.addEventListener("mouseup", onUp);

  const animate = () => {
    const path = svgRef.current?.querySelector("path");
    const cardEl = cardRef.current;

   if (!isMobile) {
  quickX(pos.current.x);
  quickY(pos.current.y);
  quickR(vel.current.x * 0.2);
}

    if (!isMobile && path && cardEl)  {
      const nav = document.getElementById("navbar-anchor");
      if (nav) {
        const navRect = nav.getBoundingClientRect();
        const ax = navRect.left + navRect.width / 2;
        const ay = navRect.bottom;

        const cardRect = cardEl.getBoundingClientRect();
        const targetX = cardRect.left + cardRect.width / 2;
        const targetY = cardRect.top;

        ropeEnd.current.x += (targetX - ropeEnd.current.x) * 0.25;
        ropeEnd.current.y += (targetY - ropeEnd.current.y) * 0.25;

        const tension = Math.min(Math.abs(ropeEnd.current.x - ax) * 0.02, 100);

        const d = `M ${ax} ${ay} C ${ax} ${ay + 120 + tension}, ${ropeEnd.current.x} ${ropeEnd.current.y - 80}, ${ropeEnd.current.x} ${ropeEnd.current.y}`;

        path.setAttribute("d", d);
      }
    }

    requestAnimationFrame(animate);
  };

  const animFrame = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mousedown", onDown);
    window.removeEventListener("mouseup", onUp);
    cancelAnimationFrame(animFrame);
  };
}, []);
 const projects = [
    {
      title: "Portfolio Website",
      image: "/projects/pfp-js.jpg",
      live: "https://abdullah-dev-portfoli-f.netlify.app",
    },
    {
      title: "Ugwu Cynthia Clone",
      image: "/projects/uguw.jpg",
      live: "https://sage-tanuki-1f6f4c.netlify.app/",
    },
    {
      title: "Luxury Cars Site",
      image: "/projects/car-site.jpg",
      live: "https://abdullah-cars.netlify.app/",
    },
  ];

 
  return (
    <ClientWrapper>
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-x-hidden">

      <div id="navbar-anchor" className="absolute top-0 left-1/2 w-2 h-2" />

      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full animate-pulse"></div>

      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
        <path stroke="rgba(59,130,246,0.5)" strokeWidth="2" fill="none" />
      </svg>

      <div className="h-screen flex items-center justify-center px-6 relative z-10">

        <div  ref={heroRef} className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center w-full px-4 sm:px-6">

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
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
  >
    I build <span className="text-blue-600">modern, fast & animated</span>{" "}
    web experiences
  </motion.h1>

  <p className="text-lg text-gray-600 leading-relaxed">
    I’m Abdullah Babar, a Next.js developer focused on crafting smooth UI,
    micro-interactions, and performance-first web applications.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">

  {/* VIEW WORK */}
  <Link
    href="#projects"
    className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg overflow-hidden group"
  >
    {/* gradient background */}
    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-110"></span>

    {/* glow ring */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-400"></span>

    {/* shine */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></span>

    <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
      View Work →
    </span>
  </Link>

  {/* CONTACT */}
  <Link
    href="/contact"
    className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-blue-500 text-blue-600"
  >
    {/* hover fill */}
    <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

    {/* glow */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-blue-400 blur-xl transition duration-300"></span>

    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
      Contact Me →
    </span>
  </Link>
  {/* DOWNLOAD CV */}
<a
  href="/Abdullah_Babar_CV.pdf"
  download
  className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group border border-gray-800 text-gray-800"
>
  <span className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
    Download CV →
  </span>
</a>

</div>
</motion.div>

          {/* Card starts at opacity 0 to prevent SSR flash */}
        <div
  ref={cardRef}
style={{ opacity: 1 }}
  className="z-30 bg-white/60 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-4 sm:p-6 cursor-grab active:cursor-grabbing relative mx-auto mt-10 md:absolute md:mt-0 md:mx-0 md:cursor-grab scale-100 sm:scale-90 md:scale-100 origin-top">
            <div className="w-72 h-80 relative rounded-2xl overflow-hidden">
 <Image
  src="/myimg.jpeg"
  alt="About Abdullah"
  width={260}
  height={260}
  className="rounded-2xl shadow-xl object-cover w-auto h-auto"
/>
            </div>

            <div className="text-center mt-5">
              <h3 className="text-xl font-bold text-gray-800">Abdullah Babar</h3>
              <p className="text-gray-500">Frontend Developer</p>
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
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-gray-800">My Projects</h2>
        <p className="text-gray-500 mt-4 text-lg">
          Selected work showcasing modern UI, animation & performance
        </p>
      </motion.div>

      {/* Cards */}
  {/* Cards Row */}
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
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.15)] cursor-pointer"
        >
          {/* Image */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-semibold tracking-wide">
              {project.title}
            </h3>
            <p className="text-sm mt-2 opacity-90">
              View Live Project →
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  ))}
</motion.div>
    </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-32 px-6"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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

          <div className="flex justify-center">
            <Image
              src="/myimg.jpeg"
              alt="About Abdullah"
              width={260}
              height={260}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-32 px-6"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl mx-auto" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl mx-auto" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl mx-auto" /> },
            { name: "React", icon: <FaReact className="text-cyan-400 text-5xl mx-auto" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl mx-auto" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-600 text-5xl mx-auto" /> },
          ].map((skill, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition duration-300 space-y-4"
            >
              {skill.icon}
              <p className="font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-32 px-6"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Experience
        </h2>

        <div className="space-y-10 border-l-4 border-blue-500 pl-8">
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
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-32 px-6 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-8">
          Interested in working together? Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Email Me
          </Link>

          <Link
            href="https://www.instagram.com/0_abdullah.1?igsh=MTh1dTZ5cjAxcGZoNQ%3D%3D&utm_source=qr"
            target="_blank"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Instagram
          </Link>
        </div>
      </motion.section>

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
                {Icon === SiNextdotjs && <SiNextdotjs className="text-black" />}
                {Icon === SiPostgresql && <SiPostgresql className="text-indigo-600" />}
              </div>
            ))}
        </motion.div>
      </div>
    </section>
    </ClientWrapper>
  );
}