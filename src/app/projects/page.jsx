"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsPage() {
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
      title: "Clone of Ugwu Cynthia",
      description:
        "Beautiful and elegant clone inspired by Ugwu Cynthia website using HTML, CSS and JavaScript.",
      image: "/projects/uguw.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://sage-tanuki-1f6f4c.netlify.app/",
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-6 py-24 relative overflow-hidden font-sans">

      {/* Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-20"
        >
          My Projects
        </motion.h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {projects.map((project, i) => (
  <motion.div
  key={i}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, scale: 1.025 }}
  whileTap={{ scale: 0.98 }}
  transition={{
    // entry animation
    opacity: { duration: 0.6, delay: i * 0.1 },
    y: { duration: 0.6, delay: i * 0.1 },

    // hover animation (spring)
    scale: { type: "spring", stiffness: 260, damping: 18 },
  }}
  className="bg-white rounded-3xl overflow-hidden border border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] will-change-transform"
>

              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>

              {/* Content */}
              <div className="p-7 space-y-4">

                <h2 className="font-heading text-2xl font-bold text-gray-800">
                  {project.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="pt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                    View Live →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}