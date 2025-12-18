import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { JOURNEY_DATA } from "../constants";

// --- BACKGROUND COMPONENTS ---
const ScanLine = () => (
  <motion.div
    initial={{ top: "-10%" }}
    animate={{ top: "110%" }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A29BFE]/50 to-transparent z-0 pointer-events-none"
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
  </div>
);

// --- COMPONENT: TECH LOG CARD ---
const TechLogCard: React.FC<{
  phase: { title: string; description: string; images: string[] };
  index: number;
}> = ({ phase, index }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImgIdx((prev) =>
      prev === phase.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImgIdx((prev) =>
      prev === 0 ? phase.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
        className="relative pl-6 md:pl-16 py-12 group"
      >
        {/* Timeline Node (The Dot) */}
        <div className="absolute left-[3px] md:left-[11px] top-12 w-4 h-4 bg-[#050505] border-2 border-gray-700 rounded-full z-10 group-hover:border-[#A29BFE] group-hover:scale-125 transition-all duration-300">
          <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#A29BFE] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Card Content */}
        <div className="relative">
          {/* Header: Phase Number & Title */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-6">
            <span className="text-[#A29BFE] font-mono text-sm tracking-widest opacity-80">
              0{index + 1}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {phase.title}
            </h2>
          </div>

          {/* Layout: Text & Images */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed">
                {phase.description}
              </p>
            </div>

            {/* Image Gallery Area */}
            {phase.images.length > 0 && (
              <div className="flex flex-col gap-4">
                {/* Main Preview Image */}
                <div
                  className="group/img relative w-full bg-gray-900/50 rounded-xl overflow-hidden border border-white/5 hover:border-[#A29BFE]/30 transition-colors cursor-zoom-in flex items-center justify-center p-1 md:p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(true);
                  }}
                >
                  <motion.img
                    key={activeImgIdx}
                    src={phase.images[activeImgIdx]}
                    alt={phase.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    // UPDATED: max-w-full and h-auto preserves aspect ratio.
                    // max-h-[300px] prevents it from being too tall on mobile.
                    className="max-w-full h-auto max-h-[300px] md:max-h-[500px] object-contain rounded-lg"
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Thumbnails (Scrollable Row - Mobile Friendly) */}
                {phase.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mask-fade-right touch-pan-x">
                    {phase.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setActiveImgIdx(idx);
                        }}
                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all ${
                          idx === activeImgIdx
                            ? "border-[#A29BFE] opacity-100"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
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
      </motion.div>

      {/* --- EXPANDED MODAL --- */}
      {isExpanded &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              <div className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                <img
                  src={phase.images[activeImgIdx]}
                  alt="Expanded"
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Arrows (Big tap targets for mobile) */}
                {phase.images.length > 1 && (
                  <div className="absolute bottom-[-3rem] left-0 right-0 flex justify-center gap-6">
                    <button
                      onClick={prevImage}
                      className="p-4 bg-white/10 hover:bg-[#A29BFE] rounded-full text-white transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-4 bg-white/10 hover:bg-[#A29BFE] rounded-full text-white transition-colors"
                    >
                      →
                    </button>
                  </div>
                )}

                <button
                  className="absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-red-500/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
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
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

// --- MAIN PAGE COMPONENT ---
const FullJourneyPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <ScanLine />
        <TechRings />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10"
        ref={containerRef}
      >
        {/* Header */}
        <div className="mb-24">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-[#A29BFE] font-medium mb-8 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A29BFE] to-indigo-500">
                Log
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 leading-relaxed border-l-4 border-[#A29BFE]/50 pl-6">
              Tracking the evolution of Aqtasy Robotics from concept to reality.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The Main Vertical Line (Gray Background) */}
          <div className="absolute left-[10px] md:left-[18px] top-0 bottom-0 w-[2px] bg-gray-800"></div>

          {/* The Glowing Fill Line (Purple Foreground) */}
          <motion.div
            className="absolute left-[10px] md:left-[18px] top-0 w-[2px] bg-gradient-to-b from-[#A29BFE] to-indigo-500 origin-top"
            style={{ scaleY, height: "100%" }}
          />

          {/* List of Cards */}
          <div className="space-y-4">
            {JOURNEY_DATA.map((phase, index) => (
              <TechLogCard key={index} phase={phase} index={index} />
            ))}
          </div>

          {/* End Marker */}
          <div className="relative pl-8 md:pl-16 pt-8 flex items-center gap-3 opacity-50">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
              End of Log
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullJourneyPage;
