import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { JOURNEY_DATA } from "../constants";

// Updated type definition to support an array of images
const JourneyCard: React.FC<{
  phase: { title: string; description: string; images: string[] };
  index: number;
}> = ({ phase, index }) => {
  const isEven = index % 2 === 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Logic to go to the next image
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === phase.images.length - 1 ? 0 : prev + 1
    );
  };

  // Logic to go to the previous image
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? phase.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className={`md:flex ${isEven ? "justify-start" : "justify-end"} w-full`}
    >
      <div className="md:w-5/12">
        <AnimatedSection className="w-full">
          {/* Updated Border Hover: 
             Changed dark:hover:border-[#3A2F5A] to dark:hover:border-purple-400 
             so the highlight is visible in dark mode. 
          */}
          <div className="relative group bg-white dark:bg-[#1E1E2F] p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200/80 dark:border-gray-800/80 hover:border-purple-500/50 dark:hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1">
            {/* IMAGE CAROUSEL SECTION */}
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-md aspect-video group/image">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {phase.images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${phase.title} - view ${idx + 1}`}
                    className="w-full min-w-full h-full object-cover shrink-0 transition-transform duration-500 hover:scale-105"
                  />
                ))}
              </div>

              {/* Controls - Only show if there is more than 1 image */}
              {phase.images.length > 1 && (
                <>
                  {/* Left Arrow */}
                  <button
                    onClick={prevImage}
                    // Updated hover color to match theme
                    className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600 text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextImage}
                    // Updated hover color to match theme
                    className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600 text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute z-10 bottom-2 left-0 right-0 flex justify-center gap-1.5">
                    {phase.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${
                          idx === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
              {phase.title}
            </h3>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed">
              {phase.description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-20 sm:py-32 bg-white/50 dark:bg-[#1E1E2F]/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
            Our Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            From a spark of an idea to a tangible, life-changing companion.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 top-2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"
            style={{ transform: "translateX(-50%)" }}
          ></div>

          <div className="space-y-16 md:space-y-0">
            {JOURNEY_DATA.map((phase, index) => (
              <div key={index} className="relative md:mb-16">
                {/* Center Dots on Timeline */}
                <div
                  className="hidden md:flex absolute w-6 h-6 bg-purple-700 dark:bg-purple-400 rounded-full items-center justify-center ring-8 ring-white/50 dark:ring-[#1E1E2F]/30"
                  style={{
                    left: "50%",
                    top: "0",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Pass data to Card */}
                <JourneyCard phase={phase} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
