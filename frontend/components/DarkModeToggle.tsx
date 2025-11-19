import React from "react";
import { useTheme } from "../hooks/useTheme";
import { SunIcon, MoonIcon } from "./icons";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-[#6B7280] dark:text-[#9CA3AF] hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A2F5A] focus:ring-offset-[#F9F9F9] dark:focus:ring-offset-[#121212] transition-all"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;
