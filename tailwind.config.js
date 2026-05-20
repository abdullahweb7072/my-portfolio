/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      colors: {
        primary: "#2563eb", // nice modern blue
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
        glow: "0 0 25px rgba(37,99,235,0.4)",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
    },
  },

  plugins: [],
};