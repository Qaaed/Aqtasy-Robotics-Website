import React, { useRef } from "react";
import { motion } from "framer-motion";

// --- COMPONENT: The Background Scan Line ---
const ScanLine = () => (
  <motion.div
    initial={{ top: "-10%" }}
    animate={{ top: "110%" }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A29BFE] to-transparent z-0 opacity-50 shadow-[0_0_20px_#A29BFE]"
  />
);

// --- COMPONENT: Rotating Tech Rings (Background) ---
const TechRings = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] pointer-events-none z-0 opacity-20 select-none">
    {/* Ring 1: Dashed slow rotate */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-dashed border-white/20"
    />
    {/* Ring 2: Reverse fast rotate */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[15%] rounded-full border border-white/10 border-t-transparent border-b-transparent"
    />
    {/* Center Core Pulse */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-32 h-32 bg-[#A29BFE] rounded-full blur-[80px]"
      />
    </div>
  </div>
);

// --- COMPONENT: Decorative Corner Brackets ---
const CornerBrackets = () => (
  <>
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#A29BFE]/50 rounded-tl-lg" />
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#A29BFE]/50 rounded-tr-lg" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#A29BFE]/50 rounded-bl-lg" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#A29BFE]/50 rounded-br-lg" />
  </>
);

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-[100dvh] bg-[#050505] overflow-hidden flex items-center justify-center"
    >
      {/* --- LAYER 1: Background Grid & Texture --- */}
      <div className="absolute inset-0 z-0">
        {/* Sci-fi Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,155,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(162,155,254,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Scanning Laser */}
        <ScanLine />
      </div>

      {/* --- LAYER 2: Rotating Robotic Elements --- */}
      <TechRings />

      {/* --- LAYER 3: Main Content (The Glass Cockpit) --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Removed scroll-linked opacity/scale. Added simple entry animation. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          {/* THE CARD CONTAINER - Ensures text is readable */}
          <div className="relative max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative Corners */}
            <CornerBrackets />

            {/* System Status Label */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#A29BFE]/10 border border-[#A29BFE]/20 rounded-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A29BFE] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A29BFE]"></span>
                </span>
                <span className="text-xs font-mono text-[#A29BFE] tracking-widest uppercase">
                  System Offline • V1.0
                </span>
              </div>
            </div>

            {/* Main Typography */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">
                Meet <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A29BFE] to-white">
                  Waabi
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                Your intelligent AI companion for aphasia recovery.{" "}
                <br className="hidden md:block" />
                Bridging the gap between{" "}
                <strong className="text-[#A29BFE]">
                  clinical therapy
                </strong> and{" "}
                <strong className="text-[#A29BFE]">daily life</strong>.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#"
                className="w-full sm:w-auto relative group overflow-hidden rounded-lg bg-[#A29BFE] px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-[#8c85fa] hover:shadow-[0_0_30px_rgba(162,155,254,0.4)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
                <span className="relative flex items-center justify-center gap-2">
                  LAUNCH APP
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto px-8 py-4 font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-[#A29BFE]/50 backdrop-blur-md"
              >
                LEARN MORE
              </a>
            </div>

            {/* Decorative Footer Data (Inside Card) */}
            <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              <span>Connection: Stable</span>
              <span>Assistance Mode: On</span>
              <span>Voice Feedback: Enabled</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
