import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

// --- CUSTOM COMPONENT: Robotic HUD Background ---
const RoboticHUD = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 opacity-20 select-none">
    {/* Outer Ring - Rotating Slow */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-dashed border-white/20 rounded-full"
    />

    {/* Inner Tech Ring - Rotating Reverse */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[100px] border border-white/10 rounded-full flex items-center justify-center"
    >
      {/* Decorative Nodes on the ring */}
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute left-0 top-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-2 h-2 bg-white/40 rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </motion.div>

    {/* Center Hexagon Mesh (Static) */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 100 100"
        className="opacity-30"
      >
        <path
          d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
          fill="none"
          stroke="#A29BFE"
          strokeWidth="0.5"
        />
        <path
          d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z"
          fill="none"
          stroke="#A29BFE"
          strokeWidth="0.5"
          strokeDasharray="4 2"
        />
        {/* Connecting Lines */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="5"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="50"
          x2="90"
          y2="25"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="50"
          x2="90"
          y2="75"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="95"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="50"
          x2="10"
          y2="75"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="50"
          x2="10"
          y2="25"
          stroke="#A29BFE"
          strokeWidth="0.2"
        />
      </svg>
    </div>

    {/* Scanning Line Effect */}
    <motion.div
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A29BFE] to-transparent opacity-30"
    />
  </div>
);

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Scroll Animations (Parallax for text)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={targetRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* --- BACKGROUND LAYER: Living Neural Aurora --- */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#A29BFE] rounded-full mix-blend-screen filter blur-[100px] opacity-40"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"
      />

      {/* Texture & Grid Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

      {/* --- ROBOTIC HUD LAYER (Behind Text) --- */}
      <RoboticHUD />

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{ opacity, y, scale }}
          className="pointer-events-auto"
        >
          {/* Glass Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[#A29BFE] bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A29BFE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A29BFE]"></span>
              </span>
              System Offline
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A29BFE] via-indigo-400 to-blue-400">
              robotdude
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Your intelligent companion for aphasia recovery.{" "}
            <br className="hidden md:block" />
            Bridging the gap between{" "}
            <strong className="text-white font-semibold">
              clinical therapy
            </strong>{" "}
            and <strong className="text-white font-semibold">daily life</strong>
            .
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#A29BFE] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-[#A29BFE] via-blue-500 to-purple-600 opacity-20 blur-lg transition-all duration-200 group-hover:opacity-40 group-hover:-inset-4"></div>
              <span className="relative">Launch App</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 backdrop-blur-sm"
              role="button"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#A29BFE] to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
