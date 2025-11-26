import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../assets/logo.svg";
import { MenuIcon, CloseIcon } from "./icons";

// *** NAV LINKS DEFINED LOCALLY ***
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Approach", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Tech-Stack", href: "#tech" },
  { name: "Pricing", href: "#pricing" }, // Added Pricing
  { name: "Team", href: "#team" },
  { name: "Journey", href: "#journey" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  // --- HANDLE CLICK (Fixes the delay) ---
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // 1. UPDATE STATE IMMEDIATELY (Instant Feedback)
    setActiveLink(href);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 96; // Height of navbar + some padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // 2. SMOOTH SCROLL
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // 3. UPDATE URL & CLOSE MOBILE MENU
      history.pushState(null, "", href);
      setIsOpen(false);
    }
  };

  // --- HANDLE SCROLL (Updates link when user scrolls manually) ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );

      // Only calculate active section if we are NOT currently clicking (optional optimization)
      // But for simplicity, we let the scroll listener run to catch manual scrolling
      let current = "";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          // -100px offset helps trigger the active state a bit before the section hits the very top
          if (window.scrollY >= sectionTop - 150) {
            current = `#${section.id}`;
          }
        }
      });

      // Only update if we found a section and it's different
      if (current && current !== activeLink) {
        // Note: If you scroll really fast while a click animation is happening,
        // this might override the click state temporarily, but usually it feels natural.
        setActiveLink(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]); // Added dependency to keep state fresh

  const navClass = isScrolled ? "shadow-xl" : "";

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/90 dark:bg-[#18181B]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 ${navClass}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-2 text-[#3A2F5A] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Logo}
                alt="Logo"
                // Logo becomes white (inverted) in dark mode
                className="h-40 w-40 object-contain dark:brightness-0 dark:invert transition-all duration-300"
                draggable="false"
              />
            </a>
          </div>

          {/* CENTER: Nav Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 lg:px-5 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-black/5 dark:bg-white/10 text-[#1A1A1A] dark:text-white"
                    : "text-[#6B7280] dark:text-[#9CA3AF] hover:bg-black/5 dark:hover:bg-white/10 hover:text-[#1A1A1A] dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT: Actions (Launch App & Dark Mode) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="bg-[#3A2F5A] text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Launch App
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button (Right) */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white"
            >
              {isOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 ${
                activeLink === link.href
                  ? "text-white bg-[#3A2F5A]"
                  : "text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-1">
            <a
              href="#"
              className="block w-full text-center bg-[#3A2F5A] text-white font-semibold py-2.5 rounded-md transition-colors duration-300 hover:bg-opacity-90"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
