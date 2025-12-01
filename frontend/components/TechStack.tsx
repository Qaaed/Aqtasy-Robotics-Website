import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for background animations
import AnimatedSection from "./AnimatedSection";
import { TECH_STACK_DATA } from "../constants";

// --- BACKGROUND COMPONENTS (Matches Hero Page) ---
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

// --- TECH CARD COMPONENT ---
interface TechCardProps {
  softwareName: string;
  hardwareName: string;
  isFlipped: boolean;
}

const TechCard: React.FC<TechCardProps> = ({
  softwareName,
  hardwareName,
  isFlipped,
}) => {
  return (
    <div className="aspect-[3/2] [perspective:1000px] group">
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face - Software */}
        <div
          className="absolute w-full h-full bg-[#1E1E2F] flex items-center justify-center text-center p-4 rounded-xl border border-gray-700 shadow-lg hover:border-[#A29BFE]/50 transition-colors"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <p className="font-semibold text-gray-200 text-lg">{softwareName}</p>
        </div>

        {/* Back Face - Hardware */}
        <div
          className="absolute w-full h-full bg-[#1E1E2F] flex items-center justify-center text-center p-4 rounded-xl border border-gray-700 shadow-lg hover:border-[#A29BFE]/50 transition-colors"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="font-semibold text-gray-200 text-lg">{hardwareName}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState("software");

  const combinedTech = TECH_STACK_DATA.software.map((soft, index) => ({
    id: index,
    software: soft,
    hardware: TECH_STACK_DATA.hardware[index] || { name: "N/A" },
  }));

  return (
    <section
      id="tech"
      // Forced Deep Black Background
      className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,155,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(162,155,254,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <ScanLine />
      </div>
      <TechRings />

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Our Technology Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#9CA3AF]">
            Built with powerful and reliable technologies.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4 mb-12 p-1.5 bg-gray-900/80 border border-gray-800 rounded-full w-fit mx-auto backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("software")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "software"
                  ? "bg-[#A29BFE] text-[#050505] shadow-[0_0_15px_rgba(162,155,254,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Software
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "hardware"
                  ? "bg-[#A29BFE] text-[#050505] shadow-[0_0_15px_rgba(162,155,254,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Hardware
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {combinedTech.map((tech) => (
              <TechCard
                key={tech.id}
                softwareName={tech.software.name}
                hardwareName={tech.hardware.name}
                isFlipped={activeTab === "hardware"}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;
