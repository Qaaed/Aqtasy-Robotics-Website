import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { TEAM_DATA } from "../constants";
import { LinkedInIcon, GitHubIcon } from "./icons";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  linkedin,
  github,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group aspect-square [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full bg-white dark:bg-[#111118] rounded-3xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300 [backface-visibility:hidden] border border-gray-100 dark:border-gray-800">
          <img
            className="w-24 h-24 rounded-full object-cover pointer-events-none mb-4"
            src={image}
            alt={name}
          />
          <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
            {name}
          </h3>
          {/* *** CHANGE APPLIED HERE *** */}
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">
            {role}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 italic">
            Hover to connect
          </p>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full bg-white dark:bg-[#111118] rounded-3xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-gray-100 dark:border-gray-800">
          <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-4">
            Connect with {name.split(" ")[0]}
          </h4>
          <div className="flex justify-center space-x-6">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3A2F5A] dark:hover:text-white transition-colors transform hover:scale-110"
              aria-label={`${name}'s LinkedIn Profile`}
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3A2F5A] dark:hover:text-white transition-colors transform hover:scale-110"
              aria-label={`${name}'s GitHub Profile`}
            >
              <GitHubIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-32 bg-gray-50 dark:bg-[#1E1E2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            The passionate minds behind the Aphasia Robot.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;
