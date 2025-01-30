// app/components/Footer.tsx
"use client";

import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        border-t border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        py-6
        px-4 sm:px-8 md:px-32
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col sm:flex-row 
          items-center justify-between
          gap-4
        "
      >
        {/* Bagian Kiri: Copyright */}
        <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
          © {year} Fuad Fakhruz
        </div>

        {/* Bagian Kanan: Link Navigasi */}
        <div
          className="
            flex flex-wrap items-center
            gap-2 sm:gap-4 justify-center
          "
        >
          <a
            href="#"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300 
              hover:underline
            "
          >
            About Me
          </a>
          <a
            href="#education"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300
              hover:underline
            "
          >
            Educations
          </a>
          <a
            href="#experience"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300
              hover:underline
            "
          >
            Experiences
          </a>
          <a
            href="#certification"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300
              hover:underline
            "
          >
            Certifications
          </a>
          <a
            href="#project"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300
              hover:underline
            "
          >
            Projects
          </a>
          <a
            href="#contact"
            className="
              text-xs sm:text-sm md:text-base
              text-gray-600 dark:text-gray-300
              hover:underline
            "
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
