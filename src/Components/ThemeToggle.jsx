"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-[999] p-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 shadow-xl transition top-4 right-20 sm:top-6 sm:right-24">
      {theme === "light" ? (
        <FaMoon className="text-gray-800" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  );
}