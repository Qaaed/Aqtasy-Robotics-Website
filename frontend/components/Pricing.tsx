import React from "react";
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
    "Real-time physical gestures",
    "Detailed Phoneme Reports",
    "24/7 Priority Support",
  ],
  buttonText: "Order Now",
};

// --- SUB-COMPONENT: Check Icon ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0"
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

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-white dark:bg-[#18181B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
            One Simple Price
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Everything you need to start your recovery journey, in one complete
            package.
          </p>
        </AnimatedSection>

        {/* SINGLE PRICING CARD */}
        <AnimatedSection>
          <div className="flex justify-center">
            <div className="relative flex flex-col p-8 md:p-10 rounded-3xl bg-white dark:bg-[#22222A] border-2 border-purple-600 dark:border-purple-500 shadow-2xl w-full max-w-lg z-10 transition-transform hover:scale-[1.02] duration-300">
              {/* Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-wide px-6 py-2 rounded-full shadow-lg">
                All-In-One Package
              </div>

              {/* Title & Price */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-2">
                  {PRICING_PLAN.title}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-extrabold text-[#1A1A1A] dark:text-white">
                    {PRICING_PLAN.price}
                  </span>
                  {/* Optional: Show period if needed, otherwise removed for one-time purchase */}
                  {/* <span className="ml-2 text-xl font-medium text-gray-500 dark:text-gray-400">/ unit</span> */}
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {PRICING_PLAN.description}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-1">
                {PRICING_PLAN.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <CheckIcon />
                    </div>
                    <span className="text-base text-gray-700 dark:text-gray-200 font-medium">
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Approved by speech therapists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
