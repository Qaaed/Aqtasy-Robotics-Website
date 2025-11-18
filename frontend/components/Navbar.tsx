import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import DarkModeToggle from "./DarkModeToggle";
import { LogoIcon, MenuIcon, CloseIcon } from "./icons";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Custom smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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

      history.pushState(null, "", href);
      setIsOpen(false); // Close mobile menu upon selection
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );
      let current = "#home";
      sections.forEach((section) => {
        if (
          section &&
          window.scrollY >= (section as HTMLElement).offsetTop - 100
        ) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled ? "shadow-xl" : "";

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/90 dark:bg-[#18181B]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 ${navClass}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-2 text-[#3A2F5A] transition-transform duration-300 hover:scale-105"
            >
              <LogoIcon className="h-10 w-10" />
              <span className="font-bold text-2xl text-[#1A1A1A] dark:text-[#E5E5E5]">
                Aphasia Robot
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-black/5 dark:bg-white/10 text-[#1A1A1A] dark:text-white"
                    : "text-[#6B7280] dark:text-[#9CA3AF] hover:bg-black/5 dark:hover:bg-white/10 hover:text-[#1A1A1A] dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="ml-4 bg-[#3A2F5A] text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Launch App
            </a>
            <DarkModeToggle />
          </div>
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

      {/* Mobile Menu */}
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
