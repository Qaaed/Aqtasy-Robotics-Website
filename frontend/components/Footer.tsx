import React from "react";
import { LinkedInIcon, InstagramIcon, EmailIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright / Brand */}
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37).</p>
        </div>

        {/* Links & Contact */}
        <div className="flex items-center space-x-6">
          {/* Mail Link */}
          <a
            href="mailto:aqtasyrobotics@gmail.com"
            className="text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
            aria-label="Email Us"
          >
            <EmailIcon className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>

          {/* Instagram */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
