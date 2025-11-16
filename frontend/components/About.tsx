
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BrainIcon, RobotIcon } from './icons';

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-white/50 dark:bg-[#1E1E2F]/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm h-full">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-[#3A2F5A]/10 dark:bg-[#3A2F5A]/40 p-3 rounded-full text-[#3A2F5A] dark:text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">{title}</h3>
    </div>
    <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
      {children}
    </p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden bg-[#F9F9F9] dark:bg-[#121212]">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-[#3A2F5A]/5 dark:bg-[#3A2F5A]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-[#3A2F5A]/5 dark:bg-[#3A2F5A]/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Understanding Aphasia, A New Approach</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Aphasia is a complex language disorder. We believe technology can offer a personalized path to recovery.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img 
              src="https://picsum.photos/seed/communication/800/500" 
              alt="Person communicating" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </AnimatedSection>
          <AnimatedSection>
            <InfoCard 
              icon={<BrainIcon className="w-7 h-7" />} 
              title="What is Aphasia?"
            >
              Aphasia is an impairment of language, affecting the production or comprehension of speech and the ability to read or write. It's most commonly caused by a stroke, but can also result from head trauma, brain tumors, or infections. It's a condition that affects communication, not intelligence.
            </InfoCard>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 md:mt-24">
           <AnimatedSection className="md:order-2">
            <img 
              src="https://picsum.photos/seed/robot-assist/800/500" 
              alt="Robot assisting patient" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </AnimatedSection>
          <AnimatedSection className="md:order-1">
             <InfoCard 
              icon={<RobotIcon className="w-7 h-7" />}
              title="Our Robotic Solution"
            >
              The Aphasia Robot provides a unique solution by combining AI-driven personalized therapy with a physical companion. It creates an engaging, stress-free environment for patients to practice speech. Real-time feedback and adaptive exercises ensure that therapy is always challenging yet achievable, accelerating progress and rebuilding confidence.
            </InfoCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
