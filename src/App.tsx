/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Miners from "./components/Miners";
import PredictMe from "./components/PredictMe";
import CreatorBenefits from "./components/CreatorBenefits";
import IntelligenceLayer from "./components/IntelligenceLayer";
import Pillars from "./components/Pillars";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Miners />
        <PredictMe />
        <CreatorBenefits />
        <IntelligenceLayer />
        <Pillars />
        <Features />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
