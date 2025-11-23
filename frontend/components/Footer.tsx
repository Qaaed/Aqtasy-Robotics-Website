import React from "react";
import { LinkedInIcon, InstagramIcon, EmailIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* TOP SECTION: Grid Layout */}
        {/* grid-cols-1 (Mobile) -> grid-cols-4 (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* LEFT COLUMN: Brand Info (Takes up 3 columns width on Desktop) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
              Aqtasy Robotics
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
              Bridging the gap between clinical therapy and daily life with
              intelligent, compassionate robotics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aqtasyrobotics@gmail.com"
                className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Links (Takes up 1 column width on Desktop) */}
          <div className="md:col-span-1">
            {/* Header Style */}
            <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 uppercase text-sm tracking-wider">
              Product
            </h4>
            {/* Links Stacked Underneath */}
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex flex-col">
              <li>
                <a
                  href="#hero"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  Meet robotdude
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  What is Aphasia?
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors block"
                >
                  Our Journey
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37).
          </p>

          <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
