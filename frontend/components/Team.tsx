import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for background animations
import { TEAM_DATA } from "../constants";
import { LinkedInIcon, GitHubIcon } from "./icons";

// --- BACKGROUND COMPONENTS (Robotic Theme) ---
const ScanLine = () => (
  <motion.div
    initial={{ top: "-10%" }}
    animate={{ top: "110%" }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A29BFE] to-transparent z-0 opacity-50 shadow-[0_0_20px_#A29BFE] pointer-events-none"
  />
);

const TechRings = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] pointer-events-none z-0 opacity-20 select-none">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-dashed border-white/20"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[15%] rounded-full border border-white/10 border-t-transparent border-b-transparent"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-32 h-32 bg-[#A29BFE] rounded-full blur-[80px]"
      />
    </div>
  </div>
);

// --- TEAM CARD COMPONENT ---
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

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group aspect-square [perspective:1000px] cursor-pointer relative z-10"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1E1E2F]/80 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-lg border border-gray-700 hover:border-[#A29BFE]/50 transition-all duration-300">
          <img
            className="w-24 h-24 rounded-full object-cover pointer-events-none mb-4 ring-2 ring-[#A29BFE]/50"
            src={image}
            alt={name}
          />
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-[#A29BFE] font-medium mt-1">{role}</p>
          <p className="text-xs text-gray-400 mt-4 italic">Click to connect</p>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1E1E2F]/90 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-lg border border-gray-700">
          <h4 className="text-lg font-bold text-white mb-4">
            Connect with {name.split(" ")[0]}
          </h4>
          <div className="flex justify-center space-x-6">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-[#A29BFE] transition-colors transform hover:scale-110"
              aria-label={`${name}'s LinkedIn Profile`}
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-[#A29BFE] transition-colors transform hover:scale-110"
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
    <section
      id="team"
      // Forced Deep Black Background
      className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* --- LAYER 1: Background Grid & Texture --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Sci-fi Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,155,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(162,155,254,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Scanning Laser */}
        <ScanLine />
      </div>

      {/* --- LAYER 2: Rotating Robotic Elements --- */}
      <TechRings />

      {/* --- LAYER 3: Main Content --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#9CA3AF]">
            The passionate minds working behind the scenes to make Aphasia
            recovery accessible to everyone.
          </p>
        </div>

        {/* Restored Team Grid */}
        <div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
