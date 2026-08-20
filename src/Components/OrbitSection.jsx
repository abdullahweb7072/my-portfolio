"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function OrbitSection() {
  const [rotation, setRotation] = useState(0);

  const dragging = useRef(false);
  const lastX = useRef(0);

  const startDrag = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  const moveDrag = (e) => {
    if (!dragging.current) return;

    const delta = e.clientX - lastX.current;

    setRotation((prev) => prev + delta * 0.4);

    lastX.current = e.clientX;
  };

  const orbitItems = [
    "React",
    "Next",
    "GSAP",
    "UI",
    "CSS",
    "JS",
    "UX",
    "Motion",
  ];

  return (
    <section
      onMouseMove={moveDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      className="relative h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Orbit */}
      <motion.div
        animate={{
          rotate: rotation,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
        className="relative w-[450px] h-[450px]"
      >
        {/* Orbit Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10" />

        {/* Items */}
        {orbitItems.map((item, i) => {
          const angle = (360 / orbitItems.length) * i;

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `
                  rotate(${angle}deg)
                  translateY(-180px)
                `,
              }}
              className="
                w-24
                h-24
                -ml-12
                -mt-12
                rounded-full
                border border-white/10
                backdrop-blur-2xl
                flex items-center justify-center
                text-sm font-semibold
                text-[var(--foreground)]
              "
            >
              {item}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center Core */}
      <motion.div
        onMouseDown={startDrag}
        whileTap={{ scale: 0.95 }}
        className="
          absolute
          w-40
          h-40
          rounded-full
          border border-white/10
          backdrop-blur-3xl
          flex items-center justify-center
          cursor-grab
          shadow-[0_20px_80px_rgba(0,0,0,0.3)]
        "
      >
        <div className="text-center">
          <h3 className="font-bold text-xl text-[var(--foreground)]">
            Drag Me
          </h3>
          <p className="text-sm text-[var(--foreground)]/60">
            Rotate Orbit
          </p>
        </div>
      </motion.div>
    </section>
  );
}