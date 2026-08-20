"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "@/Components/ThemeToggle";
import gsap from "gsap";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.65"
        )
        .fromTo(
          infoRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          "-=0.45"
        )
        .fromTo(
          formRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.7"
        );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mbdbdwyj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      form.reset();
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (err) {
      setError(
        err?.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-500 sm:px-8 lg:px-12">

        <ThemeToggle />

        {/* ============================================================
            BACKGROUND
        ============================================================ */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Main blue glow */}
          <div
            className="
              absolute
              left-1/2
              top-[-220px]
              h-[500px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.08]
              blur-[130px]
              dark:bg-blue-500/[0.10]
            "
          />

          {/* Purple glow */}
          <div
            className="
              absolute
              bottom-[-250px]
              right-[-150px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-indigo-500/[0.06]
              blur-[130px]
              dark:bg-indigo-500/[0.08]
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              dark:opacity-[0.045]
              bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
              bg-[size:72px_72px]
            "
          />

          {/* Top gradient line */}
          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-500/50
              to-transparent
            "
          />
        </div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ============================================================
              HEADER
          ============================================================ */}

          <div className="mx-auto mb-20 max-w-4xl text-center">

            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>

              Available for freelance work
            </motion.div>

            {/* Main title */}
            <h1
              ref={titleRef}
              className="
                opacity-0
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-[92px]
              "
            >
              Let's build
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-slate-900
                  via-blue-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                  dark:from-white
                  dark:via-blue-400
                  dark:to-indigo-400
                "
              >
                something great.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                opacity-0
                sm:text-lg
                dark:text-white/55
              "
            >
              Have an idea, startup, or digital product in mind?
              Tell me what you're building and let's turn your
              vision into a polished digital experience.
            </p>
          </div>

          {/* ============================================================
              MAIN GRID
          ============================================================ */}

          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* ========================================================
                LEFT SIDE
            ======================================================== */}

            <div
              ref={infoRef}
              className="opacity-0"
            >
              <div className="mb-10">

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                  Get in touch
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's talk about your next project.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 dark:text-white/55">
                  Whether you're launching a new product,
                  improving an existing website, or need a
                  high-quality frontend developer, I'd love to
                  hear what you're working on.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">

                {/* Email */}
                <motion.a
                  href="mailto:abdullah.web7072@gmail.com"
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/70
                    p-5
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:shadow-[0_15px_45px_rgba(37,99,235,0.10)]
                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:shadow-none
                    dark:hover:border-blue-400/30
                    dark:hover:bg-white/[0.055]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-500/10
                      text-blue-600
                      dark:bg-blue-400/10
                      dark:text-blue-400
                    "
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/35">
                      Email
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-white/90 sm:text-base">
                      abdullah.web7072@gmail.com
                    </p>
                  </div>

                  <svg
                    className="ml-auto shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/70
                    p-5
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    backdrop-blur-xl
                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:shadow-none
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-500/10
                      text-indigo-600
                      dark:bg-indigo-400/10
                      dark:text-indigo-400
                    "
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/35">
                      Location
                    </p>

                    <p className="text-sm font-semibold text-slate-800 dark:text-white/90 sm:text-base">
                      Multan, Pakistan
                    </p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/70
                    p-5
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    backdrop-blur-xl
                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:shadow-none
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-500/10
                      text-emerald-600
                      dark:bg-emerald-400/10
                      dark:text-emerald-400
                    "
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/35">
                      Availability
                    </p>

                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 sm:text-base">
                      Open for new projects
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom note */}
              <div className="mt-8 border-l-2 border-blue-500/30 pl-5">
                <p className="text-sm leading-6 text-slate-500 dark:text-white/40">
                  Usually replying within 24–48 hours.
                </p>
              </div>
            </div>

            {/* ========================================================
                FORM
            ======================================================== */}

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200/80
                bg-white/75
                p-6
                opacity-0
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
                sm:p-8
                lg:p-10
                dark:border-white/[0.08]
                dark:bg-white/[0.035]
                dark:shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              "
            >
              {/* Form top accent */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-blue-500
                  to-transparent
                "
              />

              {/* Subtle glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-120px]
                  top-[-120px]
                  h-64
                  w-64
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-[100px]
                  dark:bg-blue-500/[0.10]
                "
              />

              <div className="relative z-10">

                {/* Form heading */}
                <div className="mb-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    Project inquiry
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Tell me what you're building.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-white/40">
                    Fill out the form and I'll get back to you
                    as soon as possible.
                  </p>
                </div>

                {/* Inputs */}
                <div className="space-y-5">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/75"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        px-4
                        py-3.5
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                        dark:border-white/[0.08]
                        dark:bg-[#080b16]/70
                        dark:text-white
                        dark:placeholder:text-white/25
                        dark:focus:border-blue-400/60
                        dark:focus:bg-[#080b16]
                        dark:focus:ring-blue-400/10
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/75"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        px-4
                        py-3.5
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                        dark:border-white/[0.08]
                        dark:bg-[#080b16]/70
                        dark:text-white
                        dark:placeholder:text-white/25
                        dark:focus:border-blue-400/60
                        dark:focus:bg-[#080b16]
                        dark:focus:ring-blue-400/10
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/75"
                    >
                      Project details
                    </label>

                    <textarea
                      id="message"
                      rows={6}
                      name="message"
                      placeholder="Tell me about your project, goals, timeline, or anything else you'd like me to know..."
                      required
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        px-4
                        py-3.5
                        text-sm
                        leading-6
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                        dark:border-white/[0.08]
                        dark:bg-[#080b16]/70
                        dark:text-white
                        dark:placeholder:text-white/25
                        dark:focus:border-blue-400/60
                        dark:focus:bg-[#080b16]
                        dark:focus:ring-blue-400/10
                      "
                    />
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500 dark:text-red-400"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { y: -2 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_12px_35px_rgba(37,99,235,0.25)]
                      transition-all
                      duration-300
                      hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {/* Shine */}
                    {!loading && (
                      <span
                        className="
                          absolute
                          inset-y-0
                          left-[-100%]
                          w-1/2
                          skew-x-[-20deg]
                          bg-white/20
                          transition-all
                          duration-700
                          group-hover:left-[130%]
                        "
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-3">

                      {loading ? (
                        <>
                          <span
                            className="
                              h-5
                              w-5
                              animate-spin
                              rounded-full
                              border-2
                              border-white/30
                              border-t-white
                            "
                          />

                          Sending message...
                        </>
                      ) : (
                        <>
                          Send Message

                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                          </svg>
                        </>
                      )}

                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>

          {/* ============================================================
              FOOTER
          ============================================================ */}

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 text-sm text-slate-400 sm:flex-row dark:border-white/[0.07] dark:text-white/30">
            <p>
              © {new Date().getFullYear()} Abdullah Babar.
              All rights reserved.
            </p>

            <p>
              Crafted with Next.js & attention to detail.
            </p>
          </div>
        </div>

        {/* ============================================================
            SUCCESS MODAL
        ============================================================ */}

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-5"
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" />

              {/* Modal */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                className="
                  relative
                  w-full
                  max-w-md
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white
                  p-8
                  text-center
                  shadow-[0_30px_100px_rgba(0,0,0,0.3)]
                  dark:bg-[#0b0f1c]
                "
              >
                {/* Accent */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1
                    bg-gradient-to-r
                    from-emerald-400
                    via-green-500
                    to-teal-400
                  "
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-500/10
                    text-emerald-500
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Message sent successfully
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/50">
                  Thanks for reaching out. I'll review your
                  message and get back to you soon.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}