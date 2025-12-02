import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { JOURNEY_DATA } from "../constants";

// --- INTERNAL COMPONENT: Tech Log Card ---
const TechLogCard: React.FC<{
  phase: { title: string; description: string; images: string[] };
  index: number;
}> = ({ phase, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // No auto-play logic anymore. Purely user-driven.

  return (
    <div className="relative pl-8 md:pl-12 py-6 group">
      {/* The Vertical Line (Left Side) - Forced Dark Gray */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 group-last:bottom-auto group-last:h-10"></div>

      {/* The Node/Dot - Forced Dark Theme Ring */}
      <div className="absolute left-[-4px] top-10 w-2.5 h-2.5 rounded-full bg-purple-600 ring-4 ring-[#121212] z-10 transition-transform duration-300 group-hover:scale-125 group-hover:ring-purple-900"></div>

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

            {/* Right: Image Gallery - Thumbnail Strip Method */}
            {phase.images.length > 0 && (
              <div className="flex flex-col gap-4">
                {/* Main Image Display */}
                <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video shadow-inner border border-gray-800">
                  <img
                    src={phase.images[currentImageIndex]}
                    alt={`${phase.title} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>

                {/* Thumbnail Strip (Only show if > 1 image) */}
                {phase.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {phase.images.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          idx === currentImageIndex
                            ? "border-purple-500 ring-2 ring-purple-500/30 opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100 hover:border-gray-600"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
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

          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Development Log
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 leading-relaxed">
              Tracking the evolution of Aqtasy Robotics from concept to reality.
            </p>
          </div>
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
