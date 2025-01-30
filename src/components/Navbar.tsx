"use client";

import { useState } from "react";

// Import Switch dari shadcn/ui
import { Switch } from "@/components/ui/switch";

// Import icon Sun, Moon dari lucide-react
import { Sun, Moon } from "lucide-react";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fungsi toggle theme
  const handleThemeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md ">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          <a href="#home">
            Fuad Fakhruz<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Nav Menu (disembunyikan di mobile) */}
        <ul className="hidden md:flex space-x-6 font-bold text-lg text-gray-700 dark:text-gray-300">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#profile">About me</a>
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

        {/* Bagian kanan: Theme Toggle + Connect Button */}
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
            className="inline-flex items-center px-4 py-2 text-md font-semibold text-white bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition"
          >
            Connect
            <span aria-hidden="true" className="ml-1">
              ↗
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
