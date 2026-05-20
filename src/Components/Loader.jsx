"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-gray-800 tracking-tight"
      >
        Abdullah Babar
      </motion.h1>
    </motion.div>
  );
}