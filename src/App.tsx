/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Miners from "./components/Miners";
import PredictMe from "./components/PredictMe";
import CreatorBenefits from "./components/CreatorBenefits";
import IillooSection from "./components/IillooSection";
import Workforce from "./components/Workforce";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <Navbar onConnect={() => setShowLogin(true)} />
      <main>
        <Hero onEnterProtocol={() => setShowLogin(true)} />
        <Vision />
        <Miners />
        <PredictMe />
        <CreatorBenefits />
        <IillooSection />
        <Workforce /> 
      </main>
      <Footer />
    </div>
  );
}
