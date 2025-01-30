// app/components/Footer.tsx
"use client";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="
        w-full
        border-t border-gray-200 dark:border-gray-700
        dark:bg-white bg-gray-900
        py-6
        px-4 sm:px-8 md:px-32
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Bagian Kiri: Copyright / Brand */}
        <div className="text-sm dark:text-gray-600 text-gray-300">
          © {new Date().getFullYear()} Fuad Fakhruz
        </div>

        {/* Bagian Kanan: Link Navigasi atau Sosial */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            About Me
          </a>
          <a
            href="#education"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            Educations
          </a>
          <a
            href="#experience"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            Experiences
          </a>
          <a
            href="#certification"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            Certifications
          </a>
          <a
            href="#project"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm dark:text-gray-600 text-gray-300 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
