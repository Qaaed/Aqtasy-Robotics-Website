import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import AnimatedSection from "./AnimatedSection";

// --- DATA: Single Pricing Plan ---
const PRICING_PLAN = {
  title: "Aqtasy Robot Kit",
  price: "$199",
  period: "one-time",
  description: "The complete speech therapy companion for home recovery.",
  features: [
    "Aqtasy Robot Device (Hardware)",
    "Lifetime App Access",
    "Advanced Whisper AI Analysis",
    "Real-time Therapy Exercises",
    "Detailed Phoneme Reports",
    "24/7 Priority Support",
  ],
  buttonText: "Order Now",
};

// --- SUB-COMPONENT: Check Icon ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-purple-400 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

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

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            One Simple Price
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#9CA3AF]">
            Everything you need to start your recovery journey, in one complete
            package.
          </p>
        </AnimatedSection>

        {/* SINGLE PRICING CARD */}
        <AnimatedSection>
          <div className="flex justify-center">
            {/* Forced Dark Styles: Removed bg-white and light borders */}
            <div className="relative flex flex-col p-8 md:p-10 rounded-3xl bg-[#22222A]/80 backdrop-blur-md border-2 border-purple-500 shadow-2xl w-full max-w-lg z-10 transition-transform hover:scale-[1.02] duration-300">
              {/* Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-wide px-6 py-2 rounded-full shadow-lg">
                All-In-One Package
              </div>

              {/* Title & Price */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {PRICING_PLAN.title}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-extrabold text-white">
                    {PRICING_PLAN.price}
                  </span>
                </div>
                <p className="mt-4 text-gray-400">{PRICING_PLAN.description}</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700 mb-8"></div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-1">
                {PRICING_PLAN.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-900/30 rounded-full">
                      <CheckIcon />
                    </div>
                    <span className="text-base text-gray-200 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#"
                className="block w-full text-center py-4 rounded-xl font-bold text-lg text-white bg-purple-700 hover:bg-purple-800 shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                {PRICING_PLAN.buttonText}
              </a>

              <p className="text-center text-xs text-gray-400 mt-6">
                *Includes 1-year hardware warranty and 30-day money-back
                guarantee.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* TRUST / SOCIAL PROOF */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Approved by speech therapists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
