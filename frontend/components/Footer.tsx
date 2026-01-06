import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LinkedInIcon, InstagramIcon, EmailIcon } from "./icons";
import Logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // --- HELPER: SCROLL TO SECTION (Same as Navbar) ---
  const scrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 96;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // 1. IF ON HOME PAGE: Scroll immediately
    if (location.pathname === "/") {
      scrollToSection(href);
    }
    // 2. IF NOT ON HOME PAGE: Navigate first, then scroll
    else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    }
  };

  return (
    <footer className="bg-[#18181B] border-t border-gray-800 pt-14 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* LEFT 3 COLUMNS */}
          <div className="md:col-span-3 space-y-5">
            {/* Logo + Brand Title (Now Interactive) */}
            <div className="flex items-center gap-4">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="flex items-center gap-4 group"
              >
                <img
                  src={Logo}
                  alt="Aqtasy Robotics Logo"
                  className="h-[57px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Bridging the gap between clinical therapy and daily life with
              intelligent, compassionate robotics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 pt-1">
              <a
                href="#"
                className="text-gray-400 hover:text-[#A29BFE] transition-transform hover:scale-110"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#A29BFE] transition-transform hover:scale-110"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aqtasyrobotics@gmail.com"
                className="text-gray-400 hover:text-[#A29BFE] transition-transform hover:scale-110"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Links */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-sm tracking-wider">
              Product
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/#home" className="hover:text-[#A29BFE]">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#A29BFE]">
                  Approach
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-[#A29BFE]">
                  Features
                </a>
              </li>
              <li>
                <a href="/#tech" className="hover:text-[#A29BFE]">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-[#A29BFE]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-[#A29BFE]">
                  Team
                </a>
              </li>
              <li>
                <Link to="/journey" className="hover:text-[#A29BFE]">
                  Our Journey
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37).
          </p>

          <p className="text-sm text-gray-500">
            Designed for Aphasia Recovery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
