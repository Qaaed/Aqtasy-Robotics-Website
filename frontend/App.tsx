import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

// Pages
// Ensure this path matches where you actually put the file (e.g., ./pages/ or ./components/)
import FullJourneyPage from "./pages/FullJourneyPage";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Features />
    <TechStack />
    <Pricing />
    <Team />
    <Journey />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#F9F9F9] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E5E5E5] transition-colors duration-300 font-sans min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journey" element={<FullJourneyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
