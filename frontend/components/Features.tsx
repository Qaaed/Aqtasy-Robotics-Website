import React from "react";
import AnimatedSection from "./AnimatedSection";
import { FEATURES_DATA } from "../constants";

// --- NEW COMPONENT: Emphasis Section ---
const WhyDifferent: React.FC = () => (
  <AnimatedSection className="mt-20 pt-16 border-t border-gray-300/50 dark:border-[#3A2F5A]/50">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Heading and Summary */}
      <div>
        <h3 className="text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-white mb-4">
          Why Our Approach is Different
        </h3>
        <p className="text-xl text-[#3A2F5A] dark:text-emerald-400 font-semibold">
          We combine cutting-edge technology with human-centric design, setting
          a new industry standard.
        </p>
      </div>

      {/* Right Column: Detailed Differentiation Points */}
      <div className="space-y-6">
        <div className="flex space-x-4">
          <span className="text-3xl text-emerald-500 dark:text-emerald-400">
            ✨
          </span>
          <div>
            <h4 className="font-bold text-[#1A1A1A] dark:text-white">
              Predictive Robotics
            </h4>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Unlike reactive systems, Aqtasy Robotics uses real-time AI
              modeling to anticipate needs before they arise, dramatically
              reducing downtime.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <span className="text-3xl text-indigo-500 dark:text-indigo-400">
            🤝
          </span>
          <div>
            <h4 className="font-bold text-[#1A1A1A] dark:text-white">
              Seamless Integration
            </h4>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Our solutions are designed for zero-disruption implementation,
              integrating flawlessly with your existing infrastructure without
              complex overhaul.
            </p>
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
  <div className="bg-white dark:bg-[#1E1E2F] p-6 rounded-xl shadow-lg border border-transparent hover:border-[#3A2F5A]/50 dark:hover:border-[#3A2F5A] transition-all duration-300 transform hover:-translate-y-2">
    <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">
      {title}
    </h3>
    <p className="mt-2 text-[#6B7280] dark:text-[#9CA3AF]">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 sm:py-32 bg-white/50 dark:bg-[#1E1E2F]/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Main Features Grid */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
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
        <WhyDifferent />
      </div>
    </section>
  );
};

export default Features;
