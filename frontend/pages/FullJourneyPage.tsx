import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { JOURNEY_DATA } from "../constants";

// --- SUB-COMPONENT: Tech Log Card ---
const TechLogCard: React.FC<{
  phase: { title: string; description: string; images: string[] };
  index: number;
}> = ({ phase, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        // OPTIMIZATION: Reduced pl-8 to pl-6 on mobile for more space
        className="relative pl-6 md:pl-12 py-8 group"
      >
        {/* The Vertical Line (Left Side) */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bottom-auto group-last:h-12"></div>

        {/* The Node/Dot */}
        <div className="absolute left-[-5px] top-12 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#050505] z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-125"></div>

        {/* Card Container */}
        {/* OPTIMIZATION: Reduced p-6 to p-5 on mobile */}
        <div className="bg-[#1E1E2F]/40 backdrop-blur-sm rounded-3xl border border-white/5 p-5 md:p-8 shadow-xl hover:border-purple-500/30 transition-all duration-500">
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 border border-purple-500/20">
                // Section 0{index + 1}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                {phase.title}
              </h2>
            </div>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: Description */}
              <div className="lg:col-span-2 prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {phase.description}
                </p>
              </div>

              {/* Right: Image Gallery */}
              {phase.images.length > 0 && (
                <div className="lg:col-span-3 flex flex-col gap-4">
                  {/* Inline Image Display (Dynamic Aspect Ratio) */}
                  <div
                    className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-inner cursor-zoom-in group/image flex items-center justify-center min-h-[250px] md:min-h-[300px]"
                    onClick={() => setIsExpanded(true)}
                  >
                    <motion.img
                      src={phase.images[currentImageIndex]}
                      alt={`${phase.title} - View ${currentImageIndex + 1}`}
                      className="w-auto h-auto max-w-full max-h-[400px] md:max-h-[500px] object-contain transition-transform duration-500 group-hover/image:scale-[1.02]"
                    />

                    {/* Expand Button */}
                    <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-1.5 rounded-lg text-xs font-bold text-white backdrop-blur-md border border-white/10 flex items-center gap-2 transition-opacity duration-300 opacity-0 group-hover/image:opacity-100 md:opacity-0 md:group-hover/image:opacity-100 opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span className="hidden sm:inline">Tap to Expand</span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  {phase.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide pt-2 touch-pan-x">
                      {phase.images.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            idx === currentImageIndex
                              ? "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] opacity-100 scale-105"
                              : "border-transparent opacity-50 hover:opacity-100 hover:border-gray-700"
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
      </motion.div>

      {/* --- EXPANDED MODAL (PORTAL) --- */}
      {isExpanded &&
        createPortal(
          <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                onClick={() => setIsExpanded(false)}
              />

              {/* Scale-Up Card Container (Snappier Animation) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative w-auto h-auto max-w-[95vw] max-h-[90vh] flex items-center justify-center z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={phase.images[currentImageIndex]}
                  alt="Expanded View"
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-purple-500/30"
                />

                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-red-500 hover:scale-110 transition-all border border-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

// --- MAIN PAGE COMPONENT ---
const FullJourneyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 font-medium mb-8 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                Log
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 leading-relaxed">
              Tracking the evolution of Aqtasy Robotics from initial sketches to
              a fully realized autonomous companion.
            </p>
          </motion.div>
        </div>

        {/* The Timeline List */}
        <div className="relative md:ml-4">
          {JOURNEY_DATA.map((phase, index) => (
            <TechLogCard key={index} phase={phase} index={index} />
          ))}
        </div>

        {/* Bottom "End of Log" Marker */}
        <div className="flex items-center gap-4 text-gray-600 pl-12 mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          <span className="text-sm font-mono uppercase tracking-widest">
            End of current logs
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullJourneyPage;
