"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";


import ThemeToggle from "@/Components/ThemeToggle";

import gsap from "gsap";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";

function AnimatedOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;

    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.4, 128, 128]} scale={2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.45}
          speed={2}
          roughness={0}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
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
        duration: 1.3,
        ease: "power4.out",
      }
    )
      .fromTo(
        infoRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 120,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8"
      );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mbdbdwyj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 2500);
    }

    setLoading(false);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-transparent px-6 py-24 transition-colors duration-500">

        <ThemeToggle />

        {/* 3D ORB */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />

            <directionalLight position={[3, 2, 1]} />

            <AnimatedOrb />
          </Canvas>
        </div>

        {/* AURORA */}
        <div className="absolute inset-0 overflow-hidden z-0">

          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

        </div>

        {/* GRID */}
        <div
          className="
            absolute inset-0 z-0 opacity-[0.04]
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
              }}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.h1
            ref={titleRef}
            className="
              text-center
              font-black
              text-6xl
              md:text-7xl
              lg:text-[110px]
              leading-[0.9]
              tracking-[-0.06em]
              text-[var(--foreground)]
              dark:text-white
              mb-24
              opacity-0
            "
          >
            Let’s Create
            <br />

            <span className="bg-gradient-to-r from-[#003366] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Something Elite
            </span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE */}
            <div
              ref={infoRef}
              className="space-y-10 opacity-0"
            >

              <div>
                <h2 className="text-4xl font-bold text-[var(--foreground)] dark:text-white mb-6">
                  Build immersive digital experiences.
                </h2>

                <p className="text-lg leading-relaxed text-[var(--foreground)] dark:text-white/70 max-w-xl">
                  Have a project idea, startup vision, or premium
                  website in mind? I specialize in modern,
                  cinematic and highly interactive web experiences
                  using Next.js, GSAP, Framer Motion and Three.js.
                </p>
              </div>

              {/* INFO CARDS */}
              <div className="space-y-4">

                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                  <p className="text-sm text-[var(--foreground)] dark:text-white/50 mb-1">
                    EMAIL
                  </p>

                  <p className="text-lg font-semibold text-[var(--foreground)] dark:text-white">
                    abdullah.web7072@gmail.com
                  </p>

                </div>

                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                  <p className="text-sm text-[var(--foreground)] dark:text-white/50 mb-1">
                    LOCATION
                  </p>

                  <p className="text-lg font-semibold text-[var(--foreground)] dark:text-white">
                    Multan, Pakistan
                  </p>

                </div>

                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                  <p className="text-sm text-[var(--foreground)] dark:text-white/50 mb-1">
                    STATUS
                  </p>

                  <p className="text-lg font-semibold text-green-500 dark:text-green-400">
                    Available For Freelance
                  </p>

                </div>

              </div>
            </div>

            {/* FORM */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="
                relative
                overflow-hidden
                bg-white/60
                dark:bg-white/5
                backdrop-blur-3xl
                border
                border-slate-200/60
                dark:border-white/10
                rounded-[36px]
                p-8
                lg:p-10
                space-y-6
                shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                opacity-0
              "
            >

              {/* GLOW */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]" />

              {/* NAME INPUT */}
<div className="group relative rounded-2xl p-[1px] overflow-hidden">

  {/* Animated Border Glow */}
  <span
    className="
      absolute
      inset-0
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-opacity
      duration-500
      bg-[linear-gradient(115deg,transparent_20%,rgba(59,130,246,0.95)_45%,rgba(255,255,255,0.95)_50%,rgba(99,102,241,0.95)_55%,transparent_80%)]
      bg-[length:250%_250%]
      animate-[borderMove_2.5s_linear_infinite]
      blur-[1px]
    "
  />

  {/* Extra Lightning Glow */}
  <span
    className="
      absolute
      -inset-[2px]
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-all
      duration-500
      bg-blue-500/20
      blur-xl
    "
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="
      relative
      z-10
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-slate-300
      dark:border-white/10
      bg-white/70
      dark:bg-[#050816]/80
      backdrop-blur-xl
      text-[var(--foreground)]
      dark:text-white
      placeholder:text-slate-500
      focus:outline-none
      transition-all
      duration-300
    "
  />
</div>

{/* EMAIL INPUT */}
<div className="group relative rounded-2xl p-[1px] overflow-hidden">

  <span
    className="
      absolute
      inset-0
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-opacity
      duration-500
      bg-[linear-gradient(115deg,transparent_20%,rgba(59,130,246,0.95)_45%,rgba(255,255,255,0.95)_50%,rgba(99,102,241,0.95)_55%,transparent_80%)]
      bg-[length:250%_250%]
      animate-[borderMove_2.5s_linear_infinite]
      blur-[1px]
    "
  />

  <span
    className="
      absolute
      -inset-[2px]
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-all
      duration-500
      bg-blue-500/20
      blur-xl
    "
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="
      relative
      z-10
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-slate-300
      dark:border-white/10
      bg-white/70
      dark:bg-[#050816]/80
      backdrop-blur-xl
      text-[var(--foreground)]
      dark:text-white
      placeholder:text-slate-500
      focus:outline-none
      transition-all
      duration-300
    "
  />
</div>

{/* TEXTAREA */}
<div className="group relative rounded-2xl p-[1px] overflow-hidden">

  <span
    className="
      absolute
      inset-0
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-opacity
      duration-500
      bg-[linear-gradient(115deg,transparent_20%,rgba(59,130,246,0.95)_45%,rgba(255,255,255,0.95)_50%,rgba(99,102,241,0.95)_55%,transparent_80%)]
      bg-[length:250%_250%]
      animate-[borderMove_2.5s_linear_infinite]
      blur-[1px]
    "
  />

  <span
    className="
      absolute
      -inset-[2px]
      rounded-2xl
      opacity-0
      group-hover:opacity-100
      group-focus-within:opacity-100
      transition-all
      duration-500
      bg-purple-500/20
      blur-xl
    "
  />

  <textarea
    rows="6"
    name="message"
    placeholder="Tell me about your project..."
    required
    className="
      relative
      z-10
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-slate-300
      dark:border-white/10
      bg-white/70
      dark:bg-[#050816]/80
      backdrop-blur-xl
      text-[var(--foreground)]
      dark:text-white
      placeholder:text-slate-500
      resize-none
      focus:outline-none
      transition-all
      duration-300
    "
  />
</div>

              {/* BUTTON */}
             {/* BUTTON */}
<motion.button
  type="submit"
  disabled={loading}
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 18,
  }}
  className="
    group
    relative
    overflow-hidden
    w-full
    py-4
    rounded-2xl
    font-semibold
    text-white
    bg-gradient-to-r
    from-[#003366]
    via-blue-600
    to-indigo-600
    border
    border-white/10
    shadow-[0_10px_50px_rgba(37,99,235,0.45)]
    hover:shadow-[0_20px_80px_rgba(37,99,235,0.65)]
    transition-all
    duration-500
  "
>

  {/* Animated Background Glow */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_70%)]
    "
  />

  {/* Shine Sweep */}
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
      group-hover:left-[120%]
      transition-all
      duration-1000
    "
  />

  {/* Floating Glow Line */}
  <div
    className="
      absolute
      inset-x-0
      top-0
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-white/80
      to-transparent
      opacity-70
    "
  />

  {/* Particles */}
  <span className="absolute top-3 left-6 w-1 h-1 rounded-full bg-white/70 animate-ping" />
  <span className="absolute bottom-3 right-8 w-1 h-1 rounded-full bg-white/50 animate-ping delay-300" />

  {/* Button Content */}
  <span className="relative z-10 flex items-center justify-center gap-2">

    {loading ? (
      <>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="
            w-5
            h-5
            rounded-full
            border-2
            border-white/30
            border-t-white
          "
        />

        Sending...
      </>
    ) : (
      <>
        <span>Send Message</span>

        <motion.span
          animate={{
            x: [0, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          🚀
        </motion.span>
      </>
    )}

  </span>

</motion.button>

            </motion.form>

          </div>
        </div>

        {/* SUCCESS MODAL */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >

              <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

              <motion.div
                initial={{
                  scale: 0.6,
                  y: 100,
                }}
                animate={{
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  scale: 0.6,
                  y: 100,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="
                  relative
                  bg-white/70
                  dark:bg-white/5
                  backdrop-blur-3xl
                  border
                  border-slate-200/60
                  dark:border-white/10
                  rounded-[32px]
                  px-12
                  py-10
                  text-center
                  shadow-[0_25px_80px_rgba(0,0,0,0.2)]
                "
              >

                <h3 className="text-4xl font-bold text-green-500 dark:text-green-400 mb-4">
                  Message Sent ✅
                </h3>

                <p className="text-lg text-[var(--foreground)] dark:text-white/70">
                  Thank you for contacting me.
                  <br />
                  I’ll reply soon.
                </p>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </section>
   
    </>
  );
}