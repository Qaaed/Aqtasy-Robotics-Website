import React from "react";
import { LinkedInIcon, YouTubeIcon, TwitterIcon, EmailIcon } from "./icons";
// Assuming you have PhoneIcon, LocationIcon, etc., in your icons folder.
// I will include placeholder SVGs for Phone and Location if not.

// Placeholder SVG for Phone (if not in ./icons)
const PhoneIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-0.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-0.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// Placeholder SVG for Location (if not in ./icons)
const LocationIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
    <circle cx="12" cy="9" r="3"></circle>
  </svg>
);

// Sample SVG Logo for Aqtasy Robotics (Keeping the same, but maybe larger here)
const AqtasyLogo: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#10B981" // Emerald Green color
    className={className}
  >
    {/* Simple abstract/robotic shape example */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

// Helper for the column links (for the few remaining text links)
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <a
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-[#3A2F5A] dark:hover:text-white transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  </li>
);

// Helper for the Social Icons (now with background for better visibility)
const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-[#3A2F5A] hover:text-white transition-all duration-300"
    title={`Link to ${children}`}
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-800 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Top Section: Multi-Column Layout with Icons --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {/* Column 1: Brand Logo & Short Tagline */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <AqtasyLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-[#1A1A1A] dark:text-white">
                Aqtasy Robotics
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px]">
              Innovating intelligent solutions for a smarter future.
            </p>
            {/* Optional: Add a subtle image or pattern here 
            <img src="/path/to/icon-pattern.svg" alt="pattern" className="mt-4 opacity-10" /> 
            */}
          </div>

          {/* Column 2: Quick Links (Still text-based for navigation) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Info with Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
              Contact Info
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <EmailIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <a
                  href="mailto:aqtasyrobotics@gmail.com"
                  className="hover:text-[#3A2F5A] dark:hover:text-white transition-colors"
                >
                  aqtasyrobotics@gmail.com
                </a>
              </div>
              <p>&nbsp;</p>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <span>+94 77 454 2678</span>
              </div>
            </div>
          </div>

          {/* Column 4: Connect / Social Media Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3 pt-1">
              <SocialLink href="#">
                <LinkedInIcon className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#">
                <YouTubeIcon className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#">
                <TwitterIcon className="w-5 h-5" />
              </SocialLink>
              {/* Added Instagram for completeness if you decide to add it back */}
              {/* <SocialLink href="#"> 
                <InstagramIcon className="w-5 h-5" />
              </SocialLink> */}
              <SocialLink href="mailto:aqtasyrobotics@gmail.com">
                <EmailIcon className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 pb-8 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              &copy; {new Date().getFullYear()} **Aqtasy Robotics (CS-37)**. All
              Rights Reserved.
            </p>
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3A2F5A] dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3A2F5A] dark:hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
