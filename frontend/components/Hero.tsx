import React from "react";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const sampleImageUrl =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${sampleImageUrl})` }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Meet <span className="text-[#A29BFE]">robotdude</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[#E5E5E5]/90">
            A revolutionary AI companion designed to empower individuals
            recovering from aphasia through personalized, engaging, and
            effective speech therapy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-[#A29BFE] text-[#121212] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Launch App - Redirects to official website
            </a>
            <a
              href="#about"
              className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg shadow-lg border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
