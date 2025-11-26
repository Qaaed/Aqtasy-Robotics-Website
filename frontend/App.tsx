import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Pricing from "./components/Pricing";

const App: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E5E5E5] transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <TechStack />
        <Pricing />
        <Team />
        <Journey />
      </main>
      <Footer />
    </div>
  );
};

export default App;
