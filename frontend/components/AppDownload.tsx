
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GooglePlayIcon } from './icons';

const AppDownload: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white dark:bg-[#1E1E2F] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
                Get the Companion App
              </h2>
              <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF]">
                Control the robot, track progress, and access exclusive exercises right from your smartphone. Available now on the Google Play Store.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#3A2F5A] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300"
              >
                <GooglePlayIcon className="w-7 h-7" />
                <div>
                  <span className="block text-xs">GET IT ON</span>
                  <span className="block text-xl">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppDownload;
