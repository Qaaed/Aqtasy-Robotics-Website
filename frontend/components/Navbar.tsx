import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Approach", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Tech-Stack", href: "#tech" },
  { name: "Pricing", href: "#pricing" },
  { name: "Team", href: "#team" },
  { name: "Journey", href: "#journey" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // --- HELPER: SCROLL TO SECTION ---
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

      // Update URL hash without reloading
      window.history.pushState(null, "", href);
      setIsOpen(false);
      setActiveLink(href);
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
      // Use a timeout to allow the Home page to mount/render before finding the element
      setTimeout(() => {
        scrollToSection(href);
      }, 300); // 300ms delay for page load
    }
  };

  useEffect(() => {
    // Only run scroll spy logic if we are on the home page
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = `#${section.id}`;
          }
        }
      });
      if (current && current !== activeLink) {
        setActiveLink(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink, location.pathname]);

  const navClass = isScrolled ? "shadow-xl" : "";

  return (
    <header
      className={`sticky top-0 z-50 bg-[#18181B]/90 backdrop-blur-lg border-b border-gray-800 ${navClass}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-2 text-[#3A2F5A] group"
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
                className="px-3 lg:px-5 py-2.5 rounded-full text-sm lg:text-base font-semibold text-[#9CA3AF] hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT: Actions (Launch App) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="bg-[#3A2F5A] text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-opacity-90 whitespace-nowrap"
            >
              Launch App
            </a>
          </div>

          {/* Mobile Menu Button (Right) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-[#9CA3AF] hover:text-white"
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
        } md:hidden bg-[#18181B] border-t border-gray-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#9CA3AF] hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-1">
            <a
              href="#"
              className="block w-full text-center bg-[#3A2F5A] text-white font-semibold py-2.5 rounded-md hover:bg-opacity-90"
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
