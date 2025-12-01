import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { LinkedInIcon, InstagramIcon, EmailIcon } from "./icons";
import Logo from "../assets/logo.svg"; // Import Logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181B] border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* LEFT COLUMN: Brand Info */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              {/* Added Logo Here */}
              <img
                src={Logo}
                alt="Aqtasy Robotics Logo"
                className="w-10 h-10 object-contain brightness-0 invert" // Forced white logo
              />
              <h3 className="text-xl font-bold text-white">Aqtasy Robotics</h3>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Bridging the gap between clinical therapy and daily life with
              intelligent, compassionate robotics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-[#A29BFE] transition-colors transform hover:scale-110"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#A29BFE] transition-colors transform hover:scale-110"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aqtasyrobotics@gmail.com"
                className="text-gray-400 hover:text-[#A29BFE] transition-colors transform hover:scale-110"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col">
              <li>
                <a
                  href="/#home"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#tech"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className="hover:text-[#A29BFE] transition-colors block"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Credit */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37).
          </p>

          <div className="text-sm text-gray-500">
            Designed for Aphasia Recovery.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
