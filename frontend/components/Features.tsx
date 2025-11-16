
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FEATURES_DATA } from '../constants';

const FeatureCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white dark:bg-[#1E1E2F] p-6 rounded-xl shadow-lg border border-transparent hover:border-[#3A2F5A]/50 dark:hover:border-[#3A2F5A] transition-all duration-300 transform hover:-translate-y-2">
      <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">{title}</h3>
      <p className="mt-2 text-[#6B7280] dark:text-[#9CA3AF]">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white/50 dark:bg-[#1E1E2F]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Everything you need for a successful recovery journey.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES_DATA.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;
