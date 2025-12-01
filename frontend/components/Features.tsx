import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for background animations
import AnimatedSection from "./AnimatedSection";
import { FEATURES_DATA } from "../constants";

// --- CUSTOM ICONS (Forced Dark Theme Colors) ---
const HeartBrainIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 2" />
    <path d="M12 5l3-3" />
  </svg>
);

const RobotFocusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DataChartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

// --- BACKGROUND COMPONENTS (Matches Hero Page) ---
const ScanLine = () => (
  <motion.div
    initial={{ top: "-10%" }}
    animate={{ top: "110%" }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A29BFE] to-transparent z-0 opacity-50 shadow-[0_0_20px_#A29BFE]"
  />
);

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

// --- NEW COMPONENT: Emphasis Section (Forced Dark) ---
const WhyDifferent: React.FC = () => (
  <AnimatedSection className="mt-24 pt-10 border-t border-gray-800 relative">
    {/* Additional Glow for Emphasis */}
    <div className="absolute top-20 left-0 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: The "Hook" */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h3 className="text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          More Than Just Code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            It's a Companion.
          </span>
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Traditional therapy is limited by human fatigue and clinic hours. Our
          robot provides the one thing aphasia patients need most:
          <span className="font-bold text-purple-300">
            {" "}
            Infinite, pressure-free repetition.
          </span>
        </p>
        <p className="text-sm text-gray-400">
          Powered by Raspberry Pi 4 & Multiple AI Agents
        </p>
      </div>

      {/* Right Column: The "Evidence" */}
      <div className="lg:col-span-7 grid gap-6">
        {/* Card 1: Psychological Safety */}
        <div className="group p-6 bg-[#1E1E2F] rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-900/30 rounded-lg text-purple-300 group-hover:scale-110 transition-transform">
              <HeartBrainIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Neuroplasticity via Repetition
              </h4>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Humans get tired; the robot doesn't. Recovery relies on
                repeating words thousands of times. We provide a{" "}
                <strong>judgment-free environment</strong> where patients can
                fail safely until they succeed, reducing the anxiety that often
                blocks speech.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Embodied AI */}
        <div className="group p-6 bg-[#1E1E2F] rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-900/30 rounded-lg text-indigo-300 group-hover:scale-110 transition-transform">
              <RobotFocusIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                "Embodied AI" vs. Screens
              </h4>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Research shows physical robots elicit higher social engagement
                than tablets. Our robot uses{" "}
                <strong>facial tracking and servo-motor gestures</strong> to
                maintain eye contact, stimulating mirror neurons that are
                crucial for language re-acquisition.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Data Driven */}
        <div className="group p-6 bg-[#1E1E2F] rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-emerald-900/30 rounded-lg text-emerald-300 group-hover:scale-110 transition-transform">
              <DataChartIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Quantifiable Progress
              </h4>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Subjective feedback isn't enough. We use{" "}
                <strong>Whisper AI</strong> to analyze pronunciation accuracy
                down to the phoneme level, generating detailed reports for
                therapists to track trends over weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);
// --- END NEW COMPONENT ---

const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  // Forced Dark Styles: Removed bg-white and light text
  <div className="bg-[#1E1E2F]/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-800 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 relative z-10">
    <div className="w-8 h-1 bg-purple-500 rounded-full mb-4"></div>
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <p className="mt-2 text-[#9CA3AF] text-sm">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section
      id="features"
      // Forced Deep Black Background (#050505)
      className="py-20 sm:py-32 bg-[#050505] overflow-hidden relative"
    >
      {/* --- LAYER 1: Background Grid & Texture (From Hero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Sci-fi Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,155,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(162,155,254,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Scanning Laser */}
        <ScanLine />
      </div>

      {/* --- LAYER 2: Rotating Robotic Elements (From Hero) --- */}
      <TechRings />

      {/* --- LAYER 3: Main Content --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Main Features Grid */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#9CA3AF]">
            Everything you need for a successful recovery journey.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES_DATA.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Section 2: The Differentiator */}
        <WhyDifferent />
      </div>
    </section>
  );
};

export default Features;
