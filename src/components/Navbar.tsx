"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, ArrowUpRight } from "lucide-react";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Baca preferensi theme dari localStorage saat mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
          <a href="#home">
            Fuad Fakhruz<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Nav Menu */}
        <ul className="hidden md:flex space-x-6 font-bold text-lg text-gray-700 dark:text-gray-300">
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#education">Educations</a>
          </li>
          <li>
            <a href="#experience">Experiences</a>
          </li>
          <li>
            <a href="#certification">Certifications</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
        </ul>

        {/* Bagian Kanan: Theme Toggle + Connect Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            {isDarkMode ? (
              <Moon size={20} className="text-gray-600 dark:text-yellow-400" />
            ) : (
              <Sun size={20} className="text-gray-600 dark:text-yellow-400" />
            )}
            <Switch checked={isDarkMode} onCheckedChange={handleThemeToggle} />
          </div>

          {/* Connect Button */}
          <a
            href="#contact"
            className="
              inline-flex items-center
              px-4 py-2 text-md font-semibold 
              rounded-md transition
              text-white 
              bg-black hover:bg-gray-800
              dark:bg-blue-600 dark:hover:bg-blue-700
            "
          >
            Connect
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </nav>
    </header>
  );
}
