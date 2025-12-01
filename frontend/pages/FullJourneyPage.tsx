import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { JOURNEY_DATA } from "../constants";

// --- INTERNAL COMPONENT: Tech Log Card ---
const TechLogCard: React.FC<{
  phase: { title: string; description: string; images: string[] };
  index: number;
}> = ({ phase, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- AUTO-PLAY LOGIC ---
  useEffect(() => {
    // Only set up interval if there are multiple images
    if (phase.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === phase.images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    // Cleanup interval on unmount or if dependencies change
    return () => clearInterval(interval);
  }, [phase.images.length]);

  return (
    <div className="relative pl-8 md:pl-12 py-6 group">
      {/* The Vertical Line (Left Side) - Forced Dark Gray */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 group-last:bottom-auto group-last:h-10"></div>
      
      {/* The Node/Dot - Forced Dark Theme Ring */}
      <div className="absolute left-[-4px] top-10 w-2.5 h-2.5 rounded-full bg-purple-600 ring-4 ring-[#121212] z-10 transition-transform duration-300 group-hover:scale-125 group-hover:ring-purple-900"></div>

      <AnimatedSection>
        {/* Card Container - Forced Dark Background & Border */}
        <div className="bg-[#1E1E2F] rounded-2xl border border-gray-800 p-1 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-500/30">
          <div className="p-6 md:p-8">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-900/30 text-purple-300 text-xs font-mono font-bold tracking-wide uppercase mb-2">
                  Phase {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {phase.title}
                </h2>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Left: Description - Forced Light Text */}
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {phase.description}
                </p>
              </div>

              {/* Right: Image Carousel - Forced Dark Backgrounds */}
              {phase.images.length > 0 && (
                <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video shadow-inner border border-gray-800">
                  <div
                    className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {phase.images.map((imgSrc, idx) => (
                      <img
                        key={idx}
                        src={imgSrc}
                        alt={`${phase.title} ${idx + 1}`}
                        className="w-full min-w-full h-full object-cover"
                      />
                    ))}
                  </div>

                  {/* Indicators only (Arrows removed) */}
                  {phase.images.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
                      {phase.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${
                            idx === currentImageIndex
                              ? "bg-white scale-125"
                              : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const FullJourneyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Forced Dark Background for the whole page
    <div className="min-h-screen bg-[#121212] pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header & Back Button */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 font-medium mb-8 transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Return to Home
          </Link>
          
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Development Log
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 leading-relaxed">
              Tracking the evolution of Aqtasy Robotics from concept to reality.
            </p>
          </AnimatedSection>
        </div>

        {/* The Tech Log List */}
        <div className="relative ml-4 md:ml-0">
          {JOURNEY_DATA.map((phase, index) => (
            <TechLogCard key={index} phase={phase} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FullJourneyPage;