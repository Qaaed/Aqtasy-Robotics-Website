
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { JOURNEY_DATA } from '../constants';

const JourneyCard: React.FC<{
  phase: { title: string; description: string; image: string; };
  index: number;
}> = ({ phase, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`md:flex ${isEven ? 'justify-start' : 'justify-end'} w-full`}>
      <div className="md:w-5/12">
        <AnimatedSection className="w-full">
          <div className="relative group bg-white dark:bg-[#1E1E2F] p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200/80 dark:border-gray-800/80 hover:border-[#3A2F5A]/50 dark:hover:border-[#3A2F5A] transition-all duration-300 transform hover:-translate-y-1">
            <img src={phase.image} alt={phase.title} className="rounded-lg shadow-md mb-4 w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105" />
            <h3 className="text-xl font-bold text-[#3A2F5A] mb-2">{phase.title}</h3>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed">{phase.description}</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-32 bg-white/50 dark:bg-[#1E1E2F]/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            From a spark of an idea to a tangible, life-changing companion.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 top-2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-16 md:space-y-0">
            {JOURNEY_DATA.map((phase, index) => (
              <div key={index} className="relative md:mb-16">
                <div className="hidden md:flex absolute w-6 h-6 bg-[#3A2F5A] rounded-full items-center justify-center ring-8 ring-white/50 dark:ring-[#1E1E2F]/30" style={{ left: '50%', top: '0', transform: 'translateX(-50%)' }}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
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