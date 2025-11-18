import React from "react";
import { LinkedInIcon, YouTubeIcon, TwitterIcon, EmailIcon } from "./icons";

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3A2F5A] dark:hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#18181B] border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} Aqtasy Robotics (CS-37). All
            Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <SocialLink href="">
              <LinkedInIcon className="w-8 h-8" />
            </SocialLink>
            <SocialLink href="#">
              <YouTubeIcon className="w-8 h-8" />
            </SocialLink>
            <SocialLink href="#">
              <TwitterIcon className="w-8 h-8" />
            </SocialLink>
            <SocialLink href="mailto:aqtasyrobotics@gmail.com">
              <EmailIcon className="w-8 h-8" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
