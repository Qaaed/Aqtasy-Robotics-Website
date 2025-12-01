import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for background animations
import AnimatedSection from "./AnimatedSection";

// --- BACKGROUND COMPONENTS (Matches Hero/Features Page) ---
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

const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      // Forced Deep Black Background
      className="py-24 bg-[#050505] relative overflow-hidden"
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
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#9CA3AF] mb-12">
            From the initial spark of an idea to a fully functional robotic
            companion. Discover the story behind Aqtasy Robotics.
          </p>

          {/* THE BUTTON */}
          <Link
            to="/journey"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-purple-700 rounded-xl hover:bg-purple-800 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1"
          >
            View Full Journey
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Journey;
