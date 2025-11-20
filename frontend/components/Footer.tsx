import React from "react";
import { LinkedInIcon, YouTubeIcon, TwitterIcon, EmailIcon } from "./icons";
import { InstagramIcon } from "./icons"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-800 pt-14 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.svg"
                alt="Aqtasy Robotics"
                className="w-12 h-12 dark:invert"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Innovating intelligent solutions for a smarter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-[#3A2F5A] dark:hover:text-white transition"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#3A2F5A] dark:hover:text-white transition"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#3A2F5A] dark:hover:text-white transition"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#3A2F5A] dark:hover:text-white transition"
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <EmailIcon className="w-5 h-5" />
                <span>aqtasyrobotics@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>+94 77 454 2678</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-[#3A2F5A] hover:text-white transition"
                href="#"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-[#3A2F5A] hover:text-white transition"
                href="#"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-[#3A2F5A] hover:text-white transition"
                href="#"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-[#3A2F5A] hover:text-white transition"
                href="#"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37). All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a
              className="hover:text-[#3A2F5A] dark:hover:text-white transition"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-[#3A2F5A] dark:hover:text-white transition"
              href="#"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
