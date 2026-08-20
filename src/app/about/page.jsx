"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

import ThemeToggle from "@/Components/ThemeToggle";

export default function AboutPage() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Socket.IO",
    "REST APIs",
    "Git",
    "Framer Motion",
    "GSAP",
  ];

  const stats = [
    {
      number: 10,
      suffix: "+",
      label: "Projects Built",
    },
    {
      number: 1,
      suffix: "+",
      label: "Years Learning",
    },
    {
      number: 100,
      suffix: "%",
      label: "Passion for Development",
    },
  ];

  const architecture = [
    {
      number: "01",
      title: "Interface",
      text: "React • Next.js • Tailwind",
    },
    {
      number: "02",
      title: "Backend",
      text: "Node.js • Express • APIs",
    },
    {
      number: "03",
      title: "Database",
      text: "PostgreSQL • Prisma",
    },
    {
      number: "04",
      title: "Real-Time",
      text: "Socket.IO • Live Systems",
    },
  ];

  return (
    <>
      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[var(--background)]
          px-6
          py-24
          font-sans
          text-[var(--foreground)]
          transition-colors
          duration-500
        "
      >
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
            dark:opacity-[0.025]
            bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ============================================================
              HERO
          ============================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              y: -50,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="mb-24 text-center"
          >
            <p
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[var(--primary)]
              "
            >
              Get To Know Me
            </p>

            <h1
              className="
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-[var(--foreground)]
                md:text-7xl
                lg:text-[100px]
              "
            >
              About Me
            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-[var(--muted)]
                md:text-lg
              "
            >
              Full-stack developer building modern, scalable and
              interactive digital experiences from the interface
              to the database.
            </p>
          </motion.div>

          {/* ============================================================
              ABOUT GRID
          ============================================================ */}

          <div
            className="
              grid
              items-center
              gap-20
              lg:grid-cols-2
              lg:gap-28
            "
          >

            {/* ========================================================
                PROFILE IMAGE
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="flex justify-center lg:justify-start"
            >
              <div
                className="
                  relative
                  w-[290px]
                  md:w-[340px]
                  lg:w-[360px]
                "
              >

                {/* ====================================================
                    PROFILE CARD
                ==================================================== */}

                <motion.div
                  whileHover={{
                    y: -8,
                    rotateY: 3,
                    rotateX: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    group
                    relative
                    z-10
                    overflow-hidden
                    rounded-[36px]

                    border
                    border-slate-200/80
                    dark:border-white/[0.10]

                    bg-white/80
                    dark:bg-slate-900/90

                    shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                    dark:shadow-[0_25px_70px_rgba(0,0,0,0.55)]

                    backdrop-blur-2xl

                    transition-all
                    duration-500

                    hover:border-slate-300
                    dark:hover:border-white/[0.16]
                  "
                >

                  {/* Top Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      z-30
                      h-[1px]
                      bg-gradient-to-r
                      from-transparent
                      via-[var(--primary)]
                      to-transparent
                      opacity-60
                      dark:via-white/40
                    "
                  />

                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-[390px]
                      overflow-hidden
                      md:h-[450px]
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full w-full"
                    >
                      <Image
                        src="/myimg.jpeg"
                        alt="Abdullah Babar - Full Stack Developer"
                        fill
                        priority
                        sizes="(max-width: 768px) 290px, 360px"
                        className="
                          object-cover
                          grayscale
                          transition-all
                          duration-700
                          group-hover:grayscale-0
                        "
                      />
                    </motion.div>

                    {/* Image Overlay */}

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

                    {/* Image Information */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        z-10
                        p-6
                      "
                    >
                      <p
                        className="
                          mb-2
                          text-xs
                          uppercase
                          tracking-[0.25em]
                          text-slate-300
                        "
                      >
                        Full Stack Developer
                      </p>

                      <h2
                        className="
                          text-2xl
                          font-bold
                          text-white
                          md:text-3xl
                        "
                      >
                        Abdullah Babar
                      </h2>
                    </div>

                    {/* Shine */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-[-120%]
                        top-0
                        z-20
                        h-full
                        w-[120%]
                        rotate-12
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        transition-all
                        duration-1000
                        group-hover:left-[120%]
                      "
                    />
                  </div>

                  {/* ==================================================
                      CARD FOOTER
                  ================================================== */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-slate-200/70
                      dark:border-white/[0.06]
                      px-6
                      py-5
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          text-[var(--muted)]
                        "
                      >
                        Stack
                      </p>

                      <p
                        className="
                          mt-1
                          font-semibold
                          text-[var(--foreground)]
                        "
                      >
                        PERN • Next.js
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full

                        border
                        border-slate-200
                        dark:border-white/[0.10]

                        bg-slate-100
                        dark:bg-white/[0.04]

                        text-[var(--foreground)]

                        transition-all
                        duration-300

                        group-hover:border-[var(--primary)]/30
                        group-hover:bg-[var(--primary)]/10
                        group-hover:text-[var(--primary)]

                        dark:group-hover:bg-blue-400/[0.08]
                        dark:group-hover:text-blue-400
                      "
                    >
                      ✦
                    </div>
                  </div>
                </motion.div>

                {/* ====================================================
                    STATUS BADGE
                ==================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    -right-5
                    -top-6
                    z-30
                    rounded-2xl

                    border
                    border-slate-200/80
                    dark:border-white/[0.10]

                    bg-white/90
                    dark:bg-slate-900/90

                    px-5
                    py-3

                    shadow-[0_15px_45px_rgba(15,23,42,0.10)]
                    dark:shadow-[0_15px_45px_rgba(0,0,0,0.55)]

                    backdrop-blur-2xl

                    md:-right-10
                  "
                >
                  <div className="flex items-center gap-3">

                    <span className="relative flex h-3 w-3">
                      <span
                        className="
                          absolute
                          inline-flex
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-green-400
                          opacity-60
                        "
                      />

                      <span
                        className="
                          relative
                          inline-flex
                          h-3
                          w-3
                          rounded-full
                          bg-green-500
                        "
                      />
                    </span>

                    <div>
                      <p
                        className="
                          text-xs
                          text-[var(--muted)]
                        "
                      >
                        Currently
                      </p>

                      <p
                        className="
                          text-sm
                          font-semibold
                          text-[var(--foreground)]
                        "
                      >
                        Building digital products
                      </p>
                    </div>

                  </div>
                </motion.div>

                {/* ====================================================
                    BOTTOM BADGE
                ==================================================== */}

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
                    delay: 1.1,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    -bottom-5
                    -left-5
                    z-30
                    rounded-2xl

                    border
                    border-slate-200/80
                    dark:border-white/[0.10]

                    bg-white/90
                    dark:bg-slate-900/90

                    px-4
                    py-3

                    text-[var(--foreground)]

                    shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                    dark:shadow-[0_15px_40px_rgba(0,0,0,0.55)]

                    backdrop-blur-2xl

                    md:-left-8
                  "
                >
                  <p className="text-xs font-semibold tracking-wide">
                    Full Stack • PERN
                  </p>
                </motion.div>

              </div>
            </motion.div>

            {/* ========================================================
                ABOUT TEXT
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="space-y-7"
            >

              {/* Label */}

              <div>
                <p
                  className="
                    mb-3
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[var(--primary)]
                  "
                >
                  Who I Am
                </p>

                <h2
                  className="
                    text-4xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-[var(--foreground)]
                    md:text-5xl
                  "
                >
                  I build from the

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-blue-600
                      via-indigo-600
                      to-purple-600
                      bg-clip-text
                      text-transparent

                      dark:from-blue-400
                      dark:via-indigo-400
                      dark:to-purple-400
                    "
                  >
                    interface to the database.
                  </span>
                </h2>
              </div>

              {/* Paragraph 1 */}

              <p
                className="
                  text-base
                  leading-relaxed
                  text-[var(--muted)]
                  md:text-lg
                "
              >
                Hello! I'm{" "}
                <span className="font-semibold text-[var(--primary)]">
                  Abdullah Babar
                </span>
                , a passionate{" "}
                <strong className="text-[var(--foreground)]">
                  Full-Stack Developer
                </strong>{" "}
                focused on building modern, scalable and interactive
                web applications.
              </p>

              {/* Paragraph 2 */}

              <p
                className="
                  text-base
                  leading-relaxed
                  text-[var(--muted)]
                  md:text-lg
                "
              >
                My development journey covers both the frontend and
                backend. I work with{" "}
                <strong className="text-[var(--foreground)]">
                  React, Next.js, Node.js and Express
                </strong>{" "}
                to create complete web experiences rather than
                focusing on only one side of the application.
              </p>

              {/* Paragraph 3 */}

              <p
                className="
                  text-base
                  leading-relaxed
                  text-[var(--muted)]
                  md:text-lg
                "
              >
                On the data and backend side, I work with{" "}
                <strong className="text-[var(--foreground)]">
                  PostgreSQL, Prisma and REST APIs
                </strong>
                , while also building real-time functionality with
                technologies such as Socket.IO.
              </p>

              {/* Paragraph 4 */}

              <p
                className="
                  text-base
                  leading-relaxed
                  text-[var(--muted)]
                  md:text-lg
                "
              >
                I enjoy the entire development process — from
                designing polished interfaces and implementing
                animations to creating APIs, managing databases and
                connecting everything into one complete product.
              </p>

              {/* ========================================================
                  SKILLS
              ======================================================== */}

              <div className="pt-3">

                <p
                  className="
                    mb-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted)]
                  "
                >
                  Technologies I Work With
                </p>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="
                        rounded-full

                        border
                        border-slate-200
                        dark:border-white/[0.09]

                        bg-white/70
                        dark:bg-slate-900/80

                        px-4
                        py-2

                        text-sm
                        font-medium
                        text-[var(--foreground)]

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:border-[var(--primary)]/40
                        hover:bg-[var(--primary)]/5

                        dark:hover:border-blue-400/30
                        dark:hover:bg-blue-400/[0.05]
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </div>

            </motion.div>
          </div>

          {/* ============================================================
              STATS / PROJECTS
          ============================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              mt-28
              grid
              gap-6
              md:grid-cols-3
              md:gap-8
            "
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -8,
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
                  rounded-[28px]

                  border
                  border-slate-200/80
                  dark:border-white/[0.09]

                  bg-white/70
                  dark:bg-slate-900/70

                  p-8
                  text-center

                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

                  backdrop-blur-2xl

                  transition-all
                  duration-500

                  hover:border-slate-300
                  dark:hover:border-white/[0.14]
                "
              >

                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-[var(--primary)]/[0.05]
                    via-transparent
                    to-indigo-500/[0.05]

                    dark:from-blue-500/[0.04]
                    dark:to-purple-500/[0.04]

                    opacity-0
                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Top Line */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    w-16
                    -translate-x-1/2

                    bg-gradient-to-r
                    from-transparent
                    via-[var(--primary)]
                    to-transparent

                    opacity-50
                    transition-all
                    duration-500

                    group-hover:w-28
                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <h3
                  className="
                    relative
                    z-10
                    text-5xl
                    font-black
                    tracking-tight
                    text-[var(--primary)]
                    md:text-6xl
                  "
                >
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                {/* Label */}

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-base
                    font-medium
                    text-[var(--foreground)]
                    md:text-lg
                  "
                >
                  {item.label}
                </p>

              </motion.div>
            ))}
          </motion.div>

          {/* ============================================================
              MY APPROACH
          ============================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
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
              duration: 0.9,
            }}
            className="mt-24"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]

                border
                border-slate-200/80
                dark:border-white/[0.09]

                bg-white/60
                dark:bg-slate-900/60

                p-8
                backdrop-blur-2xl

                transition-colors
                duration-500

                md:p-12
              "
            >

              {/* Approach Content */}

              <div className="relative z-10">

                {/* Label */}

                <p
                  className="
                    mb-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[var(--primary)]
                  "
                >
                  My Approach
                </p>

                {/* Heading */}

                <h2
                  className="
                    mb-5
                    text-3xl
                    font-bold
                    text-[var(--foreground)]
                    md:text-4xl
                  "
                >
                  Full-stack thinking.
                  <span className="text-[var(--primary)]">
                    {" "}Complete products.
                  </span>
                </h2>

                {/* Description */}

                <p
                  className="
                    max-w-3xl
                    text-base
                    leading-relaxed
                    text-[var(--muted)]
                    md:text-lg
                  "
                >
                  I don't see frontend and backend as separate
                  worlds. I enjoy connecting the two — designing
                  the user experience, developing application
                  logic, building APIs, structuring databases and
                  making everything work together reliably.
                </p>

                {/* ====================================================
                    ARCHITECTURE
                ==================================================== */}

                <div
                  className="
                    mt-10
                    grid
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >
                  {architecture.map((item) => (
                    <motion.div
                      key={item.number}
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="
                        rounded-2xl

                        border
                        border-slate-200/80
                        dark:border-white/[0.08]

                        bg-slate-50/70
                        dark:bg-slate-800/50

                        p-5

                        transition-all
                        duration-300

                        hover:border-[var(--primary)]/30
                        hover:bg-[var(--primary)]/[0.03]

                        dark:hover:border-blue-400/25
                        dark:hover:bg-white/[0.02]
                      "
                    >

                      <span
                        className="
                          font-mono
                          text-xs
                          text-[var(--primary)]
                        "
                      >
                        {item.number}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-lg
                          font-semibold
                          text-[var(--foreground)]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-[var(--muted)]
                        "
                      >
                        {item.text}
                      </p>

                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          {/* ============================================================
              BOTTOM STATEMENT
          ============================================================ */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-24 text-center"
          >
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-[var(--muted)]
              "
            >
              Code • Design • Backend • Database • Experience
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}