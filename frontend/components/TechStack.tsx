import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { TECH_STACK_DATA } from "../constants";

interface TechCardProps {
  softwareName: string;
  hardwareName: string;
  isFlipped: boolean;
}

const TechCard: React.FC<TechCardProps> = ({
  softwareName,
  hardwareName,
  isFlipped,
}) => {
  return (
    <div className="aspect-[3/2] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face - Software */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white dark:bg-[#1E1E2F] flex items-center justify-center text-center p-4 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-lg">
          <p className="font-semibold text-[#3A2F5A] dark:text-gray-300">
            {softwareName}
          </p>
        </div>

        {/* Back Face - Hardware */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white dark:bg-[#1E1E2F] flex items-center justify-center text-center p-4 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-lg">
          <p className="font-semibold text-[#3A2F5A] dark:text-gray-300">
            {hardwareName}
          </p>
        </div>
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState("software");

  const combinedTech = TECH_STACK_DATA.software.map((soft, index) => ({
    id: index,
    software: soft,
    hardware: TECH_STACK_DATA.hardware[index] || { name: "N/A" },
  }));

  return (
    <section id="tech" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Technology Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Built with powerful and reliable technologies.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-center items-center gap-4 mb-12 p-2 bg-gray-100 dark:bg-gray-800/50 rounded-full w-fit mx-auto">
            <button
              onClick={() => setActiveTab("software")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "software"
                  ? "bg-white dark:bg-[#3A2F5A] text-[#3A2F5A] dark:text-white shadow-md"
                  : "text-[#6B7280] dark:text-[#9CA3AF]"
              }`}
            >
              Software
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "hardware"
                  ? "bg-white dark:bg-[#3A2F5A] text-[#3A2F5A] dark:text-white shadow-md"
                  : "text-[#6B7280] dark:text-[#9CA3AF]"
              }`}
            >
              Hardware
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {combinedTech.map((tech) => (
              <TechCard
                key={tech.id}
                softwareName={tech.software.name}
                hardwareName={tech.hardware.name}
                isFlipped={activeTab === "hardware"}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;
