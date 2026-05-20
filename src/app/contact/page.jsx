"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setTimeout(() => setSent(false), 2000);
    }

    setLoading(false);
  };

  const AnimatedField = ({ children }) => {
    return (
      <div className="relative group rounded-lg">
        {children}

        <span className="pointer-events-none absolute inset-0 rounded-lg">
          <span className="absolute top-0 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-500 group-focus-within:w-full" />
          <span className="absolute top-0 right-0 w-[1px] h-0 bg-blue-600 transition-all duration-500 delay-500 group-focus-within:h-full" />
          <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-blue-600 transition-all duration-500 delay-[1000ms] group-focus-within:w-full" />
          <span className="absolute bottom-0 left-0 w-[1px] h-0 bg-blue-600 transition-all duration-500 delay-[1500ms] group-focus-within:h-full" />
        </span>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-6 py-24 overflow-hidden relative font-sans">

      {/* Floating Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-16"
        >
          Contact Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-gray-700"
          >
            <h2 className="font-heading text-2xl font-bold text-gray-800">
              Let’s Build Something Amazing 🚀
            </h2>

            <p className="text-lg leading-relaxed">
              Have a project idea, collaboration, or freelance work?
              Feel free to contact me. I usually reply within 24 hours.
            </p>

            <div className="space-y-2 text-sm text-gray-600 font-sans">
              <p>📧 Email: abdullah.web7072@gmail.com</p>
              <p>📍 Location: Multan, Pakistan</p>
              <p>💼 Available for Freelance Work</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/80 backdrop-blur-lg shadow-soft rounded-2xl p-8 space-y-5 border border-white"
          >

            <AnimatedField>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none bg-transparent font-sans"
              />
            </AnimatedField>

            <AnimatedField>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none bg-transparent font-sans"
              />
            </AnimatedField>

            <AnimatedField>
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none resize-none bg-transparent font-sans"
              />
            </AnimatedField>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 0px 30px rgba(37,99,235,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-glow"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </motion.form>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <motion.div
              initial={{ scale: 0.6, y: 80 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.6, y: 80 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-2xl px-12 py-10 text-center"
            >
              <h3 className="font-heading text-3xl font-bold text-green-600 mb-3">
                Message Sent ✅
              </h3>
              <p className="text-gray-600 text-lg">
                Thank you for contacting me. I will reply soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}