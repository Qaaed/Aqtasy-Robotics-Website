import React from "react";
import { motion } from "framer-motion";
import { BrainIcon, RobotIcon } from "./icons";
import aphasia_about from "../assets/aphasia_robot/aphasia.jpg";
import robotSolution from "../assets/aphasia_robot/robotSolution.jpg";

// --- BACKGROUND COMPONENTS ---
const ScanLine = () => (
  <motion.div
    initial={{ top: "-10%" }}
    animate={{ top: "110%" }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A29BFE] to-transparent z-0 opacity-30 shadow-[0_0_20px_#A29BFE] pointer-events-none"
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

// --- INFO CARD COMPONENT ---
const InfoCard: React.FC<{
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ icon, title, children, className = "" }) => (
  <div
    className={`bg-[#1E1E2F]/30 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm h-full hover:border-[#3A2F5A]/50 transition-colors duration-300 relative z-10 ${className}`}
  >
    <div className="flex items-center gap-4 mb-4">
      {icon && (
        <div className="bg-[#3A2F5A]/40 p-3 rounded-full text-white">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
    </div>
    <div className="text-[#9CA3AF] leading-relaxed">{children}</div>
  </div>
);

// --- ICONS ---
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

const SpeechIcon: React.FC<{ className?: string }> = ({
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
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);

const BrokenSpeechIcon: React.FC<{ className?: string }> = ({
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
    <path d="M21 12a9 9 0 1 1-9-9" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M10 15l1 1 3-3" />
    <path d="M22 2l-3 3" />
    <path d="M19 2l3 3" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 relative overflow-hidden bg-[#050505]"
    >
      <ScanLine />

      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-[#3A2F5A]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-[#3A2F5A]/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Understanding Aphasia
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[#9CA3AF]">
            Aphasia is a complex language disorder. We believe technology can
            offer a personalized path to recovery.
          </p>
        </div>

        {/* Block 1: What is Aphasia? */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={aphasia_about}
              alt="Person communicating"
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover border border-gray-800"
            />
          </div>
          <div>
            <InfoCard
              icon={<BrainIcon className="w-7 h-7" />}
              title="What is Aphasia?"
            >
              <p>
                A language disorder affecting speech and comprehension, often
                caused by stroke or head trauma. It impacts communication, not
                intelligence.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Block 1.5: The Two Types (Fluent vs Non-Fluent) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <InfoCard
            icon={<SpeechIcon className="w-7 h-7 text-green-400" />}
            title="Fluent Aphasia"
            className="border-l-4 border-l-green-500/50"
          >
            <p className="mb-2">
              <strong>Wernicke’s Aphasia.</strong>
            </p>
            <p>
              Can speak easily but words may lack meaning. Often have difficulty
              understanding others.
            </p>
          </InfoCard>

          <InfoCard
            icon={<BrokenSpeechIcon className="w-7 h-7 text-red-400" />}
            title="Non-Fluent Aphasia"
            className="border-l-4 border-l-[#A29BFE]"
          >
            <p className="mb-2">
              <strong>Broca’s Aphasia.</strong>
            </p>
            <p>
              Struggle to produce words. Speech is halting, but comprehension is
              often preserved.
            </p>
          </InfoCard>
        </div>

        {/* Block 2: Our Robotic Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="md:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={robotSolution}
              alt="Robot assisting patient"
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover border border-gray-800"
            />
          </div>
          <div className="md:order-1">
            <InfoCard
              icon={<RobotIcon className="w-7 h-7" />}
              title="Solution for Non-Fluent Aphasia"
            >
              <p className="mb-4">
                Engineered for{" "}
                <strong className="text-white">Non-Fluent Aphasia</strong>. Uses
                physical gestures and repetition to rewire motor pathways.
              </p>
              <p>
                A judgment-free zone for the essential, repetitive practice
                needed for recovery.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Block 3: Collaboration */}
        <div className="mt-16">
          <InfoCard
            icon={<HandshakeIcon className="w-7 h-7" />}
            title="Designed in Collaboration with Experts"
          >
            <p className="mb-4">
              Clinically validated modules designed with leading speech
              therapists to align with rehab protocols.
            </p>
            <p className="font-semibold text-white">
              Provides therapists with objective data to optimize treatment
              plans.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
