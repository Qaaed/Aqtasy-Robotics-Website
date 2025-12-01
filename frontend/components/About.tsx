import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BrainIcon, RobotIcon } from "./icons";
import aphasia_about from "../assets/aphasia_robot/aphasia.jpg";
import robotSolution from "../assets/aphasia_robot/robotSolution.jpg";

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

// --- INFO CARD (Dark Theme Only) ---
const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  // Removed bg-white/50 and light borders
  <div className="bg-[#1E1E2F]/30 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm h-full hover:border-[#3A2F5A]/50 transition-colors duration-300 relative z-10">
    <div className="flex items-center gap-4 mb-4">
      {/* Icon Background fixed to dark style */}
      <div className="bg-[#3A2F5A]/40 p-3 rounded-full text-white">{icon}</div>
      <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
    </div>
    <p className="text-[#9CA3AF] leading-relaxed">{children}</p>
  </div>
);

// --- HANDSHAKE ICON ---
const HandshakeIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
}) => (
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
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20zm0-3a5 5 0 1 0-5-5 5 5 0 0 0 5 5z" />
    <path d="M14 14a2 2 0 0 0 2-2 2 2 0 0 0-2-2m-4 4a2 2 0 0 1-2-2 2 2 0 0 1 2-2" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section
      id="about"
      // Forced Deep Black Background
      className="py-20 sm:py-32 relative overflow-hidden bg-[#050505]"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Understanding Aphasia, A New Approach
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[#9CA3AF]">
            Aphasia is a complex language disorder. We believe technology can
            offer a personalized path to recovery.
          </p>
        </AnimatedSection>

        {/* Block 1: What is Aphasia? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative group">
              {/* Added a subtle glow effect behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={aphasia_about}
                alt="Person communicating"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover border border-gray-800"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <InfoCard
              icon={<BrainIcon className="w-7 h-7" />}
              title="What is Aphasia?"
            >
              Aphasia is an impairment of language, affecting the production or
              comprehension of speech and the ability to read or write. It's
              most commonly caused by a stroke, but can also result from head
              trauma, brain tumors, or infections. It's a condition that affects
              communication, not intelligence.
            </InfoCard>
          </AnimatedSection>
        </div>

        {/* Block 2: Our Robotic Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 md:mt-24">
          <AnimatedSection className="md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={robotSolution}
                alt="Robot assisting patient"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover border border-gray-800"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection className="md:order-1">
            <InfoCard
              icon={<RobotIcon className="w-7 h-7" />}
              title="Our Robotic Solution"
            >
              The Aphasia Robot provides a unique solution by combining
              AI-driven personalized therapy with a physical companion. It
              creates an engaging, stress-free environment for patients to
              practice speech. Real-time feedback and adaptive exercises ensure
              that therapy is always challenging yet achievable, accelerating
              progress and rebuilding confidence.
            </InfoCard>
          </AnimatedSection>
        </div>

        {/* Block 3: Collaboration and Partnership */}
        <AnimatedSection className="mt-16 md:mt-24">
          <InfoCard
            icon={<HandshakeIcon className="w-7 h-7" />}
            title="Designed in Collaboration with Experts"
          >
            <p className="mb-4">
              Our solution is not meant to replace human expertise; it's
              designed to enhance it. We are actively collaborating with leading
              Speech Therapy Clinics, and Aphasia specialists to ensure the
              robotic therapy modules are clinically validated and align
              perfectly with established rehabilitation protocols.
            </p>
            <p className="font-semibold text-white">
              Key Benefits for Clinics: Our platform provides therapists with
              detailed, objective data on patient progress outside of sessions,
              allowing for highly informed adjustments to the treatment plan and
              maximizing the effectiveness of in-person time.
            </p>
          </InfoCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
